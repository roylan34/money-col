import { ProjectContent } from '../../../domain/entities/projectContent';
import ProjectContentRepository from '../../ports/ProjectContentRepository';

export type fetchRecommendedProjectContentsUseCase = () => Promise<
  ProjectContent[]
>;

export const buildFetchRecommendedProjectContents = (dependencies: {
  projectContentRepo: ProjectContentRepository;
}): fetchRecommendedProjectContentsUseCase => {
  const { projectContentRepo } = dependencies;

  const fetchRecommendedProjectContents: fetchRecommendedProjectContentsUseCase = async () => {
    try {
      const projectContents = await projectContentRepo.fetchAll({
        where: [
          ['isPublished', '==', true],
          ['isDeleted', '==', false],
          ['tags.showOnMyPage', '==', true],
        ],
        orderBy: 'recommendedListIndex',
        sort: 'asc',
      });

      return projectContents;
    } catch (error) {
      throw error;
    }
  };

  return fetchRecommendedProjectContents;
};
