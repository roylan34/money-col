import { Manual } from '../../../domain/entities/manual';
import ManualRepository from '../../ports/ManualRepository';

export type fetchManualsUseCase = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}) => Promise<Manual[]>;

export const buildFetchManuals = (dependencies: {
  manualRepo: ManualRepository;
}): fetchManualsUseCase => {
  const { manualRepo } = dependencies;

  const fetchManuals: fetchManualsUseCase = async (query) => {
    try {
      const manuals = await manualRepo.fetchAll(query);

      return manuals;
    } catch (error) {
      throw error;
    }
  };

  return fetchManuals;
};
