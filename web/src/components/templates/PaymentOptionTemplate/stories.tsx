import React from 'react';
import { MemoryRouter } from 'react-router-dom';
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
import { TopNavBar } from '../../organisms/TopNavBar';
import { PaymentOptionTemplate } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

storiesOf('Template - PaymentOptionTemplate', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    storyshots: { disable: true },
  })
  .add('Payment Option Template', () => (
    <Container>
      <TopNavBar
        homeLink=""
        links={{
          myPageTopUrl: '/',
        }}
        hasNotif
        profileLabel=""
        profileImgSrc=""
        name=""
        onPressHamburgerItem={action('on-press-hamburger-item')}
        isAuthenticated={boolean('Is Authenticated', false)}
      />
      <PaymentOptionTemplate
        userId="a468e33e-c9cd-45d8-8844-5e77d503575e"
        email="test@gmail.com"
        paymentInYen={number('Payment In Yen', 1000)}
        pointsToBePurchased={number('Points to be Purchased', 10)}
        onSuccessfulPaypalCheckout={action('on-successful-paypal-checkout')}
        onPaypalCheckoutFailure={action('on-paypal-checkout-failure')}
        onCancelPaypalCheckout={() => {}}
        createPendingPaymentHistory={() => Promise.resolve('')}
        onCardPayment={action('on-card-payment')}
        stripeCardID={text('Stripe Card ID', '')}
        brand={select('Card Brand', CARD_BRANDS, 'MasterCard')}
        last4={text('Last 4 Digits of Card', '4242')}
        onSubmitCardInfo={action('on-submit-card-info')}
        hasError={boolean('Has Error', false)}
        onDeleteCard={action('on-delete-card')}
        isSending={false}
        purchasePointsUsingCardError={text('Purchase Points Stripe Error', '')}
      />
    </Container>
  ));
