import { AnyAction } from 'redux';
import { PaymentHistory } from '../../domain/entities';

import {
  UPDATE_PAYMENT_HISTORY_REQUEST,
  UPDATE_PAYMENT_HISTORY_FAILED,
  UPDATE_PAYMENT_HISTORY_SUCCESS,
} from './actionType';

export type PaymentHistoryStore = {
  payments: {
    [id: string]: PaymentHistory;
  };
};

export const initialState = {
  payments: {},
};

// export type PaymentHistoryStore = typeof initialState;

export default (
  state: PaymentHistoryStore = initialState,
  action: AnyAction,
): PaymentHistoryStore => {
  const { payload, type } = action;

  switch (type) {
    case UPDATE_PAYMENT_HISTORY_REQUEST:
    case UPDATE_PAYMENT_HISTORY_SUCCESS:
    case UPDATE_PAYMENT_HISTORY_FAILED:
      return {
        ...state,
        payments: {
          ...state.payments,
          [payload.id]: payload.paymentHistory,
        },
      };

    default:
      return state;
  }
};
