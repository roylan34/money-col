import { AnyAction } from 'redux';
import {
  UPDATE_PAYMENT_HISTORY_REQUEST,
  UPDATE_PAYMENT_HISTORY_SUCCESS,
  UPDATE_PAYMENT_HISTORY_FAILED,
} from './actionType';
// import { PaymentHistory } from '../../domain/entities';

export const updatePaymentHistory = (
  id: string,
  params: {
    status: 'PENDING' | 'CANCELLED' | 'FAILED' | 'SUCCESS';
  },
): AnyAction => ({
  type: UPDATE_PAYMENT_HISTORY_REQUEST,
  payload: { id, params },
});

export const updatePaymentHistoryFailed = (
  id: string,
  params: {
    status: 'PENDING' | 'CANCELLED' | 'FAILED' | 'SUCCESS';
  },
): AnyAction => ({
  type: UPDATE_PAYMENT_HISTORY_FAILED,
  payload: { id, params },
});

export const updatePaymentHistorySuccess = (
  id: string,
  params: {
    status: 'PENDING' | 'CANCELLED' | 'FAILED' | 'SUCCESS';
  },
): AnyAction => ({
  type: UPDATE_PAYMENT_HISTORY_SUCCESS,
  payload: { id, params },
});
