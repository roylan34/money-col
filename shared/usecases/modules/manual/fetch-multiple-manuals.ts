import { Manual } from '../../../domain/entities/manual';
import ManualRepository from '../../ports/ManualRepository';

export type fetchMultipleManualsUseCase = (
  keys: Array<string>,
) => Promise<Manual[]>;

export const buildFetchMultipleManuals = (dependencies: {
  manualRepo: ManualRepository;
}): fetchMultipleManualsUseCase => {
  const { manualRepo } = dependencies;

  const fetchMultipleManuals: fetchMultipleManualsUseCase = async (keys) => {
    try {
      const manuals = await manualRepo.fetchMultipleById(keys);

      return manuals;
    } catch (error) {
      throw error;
    }
  };

  return fetchMultipleManuals;
};
