import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PaymentOptionTemplate } from '../../templates/PaymentOptionTemplate';
import { paths } from '../../../constants/routes/urls';

/**
 * importing the usecase directly because the payment is processed
 * by 'react-paypal-button-v2' component instead of using actions
 */
import { paymentHistoryInteractor } from '../../../redux/dependencies';

type Props = {
  email: string;
  userId: string;
  stripeCustomerId: string;
  stripeCardId: string;
  brand: string;
  last4: string;
  id: string;
  hasPurchasedUsingCard: boolean;
  isSending?: boolean;
  hasFailedToAddPointsAfterPurchase: boolean;
  purchasePointsUsingCardError: string;
  hasPurchasedUsingPaypal: boolean;
  addStripeCard: (
    token: stripe.Token,
    stripeCustomerId: string,
    userId: string,
  ) => void;
  onCardPayment: (
    userId: string,
    pointsToBePurchased: number,
    stripeCustomerId: string,
    amountInJPY: number,
  ) => void;
  deleteStripeCard: (
    stripeCustomerId: string,
    stripeCardId: string,
    userId: string,
  ) => void;
  purchasePointsWithPaypal: (
    userId: string,
    paymentHistId: string,
    chargeID: string,
  ) => void;
} & RouteComponentProps<
  {},
  {},
  { amountInYen?: number; pointsToBePurchased?: number; isSuccessful?: boolean }
>;

type State = {
  amountInYen: number;
  pointsToBePurchased: number;
  hasError: boolean;
  paymentHistoryId: string;
};

export default class extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      amountInYen: 1000,
      pointsToBePurchased: 10,
      hasError: false,
      paymentHistoryId: '',
    };
  }

  componentDidMount() {
    const {
      location: { state },
    } = this.props;

    if (state && state.amountInYen && state.pointsToBePurchased) {
      const { amountInYen, pointsToBePurchased } = state;
      this.setState({
        amountInYen,
        pointsToBePurchased,
      });
    }
  }

  componentDidUpdate(prevProps: Props) {
    const {
      hasPurchasedUsingCard,
      history,
      hasFailedToAddPointsAfterPurchase,
      hasPurchasedUsingPaypal,
    } = this.props;

    if (
      prevProps.hasPurchasedUsingCard !== hasPurchasedUsingCard &&
      hasPurchasedUsingCard
    ) {
      history.push({
        pathname: paths.paymentConfirmation,
        state: {
          isSuccessful: true,
        },
      });
    }

    if (
      prevProps.hasPurchasedUsingPaypal !== hasPurchasedUsingPaypal &&
      hasPurchasedUsingPaypal
    ) {
      history.push({
        pathname: paths.paymentConfirmation,
        state: {
          isSuccessful: true,
        },
      });
    }

    if (
      prevProps.hasFailedToAddPointsAfterPurchase !==
        hasFailedToAddPointsAfterPurchase &&
      hasFailedToAddPointsAfterPurchase
    ) {
      history.push({
        pathname: paths.paymentConfirmation,
        state: {
          isSuccessful: false,
        },
      });
    }
  }

  addCardInfo = (token: stripe.Token) => {
    const { stripeCustomerId, id, addStripeCard } = this.props;

    addStripeCard(token, stripeCustomerId, id);
  };

  onSuccessfulPaypalCheckout = async (
    userId: string,
    paymentHistId: string,
    chargeID: string,
  ) => {
    const { purchasePointsWithPaypal } = this.props;

    purchasePointsWithPaypal(userId, paymentHistId, chargeID);
  };

  onCardPayment = () => {
    // TODO call action to charge stripe card and if successful navigate to Payment Confirmation
    const { id, stripeCustomerId, onCardPayment } = this.props;
    const { pointsToBePurchased, amountInYen } = this.state;

    onCardPayment(id, pointsToBePurchased, stripeCustomerId, amountInYen);
  };

  onCheckoutFailure = async () => {
    const { paymentHistoryId } = this.state;
    await paymentHistoryInteractor.updatePaymentHistory(paymentHistoryId, {
      status: 'FAILED',
    });
    this.setState({ hasError: true });
  };

  onCancelPaypalCheckout = async () => {
    const { paymentHistoryId } = this.state;
    await paymentHistoryInteractor.updatePaymentHistory(paymentHistoryId, {
      status: 'CANCELLED',
    });
  };

  onDeleteStripeCard = () => {
    const { stripeCustomerId, stripeCardId, id, deleteStripeCard } = this.props;

    deleteStripeCard(stripeCustomerId, stripeCardId, id);
  };

  createPendingPaymentHistory = async (
    userId: string,
    pointsToBePurchased: number,
    amountInJPY: number,
    email: string,
  ): Promise<string> => {
    const id = await paymentHistoryInteractor.createPaymentHistory({
      userId,
      pointsToBePurchased,
      amountInJPY,
      type: 'Paypal',
      email,
    });
    this.setState({ paymentHistoryId: id });
    return id;
  };

  render = (): React.ReactElement => {
    const {
      stripeCardId,
      brand,
      last4,
      isSending,
      userId,
      email,
      purchasePointsUsingCardError,
    } = this.props;

    const { amountInYen, pointsToBePurchased, hasError } = this.state;

    return (
      <PaymentOptionTemplate
        email={email}
        userId={userId}
        onCancelPaypalCheckout={this.onCancelPaypalCheckout}
        paymentInYen={amountInYen}
        pointsToBePurchased={pointsToBePurchased}
        brand={brand}
        last4={last4}
        stripeCardID={stripeCardId}
        onSuccessfulPaypalCheckout={this.onSuccessfulPaypalCheckout}
        onPaypalCheckoutFailure={this.onCheckoutFailure}
        onCardPayment={this.onCardPayment}
        onSubmitCardInfo={this.addCardInfo}
        hasError={hasError || !!purchasePointsUsingCardError}
        onDeleteCard={this.onDeleteStripeCard}
        isSending={isSending}
        createPendingPaymentHistory={this.createPendingPaymentHistory}
        purchasePointsUsingCardError={purchasePointsUsingCardError}
      />
    );
  };
}
