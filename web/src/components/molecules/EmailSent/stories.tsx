import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MemoryRouter } from 'react-router-dom';

import { EmailSent } from '.';

storiesOf('Molecule - EmailSent', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Default Email Sent Has Been Sent', () => (
    <EmailSent
      emailType={select(
        'Type',
        ['verifyEmail', 'resetPassword', 'recoverEmail'],
        'verifyEmail',
      )}
      isLoggedIn={boolean('Is Logged In', false)}
      email={text('Email', 'test@email.com')}
    />
  ));
