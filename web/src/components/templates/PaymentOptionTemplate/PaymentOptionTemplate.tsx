import React, { PureComponent } from 'react';
import { Container } from './elements';
import { SelectPaymentOption } from '../../organisms/SelectPaymentOption';
import { words } from '../../../constants';

type Props = {
  email: string;
  userId: string;
  paymentInYen: number;
  pointsToBePurchased: number;
  brand: string;
  last4: string;
  stripeCardID: string;
  hasError: boolean;
  onSuccessfulPaypalCheckout: (
    userId: string,
    paymentHistId: string,
    chargeID: string,
  ) => void;
  onPaypalCheckoutFailure: (error: Error) => void;
  onCardPayment: () => void;
  onSubmitCardInfo: (token: stripe.Token) => void;
  onDeleteCard: () => void;
  isSending?: boolean;
  onCancelPaypalCheckout: () => void;
  createPendingPaymentHistory: (
    userId: string,
    pointsToBePurchased: number,
    amountInJPY: number,
    email: string,
  ) => Promise<string>;
  purchasePointsUsingCardError: string;
};

class PaymentOptionTemplate extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      userId,
      email,
      paymentInYen,
      pointsToBePurchased,
      onSuccessfulPaypalCheckout,
      onPaypalCheckoutFailure,
      onCancelPaypalCheckout,
      createPendingPaymentHistory,
      onCardPayment,
      onSubmitCardInfo,
      brand,
      last4,
      stripeCardID,
      hasError,
      onDeleteCard,
      isSending,
      purchasePointsUsingCardError,
    } = this.props;
    const errorMsg = purchasePointsUsingCardError || words.checkoutFailure;

    return (
      <Container>
        <SelectPaymentOption
          email={email}
          userId={userId}
          paymentInYen={paymentInYen}
          pointsToBePurchased={pointsToBePurchased}
          onSuccessfulPaypalCheckout={onSuccessfulPaypalCheckout}
          onPaypalCheckoutFailure={onPaypalCheckoutFailure}
          onCancelPaypalCheckout={onCancelPaypalCheckout}
          createPendingPaymentHistory={createPendingPaymentHistory}
          onCardPayment={onCardPayment}
          onSubmitCardInfo={onSubmitCardInfo}
          brand={brand}
          last4={last4}
          stripeCardID={stripeCardID}
          hasError={hasError}
          onPressDeleteCard={onDeleteCard}
          isSending={isSending}
          errorMsg={errorMsg}
        />
      </Container>
    );
  };
}

export default PaymentOptionTemplate;
