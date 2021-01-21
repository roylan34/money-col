import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { PaypalCheckout } from '.';

const Container = styled.div`
  width: 368px;
  height: 56px;
`;

storiesOf('Atom - PaypalCheckout', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    storyshots: { disable: true },
  })
  .add('Default Paypal Checkout', () => (
    <PaypalCheckout
      userId="a468e33e-c9cd-45d8-8844-5e77d503575e"
      email="test@gmail.com"
      amountInYen={number('Amount in Yen', 500)}
      pointsToBePurchased={100}
      onSuccess={action('on-successful-checkout')}
      onError={action('on-checkout-failure')}
      onCancel={() => {}}
      createPendingPaymentHistory={() => Promise.resolve('')}
    />
  ))
  .add('Paypal Checkout with Container', () => (
    <Container>
      <PaypalCheckout
        userId="a468e33e-c9cd-45d8-8844-5e77d503575e"
        email="test@gmail.com"
        amountInYen={number('Amount in Yen', 500)}
        pointsToBePurchased={100}
        onSuccess={action('on-successful-checkout')}
        onError={action('on-checkout-failure')}
        onCancel={() => {}}
        createPendingPaymentHistory={() => Promise.resolve('')}
      />
    </Container>
  ));
