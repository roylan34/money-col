import { User } from '../../../domain/entities/user';
import UserRepository from '../../ports/UserRepository';

export type findUserByEmailUseCase = (params: {
  email: string;
}) => Promise<User>;

export const buildFindUserByEmail = (dependencies: {
  userRepo: UserRepository;
}): findUserByEmailUseCase => {
  const { userRepo } = dependencies;

  const findUserByEmail: findUserByEmailUseCase = async (params) => {
    try {
      const { email } = params;

      const [user] = await userRepo.find({
        where: [['email', '==', email]],
      });

      if (!user) {
        throw new Error('There was an error in processing your request.');
      }

      return user;
    } catch (error) {
      throw error;
    }
  };

  return findUserByEmail;
};
