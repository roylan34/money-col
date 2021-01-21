import EAProgramRepository from '../../ports/EAProgramRepository';

export type removeEAProgramsByIdUseCase = (
  ids: Array<string>,
) => Promise<string[]>;

export const buildRemoveEAProgramsById = (dependencies: {
  eaProgramRepo: EAProgramRepository;
}): removeEAProgramsByIdUseCase => {
  const { eaProgramRepo } = dependencies;

  const removeEAProgramsById: removeEAProgramsByIdUseCase = async (ids) => {
    try {
      await eaProgramRepo.deleteByIds(ids);

      return ids;
    } catch (error) {
      throw error;
    }
  };

  return removeEAProgramsById;
};
