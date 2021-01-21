import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
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

export const initialState = {
  id: '',
  email: '',
  hasUpdatedDefaultPassword: false,
  roles: {
    lecturer: false,
    subscriber: false,
    admin: false,
  },
  createdAt: '',
  updatedAt: '',
  successfulRequests: {},
  failedRequests: {},
  mailBoxNotifSettings: {
    displaySendConfirmation: '',
    notifyRepliesWithEmail: '',
  },
  requests: {},
};

export type UserStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case SET_USER:
      return Immutable.fromJS(state)
        .mergeDeep(state, payload)
        .toJS();
    case CLEAR_USER:
      return Immutable.fromJS(state)
        .merge(state, initialState)
        .toJS();
    case FETCH_USER_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_USER_REQUEST],
          () => payload.response,
        )
        .toJS();
    case FETCH_USER_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', FETCH_USER_REQUEST], () => payload.error)
        .toJS();
    case SET_LAST_LOG_IN_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', SET_LAST_LOG_IN_REQUEST],
          () => payload.response,
        )
        .toJS();
    case SET_LAST_LOG_IN_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', SET_LAST_LOG_IN_REQUEST],
          () => payload.error,
        )
        .toJS();
    case UPDATE_USER_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', UPDATE_USER_REQUEST, 'pending'], () => true)
        .toJS();
    case UPDATE_USER_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_USER_REQUEST],
          () => payload.response,
        )
        .updateIn(['requests', UPDATE_USER_REQUEST, 'pending'], () => false)
        .toJS();
    case UPDATE_USER_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', UPDATE_USER_REQUEST], () => payload.error)
        .updateIn(['requests', UPDATE_USER_REQUEST, 'pending'], () => false)
        .toJS();
    case UPDATE_MAILBOX_SETTINGS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', UPDATE_MAILBOX_SETTINGS_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case UPDATE_MAILBOX_SETTINGS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_MAILBOX_SETTINGS_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', UPDATE_MAILBOX_SETTINGS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case UPDATE_MAILBOX_SETTINGS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_MAILBOX_SETTINGS_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', UPDATE_MAILBOX_SETTINGS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();

    default:
      return state;
  }
};
