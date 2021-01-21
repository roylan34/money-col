import VideoLectureRepository from '../../ports/VideoLectureRepository';

export type removeVideoLecturesByIdUseCase = (
  ids: Array<string>,
) => Promise<string[]>;

export const buildRemoveVideoLecturesById = (dependencies: {
  videoLectureRepo: VideoLectureRepository;
}): removeVideoLecturesByIdUseCase => {
  const { videoLectureRepo } = dependencies;

  const removeVideoLecturesById: removeVideoLecturesByIdUseCase = async (
    ids,
  ) => {
    try {
      await videoLectureRepo.deleteByIds(ids);

      return ids;
    } catch (error) {
      throw error;
    }
  };

  return removeVideoLecturesById;
};
