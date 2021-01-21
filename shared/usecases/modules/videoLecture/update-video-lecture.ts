import VideoLectureRepository from '../../ports/VideoLectureRepository';
import { VideoLecture } from '../../../domain/entities/videoLecture';
import { fetchRecommendedVideoLecturesUseCase } from './fetch-recommended-video-lectures';

export type updateVideoLectureUseCase = (
  id: string,
  params: {
    title: string;
    description: string;
    points: number;
    isPublished: boolean;
    tags: {
      showOnMyPage: boolean;
      primeContent: boolean;
      eliteContent: boolean;
      regularContent: boolean;
      [key: string]: boolean;
    };
    recommendedListIndex: number | null;
  },
  thumbnailParams?: {
    file: File;
    metadata?: object;
  },
  recommendedIds?: { [key: string]: string },
) => Promise<{ videoLectures: VideoLecture[]; recommended: VideoLecture[] }>;

export const buildUpdateVideoLecture = (dependencies: {
  videoLectureRepo: VideoLectureRepository;
  fetchRecommendedVideoLectures: fetchRecommendedVideoLecturesUseCase;
}): updateVideoLectureUseCase => {
  const { videoLectureRepo, fetchRecommendedVideoLectures } = dependencies;

  const updateVideoLecture: updateVideoLectureUseCase = async (
    id,
    params,
    thumbnailParams,
    recommendedIds,
  ) => {
    try {
      let updateCall = videoLectureRepo.update(
        id,
        params as VideoLecture,
        thumbnailParams,
      );

      const { recommendedListIndex } = params;

      let removeRecommended =
        recommendedListIndex !== null &&
        recommendedIds &&
        recommendedIds[recommendedListIndex] !== undefined &&
        recommendedIds[recommendedListIndex] !== id
          ? videoLectureRepo.update(recommendedIds[recommendedListIndex], {
              tags: {
                showOnMyPage: false,
              },
              recommendedListIndex: null,
            } as VideoLecture)
          : Promise.resolve();

      //@ts-ignore
      const [updatedId, removedId] = await Promise.all([
        updateCall,
        removeRecommended,
      ]);

      const fetchUpdatedCall = videoLectureRepo.find({
        where: [['id', '==', updatedId]],
      });
      const fetchRemoved = removedId
        ? videoLectureRepo.find({
            where: [['id', '==', removedId]],
          })
        : Promise.resolve();

      //@ts-ignore
      const [[updatedVideoLecture], removed] = await Promise.all([
        fetchUpdatedCall,
        fetchRemoved,
      ]);

      if (!updatedVideoLecture) {
        throw new Error('Not found');
      }

      let recommended: VideoLecture[] = await fetchRecommendedVideoLectures();

      return removed && removed[0]
        ? { videoLectures: [updatedVideoLecture, removed[0]], recommended }
        : {
            videoLectures: [updatedVideoLecture],
            recommended,
          };
    } catch (error) {
      throw error;
    }
  };

  return updateVideoLecture;
};
