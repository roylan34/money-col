import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withActions, action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { SignUp } from '.';
import { TopNavBar } from '../../organisms/TopNavBar';
import { ContactInfoBanner } from '../../organisms/ContactInfoBanner';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

storiesOf('Template - SignUp', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withActions())
  .add('Default Sign Up Template', () => (
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
        isAuthenticated={boolean('Is Authenticated', false)}
      />
      <SignUp
        signUp={action('on-click-register')}
        signUpError=""
        isSignUpPending={boolean('Is Signup Pending', false)}
      />
      <ContactInfoBanner
        onClickCall={action('on-click-call')}
        onClickMail={action('on-click-mail')}
      />
    </Container>
  ));
