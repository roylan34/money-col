import { StripeElements } from '@stripe/stripe-js';

export type CardNameField = {
  cardHolderName: string;
};

export type SubmitValues = {
  cardholderName: string;
  elements: StripeElements | null;
};

export type CreditCardErrors = {
  cardHolderName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  nameIsRequired: string;
  [key: string]: string;
};

export type FormCompleteFlags = {
  cardNumberComplete: boolean;
  cardExpiryComplete: boolean;
  cardCvcComplete: boolean;
};
