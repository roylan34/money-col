import { theme } from '../../../config/index';
import { words } from '../../../constants';

export const placeholders = {
  cardNumber: words.stripeLabels.placeHolder.cardNumber,
  cardExpiry: words.stripeLabels.placeHolder.cardExpiry,
  cardCvc: words.stripeLabels.placeHolder.cardCvc,
};

export const stripeStyle = {
  base: {
    fontSize: '12px',
    fontFamily: theme.fonts.stripe,
    backgroundColor: '#ffffff',
    color: theme.colors.black.light,
    '::placeholder': {
      color: theme.colors.gray.primary,
    },
  },
  invalid: {
    color: theme.colors.red.primary,
  },
};
