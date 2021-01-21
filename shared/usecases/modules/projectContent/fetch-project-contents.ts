import { ProjectContent } from '../../../domain/entities/projectContent';
import ProjectContentRepository from '../../ports/ProjectContentRepository';

export type fetchProjectContentsUseCase = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}) => Promise<ProjectContent[]>;

export const buildFetchProjectContents = (dependencies: {
  projectContentRepo: ProjectContentRepository;
}): fetchProjectContentsUseCase => {
  const { projectContentRepo } = dependencies;

  const fetchProjectContents: fetchProjectContentsUseCase = async (query) => {
    try {
      const projectContents = await projectContentRepo.fetchAll(query);

      return projectContents;
    } catch (error) {
      throw error;
    }
  };

  return fetchProjectContents;
};
