import { PaymentHistory } from '../../domain/entities/paymentHistory';

type NewPaymentHistoryParams = Pick<
  PaymentHistory,
  Exclude<keyof PaymentHistory, 'id'>
>;

type UpdatePaymentHistoryParams = Partial<NewPaymentHistoryParams>;

export default interface PaymentHistoryRepository {
  findById(id: string): Promise<PaymentHistory | undefined>;
  find(query?: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<PaymentHistory[]>;
  findByPage(query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit: number;
    mode: 'prev' | 'next';
    orderBy?: string;
    sort?: 'desc' | 'asc';
    firstId: string;
    lastId: string;
  }): Promise<{
    data: PaymentHistory[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }>;
  create(params: NewPaymentHistoryParams): Promise<string>;
  update(id: string, params: UpdatePaymentHistoryParams): Promise<string>;
  settlePendingPayment(
    pendingId: string,
    userId: string,
    email: string,
  ): Promise<void>;
}
