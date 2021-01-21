import { EAProgram } from '../../../domain/entities/';
import EAProgramRepository from '../../ports/EAProgramRepository';

export type fetchEAProgramsWithRecommendedUseCase = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}) => Promise<{
  eaPrograms: EAProgram[];
  recommended: EAProgram[];
}>;

export const buildFetchEAProgramsWithRecommended = (dependencies: {
  eaProgramRepo: EAProgramRepository;
}): fetchEAProgramsWithRecommendedUseCase => {
  const { eaProgramRepo } = dependencies;

  const fetchEAPrograms: fetchEAProgramsWithRecommendedUseCase = async (
    query,
  ) => {
    try {
      const [recommended, eaPrograms] = await Promise.all([
        eaProgramRepo.find({
          where: [
            ['isDeleted', '==', false],
            ['tags.showOnMyPage', '==', true],
          ],
          orderBy: 'recommendedListIndex',
        }),
        eaProgramRepo.find(query),
      ]);

      return { eaPrograms, recommended };
    } catch (error) {
      throw error;
    }
  };

  return fetchEAPrograms;
};
