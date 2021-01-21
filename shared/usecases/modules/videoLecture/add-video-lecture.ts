import VideoLectureRepository from '../../ports/VideoLectureRepository';
import { VideoLecture } from '../../../domain/entities/videoLecture';
import { updateVideoLectureUseCase } from './update-video-lecture';

export type addVideoLectureUseCase = (
  videoParams: {
    file: File;
    metadata?: object;
  },
  thumbnailParams: {
    file: File;
    metadata?: object;
  },
  params: {
    title: string;
    description: string;
    points: number;
    lengthInMs: number;
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
  recommendedIds?: { [key: string]: string },
) => Promise<{ videoLectures: VideoLecture[]; recommended: VideoLecture[] }>;

export const buildAddVideoLecture = (dependencies: {
  videoLectureRepo: VideoLectureRepository;
  updateVideoLecture: updateVideoLectureUseCase;
}): addVideoLectureUseCase => {
  const { videoLectureRepo, updateVideoLecture } = dependencies;

  const addVideoLecture: addVideoLectureUseCase = async (
    videoParams,
    thumbnailParams,
    params,
    recommendedIds,
  ) => {
    try {
      let createCall = videoLectureRepo.create(videoParams, thumbnailParams, {
        ...params,
        purchases: 0,
        views: 0,
      } as VideoLecture);

      const { recommendedListIndex } = params;

      let updateCall =
        recommendedListIndex !== null &&
        recommendedIds &&
        recommendedIds[recommendedListIndex]
          ? updateVideoLecture(
              recommendedIds[recommendedListIndex],
              {
                tags: {
                  showOnMyPage: false,
                },
                recommendedListIndex: null,
              } as VideoLecture,
              undefined,
              recommendedIds,
            )
          : Promise.resolve();

      //@ts-ignore
      const [id, updatedVideoLecture] = await Promise.all([
        createCall,
        updateCall,
      ]);

      const [videoLecture] = await videoLectureRepo.find({
        where: [['id', '==', id]],
      });

      let recommended: VideoLecture[] = [];
      if (videoLecture && videoLecture.recommendedListIndex !== null) {
        recommended.push(videoLecture);
      }
      if (
        updatedVideoLecture &&
        updatedVideoLecture.videoLectures &&
        updatedVideoLecture.videoLectures[0].recommendedListIndex !== null
      ) {
        recommended.push(updatedVideoLecture.videoLectures[0]);
      }

      return updatedVideoLecture &&
        updatedVideoLecture.videoLectures &&
        updatedVideoLecture.videoLectures[0]
        ? {
            videoLectures: [videoLecture, updatedVideoLecture.videoLectures[0]],
            recommended,
          }
        : { videoLectures: [videoLecture], recommended };
    } catch (error) {
      throw error;
    }
  };

  return addVideoLecture;
};
