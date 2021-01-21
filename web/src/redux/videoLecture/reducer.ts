import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  FETCH_RECOMMENDED_VIDEOS_REQUEST,
  FETCH_RECOMMENDED_VIDEOS_FAILURE,
  FETCH_RECOMMENDED_VIDEOS_SUCCESS,
  SET_RECOMMENDED_VIDEOS,
  SET_VIDEO_DATA,
  FETCH_LAST_BOUGHT_VIDEOS_FAILURE,
  FETCH_LAST_BOUGHT_VIDEOS_REQUEST,
  FETCH_LAST_BOUGHT_VIDEOS_SUCCESS,
  SET_LAST_BOUGHT_VIDEOS,
  FETCH_VIDEOS_FAILURE,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
} from './actionType';

export const initialState = {
  recommendedVideos: [],
  recentlyBought: [],
  videos: {},
  requests: {},
};

export type VideoLectureStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_VIDEO_DATA:
      return Immutable.fromJS(state)
        .updateIn(['videos'], () => payload)
        .toJS();
    case SET_RECOMMENDED_VIDEOS:
      return Immutable.fromJS(state)
        .updateIn(['recommendedVideos'], () => payload)
        .toJS();
    case SET_LAST_BOUGHT_VIDEOS:
      return Immutable.fromJS(state)
        .updateIn(['recentlyBought'], () => payload)
        .toJS();
    case FETCH_RECOMMENDED_VIDEOS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', FETCH_RECOMMENDED_VIDEOS_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case FETCH_RECOMMENDED_VIDEOS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_RECOMMENDED_VIDEOS_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', FETCH_RECOMMENDED_VIDEOS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_RECOMMENDED_VIDEOS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_RECOMMENDED_VIDEOS_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', FETCH_RECOMMENDED_VIDEOS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_LAST_BOUGHT_VIDEOS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_LAST_BOUGHT_VIDEOS_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_LAST_BOUGHT_VIDEOS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_LAST_BOUGHT_VIDEOS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case FETCH_VIDEOS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', FETCH_VIDEOS_REQUEST, 'pending'], () => true)
        .toJS();
    case FETCH_VIDEOS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_VIDEOS_REQUEST],
          () => payload.response,
        )
        .updateIn(['requests', FETCH_VIDEOS_REQUEST, 'pending'], () => false)
        .toJS();
    case FETCH_VIDEOS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', FETCH_VIDEOS_REQUEST], () => payload.error)
        .updateIn(['requests', FETCH_VIDEOS_REQUEST, 'pending'], () => false)
        .toJS();
    default:
      return state;
  }
};
