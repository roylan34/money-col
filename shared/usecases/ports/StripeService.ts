import Stripe from 'stripe';

export default interface StripeService {
  createCustomer(token: Stripe.Token): Promise<Stripe.Customer>;
  updateCustomer(
    customerId: string,
    token: Stripe.Token,
  ): Promise<Stripe.Customer>;
  deleteCustomer(customerId: string, cardId: string): Promise<void>;
  chargeCustomer(
    customerId: string,
    amountInJPY: number,
  ): Promise<Stripe.Charge>;
}
