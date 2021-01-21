import React, { PureComponent } from 'react';
import '@stripe/stripe-js';
import { StripeProvider, Elements } from 'react-stripe-elements';
import {
  Container,
  PaymentOptionsContainer,
  PaymentOptionTitle,
  PaypalRadioWrapper,
  StripeCardRadioWrapper,
  RadioLabel,
  AddNewCardLabel,
  PaypalPromptWrapper,
  PaypalPrompt,
  PurchaseInfoWrapper,
  CardInfoFormWrapper,
  LeftContainer,
  CardRadioLabelWrapper,
  CardIconsWrapper,
  ErrorText,
  Cover,
  ConfirmationContainer,
} from './elements';
import { CardIcons } from './CardIcons';
import { RadioButton } from '../../atoms/RadioButton';
import { PayPal } from '../../atoms/Icons';
import { PurchasePaymentInfo } from '../../molecules/PurchasePaymentInfo';
import { StripeCard } from '../../molecules/PaymentInfo';
import { ConfirmationModal } from '../../molecules/ConfirmationModal';
import { CardInfoForm } from '../../organisms/CardInfo';
import { words } from '../../../constants';
import { stripeKey } from '../../../config/index';

type Props = {
  userId: string;
  email: string;
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
  onPressDeleteCard: () => void;
  isSending?: boolean;
  onCancelPaypalCheckout: () => void;
  createPendingPaymentHistory: (
    userId: string,
    pointsToBePurchased: number,
    amountInJPY: number,
    email: string,
  ) => Promise<string>;
  errorMsg: string;
};

type State = {
  selected: 'paypal' | 'card';
  openAddNewCard: boolean;
  isDelConfirmationVisible: boolean;
  confirmPurchasePoints: boolean;
  confirmationMsg: string;
};

