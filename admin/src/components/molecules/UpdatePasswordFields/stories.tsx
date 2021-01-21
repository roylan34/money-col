import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, withActions } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { UpdatePasswordFields } from '.';

storiesOf('Molecule - UpdatePasswordFields', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions())
  .add('Update Password Fields', () => (
    <UpdatePasswordFields
      newPassword={text('New Password', '')}
      retypedNewPassword={text('Confirm New Password', '')}
      onChangeNewPassword={action('on-change-new-password')}
      onChangeNewPasswordConfirm={action('on-change-confirm-new-passowrd')}
      onPressChangePass={action('on-press-change-password')}
      shouldDisableSubmit={boolean('Is Disabled', true)}
    />
  ));
