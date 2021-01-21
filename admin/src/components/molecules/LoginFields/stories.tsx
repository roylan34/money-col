import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, withActions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { LoginFields } from '.';

storiesOf('Molecule - LoginFields', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions())
  .add('Login Fields', () => (
    <LoginFields
      email={text('Email', '')}
      password={text('Password', '')}
      saveLoginStatus={select('Save Login', ['true', 'false'], 'true')}
      shouldDisableSubmit={boolean('Is Submit Disabled', true)}
      onChangeEmail={action('on-change-email')}
      onChangePassword={action('on-change-password')}
      onChangeSaveLoginStatus={action('on-toggle-save-login-status')}
      onSubmit={action('on-press-submit')}
      onPressForgotPassword={action('on-click-forgot-password')}
      isLoginPending={boolean('Is Login Pending', false)}
    />
  ));
