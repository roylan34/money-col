import Stripe from "stripe";

export default interface StripeService {
  chargeCustomer(
    customerId: string,
    amountInJPY: number
  ): Promise<Stripe.Charge>;
}
