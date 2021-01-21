import { VideoLecture } from '../../../domain/entities/videoLecture';
import VideoLectureRepository from '../../ports/VideoLectureRepository';

export type fetchRecommendedVideoLecturesUseCase = () => Promise<
  VideoLecture[]
>;

export const buildFetchRecommendedVideoLectures = (dependencies: {
  videoLectureRepo: VideoLectureRepository;
}): fetchRecommendedVideoLecturesUseCase => {
  const { videoLectureRepo } = dependencies;

  const fetchRecommendedVideoLectures: fetchRecommendedVideoLecturesUseCase = async () => {
    try {
      const videoLectures = await videoLectureRepo.find({
        where: [
          ['isDeleted', '==', false],
          ['tags.showOnMyPage', '==', true],
        ],
        orderBy: 'recommendedListIndex',
      });

      return videoLectures;
    } catch (error) {
      throw error;
    }
  };

  return fetchRecommendedVideoLectures;
};
