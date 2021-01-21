import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SET_IS_AUTHENTICATED,
  SET_TOKEN,
  SET_EMAIL_VERIFIED,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  RESET_PASSWORD_LINK_REQUEST,
  RESET_PASSWORD_LINK_FAILURE,
  RESET_PASSWORD_LINK_SUCCESS,
  VERIFY_PASSWORD_OOBCODE_REQUEST,
  VERIFY_PASSWORD_OOBCODE_FAILURE,
  VERIFY_PASSWORD_OOBCODE_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  RECOVER_EMAIL_REQUEST,
  RECOVER_EMAIL_FAILURE,
  RECOVER_EMAIL_SUCCESS,
} from './actionType';
import { AnyAction } from 'redux';

export const signIn = (email: string, password: string): AnyAction => ({
  type: SIGN_IN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const signInSuccess = (response: Object): AnyAction => ({
  type: SIGN_IN_SUCCESS,
  payload: { response },
});

export const signInFailure = (error: Error | string): AnyAction => ({
  type: SIGN_IN_FAILURE,
  payload: { error },
});

export const signUp = (
  email: string,
  password: string,
  lastName: string,
  firstName: string,
  subscribedToMailingList: boolean,
): AnyAction => ({
  type: SIGN_UP_REQUEST,
  payload: {
    email,
    password,
    lastName,
    firstName,
    subscribedToMailingList,
  },
});

export const signUpSuccess = (response: Object): AnyAction => ({
  type: SIGN_UP_SUCCESS,
  payload: { response },
});

export const signUpFailure = (error: Error | string): AnyAction => ({
  type: SIGN_UP_FAILURE,
  payload: { error },
});

export const signOut = (): AnyAction => ({
  type: SIGN_OUT_REQUEST,
});

export const signOutSuccess = (): AnyAction => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: Error | string): AnyAction => ({
  type: SIGN_OUT_FAILURE,
  payload: { error },
});

export const setIsAuthenticated = (
  isAuthenticated: boolean = true,
): AnyAction => ({
  type: SET_IS_AUTHENTICATED,
  payload: { isAuthenticated },
});

export const setToken = (token: string): AnyAction => ({
  type: SET_TOKEN,
  payload: { token },
});

export const verifyEmail = (oobCode: string): AnyAction => ({
  type: VERIFY_EMAIL_REQUEST,
  payload: { oobCode },
});

export const verifyEmailSuccess = (response: Object): AnyAction => ({
  type: VERIFY_EMAIL_SUCCESS,
  payload: { response },
});

export const verifyEmailFailure = (error: Error | string): AnyAction => ({
  type: VERIFY_EMAIL_FAILURE,
  payload: { error },
});

export const setEmailVerified = (emailVerified: boolean): AnyAction => ({
  type: SET_EMAIL_VERIFIED,
  payload: { emailVerified },
});

export const getResetPasswordLink = (email: string): AnyAction => ({
  type: RESET_PASSWORD_LINK_REQUEST,
  payload: {
    email,
  },
});

export const getResetPasswordLinkSuccess = (response: Object): AnyAction => ({
  type: RESET_PASSWORD_LINK_SUCCESS,
  payload: { response },
});

export const getResetPasswordLinkFailure = (
  error: Error | string,
): AnyAction => ({
  type: RESET_PASSWORD_LINK_FAILURE,
  payload: { error },
});

export const verifyPasswordOobCode = (oobCode: string): AnyAction => ({
  type: VERIFY_PASSWORD_OOBCODE_REQUEST,
  payload: {
    oobCode,
  },
});

export const verifyPasswordOobCodeSuccess = (response: Object): AnyAction => ({
  type: VERIFY_PASSWORD_OOBCODE_SUCCESS,
  payload: { response },
});

export const verifyPasswordOobCodeFailure = (
  error: Error | string,
): AnyAction => ({
  type: VERIFY_PASSWORD_OOBCODE_FAILURE,
  payload: { error },
});

export const resetPassword = (
  oobCode: string,
  password: string,
): AnyAction => ({
  type: RESET_PASSWORD_REQUEST,
  payload: {
    oobCode,
    password,
  },
});

export const resetPasswordSuccess = (response: Object): AnyAction => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: { response },
});

export const resetPasswordFailure = (error: Error | string): AnyAction => ({
  type: RESET_PASSWORD_FAILURE,
  payload: { error },
});

export const recoverEmail = (oobCode: string): AnyAction => ({
  type: RECOVER_EMAIL_REQUEST,
  payload: {
    oobCode,
  },
});

export const recoverEmailSuccess = (response: Object): AnyAction => ({
  type: RECOVER_EMAIL_SUCCESS,
  payload: { response },
});

export const recoverEmailFailure = (error: Error | string): AnyAction => ({
  type: RECOVER_EMAIL_FAILURE,
  payload: { error },
});
