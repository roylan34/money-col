import { User } from '../../../domain/entities/user';
import UserRepository from '../../ports/UserRepository';

export type fetchInstructorsUseCase = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}) => Promise<User[]>;

export const buildfetchInstructors = (dependencies: {
  userRepo: UserRepository;
}): fetchInstructorsUseCase => {
  const { userRepo } = dependencies;

  const fetchInstructors: fetchInstructorsUseCase = async (query) => {
    try {
      const instructorQuery = {
        where: [
          ['roles.lecturer', '==', true],
          ['isDeleted', '==', false],
        ],
      } as {
        where: [
          string,
          '<' | '<=' | '==' | '>=' | '>',
          string | number | boolean,
        ][];
      };

      const params = query
        ? {
            ...query,
            where: query.where
              ? query.where.concat(instructorQuery.where)
              : instructorQuery.where,
          }
        : instructorQuery;

      const instructors = await userRepo.find(params);

      if (!instructors) {
        throw new Error('There was an error in processing your request.');
      }

      return instructors;
    } catch (error) {
      throw error;
    }
  };

  return fetchInstructors;
};
