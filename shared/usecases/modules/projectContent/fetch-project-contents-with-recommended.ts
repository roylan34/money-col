import { ProjectContent } from '../../../domain/entities';
import ProjectContentRepository from '../../ports/ProjectContentRepository';

export type fetchProjectContentsWithRecommendedUseCase = (query: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}) => Promise<{
  projectContents: ProjectContent[];
  recommended: ProjectContent[];
}>;

export const buildFetchProjectContentsWithRecommended = (dependencies: {
  projectContentRepo: ProjectContentRepository;
}): fetchProjectContentsWithRecommendedUseCase => {
  const { projectContentRepo } = dependencies;

  const fetchProjectContents: fetchProjectContentsWithRecommendedUseCase = async (
    query,
  ) => {
    try {
      const [recommended, projectContents] = await Promise.all([
        projectContentRepo.find({
          where: [
            ['isDeleted', '==', false],
            ['tags.showOnMyPage', '==', true],
          ],
          orderBy: 'recommendedListIndex',
        }),
        projectContentRepo.find(query),
      ]);

      return { projectContents, recommended };
    } catch (error) {
      throw error;
    }
  };

  return fetchProjectContents;
};
