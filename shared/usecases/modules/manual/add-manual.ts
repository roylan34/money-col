import ManualRepository from '../../ports/ManualRepository';
import { Manual } from '../../../domain/entities';

export type addManualUseCase = (
  fileParams: {
    file: File;
    metadata?: object;
  },
  thumbnailParams: {
    file: File;
    metadata?: object;
  },

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
) => Promise<Manual>;

export const buildAddManual = (dependencies: {
  manualRepo: ManualRepository;
}): addManualUseCase => {
  const { manualRepo } = dependencies;

  const addManual: addManualUseCase = async (
    fileParams,
    thumbnailParams,
    params,
  ) => {
    try {
      const id = await manualRepo.create(
        fileParams,
        thumbnailParams,
        params as Manual,
      );

      const [manual] = await manualRepo.find({
        where: [['id', '==', id]],
      });

      return manual;
    } catch (error) {
      throw error;
    }
  };

  return addManual;
};
