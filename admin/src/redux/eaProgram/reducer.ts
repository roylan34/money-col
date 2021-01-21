import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  ADD_EA_PROGRAM_FAILURE,
  ADD_EA_PROGRAM_REQUEST,
  ADD_EA_PROGRAM_SUCCESS,
  FETCH_EA_PROGRAMS_REQUEST,
  FETCH_EA_PROGRAMS_FAILURE,
  FETCH_EA_PROGRAMS_SUCCESS,
  UPDATE_EA_PROGRAM_REQUEST,
  UPDATE_EA_PROGRAM_FAILURE,
  UPDATE_EA_PROGRAM_SUCCESS,
  DELETE_EA_PROGRAMS_REQUEST,
  DELETE_EA_PROGRAMS_FAILURE,
  DELETE_EA_PROGRAMS_SUCCESS,
} from './actionType';
import { EAProgram } from '../../domain/entities';

export const initialState = {
  failedRequests: {},
  successfulRequests: {},
  eaPrograms: {},
  recommended: {},
};

export type EAProgramStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case ADD_EA_PROGRAM_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', ADD_EA_PROGRAM_REQUEST],
          () => payload.response,
        )
        .updateIn(['eaPrograms'], () => ({
          ...state.eaPrograms,
          ...payload.response.eaPrograms,
        }))
        .updateIn(['recommended'], () => ({
          ...state.recommended,
          ...payload.response.recommended,
        }))
        .toJS();
    case ADD_EA_PROGRAM_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', ADD_EA_PROGRAM_REQUEST],
          () => payload.error,
        )
        .toJS();
    case FETCH_EA_PROGRAMS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_EA_PROGRAMS_REQUEST],
          () => payload.response,
        )
        .updateIn(['eaPrograms'], () => payload.response.eaPrograms)
        .updateIn(['recommended'], () => payload.response.recommended)
        .toJS();
    case FETCH_EA_PROGRAMS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_EA_PROGRAMS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case UPDATE_EA_PROGRAM_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_EA_PROGRAM_REQUEST],
          () => payload.response,
        )
        .updateIn(['eaPrograms'], () => ({
          ...state.eaPrograms,
          ...payload.response.eaPrograms,
        }))
        .updateIn(['recommended'], () => payload.response.recommended)
        .toJS();
    case UPDATE_EA_PROGRAM_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_EA_PROGRAM_REQUEST],
          () => payload.error,
        )
        .toJS();
    case DELETE_EA_PROGRAMS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', DELETE_EA_PROGRAMS_REQUEST],
          () => payload.response,
        )
        .updateIn(['eaPrograms'], () => {
          const ids = payload.response as Array<string>;
          let eaPrograms = Object.assign({}, state.eaPrograms);

          ids.forEach(id => {
            const { [id]: omit, ...rest } = eaPrograms;
            eaPrograms = rest;
          });
          return eaPrograms;
        })
        .updateIn(['recommended'], () => {
          const ids = payload.response as Array<string>;
          let recommended = Object.assign({}, state.recommended) as {
            [key: string]: EAProgram;
          };

          Object.values(recommended).forEach((value, index) => {
            const eaProgram = value as EAProgram;
            if (ids.indexOf(eaProgram.id) >= 0) {
              const { [index]: omit, ...rest } = recommended;
              recommended = rest;
            }
          });

          return recommended;
        })
        .toJS();
    case DELETE_EA_PROGRAMS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', DELETE_EA_PROGRAMS_REQUEST],
          () => payload.error,
        )
        .toJS();
    default:
      return state;
  }
};
