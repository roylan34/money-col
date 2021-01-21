import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { TopNavBar } from '../../organisms/TopNavBar';
import { ContactInfoBanner } from '../../organisms/ContactInfoBanner';

import TermsOfServices from './TermsOfServices';
import PrivacyPolicy from './PrivacyPolicy';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

storiesOf('Template - UserAgreement', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  })
  .add('Privacy Policy', () => (
    <Container>
      <TopNavBar
        homeLink=""
        links={{
          myPageTopUrl: '/',
        }}
        hasNotif
        profileLabel=""
        profileImgSrc=""
        name=""
        onPressHamburgerItem={action('on-press-hamburger-item')}
        isAuthenticated={true}
      />
      <PrivacyPolicy onCloseTab={action('on-click-go-close')} />
      <ContactInfoBanner
        onClickCall={action('on-click-call')}
        onClickMail={action('on-click-mail')}
      />
    </Container>
  ))
  .add('Terms of Services', () => (
    <Container>
      <TopNavBar
        homeLink=""
        links={{
          myPageTopUrl: '/',
        }}
        hasNotif
        profileLabel=""
        profileImgSrc=""
        name=""
        onPressHamburgerItem={action('on-press-hamburger-item')}
        isAuthenticated={true}
      />
      <TermsOfServices onCloseTab={action('on-click-close')} />
      <ContactInfoBanner
        onClickCall={action('on-click-call')}
        onClickMail={action('on-click-mail')}
      />
    </Container>
  ));
