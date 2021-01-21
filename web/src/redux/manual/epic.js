/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  fetchRecommendedManualsSuccess,
  fetchRecommendedManualsFailure,
  setManualData,
  setRecommendedManualIds,
  setLastBoughtManuals,
  fetchLastBoughtManualsSuccess,
  fetchLastBoughtManualsFailure,
  fetchManualsSuccess,
  fetchManualsFailure,
} from './action';
import {
  FETCH_RECOMMENDED_MANUALS_REQUEST,
  FETCH_LAST_BOUGHT_MANUALS_REQUEST,
  FETCH_MANUALS_REQUEST,
} from './actionType';
import { arrayOfObjectsToObject } from '../../utils';

export const fetchRecommendedManualsEpic = (
  action$,
  state$,
  { manualInteractor: { fetchRecommendedManuals } },
) =>
  action$.pipe(
    ofType(FETCH_RECOMMENDED_MANUALS_REQUEST),
    mergeMap(() => {
      return from(fetchRecommendedManuals()).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            setManualData(responseObject),
            setRecommendedManualIds(response),
            fetchRecommendedManualsSuccess(response),
          ];
        }),
        catchError(error => {
          return of(fetchRecommendedManualsFailure(error));
        }),
      );
    }),
  );

export const fetchLastBoughtManualsEpic = (
  action$,
  state$,
  { manualInteractor: { fetchMultipleManualsById } },
) =>
  action$.pipe(
    ofType(FETCH_LAST_BOUGHT_MANUALS_REQUEST),
    mergeMap(({ payload: { keys } }) => {
      return from(fetchMultipleManualsById(keys)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            setManualData(responseObject),
            setLastBoughtManuals(response),
            fetchLastBoughtManualsSuccess(response),
          ];
        }),
        catchError(error => {
          return of(fetchLastBoughtManualsFailure(error));
        }),
      );
    }),
  );

export const fetchManualsEpic = (
  action$,
  state$,
  { manualInteractor: { fetchManuals } },
) =>
  action$.pipe(
    ofType(FETCH_MANUALS_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchManuals(query)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [setManualData(responseObject), fetchManualsSuccess(response)];
        }),
        catchError(error => {
          return of(fetchManualsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  fetchRecommendedManualsEpic,
  fetchLastBoughtManualsEpic,
  fetchManualsEpic,
);
