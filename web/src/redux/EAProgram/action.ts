import { AnyAction } from 'redux';
import {
  FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST,
  FETCH_RECOMMENDED_EA_PROGRAMS_FAILURE,
  FETCH_RECOMMENDED_EA_PROGRAMS_SUCCESS,
  SET_EA_PROGRAM_DATA,
  SET_RECOMMENDED_EA_PROGRAMS,
  FETCH_LAST_BOUGHT_EA_PROGRAMS_REQUEST,
  FETCH_LAST_BOUGHT_EA_PROGRAMS_SUCCESS,
  FETCH_LAST_BOUGHT_EA_PROGRAMS_FAILURE,
  SET_LAST_BOUGHT_EA_PROGRAMS,
  FETCH_EA_PROGRAMS_REQUEST,
  FETCH_EA_PROGRAMS_FAILURE,
  FETCH_EA_PROGRAMS_SUCCESS,
} from './actionType';
import { EAProgram } from '../../domain/entities';

export const fetchEAPrograms = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => ({
  type: FETCH_EA_PROGRAMS_REQUEST,
  payload: { query },
});

export const fetchEAProgramsSuccess = (response: Object): AnyAction => ({
  type: FETCH_EA_PROGRAMS_SUCCESS,
  payload: { response },
});

export const fetchEAProgramsFailure = (error: Error | string): AnyAction => ({
  type: FETCH_EA_PROGRAMS_FAILURE,
  payload: { error },
});

export const fetchRecommendedEAPrograms = (): AnyAction => ({
  type: FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST,
});

export const fetchRecommendedEAProgramsSuccess = (
  response: Object,
): AnyAction => ({
  type: FETCH_RECOMMENDED_EA_PROGRAMS_SUCCESS,
  payload: { response },
});

export const fetchRecommendedEAProgramsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_RECOMMENDED_EA_PROGRAMS_FAILURE,
  payload: { error },
});

export const setEAProgramData = (EAProgramData: {
  [key: string]: EAProgram;
}): AnyAction => ({
  type: SET_EA_PROGRAM_DATA,
  payload: EAProgramData,
});

export const setRecommendedEAProgramIds = (
  recommendedEAProgramIds: Array<string>,
): AnyAction => ({
  type: SET_RECOMMENDED_EA_PROGRAMS,
  payload: recommendedEAProgramIds,
});

export const fetchLastBoughtEAPrograms = (keys: Array<string>): AnyAction => ({
  type: FETCH_LAST_BOUGHT_EA_PROGRAMS_REQUEST,
  payload: { keys },
});

export const fetchLastBoughtEAProgramsSuccess = (
  response: Object,
): AnyAction => ({
  type: FETCH_LAST_BOUGHT_EA_PROGRAMS_SUCCESS,
  payload: { response },
});

export const fetchLastBoughtEAProgramsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_LAST_BOUGHT_EA_PROGRAMS_FAILURE,
  payload: { error },
});

export const setLastBoughtEAPrograms = (
  lastBoughtEAPrograms: Array<EAProgram>,
): AnyAction => ({
  type: SET_LAST_BOUGHT_EA_PROGRAMS,
  payload: lastBoughtEAPrograms,
});
