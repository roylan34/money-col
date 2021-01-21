import { User } from '../../../domain/entities/user';
import UserRepository from '../../ports/UserRepository';

export type fetchSubscribersUseCase = (query: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit: number;
  mode: 'prev' | 'next';
  orderBy?: string;
  sort?: 'desc' | 'asc';
  firstId: string;
  lastId: string;
}) => Promise<{
  subscribers: User[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
}>;

export const buildfetchSubscribers = (dependencies: {
  userRepo: UserRepository;
}): fetchSubscribersUseCase => {
  const { userRepo } = dependencies;

  const fetchSubscribers: fetchSubscribersUseCase = async (query) => {
    try {
      const subscriberQuery = {
        where: [
          ['roles.subscriber', '==', true],
          ['isDeleted', '==', false],
        ],
      } as {
        where: [
          string,
          '<' | '<=' | '==' | '>=' | '>',
          string | number | boolean,
        ][];
      };

      const params = {
        where: query.where
          ? query.where.concat(subscriberQuery.where)
          : subscriberQuery.where,
        ...query,
      };

      const {
        data: subscribers,
        hasNextPage,
        hasPrevPage,
      } = await userRepo.findByPage(params);

      if (!subscribers) {
        throw new Error('There was an error in processing your request.');
      }

      return { subscribers, hasNextPage, hasPrevPage };
    } catch (error) {
      throw error;
    }
  };

  return fetchSubscribers;
};
