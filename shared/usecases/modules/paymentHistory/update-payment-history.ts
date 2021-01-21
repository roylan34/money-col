import PaymentHistoryRepository from '../../ports/PaymentHistoryRepository';

export type updatePaymentHistoryUseCase = (
  id: string,
  data: { status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' },
) => Promise<void>;

export const buildUpdatePaymentHistory = (dependencies: {
  paymentHistRepo: PaymentHistoryRepository;
}): updatePaymentHistoryUseCase => {
  const { paymentHistRepo } = dependencies;

  const updatePaymentHistoryPaypal: updatePaymentHistoryUseCase = async (
    id: string,
    data: { status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'CANCELLED' },
  ) => {
    await paymentHistRepo.update(id, data);
  };

  return updatePaymentHistoryPaypal;
};
