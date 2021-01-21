import { VideoLecture } from '../../../domain/entities/videoLecture';
import VideoLectureRepository from '../../ports/VideoLectureRepository';

export type fetchVideosUseCase = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}) => Promise<VideoLecture[]>;

export const buildFetchVideos = (dependencies: {
  videoLectureRepo: VideoLectureRepository;
}): fetchVideosUseCase => {
  const { videoLectureRepo } = dependencies;

  const fetchVideos: fetchVideosUseCase = async (query) => {
    try {
      const videoLectures = await videoLectureRepo.fetchAll(query);

      return videoLectures;
    } catch (error) {
      throw error;
    }
  };

  return fetchVideos;
};
