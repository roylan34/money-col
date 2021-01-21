import React from 'react';
import '@stripe/stripe-js';
import { storiesOf } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';
import { CardInfoForm } from '.';
import { stripeKey } from '../../../config/index';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { BrowserRouter as Router } from 'react-router-dom';

storiesOf('Organism - CardInfo', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Add Payment Method', () => (
    <Router>
      <StripeProvider apiKey={stripeKey}>
        <Elements>
          {/* @ts-ignore */}
          <CardInfoForm onSubmit={action('OnSubmit')} theme="updateProfile" />
        </Elements>
      </StripeProvider>
    </Router>
  ));
