import React from 'react';
import { storiesOf } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PurchasePaymentInfo } from '.';

storiesOf('Molecule - PurchasePaymentInfo', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  })
  .add(
    'Paypal Purchase Payment Info',
    () => (
      <PurchasePaymentInfo
        userId="a468e33e-c9cd-45d8-8844-5e77d503575e"
        email="test@gmail.com"
        pointsToBePurchased={number('Points To Be Purchased', 50)}
        amountInYen={number('Amount in Yen', 5000)}
        onSuccessfulPaypalCheckout={action('on-successful-paypal-checkout')}
        onPaypalCheckoutFailure={action('on-paypal-checkout-failure')}
        onCardPayment={action('on-card-payment')}
        theme="paypal"
        onCancelPaypalCheckout={() => {}}
        createPendingPaymentHistory={() => Promise.resolve('')}
      />
    ),
    {
      storyshots: { disable: true },
    },
  )
  .add('Card Purchase Payment Info', () => (
    <PurchasePaymentInfo
      userId="a468e33e-c9cd-45d8-8844-5e77d503575e"
      email="test@gmail.com"
      pointsToBePurchased={number('Points To Be Purchased', 50)}
      amountInYen={number('Amount in Yen', 5000)}
      onSuccessfulPaypalCheckout={action('on-successful-paypal-checkout')}
      onPaypalCheckoutFailure={action('on-paypal-checkout-failure')}
      onCardPayment={action('on-card-payment')}
      theme="card"
      onCancelPaypalCheckout={() => {}}
      createPendingPaymentHistory={() => Promise.resolve('')}
    />
  ));
