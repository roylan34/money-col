import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, withActions } from '@storybook/addon-actions';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import { LoginTemplate } from '.';

storiesOf('Template - LoginTemplate', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions())
  .add('Login', () => (
    <LoginTemplate
      homeLink={text('Home Link', '/')}
      onSubmit={action('on-submit')}
      onPressForgotPass={action('on-press-forgot-password')}
      loginError={object('Error Object', {})}
      isLoginPending={boolean('Is Login Pending', false)}
    />
  ));
