import { EAProgram } from '../../../domain/entities/EAProgram';
import EAProgramRepository from '../../ports/EAProgramRepository';

export type fetchRecommendedEAProgramsUseCase = () => Promise<EAProgram[]>;

export const buildFetchRecommendedEAPrograms = (dependencies: {
  EAProgramRepo: EAProgramRepository;
}): fetchRecommendedEAProgramsUseCase => {
  const { EAProgramRepo } = dependencies;

  const fetchRecommendedEAPrograms: fetchRecommendedEAProgramsUseCase = async () => {
    try {
      const eaPrograms = await EAProgramRepo.fetchAll({
        where: [
          ['isPublished', '==', true],
          ['isDeleted', '==', false],
          ['tags.showOnMyPage', '==', true],
        ],
        orderBy: 'recommendedListIndex',
        sort: 'asc',
      });

      return eaPrograms;
    } catch (error) {
      throw error;
    }
  };

  return fetchRecommendedEAPrograms;
};
