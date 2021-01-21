import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MailboxSettingsContent } from '.';

storiesOf(
  'Molecule - MailboxSettingsContent',
  module,
).add('MailboxSettingsContent', () => (
  <MailboxSettingsContent
    onPressDone={action('on-press-done')}
    notifSettings={'false'}
    notifOfUsageSettings={'false'}
  />
));
