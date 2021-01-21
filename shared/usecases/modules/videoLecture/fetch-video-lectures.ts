import { VideoLecture } from '../../../domain/entities/videoLecture';
import { fetchRecommendedVideoLecturesUseCase } from './fetch-recommended-video-lectures';
import VideoLectureRepository from '../../ports/VideoLectureRepository';
import { Timestamp } from '../../../drivers/Firestore';

export type fetchVideoLecturesUseCase = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit: number;
  mode: 'prev' | 'next';
  orderBy?: string;
  sort?: 'desc' | 'asc';
  firstId: string;
  lastId: string;
}) => Promise<{
  videoLectures: {
    data: Array<VideoLecture & { fileName: string; createdAt: Timestamp }>;
    hasPrevPage: boolean;
    hasNextPage: boolean;
  };
  recommended: VideoLecture[];
}>;

export const buildFetchVideoLectures = (dependencies: {
  videoLectureRepo: VideoLectureRepository;
  fetchRecommendedVideoLectures: fetchRecommendedVideoLecturesUseCase;
}): fetchVideoLecturesUseCase => {
  const { videoLectureRepo, fetchRecommendedVideoLectures } = dependencies;

  //@ts-ignore
  const fetchVideoLectures: fetchVideoLecturesUseCase = async (query) => {
    try {
      const [recommended, videoLectures] = await Promise.all([
        fetchRecommendedVideoLectures(),
        videoLectureRepo.findByPage(query),
      ]);

      return { videoLectures, recommended };
    } catch (error) {
      throw error;
    }
  };

  return fetchVideoLectures;
};
