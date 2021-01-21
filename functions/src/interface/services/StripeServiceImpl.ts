import Stripe from "stripe";
import StripeService from "../../usecases/ports/StripeService";

export default class StripeServiceImpl implements StripeService {
  stripe: Stripe;

  constructor(stripeSecretKey: string) {
    this.stripe = require(stripeSecretKey);
  }

  chargeCustomer = async (
    customerId: string,
    amountInJPY: number
  ): Promise<Stripe.Charge> => {
    return await this.stripe.charges.create({
      amount: amountInJPY,
      currency: "jpy",
      customer: customerId,
      description: `Purchased points worth ¥${amountInJPY}`,
    });
  };
}
