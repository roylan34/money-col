import { VideoLecture } from '../../../domain/entities/videoLecture';
import VideoLectureRepository from '../../ports/VideoLectureRepository';

export type fetchMultipleVideosUseCase = (
  keys: Array<string>,
) => Promise<VideoLecture[]>;

export const buildFetchMultipleVideos = (dependencies: {
  videoLectureRepo: VideoLectureRepository;
}): fetchMultipleVideosUseCase => {
  const { videoLectureRepo } = dependencies;

  const fetchMultipleVideos: fetchMultipleVideosUseCase = async (keys) => {
    try {
      const videoLectures = await videoLectureRepo.fetchMultipleById(keys);

      return videoLectures;
    } catch (error) {
      throw error;
    }
  };

  return fetchMultipleVideos;
};
