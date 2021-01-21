import ProjectContentRepository from '../../ports/ProjectContentRepository';
import { ProjectContent } from '../../../domain/entities';
import { updateProjectContentUseCase } from './update-project-content';

export type addProjectContentUseCase = (
  projectContentParams: {
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
  projectContents: ProjectContent[];
  recommended: ProjectContent[];
}>;

export const buildAddProjectContent = (dependencies: {
  projectContentRepo: ProjectContentRepository;
  updateProjectContent: updateProjectContentUseCase;
}): addProjectContentUseCase => {
  const { projectContentRepo, updateProjectContent } = dependencies;

  const addProjectContent: addProjectContentUseCase = async (
    projectContentParams,
    thumbnailParams,
    params,
    recommendedIds,
  ) => {
    try {
      let createCall = projectContentRepo.create(
        projectContentParams,
        thumbnailParams,
        {
          ...params,
          purchases: 0,
        } as ProjectContent,
      );

      const { recommendedListIndex } = params;

      let updateCall =
        recommendedListIndex !== null &&
        recommendedIds &&
        recommendedIds[recommendedListIndex]
          ? updateProjectContent(
              recommendedIds[recommendedListIndex],
              {
                tags: {
                  showOnMyPage: false,
                },
                recommendedListIndex: null,
              } as ProjectContent,
              undefined,
              recommendedIds,
            )
          : Promise.resolve();

      //@ts-ignore
      const [id, updatedProjectContent] = await Promise.all([
        createCall,
        updateCall,
      ]);

      const [projectContent] = await projectContentRepo.find({
        where: [['id', '==', id]],
      });

      let recommended: ProjectContent[] = [];
      if (projectContent && projectContent.recommendedListIndex !== null) {
        recommended.push(projectContent);
      }
      if (
        updatedProjectContent &&
        updatedProjectContent.projectContents &&
        updatedProjectContent.projectContents[0].recommendedListIndex !== null
      ) {
        recommended.push(updatedProjectContent.projectContents[0]);
      }

      return updatedProjectContent &&
        updatedProjectContent.projectContents &&
        updatedProjectContent.projectContents[0]
        ? {
            projectContents: [
              projectContent,
              updatedProjectContent.projectContents[0],
            ],
            recommended,
          }
        : { projectContents: [projectContent], recommended };
    } catch (error) {
      throw error;
    }
  };

  return addProjectContent;
};
