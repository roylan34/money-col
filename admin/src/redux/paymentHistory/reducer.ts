import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  FETCH_PAYMENT_HISTORIES_REQUEST,
  FETCH_PAYMENT_HISTORIES_SUCCESS,
  FETCH_PAYMENT_HISTORIES_FAILURE,
  SETTLE_PENDING_PAYMENT_REQUEST,
  SETTLE_PENDING_PAYMENT_REQUEST_SUCCESS,
  SETTLE_PENDING_PAYMENT_REQUEST_FAILURE,
} from './actionType';

export const initialState = {
  successfulRequests: {},
  failedRequests: {},
  paymentHistories: {},
  requests: {},
  hasNextPage: false,
  hasPrevPage: false,
};

export type PaymentHistoryStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case FETCH_PAYMENT_HISTORIES_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', FETCH_PAYMENT_HISTORIES_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case FETCH_PAYMENT_HISTORIES_SUCCESS:
      console.log('Payload Response:', payload.response);
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', FETCH_PAYMENT_HISTORIES_REQUEST],
          () => payload.response,
        )
        .updateIn(['paymentHistories'], () => payload.response.paymentHistories)
        .updateIn(['hasNextPage'], () => payload.response.hasNextPage)
        .updateIn(['hasPrevPage'], () => payload.response.hasPrevPage)
        .updateIn(
          ['requests', FETCH_PAYMENT_HISTORIES_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case FETCH_PAYMENT_HISTORIES_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', FETCH_PAYMENT_HISTORIES_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', FETCH_PAYMENT_HISTORIES_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case SETTLE_PENDING_PAYMENT_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', SETTLE_PENDING_PAYMENT_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case SETTLE_PENDING_PAYMENT_REQUEST_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', SETTLE_PENDING_PAYMENT_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['requests', SETTLE_PENDING_PAYMENT_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case SETTLE_PENDING_PAYMENT_REQUEST_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', SETTLE_PENDING_PAYMENT_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', SETTLE_PENDING_PAYMENT_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    default:
      return state;
  }
};
