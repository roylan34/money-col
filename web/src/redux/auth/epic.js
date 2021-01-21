/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  setToken,
  setEmailVerified,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  verifyEmailSuccess,
  verifyEmailFailure,
  setIsAuthenticated,
  signOutSuccess,
  getResetPasswordLinkFailure,
  getResetPasswordLinkSuccess,
  verifyPasswordOobCodeSuccess,
  verifyPasswordOobCodeFailure,
  resetPasswordSuccess,
  resetPasswordFailure,
  recoverEmailFailure,
  recoverEmailSuccess,
} from './action';
import { setUser, clearUser, claimGiveawaysSuccess } from '../user/action';
import {
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_OUT_REQUEST,
  VERIFY_EMAIL_REQUEST,
  RESET_PASSWORD_LINK_REQUEST,
  VERIFY_PASSWORD_OOBCODE_REQUEST,
  RESET_PASSWORD_REQUEST,
  RECOVER_EMAIL_REQUEST,
} from './actionType';

const signInEpic = (action$, state$, { authInteractor: { signInUser } }) =>
  action$.pipe(
    ofType(SIGN_IN_REQUEST),
    mergeMap(({ payload: { email, password } }) => {
      return from(signInUser(email, password)).pipe(
        mergeMap(response => {
          const { token, emailVerified, user } = response;
          const lastGiveawayPointsClaim =
            user.subscriberProfile.lastGiveawayPointsClaim;

          return [
            setUser(user),
            setEmailVerified(emailVerified),
            setToken(token),
            setIsAuthenticated(true),
            signInSuccess(response),
            claimGiveawaysSuccess({
              lastGiveawayPointsClaim,
              timeStamp: new Date().getTime(),
            }),
          ];
        }),
        catchError(error => {
          return of(signInFailure(error));
        }),
      );
    }),
  );

export const signUpEpic = (
  action$,
  state$,
  { authInteractor: { signUpUser } },
) =>
  action$.pipe(
    ofType(SIGN_UP_REQUEST),
    mergeMap(
      ({
        payload: {
          email,
          password,
          lastName,
          firstName,
          subscribedToMailingList,
        },
      }) => {
        return from(
          signUpUser(
            email,
            password,
            lastName,
            firstName,
            subscribedToMailingList,
          ),
        ).pipe(
          mergeMap(response => {
            return [signUpSuccess(response), setUser(response)];
          }),
          catchError(error => {
            return of(signUpFailure(error));
          }),
        );
      },
    ),
  );

const signOutEpic = (action$, state$, { authInteractor: { signOutUser } }) =>
  action$.pipe(
    ofType(SIGN_OUT_REQUEST),
    mergeMap(() => {
      return from(signOutUser()).pipe(
        mergeMap(() => {
          return [signOutSuccess(), clearUser()];
        }),
        catchError(error => {
          return of(signInFailure(error));
        }),
      );
    }),
  );

const verifyEmailEpic = (
  action$,
  state$,
  { authInteractor: { verifyEmail } },
) =>
  action$.pipe(
    ofType(VERIFY_EMAIL_REQUEST),
    mergeMap(({ payload: { oobCode } }) => {
      return from(verifyEmail(oobCode)).pipe(
        mergeMap(response => {
          return [
            verifyEmailSuccess({
              ...response,
              message: 'Succesfully verified email address.',
            }),
            setEmailVerified(true),
          ];
        }),
        catchError(error => {
          return of(verifyEmailFailure(error));
        }),
      );
    }),
  );

const sendResetPasswordEmailEpic = (
  action$,
  state$,
  { authInteractor: { sendResetPasswordEmail } },
) =>
  action$.pipe(
    ofType(RESET_PASSWORD_LINK_REQUEST),
    mergeMap(({ payload: { email } }) => {
      return from(sendResetPasswordEmail(email)).pipe(
        mergeMap(response => {
          return [
            getResetPasswordLinkSuccess({
              ...response,
              message: `Successfully sent password reset link to ${email}.`,
            }),
          ];
        }),
        catchError(error => {
          return of(getResetPasswordLinkFailure(error));
        }),
      );
    }),
  );

const verifyPasswordResetOobCodeEpic = (
  action$,
  state$,
  { authInteractor: { verifyPasswordResetCode } },
) =>
  action$.pipe(
    ofType(VERIFY_PASSWORD_OOBCODE_REQUEST),
    mergeMap(({ payload: { oobCode } }) => {
      return from(verifyPasswordResetCode(oobCode)).pipe(
        mergeMap(response => {
          return [verifyPasswordOobCodeSuccess(response)];
        }),
        catchError(error => {
          return of(verifyPasswordOobCodeFailure(error));
        }),
      );
    }),
  );

const resetPasswordEpic = (
  action$,
  state$,
  { authInteractor: { confirmPasswordReset } },
) =>
  action$.pipe(
    ofType(RESET_PASSWORD_REQUEST),
    mergeMap(({ payload: { oobCode, password } }) => {
      return from(confirmPasswordReset(oobCode, password)).pipe(
        mergeMap(response => {
          return [
            resetPasswordSuccess({
              ...response,
              message: `Successfully reset password.`,
            }),
          ];
        }),
        catchError(error => {
          return of(resetPasswordFailure(error));
        }),
      );
    }),
  );

const recoverEmailEpic = (
  action$,
  state$,
  { authInteractor: { recoverEmail } },
) =>
  action$.pipe(
    ofType(RECOVER_EMAIL_REQUEST),
    mergeMap(({ payload: { oobCode } }) => {
      return from(recoverEmail(oobCode)).pipe(
        mergeMap(response => {
          return [
            setUser(response),
            recoverEmailSuccess({
              ...response,
              message: 'Succesfully recovered email address.',
            }),
          ];
        }),
        catchError(error => {
          return of(recoverEmailFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  signInEpic,
  signUpEpic,
  verifyEmailEpic,
  signOutEpic,
  sendResetPasswordEmailEpic,
  verifyPasswordResetOobCodeEpic,
  resetPasswordEpic,
  recoverEmailEpic,
);
