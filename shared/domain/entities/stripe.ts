export type Stripe = {
  customerId?: string;
  card?: {
    cardId: string | undefined;
    brand: string | undefined;
    last4: string | undefined;
  };
};
