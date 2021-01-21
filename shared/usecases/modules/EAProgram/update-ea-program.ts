import EAProgramRepository from '../../ports/EAProgramRepository';
import { EAProgram } from '../../../domain/entities/';

export type updateEAProgramUseCase = (
  id: string,
  params: {
    title: string;
    description: string;
    points: number;
    isPublished: boolean;
    tags: {
      showOnMyPage: boolean;
      primeContent: boolean;
      eliteContent: boolean;
      regularContent: boolean;
      [key: string]: boolean;
    };
    recommendedListIndex: number | null;
  },
  thumbnailParams?: {
    file: File;
    metadata?: object;
  },
  recommendedIds?: { [key: string]: string },
) => Promise<{
  eaPrograms: EAProgram[];
  recommended: EAProgram[];
}>;

export const buildUpdateEAProgram = (dependencies: {
  eaProgramRepo: EAProgramRepository;
}): updateEAProgramUseCase => {
  const { eaProgramRepo } = dependencies;

  const updateEAProgram: updateEAProgramUseCase = async (
    id,
    params,
    thumbnailParams,
    recommendedIds,
  ) => {
    try {
      let updateCall = eaProgramRepo.update(
        id,
        params as EAProgram,
        thumbnailParams,
      );

      const { recommendedListIndex } = params;

      let removeRecommended =
        recommendedListIndex !== null &&
        recommendedIds &&
        recommendedIds[recommendedListIndex] !== undefined &&
        recommendedIds[recommendedListIndex] !== id
          ? eaProgramRepo.update(recommendedIds[recommendedListIndex], {
              tags: {
                showOnMyPage: false,
              },
              recommendedListIndex: null,
            } as EAProgram)
          : Promise.resolve();

      //@ts-ignore
      const [updatedId, removedId] = await Promise.all([
        updateCall,
        removeRecommended,
      ]);

      const fetchUpdatedCall = eaProgramRepo.find({
        where: [['id', '==', updatedId]],
      });
      const fetchRemoved = removedId
        ? eaProgramRepo.find({
            where: [['id', '==', removedId]],
          })
        : Promise.resolve();

      //@ts-ignore
      const [[updatedEAProgram], removed] = await Promise.all([
        fetchUpdatedCall,
        fetchRemoved,
      ]);

      if (!updatedEAProgram) {
        throw new Error('Not found');
      }

      let recommended: EAProgram[] = await eaProgramRepo.find({
        where: [
          ['isDeleted', '==', false],
          ['tags.showOnMyPage', '==', true],
        ],
        orderBy: 'recommendedListIndex',
      });

      return removed && removed[0]
        ? { eaPrograms: [updatedEAProgram, removed[0]], recommended }
        : {
            eaPrograms: [updatedEAProgram],
            recommended,
          };
    } catch (error) {
      throw error;
    }
  };

  return updateEAProgram;
};
