import { PaymentHistory } from '../../../domain/entities/paymentHistory';
import PaymentHistoryRepository from '../../ports/PaymentHistoryRepository';

export type fetchPaymentHistoriesUseCase = (query: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit: number;
  mode: 'prev' | 'next';
  orderBy?: string;
  sort?: 'desc' | 'asc';
  firstId: string;
  lastId: string;
}) => Promise<{
  paymentHistories: PaymentHistory[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
}>;

export const buildFetchPaymentHistories = (dependencies: {
  paymentHistoryRepo: PaymentHistoryRepository;
}): fetchPaymentHistoriesUseCase => {
  const { paymentHistoryRepo } = dependencies;

  const fetchPaymentHistories: fetchPaymentHistoriesUseCase = async (query) => {
    try {
      const {
        data: paymentHistories,
        hasNextPage,
        hasPrevPage,
      } = await paymentHistoryRepo.findByPage(query);

      return { paymentHistories, hasNextPage, hasPrevPage };
    } catch (error) {
      throw error;
    }
  };

  return fetchPaymentHistories;
};
