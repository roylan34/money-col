import { AnyAction } from 'redux';
import {
  FETCH_RECOMMENDED_MANUALS_REQUEST,
  FETCH_RECOMMENDED_MANUALS_FAILURE,
  FETCH_RECOMMENDED_MANUALS_SUCCESS,
  SET_MANUAL_DATA,
  SET_RECOMMENDED_MANUALS,
  FETCH_LAST_BOUGHT_MANUALS_REQUEST,
  FETCH_LAST_BOUGHT_MANUALS_SUCCESS,
  FETCH_LAST_BOUGHT_MANUALS_FAILURE,
  SET_LAST_BOUGHT_MANUALS,
  FETCH_MANUALS_REQUEST,
  FETCH_MANUALS_FAILURE,
  FETCH_MANUALS_SUCCESS,
} from './actionType';
import { Manual } from '../../domain/entities';

export const fetchManuals = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => ({
  type: FETCH_MANUALS_REQUEST,
  payload: { query },
});

export const fetchManualsSuccess = (response: Object): AnyAction => ({
  type: FETCH_MANUALS_SUCCESS,
  payload: { response },
});

export const fetchManualsFailure = (error: Error | string): AnyAction => ({
  type: FETCH_MANUALS_FAILURE,
  payload: { error },
});

export const fetchRecommendedManuals = (): AnyAction => ({
  type: FETCH_RECOMMENDED_MANUALS_REQUEST,
});

export const fetchRecommendedManualsSuccess = (
  response: Object,
): AnyAction => ({
  type: FETCH_RECOMMENDED_MANUALS_SUCCESS,
  payload: { response },
});

export const fetchRecommendedManualsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_RECOMMENDED_MANUALS_FAILURE,
  payload: { error },
});

export const setManualData = (manualData: {
  [key: string]: Manual;
}): AnyAction => ({
  type: SET_MANUAL_DATA,
  payload: manualData,
});

export const setRecommendedManualIds = (
  recommendedManualIds: Array<string>,
): AnyAction => ({
  type: SET_RECOMMENDED_MANUALS,
  payload: recommendedManualIds,
});

export const fetchLastBoughtManuals = (keys: Array<string>): AnyAction => ({
  type: FETCH_LAST_BOUGHT_MANUALS_REQUEST,
  payload: { keys },
});

export const fetchLastBoughtManualsSuccess = (response: Object): AnyAction => ({
  type: FETCH_LAST_BOUGHT_MANUALS_SUCCESS,
  payload: { response },
});

export const fetchLastBoughtManualsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_LAST_BOUGHT_MANUALS_FAILURE,
  payload: { error },
});

export const setLastBoughtManuals = (
  lastBoughtManuals: Array<Manual>,
): AnyAction => ({
  type: SET_LAST_BOUGHT_MANUALS,
  payload: lastBoughtManuals,
});
