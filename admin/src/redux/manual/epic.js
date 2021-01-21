/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  addManualFailure,
  addManualSuccess,
  fetchManualsFailure,
  fetchManualsSuccess,
  updateManualSuccess,
  updateManualFailure,
  deleteManualsFailure,
  deleteManualsSuccess,
} from './action';
import {
  ADD_MANUAL_REQUEST,
  FETCH_MANUALS_REQUEST,
  UPDATE_MANUAL_REQUEST,
  DELETE_MANUALS_REQUEST,
} from './actionType';

export const addManualEpic = (
  action$,
  state$,
  { manualInteractor: { addManual }, utils: { arrayOfObjectsToObject } },
) =>
  action$.pipe(
    ofType(ADD_MANUAL_REQUEST),
    mergeMap(({ payload: { manualParams, thumbnailParams, params } }) => {
      return from(addManual(manualParams, thumbnailParams, params)).pipe(
        mergeMap(response => {
          return [addManualSuccess(response)];
        }),
        catchError(error => {
          return of(addManualFailure(error));
        }),
      );
    }),
  );

export const fetchManualsEpic = (
  action$,
  state$,
  { manualInteractor: { fetchManuals }, utils: { arrayOfObjectsToObject } },
) =>
  action$.pipe(
    ofType(FETCH_MANUALS_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchManuals(query)).pipe(
        mergeMap(response => {
          const manuals = arrayOfObjectsToObject(response, 'id');

          return [fetchManualsSuccess(manuals)];
        }),
        catchError(error => {
          return of(fetchManualsFailure(error));
        }),
      );
    }),
  );

export const updateManualEpic = (
  action$,
  state$,
  { manualInteractor: { updateManual }, utils: { arrayOfObjectsToObject } },
) =>
  action$.pipe(
    ofType(UPDATE_MANUAL_REQUEST),
    mergeMap(({ payload: { id, thumbnailParams, params } }) => {
      return from(updateManual(id, params, thumbnailParams)).pipe(
        mergeMap(response => {
          return [updateManualSuccess(response)];
        }),
        catchError(error => {
          return of(updateManualFailure(error));
        }),
      );
    }),
  );

export const deleteManualsEpic = (
  action$,
  state$,
  { manualInteractor: { removeManualsById } },
) =>
  action$.pipe(
    ofType(DELETE_MANUALS_REQUEST),
    mergeMap(({ payload: { ids } }) => {
      return from(removeManualsById(ids)).pipe(
        mergeMap(response => {
          return [deleteManualsSuccess(response)];
        }),
        catchError(error => {
          return of(deleteManualsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  addManualEpic,
  fetchManualsEpic,
  updateManualEpic,
  deleteManualsEpic,
);
