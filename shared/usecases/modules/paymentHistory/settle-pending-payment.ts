import { PaymentHistory } from '../../../domain/entities';
import PaymentHistoryRepository from '../../ports/PaymentHistoryRepository';

export type settlePendingPaymentUseCase = (
  pendingId: string,
  userId: string,
  email: string,
) => Promise<PaymentHistory>;

export const buildSettlePendingPayment = (dependencies: {
  paymentHistoryRepo: PaymentHistoryRepository;
}): settlePendingPaymentUseCase => {
  const { paymentHistoryRepo } = dependencies;

  const settlePendingPayment: settlePendingPaymentUseCase = async (
    pendingId,
    userId,
    email,
  ) => {
    try {
      await paymentHistoryRepo.settlePendingPayment(pendingId, userId, email);

      return await paymentHistoryRepo.findById(pendingId);
    } catch (error) {
      throw error;
    }
  };

  return settlePendingPayment;
};
