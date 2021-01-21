import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  FETCH_PURCHASE_FAILURE,
  FETCH_PURCHASE_REQUEST,
  FETCH_PURCHASE_SUCCESS,
  SET_PURCHASES,
  SET_RECENT_MANUAL_PURCHASES,
  SET_RECENT_VIDEO_LECTURE_PURCHASES,
  FETCH_PURCHASED_VIDEOS_AND_PROJECTS_REQUEST,
  FETCH_PURCHASED_VIDEOS_AND_PROJECTS_SUCCESS,
  FETCH_PURCHASED_VIDEOS_AND_PROJECTS_FAILURE,
  SET_PURCHASED_VIDEOS_AND_PROJECTS,
} from './actionType';

export const initialState = {
  purchases: {},
  recentVideoLectures: [],
  recentManuals: [],
  purchasedVideosAndProjects: {},
  requests: {},
};

export type ManualStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_PURCHASES:
      return Immutable.fromJS(state)
        .updateIn(['purchases'], () => ({
          ...state.purchases,
          ...payload,
        }))
        .toJS();
    case SET_RECENT_MANUAL_PURCHASES:
      return Immutable.fromJS(state)
        .updateIn(['recentManuals'], () => payload)
        .toJS();
    case SET_RECENT_VIDEO_LECTURE_PURCHASES:
      return Immutable.fromJS(state)
        .updateIn(['recentVideoLectures'], () => payload)
        .toJS();
    case FETCH_PURCHASE_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', FETCH_PURCHASE_REQUEST, 'pending'], () => true)
        .toJS();
    case FETCH_PURCHASE_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_PURCHASE_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_PURCHASE_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_PURCHASE_REQUEST],
          () => payload.error,
        )
        .updateIn(['requests', FETCH_PURCHASE_REQUEST, 'pending'], () => false)
        .toJS();
    case FETCH_PURCHASED_VIDEOS_AND_PROJECTS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_PURCHASED_VIDEOS_AND_PROJECTS_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_PURCHASED_VIDEOS_AND_PROJECTS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_PURCHASED_VIDEOS_AND_PROJECTS_FAILURE],
          () => payload.error,
        )
        .updateIn(['requests', FETCH_PURCHASE_REQUEST, 'pending'], () => false)
        .toJS();
    case SET_PURCHASED_VIDEOS_AND_PROJECTS:
      return Immutable.fromJS(state)
        .updateIn(['purchasedVideosAndProjects'], () => payload.response)
        .updateIn(['requests', FETCH_PURCHASE_REQUEST, 'pending'], () => false)
        .toJS();
    default:
      return state;
  }
};
