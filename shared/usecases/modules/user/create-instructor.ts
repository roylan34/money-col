import { User, UserRoles } from '../../../domain/entities/user';
import UserRepository from '../../ports/UserRepository';
import AuthService from '../../ports/AuthService';

import { mapParamsToUserDocument } from './utils';

export type createInstructorUseCase = (params: {
  lastName: string;
  firstName: string;
  email: string;
}) => Promise<User>;

export const buildCreateInstructor = (dependencies: {
  userRepo: UserRepository;
  authService: AuthService;
}): createInstructorUseCase => {
  const { userRepo, authService } = dependencies;

  const createInstructor: createInstructorUseCase = async (params) => {
    try {
      const userData = mapParamsToUserDocument(params, {
        lecturer: true,
      } as UserRoles);

      const temporaryPassword = `${Math.random().toString(
        36,
      )}${Math.random().toString(36)}`.slice(0, 8);

      const { id } = await authService.createUser(
        userData.email,
        temporaryPassword,
      );

      const userId = await userRepo.insert({
        ...userData,
        id,
      });

      const user = await userRepo.findById(userId);

      if (!user) {
        throw new Error('There was an error in processing your request.');
      }

      return user;
    } catch (error) {
      throw error;
    }
  };

  return createInstructor;
};
