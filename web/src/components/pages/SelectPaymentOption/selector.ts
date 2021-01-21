import { RootStateOrAny } from 'react-redux';
import {
  PURCHASE_POINTS_CARD_REQUEST,
  PURCHASE_POINTS_PAYPAL_REQUEST,
} from '../../../redux/user/actionType';

export type StateFromProps = {
  stripeCustomerId: string;
  stripeCardId: string;
  brand: string;
  last4: string;
  id: string;
  hasPurchasedUsingCard: boolean;
  isSending: boolean;
  userId: string;
  email: string;
  hasFailedToAddPointsAfterPurchase: boolean;
  purchasePointsUsingCardError: string;
  hasPurchasedUsingPaypal: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    user: {
      id,
      email,
      stripe: {
        customerId,
        card: { brand, last4, cardId },
      },
      successfulRequests,
      failedRequests,
      requests,
    },
  } = state;

  const hasPurchasedUsingCard =
    successfulRequests && successfulRequests[PURCHASE_POINTS_CARD_REQUEST];

  const hasPurchasedUsingPaypal =
    successfulRequests && successfulRequests[PURCHASE_POINTS_PAYPAL_REQUEST];

  const isSending =
    (requests[PURCHASE_POINTS_CARD_REQUEST] &&
      (requests[PURCHASE_POINTS_CARD_REQUEST].pending as boolean)) ||
    (requests[PURCHASE_POINTS_PAYPAL_REQUEST] &&
      (requests[PURCHASE_POINTS_PAYPAL_REQUEST].pending as boolean));

  const hasFailedToAddPointsAfterPurchase =
    (failedRequests &&
      failedRequests[PURCHASE_POINTS_CARD_REQUEST] &&
      failedRequests[PURCHASE_POINTS_CARD_REQUEST].errorCode ===
        'fail-add-points') ||
    (failedRequests &&
      failedRequests[PURCHASE_POINTS_PAYPAL_REQUEST] &&
      failedRequests[PURCHASE_POINTS_PAYPAL_REQUEST].errorCode ===
        'fail-add-points')
      ? true
      : false;

  const purchasePointsUsingCardError =
    failedRequests && failedRequests[PURCHASE_POINTS_CARD_REQUEST]
      ? failedRequests[PURCHASE_POINTS_CARD_REQUEST].message
      : '';

  return {
    stripeCustomerId: customerId,
    stripeCardId: cardId,
    brand,
    last4,
    id,
    email,
    userId: id,
    hasPurchasedUsingCard,
    isSending,
    hasFailedToAddPointsAfterPurchase,
    purchasePointsUsingCardError,
    hasPurchasedUsingPaypal,
  };
};
