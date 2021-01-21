import Stripe from 'stripe';
import StripeService from '../../ports/StripeService';
import { User } from '../../../domain/entities/user';
import { updateUserUseCase } from './update-user';

export type addCardUseCase = (
  token: Stripe.Token,
  stripeCustomerId: string,
  userId: string,
) => Promise<User>;

export const buildAddCard = (dependencies: {
  stripeService: StripeService;
  userInteractor: {
    updateUser: updateUserUseCase;
  };
}): addCardUseCase => {
  const {
    stripeService,
    userInteractor: { updateUser },
  } = dependencies;

  const addCard: addCardUseCase = (
    token: Stripe.Token,
    stripeCustomerId: string,
    userId: string,
  ) => {
    if (stripeCustomerId) {
      return stripeService
        .updateCustomer(stripeCustomerId, token)
        .then(async (response) => {
          const stripe = {
            customerId: response.id,
            card: {
              cardId: token.card?.id,
              brand: token.card?.brand,
              last4: token.card?.last4,
            },
          };

          return updateUser(userId, { stripe });
        })
        .catch((error) => {
          throw error;
        });
    } else {
      return stripeService
        .createCustomer(token)
        .then(async (response) => {
          const stripe = {
            customerId: response.id,
            card: {
              cardId: token.card?.id,
              brand: token.card?.brand,
              last4: token.card?.last4,
            },
          };

          return updateUser(userId, { stripe });
        })
        .catch((error) => {
          throw error;
        });
    }
  };

  return addCard;
};
