import StripeService from "../../ports/StripeService";

import { buildChargeCard, chargeCardUseCase } from "./charge-card";

export default (dependencies: {
  stripeService: StripeService;
}): {
  chargeCard: chargeCardUseCase;
} => {
  const { stripeService } = dependencies;

  const chargeCard = buildChargeCard({ stripeService });

  return {
    chargeCard,
  };
};
