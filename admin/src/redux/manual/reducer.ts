import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  ADD_MANUAL_FAILURE,
  ADD_MANUAL_REQUEST,
  ADD_MANUAL_SUCCESS,
  FETCH_MANUALS_REQUEST,
  FETCH_MANUALS_FAILURE,
  FETCH_MANUALS_SUCCESS,
  UPDATE_MANUAL_REQUEST,
  UPDATE_MANUAL_FAILURE,
  UPDATE_MANUAL_SUCCESS,
  DELETE_MANUALS_REQUEST,
  DELETE_MANUALS_FAILURE,
  DELETE_MANUALS_SUCCESS,
} from './actionType';

export const initialState = {
  failedRequests: {},
  successfulRequests: {},
  manuals: {},
  recommended: {},
};

export type ManualStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case ADD_MANUAL_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', ADD_MANUAL_REQUEST],
          () => payload.response,
        )
        .updateIn(['manuals', payload.response.id], () => payload.response)
        .toJS();
    case ADD_MANUAL_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', ADD_MANUAL_REQUEST], () => payload.error)
        .toJS();
    case FETCH_MANUALS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_MANUALS_REQUEST],
          () => payload.response,
        )
        .updateIn(['manuals'], () => payload.response)
        .toJS();
    case FETCH_MANUALS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_MANUALS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case UPDATE_MANUAL_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_MANUAL_REQUEST],
          () => payload.response,
        )
        .updateIn(['manuals', payload.response.id], () => payload.response)
        .toJS();
    case UPDATE_MANUAL_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_MANUAL_REQUEST],
          () => payload.error,
        )
        .toJS();
    case DELETE_MANUALS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', DELETE_MANUALS_REQUEST],
          () => payload.response,
        )
        .updateIn(['manuals'], () => {
          const ids = payload.response as Array<string>;
          let manuals = Object.assign({}, state.manuals);

          ids.forEach(id => {
            const { [id]: omit, ...rest } = manuals;
            manuals = rest;
          });
          return manuals;
        })
        .toJS();
    case DELETE_MANUALS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', DELETE_MANUALS_REQUEST],
          () => payload.error,
        )
        .toJS();
    default:
      return state;
  }
};
