import StripeService from '../../ports/StripeService';
import { User } from '../../../domain/entities/user';
import { updateUserUseCase } from './update-user';

export type deleteCardUseCase = (
  stripeCustomerId: string,
  cardId: string,
  userId: string,
) => Promise<User>;

export const buildDeleteCard = (dependencies: {
  stripeService: StripeService;
  userInteractor: {
    updateUser: updateUserUseCase;
  };
}): deleteCardUseCase => {
  const {
    stripeService,
    userInteractor: { updateUser },
  } = dependencies;

  const deleteCard: deleteCardUseCase = (
    stripeCustomerId: string,
    cardId: string,
    userId: string,
  ) => {
    return stripeService
      .deleteCustomer(stripeCustomerId, cardId)
      .then(() => {
        const stripe = {
          customerId: stripeCustomerId,
          card: {
            cardId: '',
            brand: '',
            last4: '',
          },
        };

        return updateUser(userId, { stripe });
      })
      .catch((error) => {
        throw error;
      });
  };

  return deleteCard;
};
