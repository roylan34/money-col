import words from '../constants/words';

export const stripeError = (errorCode: string) => {
  switch (errorCode) {
    case 'card_error':
      return words.cardDeclined;
    case 'api_error':
      return words.stripeServerError;
    case 'api_connection_error':
      return words.stripeConnectionError;

    default:
      return words.stripeServerError;
  }
};
