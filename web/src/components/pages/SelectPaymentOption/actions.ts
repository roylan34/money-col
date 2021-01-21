import { AnyAction } from 'redux';
import {
  addCard,
  purchasePointsUsingCard,
  deleteCard,
  purchasePointsUsingPaypal,
} from '../../../redux/user/action';

export const addStripeCard = (
  token: stripe.Token,
  stripeCustomerId: string,
  userId: string,
): AnyAction => {
  return addCard(token, stripeCustomerId, userId);
};

// TODO implement adding points to user
export const onPaypalCheckoutSuccess = (): null => null;

// TODO implement chargin card
export const onCardPayment = (
  userId: string,
  pointsToBePurchased: number,
  stripeCustomerId: string,
  amountInJPY: number,
): AnyAction => {
  return purchasePointsUsingCard(
    userId,
    pointsToBePurchased,
    stripeCustomerId,
    amountInJPY,
  );
};

export const deleteStripeCard = (
  stripeCustomerId: string,
  stripeCardId: string,
  userId: string,
): AnyAction => {
  return deleteCard(stripeCustomerId, stripeCardId, userId);
};

export const purchasePointsWithPaypal = (
  userId: string,
  paymentHistId: string,
  chargeID: string,
): AnyAction => {
  return purchasePointsUsingPaypal(userId, paymentHistId, chargeID);
};

export type DispatchFromProps = {
  addStripeCard: typeof addStripeCard;
  onCardPayment: typeof onCardPayment;
  deleteStripeCard: typeof deleteStripeCard;
};
