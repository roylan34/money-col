import Immutable from 'immutable';

import {
  SET_IS_AUTHENTICATED,
  SET_TOKEN,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SET_EMAIL_VERIFIED,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  VERIFY_EMAIL_REQUEST,
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
  RECOVER_EMAIL_SUCCESS,
  RECOVER_EMAIL_FAILURE,
} from './actionType';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

export const initialState = {
  authenticated: false,
  emailVerified: false,
  token: '',
  successfulRequests: {},
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
          ['successfulRequests', SIGN_IN_REQUEST],
          () => payload.response,
        )
        .updateIn(['requests', SIGN_IN_REQUEST, 'pending'], () => false)
        .toJS();
    case SIGN_IN_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', SIGN_IN_REQUEST], () => payload.error)
        .updateIn(['requests', SIGN_IN_REQUEST, 'pending'], () => false)
        .toJS();
    case SIGN_UP_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', SIGN_UP_REQUEST, 'pending'], () => true)
        .toJS();
    case SIGN_UP_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', SIGN_UP_REQUEST],
          () => payload.response,
        )
        .updateIn(['requests', SIGN_UP_REQUEST, 'pending'], () => false)
        .toJS();
    case SIGN_UP_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', SIGN_UP_REQUEST], () => payload.error)
        .updateIn(['requests', SIGN_UP_REQUEST, 'pending'], () => false)
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
    case VERIFY_EMAIL_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', VERIFY_EMAIL_REQUEST],
          () => payload.response,
        )
        .toJS();
    case VERIFY_EMAIL_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', VERIFY_EMAIL_REQUEST], () => payload.error)
        .toJS();
    case RESET_PASSWORD_LINK_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', RESET_PASSWORD_LINK_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case RESET_PASSWORD_LINK_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', RESET_PASSWORD_LINK_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', RESET_PASSWORD_LINK_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case RESET_PASSWORD_LINK_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', RESET_PASSWORD_LINK_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', RESET_PASSWORD_LINK_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case VERIFY_PASSWORD_OOBCODE_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', VERIFY_PASSWORD_OOBCODE_REQUEST],
          () => payload.response,
        )
        .toJS();
    case VERIFY_PASSWORD_OOBCODE_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', VERIFY_PASSWORD_OOBCODE_REQUEST],
          () => payload.error,
        )
        .toJS();
    case RESET_PASSWORD_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(['requests', RESET_PASSWORD_REQUEST, 'pending'], () => true)
        .toJS();
    case RESET_PASSWORD_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', RESET_PASSWORD_REQUEST],
          () => payload.response,
        )
        .updateIn(['requests', RESET_PASSWORD_REQUEST, 'pending'], () => false)
        .toJS();
    case RESET_PASSWORD_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', RESET_PASSWORD_REQUEST],
          () => payload.error,
        )
        .updateIn(['requests', RESET_PASSWORD_REQUEST, 'pending'], () => false)
        .toJS();
    case RECOVER_EMAIL_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', RECOVER_EMAIL_REQUEST],
          () => payload.response,
        )
        .toJS();
    case RECOVER_EMAIL_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', RECOVER_EMAIL_REQUEST],
          () => payload.error,
        )
        .toJS();
    default:
      return state;
  }
};
