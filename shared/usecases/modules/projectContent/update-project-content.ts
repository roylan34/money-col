import ProjectContentRepository from '../../ports/ProjectContentRepository';
import { ProjectContent } from '../../../domain/entities/projectContent';

export type updateProjectContentUseCase = (
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
  projectContents: ProjectContent[];
  recommended: ProjectContent[];
}>;

export const buildUpdateProjectContent = (dependencies: {
  projectContentRepo: ProjectContentRepository;
}): updateProjectContentUseCase => {
  const { projectContentRepo } = dependencies;

  const updateProjectContent: updateProjectContentUseCase = async (
    id,
    params,
    thumbnailParams,
    recommendedIds,
  ) => {
    try {
      let updateCall = projectContentRepo.update(
        id,
        params as ProjectContent,
        thumbnailParams,
      );

      const { recommendedListIndex } = params;

      let removeRecommended =
        recommendedListIndex !== null &&
        recommendedIds &&
        recommendedIds[recommendedListIndex] !== undefined &&
        recommendedIds[recommendedListIndex] !== id
          ? projectContentRepo.update(recommendedIds[recommendedListIndex], {
              tags: {
                showOnMyPage: false,
              },
              recommendedListIndex: null,
            } as ProjectContent)
          : Promise.resolve();

      //@ts-ignore
      const [updatedId, removedId] = await Promise.all([
        updateCall,
        removeRecommended,
      ]);

      const fetchUpdatedCall = projectContentRepo.find({
        where: [['id', '==', updatedId]],
      });
      const fetchRemoved = removedId
        ? projectContentRepo.find({
            where: [['id', '==', removedId]],
          })
        : Promise.resolve();

      //@ts-ignore
      const [[updatedProjectContent], removed] = await Promise.all([
        fetchUpdatedCall,
        fetchRemoved,
      ]);

      if (!updatedProjectContent) {
        throw new Error('Not found');
      }

      let recommended: ProjectContent[] = await projectContentRepo.find({
        where: [
          ['isDeleted', '==', false],
          ['tags.showOnMyPage', '==', true],
        ],
        orderBy: 'recommendedListIndex',
      });

      return removed && removed[0]
        ? { projectContents: [updatedProjectContent, removed[0]], recommended }
        : {
            projectContents: [updatedProjectContent],
            recommended,
          };
    } catch (error) {
      throw error;
    }
  };

  return updateProjectContent;
};
