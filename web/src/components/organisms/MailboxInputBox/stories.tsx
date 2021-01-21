import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { boolean } from '@storybook/addon-knobs';
import { MailboxInputBox } from '.';

storiesOf('Organism - MailboxInputBox', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Mail Input Box', () => (
    <MailboxInputBox
      onPressSend={action('on-press-send')}
      isSendingMessage={boolean('Is Sending Message', false)}
    />
  ));
