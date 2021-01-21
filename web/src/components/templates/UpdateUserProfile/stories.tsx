import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { UpdateUserProfile } from '.';
import { TopNavBar } from '../../organisms/TopNavBar';
import { ContactInfoBanner } from '../../organisms/ContactInfoBanner';

const CARD_BRANDS = [
  'American Express',
  'Diners Club',
  'Discover',
  'JCB',
  'MasterCard',
  'UnionPay',
  'Visa',
  'Unknown',
];

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

storiesOf('Template - UpdateUserProfile', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .add('UpdateUserProfile - Basic Info', () => (
    <Container>
      <TopNavBar
        homeLink=""
        links={{
          myPageTopUrl: '/',
        }}
        hasNotif
        name=""
        profileLabel=""
        profileImgSrc=""
        onPressHamburgerItem={action('on-press-hamburger-item')}
        isAuthenticated={boolean('Is Authenticated', false)}
      />
      <UpdateUserProfile
        lastName={text('Last Name', 'マネカレ')}
        firstName={text('First Name', '太郎')}
        email={text('Email', 'test@vananaz.com')}
        updateBasicInfo={action('on-submit-basic-info')}
        basicInfoError={text('Update Basic Info Error', '')}
        initials={text('User Initials', 'マ太')}
        photoURL={text(
          'Photo URL',
          'http://p.favim.com/orig/2018/10/01/cartoon-profile-picture-cute-Favim.com-6346120.jpg',
        )}
        card={{
          brand: select('Card Brand', CARD_BRANDS, 'Unknown', 'Payment Info'),
          last4: text('Last 4 Digits', '0000', 'Payment Info'),
        }}
        hasCard={boolean('Has Card', false, 'Payment Info')}
        onPressDeleteCard={action('on-press-delete-card')}
        onSubmit={action('on-submit-card-info')}
        errors={object('Errors', {}, 'Payment Info')}
        isEmailVerified={boolean('Is email verified', false)}
      />
      <ContactInfoBanner
        onClickCall={action('on-click-call')}
        onClickMail={action('on-click-mail')}
      />
    </Container>
  ));
