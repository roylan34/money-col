import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  object,
  text,
  number,
  boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { TopNavBar } from '../../organisms/TopNavBar';
import {
  DUMMY_ADS,
  DUMMY_RECOMMENDED_PREVIEW_DATA,
  DUMMY_INSTRUCTORS,
  // DUMMY_NEWS_DATA,
  DUMMY_PROFILE_CARD,
  DUMMY_POINTS,
  DUMMY_LINK_FOR_PURCHASING,
} from './content';
import { MyPage } from '.';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

storiesOf('Template - MyPage', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
    storyshots: { disable: true },
  })
  .addDecorator(withKnobs)
  .add('Default MyPage Template', () => (
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
      <MyPage
        // newsData={DUMMY_NEWS_DATA}
        profileCard={object('Profile Card Contents', DUMMY_PROFILE_CARD)}
        points={number('Points', DUMMY_POINTS)}
        linkForPurchasing={text(
          'Link for Purchasing',
          DUMMY_LINK_FOR_PURCHASING,
        )}
        recommendedMoviesPreview={DUMMY_RECOMMENDED_PREVIEW_DATA}
        instructors={object('Instructors', DUMMY_INSTRUCTORS)}
        purchases={{}}
        userId="jashhdjjhjkhj1"
        ads={object('ads', DUMMY_ADS)}
        onSubmitQuestion={action('on-submit-question')}
        onPressSeeMore={action('onPressSeeMore')}
        onPurchaseTile={action('purchase-tile')}
        navigateToContentViewer={action('navigate-to-content-viewer')}
        navigateToContents={action('navigate-to-contents')}
        isFetchingRecommendedVideos={boolean(
          'Is Fetching Recommended Videos',
          false,
        )}
        isFetchingRecommendedProjects={boolean(
          'Is Fetching Recommended Project Contents',
          false,
        )}
        isFetchingRecommendedEAPrograms={boolean(
          'Is Fetching Recommended EA Programs',
          false,
        )}
        isPurchasingContent={boolean('Is Purchasing Content', false)}
        // isFetchingNews={boolean('Is Fetching News', false)}
        isSendingMsg={boolean('Is Sending Msg', false)}
        onClickMail={action('on-click-mail')}
        isFromContentView={false}
        navigateToPurchasePoints={action('navigate-to-purchase-points')}
      />
    </Container>
  ));
