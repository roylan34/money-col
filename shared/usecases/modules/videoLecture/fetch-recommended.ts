import { VideoLecture } from '../../../domain/entities/videoLecture';
import VideoLectureRepository from '../../ports/VideoLectureRepository';

export type fetchRecommendedVideosUseCase = () => Promise<VideoLecture[]>;

export const buildFetchRecommendedVideos = (dependencies: {
  videoLectureRepo: VideoLectureRepository;
}): fetchRecommendedVideosUseCase => {
  const { videoLectureRepo } = dependencies;

  const fetchRecommendedVideos: fetchRecommendedVideosUseCase = async () => {
    try {
      const videoLectures = await videoLectureRepo.fetchAll({
        where: [
          ['isPublished', '==', true],
          ['tags.showOnMyPage', '==', true],
          ['isDeleted', '==', false],
        ],
        orderBy: 'recommendedListIndex',
        sort: 'asc',
      });

      return videoLectures;
    } catch (error) {
      throw error;
    }
  };

  return fetchRecommendedVideos;
};
