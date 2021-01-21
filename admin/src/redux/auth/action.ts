import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SET_IS_AUTHENTICATED,
  SET_TOKEN,
  SET_EMAIL_VERIFIED,
  SET_USER_ID,
  UPDATE_DEF_PASSWORD_REQUEST,
  UPDATE_DEF_PASSWORD_SUCCESS,
  UPDATE_DEF_PASSWORD_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
} from './actionType';
import { AnyAction } from 'redux';
import { UserRoles } from '../../domain/entities/';

export const signIn = (
  email: string,
  password: string,
  saveLoginStatus: boolean,
): AnyAction => ({
  type: SIGN_IN_REQUEST,
  payload: {
    email,
    password,
    saveLoginStatus,
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

export const updateDefPassword = (password: string, id: string): AnyAction => ({
  type: UPDATE_DEF_PASSWORD_REQUEST,
  payload: { password, id },
});

export const updatePasswordSuccess = (response: Object): AnyAction => ({
  type: UPDATE_DEF_PASSWORD_SUCCESS,
  payload: { response },
});

export const updatePasswordFailure = (error: Error | string): AnyAction => ({
  type: UPDATE_DEF_PASSWORD_FAILURE,
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

export const setEmailVerified = (emailVerified: boolean): AnyAction => ({
  type: SET_EMAIL_VERIFIED,
  payload: { emailVerified },
});

export const setUserId = (id: string): AnyAction => ({
  type: SET_USER_ID,
  payload: { id },
});

export const signUpUser = (
  userData: {
    name: {
      firstName: string;
      lastName: string;
    };
    email: string;
  },
  accessType: UserRoles,
): AnyAction => ({
  type: REGISTER_USER_REQUEST,
  payload: { userData, accessType },
});

export const signUpUserSuccess = (response: Object): AnyAction => ({
  type: REGISTER_USER_SUCCESS,
  payload: { response },
});

export const signUpUserFailure = (error: Error | string): AnyAction => ({
  type: REGISTER_USER_FAILURE,
  payload: { error },
});
