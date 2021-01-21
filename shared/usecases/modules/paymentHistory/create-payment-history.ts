import PaymentHistoryRepository from '../../ports/PaymentHistoryRepository';

export type createPaymentHistoryUseCase = (data: {
  userId: string;
  pointsToBePurchased: number;
  amountInJPY: number;
  type: 'Paypal' | 'クレジットカード';
  email: string;
}) => Promise<string>;

export const buildCreatePaymentHistory = (dependencies: {
  paymentHistRepo: PaymentHistoryRepository;
}): createPaymentHistoryUseCase => {
  const { paymentHistRepo } = dependencies;

  const createPaymentHistoryPaypal: createPaymentHistoryUseCase = async (data: {
    userId: string;
    pointsToBePurchased: number;
    amountInJPY: number;
    type: 'Paypal' | 'クレジットカード';
    email: string;
  }) => {
    const { userId, type, amountInJPY, pointsToBePurchased, email } = data;
    const paymentHistId = await paymentHistRepo.create({
      userId: userId,
      status: 'PENDING',
      type: type,
      amount: amountInJPY,
      pointsPurchased: pointsToBePurchased,
      chargeID: '',
      email,
    });

    return paymentHistId;
  };

  return createPaymentHistoryPaypal;
};
