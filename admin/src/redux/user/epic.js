/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  setUser,
  fetchUserSuccess,
  fetchUserFailure,
  setLastLogInFailure,
  setLastLogInSuccess,
  updateUserSuccess,
  updateUserFailure,
  updateMailboxSettingsSuccess,
  updateMailboxSettingsFailure,
} from './action';
import {
  FETCH_USER_REQUEST,
  SET_LAST_LOG_IN_REQUEST,
  UPDATE_USER_REQUEST,
  UPDATE_MAILBOX_SETTINGS_REQUEST,
} from './actionType';

export const fetchUserEpic = (
  action$,
  state$,
  { userInteractor: { fetchUser } },
) =>
  action$.pipe(
    ofType(FETCH_USER_REQUEST),
    mergeMap(({ payload: { id } }) => {
      return from(fetchUser({ id })).pipe(
        mergeMap(response => {
          return [setUser(response), fetchUserSuccess(response)];
        }),
        catchError(error => {
          return of(fetchUserFailure(error));
        }),
      );
    }),
  );

export const setLastLogInEpic = (
  action$,
  state$,
  { userInteractor: { updateUser } },
) =>
  action$.pipe(
    ofType(SET_LAST_LOG_IN_REQUEST),
    mergeMap(({ payload: { id, params } }) => {
      return from(updateUser(id, params)).pipe(
        mergeMap(response => {
          return [setUser(response), setLastLogInSuccess(response)];
        }),
        catchError(error => {
          return of(setLastLogInFailure(error));
        }),
      );
    }),
  );

export const updateUserEpic = (
  action$,
  state$,
  { userInteractor: { updateUser } },
) =>
  action$.pipe(
    ofType(UPDATE_USER_REQUEST),
    mergeMap(({ payload: { id, params } }) => {
      return from(updateUser(id, params)).pipe(
        mergeMap(response => {
          return [
            updateUserSuccess({
              ...response,
              timestamp: new Date().getTime(),
            }),
            setUser(response),
          ];
        }),
        catchError(error => {
          return of(
            updateUserFailure({ ...error, timestamp: new Date().getTime() }),
          );
        }),
      );
    }),
  );

export const updateMailboxSettingsEpic = (
  action$,
  state$,
  { userInteractor: { updateUser } },
) =>
  action$.pipe(
    ofType(UPDATE_MAILBOX_SETTINGS_REQUEST),
    mergeMap(({ payload: { id, params } }) => {
      return from(updateUser(id, params)).pipe(
        mergeMap(response => {
          return [setUser(response), updateMailboxSettingsSuccess(response)];
        }),
        catchError(error => {
          return of(updateMailboxSettingsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  fetchUserEpic,
  setLastLogInEpic,
  updateUserEpic,
  updateMailboxSettingsEpic,
);
