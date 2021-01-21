import ManualRepository from '../../ports/ManualRepository';

export type removeManualsByIdUseCase = (
  ids: Array<string>,
) => Promise<string[]>;

export const buildRemoveManualsById = (dependencies: {
  manualRepo: ManualRepository;
}): removeManualsByIdUseCase => {
  const { manualRepo } = dependencies;

  const removeManualsById: removeManualsByIdUseCase = async (ids) => {
    try {
      await manualRepo.deleteByIds(ids);

      return ids;
    } catch (error) {
      throw error;
    }
  };

  return removeManualsById;
};
