import ManualRepository from '../../ports/ManualRepository';
import { Manual } from '../../../domain/entities/manual';

export type updateManualUseCase = (
  id: string,
  params: {
    title: string;
    isPublished: boolean;
    tags: {
      primeContent: boolean;
      eliteContent: boolean;
      regularContent: boolean;
      [key: string]: boolean;
    };
  },
  thumbnailParams?: {
    file: File;
    metadata?: object;
  },
) => Promise<Manual>;

export const buildUpdateManual = (dependencies: {
  manualRepo: ManualRepository;
}): updateManualUseCase => {
  const { manualRepo } = dependencies;

  const updateManual: updateManualUseCase = async (
    id,
    params,
    thumbnailParams,
  ) => {
    try {
      await manualRepo.update(id, params as Manual, thumbnailParams);

      const [updatedManual] = await manualRepo.find({
        where: [['id', '==', id]],
      });

      if (!updatedManual) {
        throw new Error('An error occured');
      }

      return updatedManual;
    } catch (error) {
      throw error;
    }
  };

  return updateManual;
};
