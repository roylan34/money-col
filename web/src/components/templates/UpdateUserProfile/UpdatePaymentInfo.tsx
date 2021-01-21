import React, { PureComponent } from 'react';
import '@stripe/stripe-js';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { PaymentInfo } from '../../molecules/PaymentInfo';
import { CardObject } from '../../molecules/PaymentInfo/types';
import { CardInfoForm } from '../../organisms/CardInfo';
import { Container } from './paymentInfoElements';
import { stripeKey } from '../../../config/index';

type Props = {
  card: CardObject;
  hasCard: boolean;
  onPressDeleteCard: () => void;
  onSubmit: (token: stripe.Token) => void;
  errors: { [key: string]: string } | {};
};

type State = {
  isCardModalVisible: boolean;
};

class UpdatePaymentInfo extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isCardModalVisible: false,
    };
  }

  onPressAdd = () => {
    this.setState({ isCardModalVisible: true });
  };

  onPressCancel = () => {
    this.setState({ isCardModalVisible: false });
  };

  onSubmitCardInfo = (token: stripe.Token) => {
    const { onSubmit } = this.props;
    this.setState({ isCardModalVisible: false }, () => onSubmit(token));
  };

  render = (): React.ReactElement => {
    const { card, hasCard, onPressDeleteCard, errors } = this.props;
    const { isCardModalVisible } = this.state;

    return (
      <Container>
        <PaymentInfo
          card={card}
          hasCard={hasCard}
          onPressAddCard={this.onPressAdd}
          onPressDeleteCard={onPressDeleteCard}
          hideAddButton={isCardModalVisible}
          onPressCancel={this.onPressCancel}
          errors={errors}
        />
        {isCardModalVisible ? (
          <StripeProvider apiKey={stripeKey}>
            <Elements>
              <CardInfoForm
                onSubmit={this.onSubmitCardInfo}
                theme="updateProfile"
              />
            </Elements>
          </StripeProvider>
        ) : null}
      </Container>
    );
  };
}

export default UpdatePaymentInfo;
