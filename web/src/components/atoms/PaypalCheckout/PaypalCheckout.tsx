import React, { PureComponent } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { PaypalButtonStyle } from './constants';
import { paypalKey } from '../../../config';

type State = {
  paymentHistoryId: string;
};

type Props = {
  userId: string;
  email: string;
  pointsToBePurchased: number;
  amountInYen: number;
  onSuccess: (userId: string, paymentHistId: string, chargeID: string) => void;
  onCancel: () => void;
  onError: (error: Error) => void;
  createPendingPaymentHistory: (
    userId: string,
    pointsToBePurchased: number,
    amountInJPY: number,
    email: string,
  ) => Promise<string>;
};

class PaypalCheckout extends PureComponent<Props, State> {
  state = {
    paymentHistoryId: '',
  };

  render = (): React.ReactElement => {
    const {
      userId,
      pointsToBePurchased,
      amountInYen,
      onSuccess,
      onError,
      onCancel,
      email,
    } = this.props;
    // const { amountInYen, onSuccess, onError } = this.props;
    const { paymentHistoryId } = this.state;

    return (
      <PayPalButton
        // amount={amountInYen}
        // currency="JPY"
        // @ts-ignore
        onCancel={onCancel}
        onSuccess={(
          details: object,
          data: {
            orderID: string;
            payerID: string;
            paymentID: string | null;
            billingToken: null | null;
            facilitatorAccessToken: string;
          },
        ) => {
          return onSuccess(userId, paymentHistoryId, data.orderID);
        }}
        // @ts-ignore
        onError={onError}
        // @ts-ignore
        createOrder={async (data, actions) => {
          const paymentHistoryId = await this.props.createPendingPaymentHistory(
            userId,
            pointsToBePurchased,
            amountInYen,
            email,
          );

          this.setState({ paymentHistoryId });

          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'JPY',
                  value: amountInYen,
                },
              },
            ],
          });
        }}
        options={{
          clientId: paypalKey,
          disableFunding: 'card',
          currency: 'JPY',
        }}
        style={PaypalButtonStyle}
      />
    );
  };
}

export default PaypalCheckout;
