import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { TopNavBar } from '.';

const TEST_URLS = {
  myPageTopUrl: '/home',
};

storiesOf('Organism - TopNavBar', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Top Nav Bar with Profile Label', () => (
    <TopNavBar
      homeLink={text('Home Link', '/')}
      links={TEST_URLS}
      hasNotif={boolean('Mail has Notif', true)}
      profileLabel={text('Label of Avatar', '')}
      name={text('Name', 'Test User')}
      profileImgSrc={text(
        'Image Source of Avatar',
        'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
      )}
      onPressHamburgerItem={action('on-press-hamburger-item')}
      isAuthenticated={boolean('Is Authenticated', false)}
    />
  ));
