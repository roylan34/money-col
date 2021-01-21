import { EAProgram } from '../../../domain/entities/EAProgram';
import EAProgramRepository from '../../ports/EAProgramRepository';

export type fetchEAProgramsUseCase = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}) => Promise<EAProgram[]>;

export const buildFetchEAPrograms = (dependencies: {
  EAProgramRepo: EAProgramRepository;
}): fetchEAProgramsUseCase => {
  const { EAProgramRepo } = dependencies;

  const fetchEAPrograms: fetchEAProgramsUseCase = async (query) => {
    try {
      const EAPrograms = await EAProgramRepo.fetchAll(query);

      return EAPrograms;
    } catch (error) {
      throw error;
    }
  };

  return fetchEAPrograms;
};
