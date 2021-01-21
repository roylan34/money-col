import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_FAILURE,
  FETCH_INSTRUCTORS_SUCCESS,
  CREATE_INSTRUCTOR_FAILURE,
  CREATE_INSTRUCTOR_REQUEST,
  CREATE_INSTRUCTOR_SUCCESS,
  DELETE_INSTRUCTORS_REQUEST,
  DELETE_INSTRUCTORS_FAILURE,
  DELETE_INSTRUCTORS_SUCCESS,
  UPDATE_INSTRUCTOR_FAILURE,
  UPDATE_INSTRUCTOR_REQUEST,
  UPDATE_INSTRUCTOR_SUCCESS,
} from './actionType';

export const initialState = {
  failedRequests: {},
  successfulRequests: {},
  instructors: {},
};

export type InstructorsStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case FETCH_INSTRUCTORS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_INSTRUCTORS_REQUEST],
          () => payload.response,
        )
        .updateIn(['instructors'], () => payload.response)
        .toJS();
    case FETCH_INSTRUCTORS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_INSTRUCTORS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case CREATE_INSTRUCTOR_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', CREATE_INSTRUCTOR_REQUEST],
          () => payload.response,
        )
        .updateIn(['instructors', payload.response.id], () => payload.response)
        .toJS();
    case CREATE_INSTRUCTOR_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', CREATE_INSTRUCTOR_REQUEST],
          () => payload.error,
        )
        .toJS();
    case DELETE_INSTRUCTORS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', DELETE_INSTRUCTORS_REQUEST],
          () => payload.response,
        )
        .updateIn(['instructors'], () => {
          const ids = payload.response as Array<string>;
          let instructors = Object.assign({}, state.instructors);

          ids.forEach(id => {
            const { [id]: omit, ...rest } = instructors;
            instructors = rest;
          });
          return instructors;
        })
        .toJS();
    case DELETE_INSTRUCTORS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', DELETE_INSTRUCTORS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case UPDATE_INSTRUCTOR_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_INSTRUCTOR_REQUEST],
          () => payload.response,
        )
        .updateIn(['instructors', payload.response.id], () => payload.response)
        .toJS();
    case UPDATE_INSTRUCTOR_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_INSTRUCTOR_REQUEST],
          () => payload.error,
        )
        .toJS();
    default:
      return state;
  }
};
