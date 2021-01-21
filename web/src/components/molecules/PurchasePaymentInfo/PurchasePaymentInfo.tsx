import React, { PureComponent } from 'react';
import {
  Container,
  Title,
  TopAmountContainer,
  AmountLabel,
  Divider,
  TotalContainer,
  TotalLabel,
  TermsAndConditionsLabel,
  ButtonWrapper,
} from './elements';
import { PaypalCheckout } from '../../atoms/PaypalCheckout';
import { Button } from '../../atoms/Button';
import { words } from '../../../constants';

type Props = {
  userId: string;
  email: string;
  onCancelPaypalCheckout: () => void;
  onSuccessfulPaypalCheckout: (
    userId: string,
    paymentHistId: string,
    chargeID: string,
  ) => void;
  onPaypalCheckoutFailure: (error: Error) => void;
  onCardPayment: () => void;
  pointsToBePurchased: number;
  amountInYen: number;
  theme: 'paypal' | 'card';
  disabled?: boolean;
  isSending?: boolean;
  createPendingPaymentHistory: (
    userId: string,
    pointsToBePurchased: number,
    amountInJPY: number,
    email: string,
  ) => Promise<string>;
};

class PurchasePaymentInfo extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      userId,
      email,
      onSuccessfulPaypalCheckout,
      onPaypalCheckoutFailure,
      onCancelPaypalCheckout,
      createPendingPaymentHistory,
      onCardPayment,
      pointsToBePurchased,
      amountInYen,
      theme,
      disabled,
      isSending,
    } = this.props;

    return (
      <Container>
        <Title>{words.paymentOverview}</Title>
        <TopAmountContainer>
          <AmountLabel>{`${pointsToBePurchased}${words.pointsToBePurchased}`}</AmountLabel>
          <AmountLabel>¥{amountInYen}</AmountLabel>
        </TopAmountContainer>
        <Divider />
        <TotalContainer>
          <TotalLabel>{words.paymentTotal}</TotalLabel>
          <TotalLabel>¥{amountInYen}</TotalLabel>
        </TotalContainer>
        <TermsAndConditionsLabel>
          {words.paymentTermsAndConditions}
        </TermsAndConditionsLabel>
        {theme === 'paypal' ? (
          <ButtonWrapper>
            {isSending ? (
              <Button
                title=""
                textSize="16px"
                onPress={() => {}}
                disabled={disabled}
                isLoading={isSending}
              />
            ) : (
              <PaypalCheckout
                email={email}
                userId={userId}
                pointsToBePurchased={pointsToBePurchased}
                amountInYen={amountInYen}
                onSuccess={onSuccessfulPaypalCheckout}
                onError={onPaypalCheckoutFailure}
                onCancel={onCancelPaypalCheckout}
                createPendingPaymentHistory={createPendingPaymentHistory}
              />
            )}
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <Button
              title="支払いを完了する"
              textSize="16px"
              onPress={onCardPayment}
              disabled={disabled}
              isLoading={isSending}
            />
          </ButtonWrapper>
        )}
      </Container>
    );
  };
}

export default PurchasePaymentInfo;
