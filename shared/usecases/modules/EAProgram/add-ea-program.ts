import EAProgramRepository from '../../ports/EAProgramRepository';
import { EAProgram } from '../../../domain/entities/';
import { updateEAProgramUseCase } from './update-ea-program';

export type addEAProgramUseCase = (
  eaProgramParams: {
    file: File;
    metadata?: object;
  },
  thumbnailParams: {
    file: File;
    metadata?: object;
  },
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
  recommendedIds?: { [key: string]: string },
) => Promise<{
  eaPrograms: EAProgram[];
  recommended: EAProgram[];
}>;

export const buildAddEAProgram = (dependencies: {
  eaProgramRepo: EAProgramRepository;
  updateEAProgram: updateEAProgramUseCase;
}): addEAProgramUseCase => {
  const { eaProgramRepo, updateEAProgram } = dependencies;

  const addEAProgram: addEAProgramUseCase = async (
    eaProgramParams,
    thumbnailParams,
    params,
    recommendedIds,
  ) => {
    try {
      let createCall = eaProgramRepo.create(eaProgramParams, thumbnailParams, {
        ...params,
        purchases: 0,
      } as EAProgram);

      const { recommendedListIndex } = params;

      let updateCall =
        recommendedListIndex !== null &&
        recommendedIds &&
        recommendedIds[recommendedListIndex]
          ? updateEAProgram(
              recommendedIds[recommendedListIndex],
              {
                tags: {
                  showOnMyPage: false,
                },
                recommendedListIndex: null,
              } as EAProgram,
              undefined,
              recommendedIds,
            )
          : Promise.resolve();

      //@ts-ignore
      const [id, updatedEAProgram] = await Promise.all([
        createCall,
        updateCall,
      ]);

      const [eaProgram] = await eaProgramRepo.find({
        where: [['id', '==', id]],
      });

      let recommended: EAProgram[] = [];
      if (eaProgram && eaProgram.recommendedListIndex !== null) {
        recommended.push(eaProgram);
      }
      if (
        updatedEAProgram &&
        updatedEAProgram.eaPrograms &&
        updatedEAProgram.eaPrograms[0].recommendedListIndex !== null
      ) {
        recommended.push(updatedEAProgram.eaPrograms[0]);
      }

      return updatedEAProgram &&
        updatedEAProgram.eaPrograms &&
        updatedEAProgram.eaPrograms[0]
        ? {
            eaPrograms: [eaProgram, updatedEAProgram.eaPrograms[0]],
            recommended,
          }
        : { eaPrograms: [eaProgram], recommended };
    } catch (error) {
      throw error;
    }
  };

  return addEAProgram;
};
