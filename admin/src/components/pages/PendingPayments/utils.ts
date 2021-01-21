import { PaymentHistory } from '../../../domain/entities';
import { PendingPaymentData } from '../../templates/PendingPaymentTemplate/types';

const stringToDate = (stringDate: string): string => {
  const convertedDate = new Date(stringDate);
  const year = convertedDate.getFullYear();
  const month = convertedDate.getMonth() + 1;
  const date = convertedDate.getDate();

  return `${year}/${month}/${date}`;
};

export const getFormattedValues = (
  pendingPayment: PaymentHistory & {
    createdAt: string;
  },
): PendingPaymentData => {
  const {
    email,
    createdAt,
    pointsPurchased,
    amount,
    type,
    id,
    userId,
  } = pendingPayment;

  const createdDate = stringToDate(createdAt);
  return {
    email: email,
    createdAt: createdDate,
    pointsPurchased,
    amountInYen: amount,
    type,
    id,
    userId,
  } as PendingPaymentData;
};
