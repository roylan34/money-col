/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  fetchRecommendedEAProgramsSuccess,
  fetchRecommendedEAProgramsFailure,
  setEAProgramData,
  setRecommendedEAProgramIds,
  setLastBoughtEAPrograms,
  fetchLastBoughtEAProgramsSuccess,
  fetchLastBoughtEAProgramsFailure,
  fetchEAProgramsFailure,
  fetchEAProgramsSuccess,
} from './action';
import {
  FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST,
  FETCH_LAST_BOUGHT_EA_PROGRAMS_REQUEST,
  FETCH_EA_PROGRAMS_REQUEST,
} from './actionType';
import { arrayOfObjectsToObject } from '../../utils';

export const fetchRecommendedEAProgramsEpic = (
  action$,
  state$,
  { EAProgramInteractor: { fetchRecommendedEAPrograms } },
) =>
  action$.pipe(
    ofType(FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST),
    mergeMap(() => {
      return from(fetchRecommendedEAPrograms()).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            setEAProgramData(responseObject),
            setRecommendedEAProgramIds(response),
            fetchRecommendedEAProgramsSuccess(response),
          ];
        }),
        catchError(error => {
          return of(fetchRecommendedEAProgramsFailure(error));
        }),
      );
    }),
  );

export const fetchLastBoughtEAProgramsEpic = (
  action$,
  state$,
  { EAProgramInteractor: { fetchMultipleEAProgramsById } },
) =>
  action$.pipe(
    ofType(FETCH_LAST_BOUGHT_EA_PROGRAMS_REQUEST),
    mergeMap(({ payload: { keys } }) => {
      return from(fetchMultipleEAProgramsById(keys)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            setEAProgramData(responseObject),
            setLastBoughtEAPrograms(response),
            fetchLastBoughtEAProgramsSuccess(response),
          ];
        }),
        catchError(error => {
          return of(fetchLastBoughtEAProgramsFailure(error));
        }),
      );
    }),
  );

export const fetchEAProgramsEpic = (
  action$,
  state$,
  { EAProgramInteractor: { fetchEAPrograms } },
) =>
  action$.pipe(
    ofType(FETCH_EA_PROGRAMS_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchEAPrograms(query)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            setEAProgramData(responseObject),
            fetchEAProgramsSuccess(response),
          ];
        }),
        catchError(error => {
          return of(fetchEAProgramsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  fetchRecommendedEAProgramsEpic,
  fetchLastBoughtEAProgramsEpic,
  fetchEAProgramsEpic,
);
