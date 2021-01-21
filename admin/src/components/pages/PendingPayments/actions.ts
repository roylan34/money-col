import { AnyAction } from 'redux';
import {
  fetchPaymentHistories,
  settlePendingPayment,
} from '../../../redux/paymentHistory/action';

export const fetchPendingPayments = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit: number;
  mode: 'prev' | 'next';
  orderBy?: string;
  sort?: 'desc' | 'asc';
  firstId: string;
  lastId: string;
}): AnyAction => {
  return fetchPaymentHistories(query);
};

export const completePendingTransaction = (
  pendingId: string,
  userId: string,
  email: string,
): AnyAction => {
  return settlePendingPayment(pendingId, userId, email);
};

export type DispatchFromProps = {
  fetchPendingPayments: typeof fetchPendingPayments;
  completePendingTransaction: typeof completePendingTransaction;
};