class SelectPaymentOption extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selected: 'paypal',
      openAddNewCard: false,
      isDelConfirmationVisible: false,
      confirmPurchasePoints: false,
      confirmationMsg: words.comfirmPurchaseMsg,
    };
  }

  componentWillMount() {
    const { paymentInYen, pointsToBePurchased } = this.props;
    const { confirmationMsg } = this.state;

    const finalMsgTemp = [
      confirmationMsg.slice(0, 5),
      paymentInYen,
      confirmationMsg.slice(5),
    ].join('');
    this.setState({
      confirmationMsg: pointsToBePurchased.toString().concat(finalMsgTemp),
    });
  }

  onClickAddNewCard = () => {
    this.setState({ openAddNewCard: true, selected: 'card' });
  };

  onCancelAddNewCard = () => {
    this.setState({ openAddNewCard: false, selected: 'paypal' });
  };

  onSelectOption = (pressedRadio: 'paypal' | 'card') => {
    const { selected } = this.state;

    if (pressedRadio !== selected) {
      this.setState({ selected: pressedRadio });
    }
  };

  onPressDelete = () => {
    this.setState({ isDelConfirmationVisible: true });
  };

  onCancelDelete = () => {
    this.setState({ isDelConfirmationVisible: false });
  };

  onConfirmDelete = () => {
    const { onPressDeleteCard } = this.props;
    this.setState({ isDelConfirmationVisible: false }, () =>
      onPressDeleteCard(),
    );
  };

  onSubmitCardInfo = (token: stripe.Token) => {
    const { onSubmitCardInfo } = this.props;
    this.setState({ openAddNewCard: false, selected: 'card' }, () =>
      onSubmitCardInfo(token),
    );
  };

  onContinuePurchase = () => {
    this.setState({ confirmPurchasePoints: true });
  };

  onCancelPurchase = () => {
    this.setState({ confirmPurchasePoints: false });
  };

  onConfirmPurchase = () => {
    const { onCardPayment } = this.props;
    this.setState({ confirmPurchasePoints: false }, () => onCardPayment());
  };

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
      stripeCardID,
      brand,
      last4,
      hasError,
      isSending,
      errorMsg,
    } = this.props;
    const {
      selected,
      openAddNewCard,
      isDelConfirmationVisible,
      confirmPurchasePoints,
      confirmationMsg,
    } = this.state;
    const disableCardPayment = !stripeCardID;

    return (
      <Container>
        <LeftContainer>
          <PaymentOptionsContainer>
            <PaymentOptionTitle>{words.selectPaymentOption}</PaymentOptionTitle>
            <PaypalRadioWrapper>
              <RadioButton
                isSelected={selected === 'paypal'}
                onClickRadioButton={() => {
                  this.onSelectOption('paypal');
                }}>
                <RadioLabel>{words.paypal}</RadioLabel>
                <PayPal />
              </RadioButton>
            </PaypalRadioWrapper>
            <StripeCardRadioWrapper>
              {openAddNewCard && !stripeCardID && (
                <RadioButton
                  isSelected={selected === 'card'}
                  onClickRadioButton={() => {
                    this.onSelectOption('card');
                  }}>
                  <CardRadioLabelWrapper>
                    <RadioLabel>クレジット/デビッドカード</RadioLabel>
                    <CardIconsWrapper>
                      {CardIcons.MasterCard}
                      {CardIcons.Visa}
                      {CardIcons.JCB}
                    </CardIconsWrapper>
                  </CardRadioLabelWrapper>
                </RadioButton>
              )}
              {stripeCardID && (
                <RadioButton
                  isSelected={selected === 'card'}
                  onClickRadioButton={() => {
                    this.onSelectOption('card');
                  }}>
                  <StripeCard brand={brand} last4={last4} theme="payment" />
                </RadioButton>
              )}
            </StripeCardRadioWrapper>
            {!stripeCardID && !openAddNewCard && (
              <AddNewCardLabel onClick={this.onClickAddNewCard}>
                {words.addNewCard}
              </AddNewCardLabel>
            )}
            {openAddNewCard && (
              <AddNewCardLabel onClick={this.onCancelAddNewCard}>
                {words.cancel}
              </AddNewCardLabel>
            )}
            {stripeCardID && (
              <AddNewCardLabel onClick={this.onPressDelete}>
                {words.paymentInfo.deleteCard}
              </AddNewCardLabel>
            )}
          </PaymentOptionsContainer>
          {openAddNewCard && selected === 'card' && (
            <CardInfoFormWrapper>
              <StripeProvider apiKey={stripeKey}>
                <Elements>
                  <CardInfoForm
                    onSubmit={this.onSubmitCardInfo}
                    theme="purchasePoints"
                  />
                </Elements>
              </StripeProvider>
            </CardInfoFormWrapper>
          )}
          {selected === 'paypal' && (
            <PaypalPromptWrapper>
              <PaypalPrompt>{words.paypalPrompt}</PaypalPrompt>
            </PaypalPromptWrapper>
          )}
        </LeftContainer>
        <PurchaseInfoWrapper>
          <PurchasePaymentInfo
            email={email}
            userId={userId}
            onCancelPaypalCheckout={onCancelPaypalCheckout}
            createPendingPaymentHistory={createPendingPaymentHistory}
            theme={selected}
            amountInYen={paymentInYen}
            pointsToBePurchased={pointsToBePurchased}
            onSuccessfulPaypalCheckout={onSuccessfulPaypalCheckout}
            onPaypalCheckoutFailure={onPaypalCheckoutFailure}
            onCardPayment={this.onContinuePurchase}
            disabled={disableCardPayment}
            isSending={isSending}
          />
          {hasError && <ErrorText>{errorMsg}</ErrorText>}
        </PurchaseInfoWrapper>
        <Cover isVisible={isDelConfirmationVisible}>
          <ConfirmationContainer>
            <ConfirmationModal
              title={words.confirmationDeleteTitle}
              confirmButtonTitle={words.confirmDeleteButton}
              message={words.stripeLabels.delConfirmationMsg}
              onCancel={this.onCancelDelete}
              onConfirm={this.onConfirmDelete}
            />
          </ConfirmationContainer>
        </Cover>
        <Cover isVisible={confirmPurchasePoints}>
          <ConfirmationContainer>
            <ConfirmationModal
              title={words.confirmPurchaseTitle}
              message={confirmationMsg}
              confirmButtonTitle={words.buy}
              onCancel={this.onCancelPurchase}
              onConfirm={this.onConfirmPurchase}
              buttonTheme={'box'}
            />
          </ConfirmationContainer>
        </Cover>
      </Container>
    );
  };
}

export default SelectPaymentOption;
