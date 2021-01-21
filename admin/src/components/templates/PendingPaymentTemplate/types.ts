export type PendingPaymentData = {
  email: string;
  createdAt: string;
  pointsPurchased: number;
  amountInYen: number;
  type: 'Paypal' | 'クレジットカード';
  id: string;
  userId: string;
};
