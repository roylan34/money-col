import React, { PureComponent, FormEvent } from 'react';
import { ReactStripeElements } from 'react-stripe-elements';
import {
  CardInfoContainer,
  TextInputWrapper,
  CardNumberWrapper,
  CardNumber,
  ExpiryCvcContainer,
  CardExpiryWrapper,
  CardExpiry,
  CardCVC,
  ButtonContainer,
  ButtonWrapper,
} from './elements';
import { stripeStyle, placeholders } from './constants';
import { Button } from '../../atoms/Button';
import { TextInput } from '../../atoms/TextInput';
import { words } from '../../../constants';

type Props = {
  onSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  onChangeName: (cardHolderName: string) => void;
  cardHolderName: string;
  shouldDisableSubmit: boolean;
  onChangeCardNumber: (
    event: ReactStripeElements.ElementChangeResponse,
  ) => void;
  onChangeCardExpiry: (
    event: ReactStripeElements.ElementChangeResponse,
  ) => void;
  onChangeCardCvc: (event: ReactStripeElements.ElementChangeResponse) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'updateProfile' as 'updateProfile' | 'purchasePoints',
};

type State = {
  isConfirmationVisible: boolean;
  cardholderName: string;
};

class CardInfo extends PureComponent<Props & DefaultProps, State> {
  static defaultProps = defaultProps;
  constructor(props: Props & DefaultProps) {
    super(props);

    this.state = {
      isConfirmationVisible: false,
      cardholderName: '',
    };
  }

  render = (): React.ReactElement => {
    const {
      onSubmit,
      onChangeName,
      cardHolderName,
      shouldDisableSubmit,
      onChangeCardNumber,
      onChangeCardExpiry,
      onChangeCardCvc,
      theme,
    } = this.props;

    return (
      <CardInfoContainer>
        <TextInputWrapper>
          <TextInput
            placeholder={words.stripeLabels.placeHolder.cardName}
            isDynamicHeight
            value={cardHolderName}
            onChangeText={onChangeName}
          />
        </TextInputWrapper>
        <CardNumberWrapper>
          <CardNumber
            placeholder={placeholders.cardNumber}
            onChange={onChangeCardNumber}
            style={stripeStyle}
          />
        </CardNumberWrapper>
        <ExpiryCvcContainer>
          <CardExpiryWrapper>
            <CardExpiry
              placeholder={placeholders.cardExpiry}
              style={stripeStyle}
              onChange={onChangeCardExpiry}
            />
          </CardExpiryWrapper>
          <CardExpiryWrapper>
            <CardCVC
              placeholder={placeholders.cardCvc}
              style={stripeStyle}
              onChange={onChangeCardCvc}
            />
          </CardExpiryWrapper>
        </ExpiryCvcContainer>
        <ButtonContainer theme={theme}>
          <ButtonWrapper>
            <Button
              onPress={onSubmit}
              title={words.stripeLabels.addButton}
              disabled={shouldDisableSubmit}
              type="submit"
            />
          </ButtonWrapper>
        </ButtonContainer>
      </CardInfoContainer>
    );
  };
}

export default CardInfo;
