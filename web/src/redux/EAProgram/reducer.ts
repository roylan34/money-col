import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST,
  FETCH_RECOMMENDED_EA_PROGRAMS_FAILURE,
  FETCH_RECOMMENDED_EA_PROGRAMS_SUCCESS,
  SET_RECOMMENDED_EA_PROGRAMS,
  SET_EA_PROGRAM_DATA,
  SET_LAST_BOUGHT_EA_PROGRAMS,
  FETCH_LAST_BOUGHT_EA_PROGRAMS_FAILURE,
  FETCH_LAST_BOUGHT_EA_PROGRAMS_REQUEST,
  FETCH_LAST_BOUGHT_EA_PROGRAMS_SUCCESS,
  FETCH_EA_PROGRAMS_REQUEST,
  FETCH_EA_PROGRAMS_FAILURE,
  FETCH_EA_PROGRAMS_SUCCESS,
} from './actionType';

export const initialState = {
  recommendedEAPrograms: [],
  recentlyBought: [],
  EAPrograms: {},
  requests: {},
};

export type EAProgramStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_EA_PROGRAM_DATA:
      return Immutable.fromJS(state)
        .updateIn(['EAPrograms'], () => payload)
        .toJS();
    case SET_RECOMMENDED_EA_PROGRAMS:
      return Immutable.fromJS(state)
        .updateIn(['recommendedEAPrograms'], () => payload)
        .toJS();
    case SET_LAST_BOUGHT_EA_PROGRAMS:
      return Immutable.fromJS(state)
        .updateIn(['recentlyBought'], () => payload)
        .toJS();
    case FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case FETCH_RECOMMENDED_EA_PROGRAMS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_RECOMMENDED_EA_PROGRAMS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_LAST_BOUGHT_EA_PROGRAMS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_LAST_BOUGHT_EA_PROGRAMS_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_LAST_BOUGHT_EA_PROGRAMS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_LAST_BOUGHT_EA_PROGRAMS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case FETCH_EA_PROGRAMS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', FETCH_EA_PROGRAMS_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case FETCH_EA_PROGRAMS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_EA_PROGRAMS_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', FETCH_EA_PROGRAMS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_EA_PROGRAMS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_EA_PROGRAMS_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', FETCH_EA_PROGRAMS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    default:
      return state;
  }
};
