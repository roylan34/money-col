import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  number,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { SelectPaymentOption } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const CARD_BRANDS = [
  'American Express',
  'Diners Club',
  'Discover',
  'JCB',
  'MasterCard',
  'UnionPay',
  'Visa',
  '',
];

storiesOf('Organism - SelectPaymentOption', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    storyshots: { disable: true },
  })
  .add('Select Payment Option', () => (
    <Container>
      <SelectPaymentOption
        userId="a468e33e-c9cd-45d8-8844-5e77d503575e"
        email="test@gmail.com"
        paymentInYen={number('Payment In Yen', 1000)}
        pointsToBePurchased={number('Points to be Purchased', 10)}
        onSuccessfulPaypalCheckout={action('on-successful-paypal-checkout')}
        onPaypalCheckoutFailure={action('on-paypal-checkout-failure')}
        onCardPayment={action('on-card-payment')}
        stripeCardID={text('Stripe Card ID', '')}
        brand={select('Card Brand', CARD_BRANDS, 'MasterCard')}
        last4={text('Last 4 Digits of Card', '4242')}
        onSubmitCardInfo={action('on-submit-card-info')}
        hasError={boolean('Has Error', false)}
        onPressDeleteCard={action('on-press-delete-card')}
        isSending={false}
        onCancelPaypalCheckout={() => {}}
        createPendingPaymentHistory={() => Promise.resolve('')}
        errorMsg={text('Error Msg', '')}
      />
    </Container>
  ));
