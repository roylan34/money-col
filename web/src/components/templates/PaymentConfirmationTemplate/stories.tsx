import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';
import { TopNavBar } from '../../organisms/TopNavBar';
import { Footer } from '../../molecules/Footer';
import { PaymentConfirmationTemplate } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

storiesOf('Template - PaymentConfirmationTemplate', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  })
  .add('PaymentConfirmation Template', () => (
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
      <PaymentConfirmationTemplate
        theme={select('Theme', ['success', 'failedAddingPoints'], 'success')}
      />
      <Footer />
    </Container>
  ));
