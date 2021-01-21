import { AnyAction } from 'redux';
import {
  FETCH_PAYMENT_HISTORIES_REQUEST,
  FETCH_PAYMENT_HISTORIES_SUCCESS,
  FETCH_PAYMENT_HISTORIES_FAILURE,
  SETTLE_PENDING_PAYMENT_REQUEST,
  SETTLE_PENDING_PAYMENT_REQUEST_SUCCESS,
  SETTLE_PENDING_PAYMENT_REQUEST_FAILURE,
} from './actionType';

export const fetchPaymentHistories = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit: number;
  mode: 'prev' | 'next';
  orderBy?: string;
  sort?: 'desc' | 'asc';
  firstId: string;
  lastId: string;
}): AnyAction => ({
  type: FETCH_PAYMENT_HISTORIES_REQUEST,
  payload: { query },
});

export const fetchPaymentHistoriesSuccess = (response: Object): AnyAction => ({
  type: FETCH_PAYMENT_HISTORIES_SUCCESS,
  payload: { response },
});

export const fetchPaymentHistoriesFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_PAYMENT_HISTORIES_FAILURE,
  payload: { error },
});

export const settlePendingPayment = (
  pendingId: string,
  userId: string,
  email: string,
): AnyAction => ({
  type: SETTLE_PENDING_PAYMENT_REQUEST,
  payload: { pendingId, userId, email },
});

export const settlePendingPaymentSuccess = (response: Object): AnyAction => ({
  type: SETTLE_PENDING_PAYMENT_REQUEST_SUCCESS,
  payload: { response },
});

export const settlePendingPaymentFailure = (
  error: Error | string,
): AnyAction => ({
  type: SETTLE_PENDING_PAYMENT_REQUEST_FAILURE,
  payload: { error },
});
