import { CardObject } from '../../molecules/PaymentInfo/types';

export type PaymentInfoProps = {
  card: CardObject;
  hasCard: boolean;
  onPressDeleteCard: () => void;
  onSubmit: (token: stripe.Token) => void;
  errors: { [key: string]: string } | {};
};
