import { Manual } from '../../../domain/entities/manual';
import ManualRepository from '../../ports/ManualRepository';

export type fetchRecommendedManualsUseCase = () => Promise<Manual[]>;

export const buildFetchRecommendedManuals = (dependencies: {
  manualRepo: ManualRepository;
}): fetchRecommendedManualsUseCase => {
  const { manualRepo } = dependencies;

  const fetchRecommendedManuals: fetchRecommendedManualsUseCase = async () => {
    try {
      const manuals = await manualRepo.fetchRecommendedItems();

      return manuals;
    } catch (error) {
      throw error;
    }
  };

  return fetchRecommendedManuals;
};
