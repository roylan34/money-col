import Stripe from "stripe";
import StripeService from "../../ports/StripeService";

export type chargeCardUseCase = (
  stripeCustomerId: string,
  amountInJPY: number
) => Promise<Stripe.Charge>;

export const buildChargeCard = (dependencies: {
  stripeService: StripeService;
}): chargeCardUseCase => {
  const { stripeService } = dependencies;

  const chargeCard: chargeCardUseCase = (
    stripeCustomerId: string,
    amountInJPY: number
  ) => {
    return stripeService
      .chargeCustomer(stripeCustomerId, amountInJPY)
      .then(async (response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };

  return chargeCard;
};
