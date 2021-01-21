/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  setToken,
  setEmailVerified,
  signInSuccess,
  signInFailure,
  setIsAuthenticated,
  signOutSuccess,
  setUserId,
  updatePasswordSuccess,
  updatePasswordFailure,
} from './action';
import { setUser } from '../user/action';
import {
  SIGN_IN_REQUEST,
  UPDATE_DEF_PASSWORD_REQUEST,
  SIGN_OUT_REQUEST,
} from './actionType';

const signInEpic = (action$, state$, { authInteractor: { signInUser } }) =>
  action$.pipe(
    ofType(SIGN_IN_REQUEST),
    mergeMap(({ payload: { email, password, saveLoginStatus } }) => {
      return from(signInUser(email, password, saveLoginStatus, true)).pipe(
        mergeMap(response => {
          const { token, emailVerified, id, user } = response;
          return [
            setEmailVerified(emailVerified),
            setToken(token),
            setIsAuthenticated(true),
            signInSuccess(response),
            setUserId(id),
            setUser(user),
          ];
        }),
        catchError(error => {
          return of(signInFailure(error));
        }),
      );
    }),
  );

const signOutEpic = (action$, state$, { authInteractor: { signOutUser } }) =>
  action$.pipe(
    ofType(SIGN_OUT_REQUEST),
    mergeMap(() => {
      return from(signOutUser()).pipe(
        mergeMap(() => {
          return [signOutSuccess()];
        }),
        catchError(error => {
          return of(signInFailure(error));
        }),
      );
    }),
  );

const updatePasswordEpic = (
  action$,
  state$,
  { authInteractor: { updateDefPass } },
) =>
  action$.pipe(
    ofType(UPDATE_DEF_PASSWORD_REQUEST),
    mergeMap(({ payload: { password, id } }) => {
      return from(updateDefPass(password, id)).pipe(
        mergeMap(response => {
          return [updatePasswordSuccess(response), setUser(response)];
        }),
        catchError(error => {
          return of(updatePasswordFailure(error));
        }),
      );
    }),
  );

export default combineEpics(signInEpic, updatePasswordEpic, signOutEpic);
