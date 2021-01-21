import { ProjectContent } from '../../../domain/entities/projectContent';
import ProjectContentRepository from '../../ports/ProjectContentRepository';

export type fetchProjectContentUseCase = (params: {
  id: string;
}) => Promise<ProjectContent>;

export const buildFetchProjectContent = (dependencies: {
  projectContentRepo: ProjectContentRepository;
}): fetchProjectContentUseCase => {
  const { projectContentRepo } = dependencies;

  const fetchProjectContent: fetchProjectContentUseCase = async (params) => {
    try {
      const { id } = params;

      const projectContent = await projectContentRepo.findById(id);

      if (!projectContent) {
        throw new Error('There was an error in processing your request.');
      }

      return projectContent;
    } catch (error) {
      throw error;
    }
  };

  return fetchProjectContent;
};
