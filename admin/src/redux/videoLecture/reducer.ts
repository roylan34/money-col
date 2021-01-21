import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  ADD_VIDEO_LECTURE_FAILURE,
  ADD_VIDEO_LECTURE_REQUEST,
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
import { VideoLecture } from '../../domain/entities/';

export const initialState = {
  failedRequests: {},
  successfulRequests: {},
  videos: {},
  recommended: {},
  requests: {},
};

export type VideoLectureStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case ADD_VIDEO_LECTURE_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', ADD_VIDEO_LECTURE_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case ADD_VIDEO_LECTURE_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', ADD_VIDEO_LECTURE_REQUEST],
          () => payload.response,
        )
        .updateIn(['videos'], () => ({
          ...state.videos,
          ...payload.response.videoLectures,
        }))
        .updateIn(['recommended'], () => ({
          ...state.recommended,
          ...payload.response.recommended,
        }))
        .updateIn(
          ['requests', ADD_VIDEO_LECTURE_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case ADD_VIDEO_LECTURE_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', ADD_VIDEO_LECTURE_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', ADD_VIDEO_LECTURE_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_VIDEO_LECTURES_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', FETCH_VIDEO_LECTURES_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case FETCH_VIDEO_LECTURES_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_VIDEO_LECTURES_REQUEST],
          () => payload.response,
        )
        .updateIn(['videos'], () => payload.response.videoLectures)
        .updateIn(['recommended'], () => payload.response.recommended)
        .updateIn(
          ['requests', FETCH_VIDEO_LECTURES_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_VIDEO_LECTURES_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_VIDEO_LECTURES_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', FETCH_VIDEO_LECTURES_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case UPDATE_VIDEO_LECTURE_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', UPDATE_VIDEO_LECTURE_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case UPDATE_VIDEO_LECTURE_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_VIDEO_LECTURE_REQUEST],
          () => payload.response,
        )
        .updateIn(['videos'], () => ({
          ...state.videos,
          ...payload.response.videoLectures,
        }))
        .updateIn(['recommended'], () => payload.response.recommended)
        .updateIn(
          ['requests', UPDATE_VIDEO_LECTURE_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case UPDATE_VIDEO_LECTURE_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_VIDEO_LECTURE_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', UPDATE_VIDEO_LECTURE_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case DELETE_VIDEO_LECTURES_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', DELETE_VIDEO_LECTURES_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case DELETE_VIDEO_LECTURES_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', DELETE_VIDEO_LECTURES_REQUEST],
          () => payload.response,
        )
        .updateIn(['videos'], () => {
          const ids = payload.response as Array<string>;
          let videoLectures = Object.assign({}, state.videos);

          ids.forEach(id => {
            const { [id]: omit, ...rest } = videoLectures;
            videoLectures = rest;
          });
          return videoLectures;
        })
        .updateIn(['recommended'], () => {
          const ids = payload.response as Array<string>;
          let recommended = Object.assign({}, state.recommended) as {
            [key: string]: VideoLecture;
          };

          Object.values(recommended).forEach((value, index) => {
            const videoLecture = value as VideoLecture;
            if (ids.indexOf(videoLecture.id) >= 0) {
              const { [index]: omit, ...rest } = recommended;
              recommended = rest;
            }
          });

          return recommended;
        })
        .updateIn(
          ['requests', DELETE_VIDEO_LECTURES_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case DELETE_VIDEO_LECTURES_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', DELETE_VIDEO_LECTURES_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', DELETE_VIDEO_LECTURES_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    default:
      return state;
  }
};
