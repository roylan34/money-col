import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  FETCH_RECOMMENDED_MANUALS_REQUEST,
  FETCH_RECOMMENDED_MANUALS_FAILURE,
  FETCH_RECOMMENDED_MANUALS_SUCCESS,
  SET_RECOMMENDED_MANUALS,
  SET_MANUAL_DATA,
  SET_LAST_BOUGHT_MANUALS,
  FETCH_LAST_BOUGHT_MANUALS_FAILURE,
  FETCH_LAST_BOUGHT_MANUALS_REQUEST,
  FETCH_LAST_BOUGHT_MANUALS_SUCCESS,
  FETCH_MANUALS_REQUEST,
  FETCH_MANUALS_FAILURE,
  FETCH_MANUALS_SUCCESS,
} from './actionType';

export const initialState = {
  recommendedManuals: [],
  recentlyBought: [],
  manuals: {},
  requests: {},
};

export type ManualStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_MANUAL_DATA:
      return Immutable.fromJS(state)
        .updateIn(['manuals'], () => payload)
        .toJS();
    case SET_RECOMMENDED_MANUALS:
      return Immutable.fromJS(state)
        .updateIn(['recommendedManuals'], () => payload)
        .toJS();
    case SET_LAST_BOUGHT_MANUALS:
      return Immutable.fromJS(state)
        .updateIn(['recentlyBought'], () => payload)
        .toJS();
    case FETCH_RECOMMENDED_MANUALS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_RECOMMENDED_MANUALS_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_RECOMMENDED_MANUALS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_RECOMMENDED_MANUALS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case FETCH_LAST_BOUGHT_MANUALS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_LAST_BOUGHT_MANUALS_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_LAST_BOUGHT_MANUALS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_LAST_BOUGHT_MANUALS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case FETCH_MANUALS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', FETCH_MANUALS_REQUEST, 'pending'], () => true)
        .toJS();
    case FETCH_MANUALS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_MANUALS_REQUEST],
          () => payload.response,
        )
        .updateIn(['requests', FETCH_MANUALS_REQUEST, 'pending'], () => false)
        .toJS();
    case FETCH_MANUALS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_MANUALS_REQUEST],
          () => payload.error,
        )
        .updateIn(['requests', FETCH_MANUALS_REQUEST, 'pending'], () => false)
        .toJS();
    default:
      return state;
  }
};
