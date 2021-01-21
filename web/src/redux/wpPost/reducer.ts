import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  FETCH_POSTS_BY_SLUG_FAILURE,
  FETCH_POSTS_BY_SLUG_REQUEST,
  FETCH_POSTS_BY_SLUG_SUCCESS,
  SET_POST,
} from './actionType';

export const initialState = {
  posts: {},
};

export type WPPostStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_POST:
      return Immutable.fromJS(state)
        .updateIn(['posts'], () => payload)
        .toJS();
    case FETCH_POSTS_BY_SLUG_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_POSTS_BY_SLUG_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_POSTS_BY_SLUG_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_POSTS_BY_SLUG_REQUEST],
          () => payload.error,
        )
        .toJS();
    default:
      return state;
  }
};
