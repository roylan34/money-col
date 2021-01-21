import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { MailboxSettingsContent } from '.';

storiesOf('Molecule - MailboxSettingsContent', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('MailboxSettingsContent', () => (
    <MailboxSettingsContent
      onPressDone={action('on-press-done')}
      notifyRepliesWithEmail={select(
        'Notify replies with email',
        ['true', 'false'],
        'false',
      )}
      displaySendConfirmation={select(
        'Display Send Confirmation Modal',
        ['true', 'false'],
        'false',
      )}
      isUpdatingMailboxSettings={boolean('Is updating mailbox settings', false)}
    />
  ));
