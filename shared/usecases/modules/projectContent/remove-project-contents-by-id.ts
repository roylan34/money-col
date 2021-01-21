import ProjectContentRepository from '../../ports/ProjectContentRepository';

export type removeProjectContentsByIdUseCase = (
  ids: Array<string>,
) => Promise<string[]>;

export const buildRemoveProjectContentsById = (dependencies: {
  projectContentRepo: ProjectContentRepository;
}): removeProjectContentsByIdUseCase => {
  const { projectContentRepo } = dependencies;

  const removeProjectContentsById: removeProjectContentsByIdUseCase = async (
    ids,
  ) => {
    try {
      await projectContentRepo.deleteByIds(ids);

      return ids;
    } catch (error) {
      throw error;
    }
  };

  return removeProjectContentsById;
};
