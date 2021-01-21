import { RootStateOrAny } from 'react-redux';
import { PaymentHistory } from '../../../domain/entities';
import { PendingPaymentData } from '../../templates/PendingPaymentTemplate/types';
import { getFormattedValues } from './utils';
import {
  SETTLE_PENDING_PAYMENT_REQUEST,
  FETCH_PAYMENT_HISTORIES_REQUEST,
} from '../../../redux/paymentHistory/actionType';

export type StateFromProps = {
  pendingPayments: Array<PendingPaymentData>;
  isSettlingPendingPayment: boolean;
  isFetchingPaymentHistories: boolean;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    paymentHistory: { paymentHistories, requests, hasPrevPage, hasNextPage },
  } = state;

  let pendingPayments: Array<PendingPaymentData> = [];
  Object.values(paymentHistories).forEach(paymentHistory => {
    const pendingPaymentItem = getFormattedValues(
      paymentHistory as PaymentHistory & {
        createdAt: string;
      },
    );

    pendingPayments.push(pendingPaymentItem);
  });

  const isSettlingPendingPayment =
    requests &&
    requests[SETTLE_PENDING_PAYMENT_REQUEST] &&
    (requests[SETTLE_PENDING_PAYMENT_REQUEST].pending as boolean);

  const isFetchingPaymentHistories =
    requests &&
    requests[FETCH_PAYMENT_HISTORIES_REQUEST] &&
    (requests[FETCH_PAYMENT_HISTORIES_REQUEST].pending as boolean);

  return {
    pendingPayments,
    isSettlingPendingPayment,
    isFetchingPaymentHistories,
    hasPrevPage,
    hasNextPage,
  };
};
