import Immutable from 'immutable';

import {
  SET_IS_AUTHENTICATED,
  SET_TOKEN,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SET_EMAIL_VERIFIED,
  SET_USER_ID,
  UPDATE_DEF_PASSWORD_REQUEST,
  UPDATE_DEF_PASSWORD_SUCCESS,
  UPDATE_DEF_PASSWORD_FAILURE,
} from './actionType';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

export const initialState = {
  id: '',
  authenticated: false,
  emailVerified: false,
  token: '',
  succeededRequests: {},
  failedRequests: {},
  requests: {},
};

export type AuthStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;
  switch (type) {
    case SET_IS_AUTHENTICATED:
      return Immutable.fromJS(state)
        .updateIn(['authenticated'], () => payload.isAuthenticated)
        .toJS();
    case SET_TOKEN:
      return Immutable.fromJS(state)
        .updateIn(['token'], () => payload.token)
        .toJS();
    case SIGN_IN_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', SIGN_IN_REQUEST, 'pending'], () => true)
        .toJS();
    case SIGN_IN_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['succeededRequests', SIGN_IN_REQUEST],
          () => payload.response,
        )
        .updateIn(['requests', SIGN_IN_REQUEST, 'pending'], () => false)
        .toJS();
    case SIGN_IN_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', SIGN_IN_REQUEST], () => payload.error)
        .updateIn(['requests', SIGN_IN_REQUEST, 'pending'], () => false)
        .toJS();
    case SIGN_OUT_SUCCESS:
      return Immutable.fromJS(state)
        .merge(state, initialState)
        .toJS();
    case SIGN_OUT_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', SIGN_OUT_REQUEST], () => payload.error)
        .toJS();
    case SET_EMAIL_VERIFIED:
      return Immutable.fromJS(state)
        .updateIn(['emailVerified'], () => payload.emailVerified)
        .toJS();
    case SET_USER_ID:
      return Immutable.fromJS(state)
        .updateIn(['id'], () => payload.id)
        .toJS();
    case UPDATE_DEF_PASSWORD_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['succeededRequests', UPDATE_DEF_PASSWORD_REQUEST],
          () => payload.response,
        )
        .toJS();
    case UPDATE_DEF_PASSWORD_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_DEF_PASSWORD_FAILURE],
          () => payload.error,
        )
        .toJS();
    default:
      return state;
  }
};
