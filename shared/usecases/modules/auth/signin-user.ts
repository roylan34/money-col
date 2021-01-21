import AuthService from '../../ports/AuthService';
import { fetchUserUseCase } from '../user/fetch-user';
import { updateUserUseCase } from '../user/update-user';
import { fireBaseError } from '../../../utils';
import words from '../../../constants/words';
import { claimUserGiveawaysUseCase } from '../user/claim-giveaways';

export type signInUserUseCase = (
  email: string,
  password: string,
  saveLoginStatus?: boolean,
  isAdminSide?: boolean,
) => Promise<object>;

export const buildSignInUser = (dependencies: {
  authService: AuthService;
  userInteractor: {
    fetchUser: fetchUserUseCase;
    updateUser: updateUserUseCase;
    claimUserGiveaways: claimUserGiveawaysUseCase;
  };
}): signInUserUseCase => {
  const {
    authService,
    userInteractor: { fetchUser, updateUser, claimUserGiveaways },
  } = dependencies;

  const signInUser: signInUserUseCase = (
    email,
    password,
    saveLoginStatus,
    isAdminSide,
  ) =>
    authService
      .signIn(email, password, saveLoginStatus)
      .then(async (response) => {
        const { emailVerified, token, id } = response as {
          emailVerified: boolean;
          token: string;
          id: string;
        };

        let user = await fetchUser({ id });

        let isRoleInvalid = false;

        if (
          user.roles &&
          (user.roles.subscriber || user.roles.admin || user.roles.lecturer)
        ) {
          isRoleInvalid = isAdminSide
            ? user.roles.subscriber
            : user.roles.admin || user.roles.lecturer;
        } else {
          isRoleInvalid = true;
        }

        if (user && isRoleInvalid) {
          throw new Error(words.roleInvalid);
        }

        if (
          user.roles.subscriber &&
          claimUserGiveaways &&
          user.subscriberProfile
        ) {
          const { lastGiveawayClaimDate } = user.subscriberProfile;
          user = await claimUserGiveaways(user.id, {
            prevLogInDate: lastGiveawayClaimDate || (user.createdAt as Date),
            currLogInDate: new Date(),
          });
        }

        // just a workaround; might be better to use Functions and Admin SDK for these tasks
        // true if updating email failed from recovery email function
        if (user.email !== email) {
          user = await updateUser(user.id, { email });
        }

        return { emailVerified, token, user };
      })
      .catch((error) => {
        if (error.code) {
          throw { ...error, message: fireBaseError(error.code) };
        }
        throw error;
      });

  return signInUser;
};
