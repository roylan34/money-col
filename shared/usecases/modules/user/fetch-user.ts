import { User } from '../../../domain/entities/user';
import UserRepository from '../../ports/UserRepository';
import { getCurrentUserlUseCase } from '../auth/get-current-user-cred';

export type fetchUserUseCase = (params: {
  id: string;
}) => Promise<User & { isEmailVerified?: boolean }>;

export const buildFetchUser = (dependencies: {
  userRepo: UserRepository;
  authInteractor: {
    getCurrentUser: getCurrentUserlUseCase;
  };
}): fetchUserUseCase => {
  const { userRepo, authInteractor } = dependencies;

  const fetchUser: fetchUserUseCase = async (params) => {
    try {
      const { id } = params;

      const user = await userRepo.findById(id);

      if (!user) {
        throw new Error('There was an error in processing your request.');
      }

      const signedInUserCredentials = authInteractor.getCurrentUser();

      return {
        ...user,
        isEmailVerified: signedInUserCredentials?.emailVerified,
      };
    } catch (error) {
      throw error;
    }
  };

  return fetchUser;
};
