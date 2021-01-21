import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, withActions } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { UpdatePasswordForm } from '.';

storiesOf('Organism - UpdatePasswordForm', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions())
  .add('Update Default Password Form', () => (
    <UpdatePasswordForm
      onSubmit={action('on-submit-change-pass')}
      updatePasswordError={object('Errors', {})}
    />
  ));
