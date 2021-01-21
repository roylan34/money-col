import { UserRoles } from '../../../domain/entities/user';
import UserRepository from '../../ports/UserRepository';
import { mapParamsToUserDocument } from './utils';

export type createUserUseCase = (params: {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  subscribedToMailingList: boolean;
}) => Promise<string>;

export const buildCreateUser = (dependencies: {
  userRepo: UserRepository;
}): createUserUseCase => {
  const { userRepo } = dependencies;

  const createUser: createUserUseCase = async (params) => {
    try {
      const userData = mapParamsToUserDocument(params, {
        subscriber: true,
      } as UserRoles);

      const userId = await userRepo.insert(userData);

      return userId;
    } catch (error) {
      throw error;
    }
  };

  return createUser;
};
