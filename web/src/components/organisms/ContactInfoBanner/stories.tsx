import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, withActions } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ContactInfoBanner } from '.';

storiesOf('Organism - ContactInfoBanner', module)
  .addDecorator(withActions())
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Contact Info Banner', () => (
    <ContactInfoBanner
      onClickCall={action('on-click-call')}
      onClickMail={action('on-click-mail')}
    />
  ));
