import { stripeSecretKey } from "./config";
import StripeServiceImpl from "./interface/services/StripeServiceImpl";
import stripeUseCases from "./usecases/modules/stripe";

const stripeService = new StripeServiceImpl(stripeSecretKey);

const stripeInteractor = stripeUseCases({ stripeService });

export default {
  stripeInteractor,
};
