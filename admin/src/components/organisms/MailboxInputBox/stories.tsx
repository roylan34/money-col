import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { MailboxInputBox } from '.';

storiesOf('Organism - MailboxInputBox', module)
  .addDecorator(withKnobs)
  .add('Mail Input Box', () => (
    <MailboxInputBox
      onPressSend={action('on-press-send')}
      isSendingMsg={boolean('Is Sending Message', false)}
    />
  ));
