import VideoLectureRepository from '../../ports/VideoLectureRepository';

import {
  buildFetchVideoLecture,
  fetchVideoLectureUseCase,
} from './fetch-video-lecture';
import {
  buildFetchRecommendedVideos,
  fetchRecommendedVideosUseCase,
} from './fetch-recommended';
import {
  buildFetchMultipleVideos,
  fetchMultipleVideosUseCase,
} from './fetch-multiple-videos';
import { buildFetchVideos, fetchVideosUseCase } from './fetch-videos';

import {
  buildAddVideoLecture,
  addVideoLectureUseCase,
} from './add-video-lecture';
import {
  buildFetchVideoLectures,
  fetchVideoLecturesUseCase,
} from './fetch-video-lectures';
import {
  buildUpdateVideoLecture,
  updateVideoLectureUseCase,
} from './update-video-lecture';
import {
  buildRemoveVideoLecturesById,
  removeVideoLecturesByIdUseCase,
} from './remove-video-lectures-by-id';
import {
  buildFetchRecommendedVideoLectures,
  fetchRecommendedVideoLecturesUseCase,
} from './fetch-recommended-video-lectures';

export default (dependencies: {
  videoLectureRepo: VideoLectureRepository;
}): {
  fetchVideoLecture: fetchVideoLectureUseCase;
  fetchRecommendedVideos: fetchRecommendedVideosUseCase;
  fetchMultipleVideosById: fetchMultipleVideosUseCase;
  fetchVideos: fetchVideosUseCase;
  addVideoLecture: addVideoLectureUseCase;
  fetchVideoLectures: fetchVideoLecturesUseCase;
  updateVideoLecture: updateVideoLectureUseCase;
  removeVideoLecturesById: removeVideoLecturesByIdUseCase;
  fetchRecommendedVideoLectures: fetchRecommendedVideoLecturesUseCase;
} => {
  const { videoLectureRepo } = dependencies;

  const fetchVideoLecture = buildFetchVideoLecture({ videoLectureRepo });

  const fetchRecommendedVideos = buildFetchRecommendedVideos({
    videoLectureRepo,
  });

  const fetchMultipleVideosById = buildFetchMultipleVideos({
    videoLectureRepo,
  });

  const fetchVideos = buildFetchVideos({ videoLectureRepo });

  const fetchRecommendedVideoLectures = buildFetchRecommendedVideoLectures({
    videoLectureRepo,
  });

  const updateVideoLecture = buildUpdateVideoLecture({
    videoLectureRepo,
    fetchRecommendedVideoLectures,
  });

  const addVideoLecture = buildAddVideoLecture({
    videoLectureRepo,
    updateVideoLecture,
  });

  const fetchVideoLectures = buildFetchVideoLectures({
    videoLectureRepo,
    fetchRecommendedVideoLectures,
  });

  const removeVideoLecturesById = buildRemoveVideoLecturesById({
    videoLectureRepo,
  });

  return {
    fetchVideoLecture,
    fetchRecommendedVideos,
    fetchMultipleVideosById,
    fetchVideos,
    addVideoLecture,
    fetchVideoLectures,
    updateVideoLecture,
    removeVideoLecturesById,
    fetchRecommendedVideoLectures,
  };
};
