import { RootStateOrAny } from 'react-redux';
import {
  UPDATE_USER_REQUEST,
  ADD_CARD_REQUEST,
  DELETE_CARD_REQUEST,
} from '../../../redux/user/actionType';

export type StateFromProps = {
  id: string;
  basicInfoError: string;
  updateUserSuccessInfo: {
    message: string;
    timestamp: number;
  };
  lastName: string;
  firstName: string;
  email: string;
  initials: string;
  photoURL?: string;
  customerId: string;
  card: {
    cardId: string;
    brand: string;
    last4: string;
  };
  paymentInfoError: { [key: string]: string } | {};
  emailVerified: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    user: {
      name: { firstName, lastName },
      email,
      photoURL,
      id,
      failedRequests,
      successfulRequests,
      stripe: { customerId, card },
    },
    auth: { emailVerified },
  } = state;

  const initials = `${lastName[0]}`;

  const basicInfoError =
    failedRequests &&
    failedRequests[UPDATE_USER_REQUEST] &&
    failedRequests[UPDATE_USER_REQUEST].message;

  const updateUserSuccessInfo = successfulRequests &&
    successfulRequests[UPDATE_USER_REQUEST] && {
      message: successfulRequests[UPDATE_USER_REQUEST].message,
      timestamp: successfulRequests[UPDATE_USER_REQUEST].timestamp,
    };

  const paymentError =
    (failedRequests &&
      failedRequests[ADD_CARD_REQUEST] &&
      failedRequests[ADD_CARD_REQUEST].message) ||
    (failedRequests &&
      failedRequests[DELETE_CARD_REQUEST] &&
      failedRequests[DELETE_CARD_REQUEST].message) ||
    '';

  const paymentInfoError = paymentError ? { stripeError: paymentError } : {};

  return {
    id,
    basicInfoError,
    updateUserSuccessInfo,
    lastName,
    firstName,
    email,
    initials,
    photoURL,
    customerId,
    card,
    paymentInfoError,
    emailVerified,
  };
};
