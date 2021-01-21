import { AnyAction } from 'redux';
import {
  SET_USER,
  CLEAR_USER,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SET_LAST_LOG_IN_FAILURE,
  SET_LAST_LOG_IN_REQUEST,
  SET_LAST_LOG_IN_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_MAILBOX_SETTINGS_REQUEST,
  UPDATE_MAILBOX_SETTINGS_SUCCESS,
  UPDATE_MAILBOX_SETTINGS_FAILURE,
} from './actionType';
import { User } from '../../domain/entities';

export const setUser = (user: User): AnyAction => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = (): AnyAction => ({
  type: CLEAR_USER,
});

export const fetchUser = (id: string): AnyAction => ({
  type: FETCH_USER_REQUEST,
  payload: { id },
});

export const fetchUserSuccess = (response: Object): AnyAction => ({
  type: FETCH_USER_SUCCESS,
  payload: { response },
});

export const fetchUserFailure = (error: Error | string): AnyAction => ({
  type: FETCH_USER_FAILURE,
  payload: { error },
});

export const setLastLogIn = (
  id: string,
  params: {
    lastLogIn?: Date;
  },
): AnyAction => ({
  type: SET_LAST_LOG_IN_REQUEST,
  payload: { id, params },
});

export const setLastLogInSuccess = (response: Object): AnyAction => ({
  type: SET_LAST_LOG_IN_SUCCESS,
  payload: { response },
});

export const setLastLogInFailure = (error: Error | string): AnyAction => ({
  type: SET_LAST_LOG_IN_FAILURE,
  payload: { error },
});

export const updateUser = (
  id: string,
  params: {
    name?: { lastName: string; firstName: string };
    email?: string;
    photo?: File;
    mailBoxNotifSettings: {
      notifyRepliesWithEmail: boolean;
    };
  },
): AnyAction => ({
  type: UPDATE_USER_REQUEST,
  payload: { id, params },
});

export const updateUserSuccess = (response: Object): AnyAction => ({
  type: UPDATE_USER_SUCCESS,
  payload: { response },
});

export const updateUserFailure = (error: Error | string): AnyAction => ({
  type: UPDATE_USER_FAILURE,
  payload: { error },
});

export const updateMailboxSettings = (
  id: string,
  params: {
    mailBoxNotifSettings: {
      notifyRepliesWithEmail: boolean;
    };
  },
): AnyAction => ({
  type: UPDATE_MAILBOX_SETTINGS_REQUEST,
  payload: { id, params },
});

export const updateMailboxSettingsSuccess = (response: Object): AnyAction => ({
  type: UPDATE_MAILBOX_SETTINGS_SUCCESS,
  payload: { response },
});

export const updateMailboxSettingsFailure = (
  error: Error | string,
): AnyAction => ({
  type: UPDATE_MAILBOX_SETTINGS_FAILURE,
  payload: { error },
});
