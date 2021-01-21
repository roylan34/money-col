/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  fetchInstructorsSuccess,
  fetchInstructorsFailure,
  createInstructorFailure,
  createInstructorSuccess,
  deleteInstructorsSuccess,
  deleteInstructorsFailure,
  updateInstructorFailure,
  updateInstructorSuccess,
} from './action';
import {
  FETCH_INSTRUCTORS_REQUEST,
  CREATE_INSTRUCTOR_REQUEST,
  DELETE_INSTRUCTORS_REQUEST,
  UPDATE_INSTRUCTOR_REQUEST,
} from './actionType';

export const fetchInstructorsEpic = (
  action$,
  state$,
  { userInteractor: { fetchInstructors }, utils: { arrayOfObjectsToObject } },
) =>
  action$.pipe(
    ofType(FETCH_INSTRUCTORS_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchInstructors(query)).pipe(
        mergeMap(response => {
          const instructors = arrayOfObjectsToObject(response, 'id');

          return [fetchInstructorsSuccess(instructors)];
        }),
        catchError(error => {
          return of(fetchInstructorsFailure(error));
        }),
      );
    }),
  );

export const createInstructorEpic = (
  action$,
  state$,
  { userInteractor: { createInstructor }, utils: { arrayOfObjectsToObject } },
) =>
  action$.pipe(
    ofType(CREATE_INSTRUCTOR_REQUEST),
    mergeMap(({ payload: { params } }) => {
      return from(createInstructor(params)).pipe(
        mergeMap(response => {
          return [createInstructorSuccess(response)];
        }),
        catchError(error => {
          return of(createInstructorFailure(error));
        }),
      );
    }),
  );

export const deleteInstructorsEpic = (
  action$,
  state$,
  { userInteractor: { removeInstructorsById } },
) =>
  action$.pipe(
    ofType(DELETE_INSTRUCTORS_REQUEST),
    mergeMap(({ payload: { ids } }) => {
      return from(removeInstructorsById(ids)).pipe(
        mergeMap(response => {
          return [deleteInstructorsSuccess(response)];
        }),
        catchError(error => {
          return of(deleteInstructorsFailure(error));
        }),
      );
    }),
  );

export const updateInstructorEpic = (
  action$,
  state$,
  { userInteractor: { updateInstructor } },
) =>
  action$.pipe(
    ofType(UPDATE_INSTRUCTOR_REQUEST),
    mergeMap(({ payload: { id, params } }) => {
      return from(updateInstructor(id, params)).pipe(
        mergeMap(response => {
          return [updateInstructorSuccess(response)];
        }),
        catchError(error => {
          return of(updateInstructorFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  fetchInstructorsEpic,
  createInstructorEpic,
  deleteInstructorsEpic,
  updateInstructorEpic,
);
