import { User } from '../../../domain/entities/user';
import UserRepository from '../../ports/UserRepository';

export type updateInstructorUseCase = (
  id: string,
  params: {
    name: {
      lastName: string;
      firstName: string;
    };
    email: string;
  },
) => Promise<User>;

export const buildUpdateInstructor = (dependencies: {
  userRepo: UserRepository;
}): updateInstructorUseCase => {
  const { userRepo } = dependencies;

  const updateInstructor: updateInstructorUseCase = async (id, params) => {
    try {
      await userRepo.update(id, params);

      const user = await userRepo.findById(id);

      // TO DO:
      // Auth must also be updated, this should be handled by the Admin SDK

      if (!user) {
        throw new Error('There was an error in processing your request.');
      }

      return user;
    } catch (error) {
      throw error;
    }
  };

  return updateInstructor;
};
