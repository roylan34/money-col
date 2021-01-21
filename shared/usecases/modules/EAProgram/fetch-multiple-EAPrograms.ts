import { EAProgram } from '../../../domain/entities/EAProgram';
import EAProgramRepository from '../../ports/EAProgramRepository';

export type fetchMultipleEAProgramsUseCase = (
  keys: Array<string>,
) => Promise<EAProgram[]>;

export const buildFetchMultipleEAPrograms = (dependencies: {
  EAProgramRepo: EAProgramRepository;
}): fetchMultipleEAProgramsUseCase => {
  const { EAProgramRepo } = dependencies;

  const fetchMultipleEAPrograms: fetchMultipleEAProgramsUseCase = async (
    keys,
  ) => {
    try {
      const EAPrograms = await EAProgramRepo.fetchMultipleById(keys);

      return EAPrograms;
    } catch (error) {
      throw error;
    }
  };

  return fetchMultipleEAPrograms;
};
