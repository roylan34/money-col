import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, withActions } from '@storybook/addon-actions';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';
import { LoginForm } from '.';

storiesOf('Organism - LoginForm', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions())
  .add('Login Form', () => (
    <LoginForm
      onSubmit={action('on-submit-login-values')}
      onPressForgotPass={action('on-press-forgot-password')}
      loginError={object('Error Object', {})}
      isLoginPending={boolean('Is Login Pending', false)}
    />
  ));
