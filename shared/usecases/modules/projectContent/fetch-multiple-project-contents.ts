import { ProjectContent } from '../../../domain/entities/projectContent';
import ProjectContentRepository from '../../ports/ProjectContentRepository';

export type fetchMultipleProjectContentsUseCase = (
  keys: Array<string>,
) => Promise<ProjectContent[]>;

export const buildFetchMultipleProjectContents = (dependencies: {
  projectContentRepo: ProjectContentRepository;
}): fetchMultipleProjectContentsUseCase => {
  const { projectContentRepo } = dependencies;

  const fetchMultipleProjectContents: fetchMultipleProjectContentsUseCase = async (
    keys,
  ) => {
    try {
      const projectContents = await projectContentRepo.fetchMultipleById(keys);

      return projectContents;
    } catch (error) {
      throw error;
    }
  };

  return fetchMultipleProjectContents;
};
