import UserRepository from '../../ports/UserRepository';

export type removeInstructorsByIdUseCase = (
  ids: Array<string>,
) => Promise<string[]>;

export const buildRemoveInstructorsById = (dependencies: {
  userRepo: UserRepository;
}): removeInstructorsByIdUseCase => {
  const { userRepo } = dependencies;

  const removeInstructorsById: removeInstructorsByIdUseCase = async (ids) => {
    try {
      await userRepo.deleteByIds(ids);

      return ids;
    } catch (error) {
      throw error;
    }
  };

  return removeInstructorsById;
};
