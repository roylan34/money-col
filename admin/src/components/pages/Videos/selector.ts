import { RootStateOrAny } from 'react-redux';
import { VideoItemRow } from '../../templates/VideosTemplate/types';

import { VideoLecture } from '../../../domain/entities';
import {
  ADD_VIDEO_LECTURE_REQUEST,
  FETCH_VIDEO_LECTURES_REQUEST,
  DELETE_VIDEO_LECTURES_REQUEST,
  UPDATE_VIDEO_LECTURE_REQUEST,
} from '../../../redux/videoLecture/actionType';
import { getFormattedRowData } from './utils';

export type StateFromProps = {
  addVideoLectureErrors: { [key: string]: string } | {};
  videoItems: Array<VideoItemRow>;
  recommendedItems: { [key: string]: string };
  recommendedTitles: { [key: string]: string };
  isFetchingVideos: boolean;
  isUpdatingVideo: boolean;
  isAddingNewVideo: boolean;
  isDeletingVideo: boolean;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    videoLecture: {
      failedRequests,
      videos: { lectures, hasPrevPage, hasNextPage },
      recommended,
      requests,
    },
  } = state;

  const addVideoLectureErrors =
    failedRequests && failedRequests[ADD_VIDEO_LECTURE_REQUEST];

  const isAddingNewVideo =
    requests[ADD_VIDEO_LECTURE_REQUEST] &&
    (requests[ADD_VIDEO_LECTURE_REQUEST].pending as boolean);
  const isFetchingVideos =
    requests[FETCH_VIDEO_LECTURES_REQUEST] &&
    (requests[FETCH_VIDEO_LECTURES_REQUEST].pending as boolean);
  const isUpdatingVideo =
    requests[UPDATE_VIDEO_LECTURE_REQUEST] &&
    (requests[UPDATE_VIDEO_LECTURE_REQUEST].pending as boolean);
  const isDeletingVideo =
    requests[DELETE_VIDEO_LECTURES_REQUEST] &&
    (requests[DELETE_VIDEO_LECTURES_REQUEST].pending as boolean);

  let videoItems: Array<VideoItemRow> = [];
  if (lectures) {
    Object.values(lectures).forEach(video => {
      const videoItem = getFormattedRowData(
        video as VideoLecture & { createdAt: Date; fileName: string },
      ) as VideoItemRow;

      videoItems.push(videoItem);
    });
  }

  let recommendedItems: { [key: string]: string } = {};
  let recommendedTitles: { [key: string]: string } = {};

  Object.values(recommended).forEach(video => {
    const { recommendedListIndex, id, title } = video as VideoLecture;
    if (recommendedListIndex !== null) {
      recommendedItems[recommendedListIndex] = id;
      recommendedTitles[recommendedListIndex] = title;
    }
  });

  return {
    addVideoLectureErrors,
    videoItems,
    recommendedItems,
    recommendedTitles,
    isFetchingVideos,
    isUpdatingVideo,
    isAddingNewVideo,
    isDeletingVideo,
    hasPrevPage,
    hasNextPage,
  };
};
