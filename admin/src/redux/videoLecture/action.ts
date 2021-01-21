import { AnyAction } from 'redux';
import {
  ADD_VIDEO_LECTURE_REQUEST,
  ADD_VIDEO_LECTURE_FAILURE,
  ADD_VIDEO_LECTURE_SUCCESS,
  FETCH_VIDEO_LECTURES_REQUEST,
  FETCH_VIDEO_LECTURES_FAILURE,
  FETCH_VIDEO_LECTURES_SUCCESS,
  UPDATE_VIDEO_LECTURE_REQUEST,
  UPDATE_VIDEO_LECTURE_FAILURE,
  UPDATE_VIDEO_LECTURE_SUCCESS,
  DELETE_VIDEO_LECTURES_REQUEST,
  DELETE_VIDEO_LECTURES_FAILURE,
  DELETE_VIDEO_LECTURES_SUCCESS,
} from './actionType';
import { VideoLecture } from '../../domain/entities';

export const addVideoLecture = (
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
): AnyAction => ({
  type: ADD_VIDEO_LECTURE_REQUEST,
  payload: { videoParams, thumbnailParams, params, recommendedIds },
});

export const addVideoLectureSuccess = (response: Object): AnyAction => ({
  type: ADD_VIDEO_LECTURE_SUCCESS,
  payload: { response },
});

export const addVideoLectureFailure = (error: Error | string): AnyAction => ({
  type: ADD_VIDEO_LECTURE_FAILURE,
  payload: { error },
});

export const fetchVideoLectures = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit: number;
  mode: 'prev' | 'next';
  orderBy?: string;
  sort?: 'desc' | 'asc';
  firstId: string;
  lastId: string;
}): AnyAction => ({
  type: FETCH_VIDEO_LECTURES_REQUEST,
  payload: { query },
});

export const fetchVideoLecturesSuccess = (response: {
  videoLectures: { [key: string]: VideoLecture };
  recommended: { [key: string]: VideoLecture };
}): AnyAction => ({
  type: FETCH_VIDEO_LECTURES_SUCCESS,
  payload: { response },
});

export const fetchVideoLecturesFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_VIDEO_LECTURES_FAILURE,
  payload: { error },
});

export const updateVideoLecture = (
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
): AnyAction => ({
  type: UPDATE_VIDEO_LECTURE_REQUEST,
  payload: { id, thumbnailParams, params, recommendedIds },
});

export const updateVideoLectureSuccess = (response: Object): AnyAction => ({
  type: UPDATE_VIDEO_LECTURE_SUCCESS,
  payload: { response },
});

export const updateVideoLectureFailure = (
  error: Error | string,
): AnyAction => ({
  type: UPDATE_VIDEO_LECTURE_FAILURE,
  payload: { error },
});

export const deleteVideoLectures = (ids: Array<string>): AnyAction => ({
  type: DELETE_VIDEO_LECTURES_REQUEST,
  payload: { ids },
});

export const deleteVideoLecturesSuccess = (response: Object): AnyAction => ({
  type: DELETE_VIDEO_LECTURES_SUCCESS,
  payload: { response },
});

export const deleteVideoLecturesFailure = (
  error: Error | string,
): AnyAction => ({
  type: DELETE_VIDEO_LECTURES_FAILURE,
  payload: { error },
});
