import PaymentHistoryRepository from '../../ports/PaymentHistoryRepository';

import {
  buildFetchPaymentHistories,
  fetchPaymentHistoriesUseCase,
} from './fetch-payment-histories';

import {
  buildSettlePendingPayment,
  settlePendingPaymentUseCase,
} from './settle-pending-payment';

import {
  buildCreatePaymentHistory,
  createPaymentHistoryUseCase,
} from './create-payment-history';

import {
  buildUpdatePaymentHistory,
  updatePaymentHistoryUseCase,
} from './update-payment-history';

export default (dependencies: {
  paymentHistoryRepo: PaymentHistoryRepository;
}): {
  fetchPaymentHistories: fetchPaymentHistoriesUseCase;
  settlePendingPayment: settlePendingPaymentUseCase;
  createPaymentHistory: createPaymentHistoryUseCase;
  updatePaymentHistory: updatePaymentHistoryUseCase;
} => {
  const { paymentHistoryRepo } = dependencies;

  const fetchPaymentHistories = buildFetchPaymentHistories({
    paymentHistoryRepo,
  });

  const settlePendingPayment = buildSettlePendingPayment({
    paymentHistoryRepo,
  });

  const createPaymentHistory = buildCreatePaymentHistory({
    paymentHistRepo: paymentHistoryRepo,
  });

  const updatePaymentHistory = buildUpdatePaymentHistory({
    paymentHistRepo: paymentHistoryRepo,
  });

  return {
    fetchPaymentHistories,
    settlePendingPayment,
    createPaymentHistory,
    updatePaymentHistory,
  };
};
