import AuthService from '../../ports/AuthService';
import { User } from '../../../domain/entities/';
import { updateUserUseCase } from '../user/update-user';

export type updateDefPassUseCase = (
  password: string,
  id: string,
) => Promise<User> | undefined;

export const buildUpdateDefPass = (dependencies: {
  authService: AuthService;
  userInteractor: {
    updateUser: updateUserUseCase;
  };
}): updateDefPassUseCase => {
  const {
    authService,
    userInteractor: { updateUser },
  } = dependencies;

  const updateDefPass: updateDefPassUseCase = (
    password: string,
    id: string,
  ) => {
    return authService
      .updatePassword(password)
      ?.then(async () => {
        return updateUser(id, { hasUpdatedDefaultPassword: true });
      })
      .catch((error) => {
        throw error;
      });
  };

  return updateDefPass;
};
