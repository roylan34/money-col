/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  fetchRecommendedProjectContentsSuccess,
  fetchRecommendedProjectContentsFailure,
  setProjectContentData,
  setRecommendedProjectContentIds,
  fetchLastBoughtProjectContentsSuccess,
  fetchLastBoughtProjectContentsFailure,
  setLastBoughtProjectContents,
  fetchProjectContentsFailure,
  fetchProjectContentsSuccess,
} from './action';
import {
  FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST,
  FETCH_LAST_BOUGHT_PROJECT_CONTENTS_REQUEST,
  FETCH_PROJECT_CONTENTS_REQUEST,
} from './actionType';

export const fetchProjectContentsEpic = (
  action$,
  state$,
  {
    projectContentInteractor: { fetchProjectContents },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(FETCH_PROJECT_CONTENTS_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchProjectContents(query)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            fetchProjectContentsSuccess(response),
            setProjectContentData(responseObject),
          ];
        }),
        catchError(error => {
          return of(fetchProjectContentsFailure(error));
        }),
      );
    }),
  );

export const fetchRecommendedProjectContentsEpic = (
  action$,
  state$,
  {
    projectContentInteractor: { fetchRecommendedProjectContents },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST),
    mergeMap(() => {
      return from(fetchRecommendedProjectContents()).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            fetchRecommendedProjectContentsSuccess(response),
            setProjectContentData(responseObject),
            setRecommendedProjectContentIds(response),
          ];
        }),
        catchError(error => {
          return of(fetchRecommendedProjectContentsFailure(error));
        }),
      );
    }),
  );

export const fetchLastBoughtProjectContentsEpic = (
  action$,
  state$,
  {
    projectContentInteractor: { fetchMultipleProjectContentsById },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(FETCH_LAST_BOUGHT_PROJECT_CONTENTS_REQUEST),
    mergeMap(({ payload: { keys } }) => {
      return from(fetchMultipleProjectContentsById(keys)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            setProjectContentData(responseObject),
            setLastBoughtProjectContents(response),
            fetchLastBoughtProjectContentsSuccess(response),
          ];
        }),
        catchError(error => {
          return of(fetchLastBoughtProjectContentsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  fetchRecommendedProjectContentsEpic,
  fetchLastBoughtProjectContentsEpic,
  fetchProjectContentsEpic,
);
