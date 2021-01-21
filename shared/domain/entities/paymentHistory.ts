import { BaseModel } from './baseModel';

export type PaymentHistory = {
  userId: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'CANCELLED';
  type: 'Paypal' | 'クレジットカード';
  amount: number;
  pointsPurchased: number;
  chargeID: string;
  email: string;
} & BaseModel;
