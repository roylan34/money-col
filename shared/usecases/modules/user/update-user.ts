import { User } from '../../../domain/entities/user';
import { Stripe } from '../../../domain/entities/stripe';
import { uploadPhotoUseCase } from './upload-photo';
import { updateEmailUseCase } from '../auth/update-email';
import { getCurrentUserlUseCase } from '../auth/get-current-user-cred';
import { fireBaseError } from '../../../utils';

import UserRepository from '../../ports/UserRepository';
import words from '../../../constants/words';

export type updateUserUseCase = (
  id: string,
  params: {
    name?: {
      firstName: string;
      lastName: string;
    };
    photo?: File;
    stripe?: Stripe;
    email?: string;
    password?: string;
    hasUpdatedDefaultPassword?: boolean;
    lastLogIn?: Date;
    subscriberProfile?: {
      points: number;
      lastGiveawayClaimDate?: Date;
    };
    mailBoxNotifSettings?: {
      notifyRepliesWithEmail: boolean;
      displaySendConfirmation: boolean;
    };
  },
) => Promise<User & { emailVerified?: boolean }>;

export const buildUpdateUser = (dependencies: {
  userRepo: UserRepository;
  userInteractor: {
    uploadPhoto: uploadPhotoUseCase;
  };
  authInteractor: {
    updateEmail: updateEmailUseCase;
    getCurrentUser: getCurrentUserlUseCase;
  };
}): updateUserUseCase => {
  const {
    userRepo,
    userInteractor: { uploadPhoto },
    authInteractor: { updateEmail, getCurrentUser },
  } = dependencies;

  const updateUser: updateUserUseCase = async (id, params) => {
    try {
      const { photo, email, password, ...userData } = params;

      const userParams = Object.assign({}, userData) as User;

      if (photo) {
        userParams.photoURL = await uploadPhoto(id, photo);
      }

      if (email) {
        // no password from recovery
        // if from recovery, no need to call auth's updateEmail
        if (password) {
          await updateEmail({ email, password });
        }
        userParams.email = email;
      }

      await userRepo.update(id, userParams);

      const user = (await userRepo.findById(id)) as User;

      const signedInUserCredentials = getCurrentUser();

      if (!user) {
        throw new Error(words.somethingWentWrong);
      }

      return {
        ...user,
        isEmailVerified: signedInUserCredentials?.emailVerified,
      };
    } catch (error) {
      if (error.code) {
        throw { ...error, message: fireBaseError(error.code) };
      }
      throw error;
    }
  };

  return updateUser;
};
