import { VideoLecture } from '../../../domain/entities/videoLecture';
import VideoLectureRepository from '../../ports/VideoLectureRepository';

export type fetchVideoLectureUseCase = (params: {
  id: string;
}) => Promise<VideoLecture>;

export const buildFetchVideoLecture = (dependencies: {
  videoLectureRepo: VideoLectureRepository;
}): fetchVideoLectureUseCase => {
  const { videoLectureRepo } = dependencies;

  const fetchVideoLecture: fetchVideoLectureUseCase = async (params) => {
    try {
      const { id } = params;

      const videoLecture = await videoLectureRepo.findById(id);

      if (!videoLecture) {
        throw new Error('There was an error in processing your request.');
      }

      return videoLecture;
    } catch (error) {
      throw error;
    }
  };

  return fetchVideoLecture;
};
