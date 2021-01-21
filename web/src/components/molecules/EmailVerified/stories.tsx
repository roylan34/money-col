import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { EmailVerified } from '.';

storiesOf('Molecule - EmailVerified', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default Email Verification Has Been Sent', () => <EmailVerified />)
  .add('Default Email Has Been Verified', () => <EmailVerified />);
