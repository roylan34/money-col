import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { ResetPassword } from '.';
import { TopNavBar } from '../../organisms/TopNavBar';
import { ContactInfoBanner } from '../../organisms/ContactInfoBanner';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

storiesOf('Template - ResetPassword', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Default ResetPassword Template', () => (
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
      <ResetPassword
        onSubmitResetPassword={action('onSubmitResetPassword')}
        error={text('Error', '')}
        isResetPasswordPending={boolean('Is Reset Password Pending', false)}
      />
      <ContactInfoBanner
        onClickCall={action('on-click-call')}
        onClickMail={action('on-click-mail')}
      />
    </Container>
  ));
