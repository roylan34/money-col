/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  addEAProgramFailure,
  addEAProgramSuccess,
  fetchEAProgramsFailure,
  fetchEAProgramsSuccess,
  updateEAProgramSuccess,
  updateEAProgramFailure,
  deleteEAProgramsFailure,
  deleteEAProgramsSuccess,
} from './action';
import {
  ADD_EA_PROGRAM_REQUEST,
  FETCH_EA_PROGRAMS_REQUEST,
  UPDATE_EA_PROGRAM_REQUEST,
  DELETE_EA_PROGRAMS_REQUEST,
} from './actionType';

export const addEAProgramEpic = (
  action$,
  state$,
  { eaProgramInteractor: { addEAProgram }, utils: { arrayOfObjectsToObject } },
) =>
  action$.pipe(
    ofType(ADD_EA_PROGRAM_REQUEST),
    mergeMap(
      ({
        payload: { eaProgramParams, thumbnailParams, params, recommendedIds },
      }) => {
        return from(
          addEAProgram(
            eaProgramParams,
            thumbnailParams,
            params,
            recommendedIds,
          ),
        ).pipe(
          mergeMap(response => {
            const eaPrograms = arrayOfObjectsToObject(
              response.eaPrograms,
              'id',
            );
            const recommended = arrayOfObjectsToObject(
              response.recommended,
              'recommendedListIndex',
            );

            return [addEAProgramSuccess({ eaPrograms, recommended })];
          }),
          catchError(error => {
            return of(addEAProgramFailure(error));
          }),
        );
      },
    ),
  );

export const fetchEAProgramsEpic = (
  action$,
  state$,
  {
    eaProgramInteractor: { fetchEAProgramsWithRecommended },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(FETCH_EA_PROGRAMS_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchEAProgramsWithRecommended(query)).pipe(
        mergeMap(response => {
          const eaPrograms = arrayOfObjectsToObject(response.eaPrograms, 'id');
          const recommended = arrayOfObjectsToObject(
            response.recommended,
            'recommendedListIndex',
          );

          return [fetchEAProgramsSuccess({ eaPrograms, recommended })];
        }),
        catchError(error => {
          return of(fetchEAProgramsFailure(error));
        }),
      );
    }),
  );

export const updateEAProgramEpic = (
  action$,
  state$,
  {
    eaProgramInteractor: { updateEAProgram },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(UPDATE_EA_PROGRAM_REQUEST),
    mergeMap(({ payload: { id, thumbnailParams, params, recommendedIds } }) => {
      return from(
        updateEAProgram(id, params, thumbnailParams, recommendedIds),
      ).pipe(
        mergeMap(response => {
          const eaPrograms = arrayOfObjectsToObject(response.eaPrograms, 'id');
          const recommended = arrayOfObjectsToObject(
            response.recommended,
            'recommendedListIndex',
          );

          return [updateEAProgramSuccess({ eaPrograms, recommended })];
        }),
        catchError(error => {
          return of(updateEAProgramFailure(error));
        }),
      );
    }),
  );

export const deleteEAProgramsEpic = (
  action$,
  state$,
  { eaProgramInteractor: { removeEAProgramsById } },
) =>
  action$.pipe(
    ofType(DELETE_EA_PROGRAMS_REQUEST),
    mergeMap(({ payload: { ids } }) => {
      return from(removeEAProgramsById(ids)).pipe(
        mergeMap(response => {
          return [deleteEAProgramsSuccess(response)];
        }),
        catchError(error => {
          return of(deleteEAProgramsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  addEAProgramEpic,
  fetchEAProgramsEpic,
  updateEAProgramEpic,
  deleteEAProgramsEpic,
);
