import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import { UpdateDefaultPassword } from '.';

storiesOf('Template - UpdateDefaultPassword', module)
  .addDecorator(withActions())
  .addDecorator(withKnobs)
  .add('Default Update Default Password', () => (
    <UpdateDefaultPassword
      homeLink={text('Home Link', '/')}
      onSubmit={action('on-submit')}
      updatePasswordError={object('Errors', {})}
    />
  ));
