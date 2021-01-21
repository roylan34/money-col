import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  SET_NEWS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from './actionType';

export const initialState = {
  newsList: [],
  requests: {},
};

export type NewsStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_NEWS:
      return Immutable.fromJS(state)
        .updateIn(['newsList'], () => payload)
        .toJS();

    case FETCH_NEWS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', FETCH_NEWS_REQUEST, 'pending'], () => true)
        .toJS();

    case FETCH_NEWS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_NEWS_REQUEST],
          () => payload.response,
        )
        .updateIn(['requests', FETCH_NEWS_REQUEST, 'pending'], () => false)
        .toJS();
    case FETCH_NEWS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', FETCH_NEWS_REQUEST], () => payload.error)
        .updateIn(['requests', FETCH_NEWS_REQUEST, 'pending'], () => false)
        .toJS();
    default:
      return state;
  }
};
