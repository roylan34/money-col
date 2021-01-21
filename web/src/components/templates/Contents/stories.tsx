import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { Contents } from '.';
import { TopNavBar } from '../../organisms/TopNavBar';
import { ContentTypeKeys } from '../../molecules/ContentListSelector';
import { ContactInfoBanner } from '../../organisms/ContactInfoBanner';

import { words } from '../../../constants';
import {
  DUMMY_CONTENT_VIDEOS,
  DUMMY_CONTENT_PAST_PROJ_VIDS,
  DUMMY_CONTENT_EA_PROGRAMS,
  DUMMY_CONTENT_MANUALS,
} from './dummy';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const lists = {
  pastVideos: DUMMY_CONTENT_VIDEOS,
  pastProjectVideo: DUMMY_CONTENT_PAST_PROJ_VIDS,
  eaProgram: DUMMY_CONTENT_EA_PROGRAMS,
  manualList: DUMMY_CONTENT_MANUALS,
};

const contentTypes = {
  pastVideos: words.pastVideos,
  pastProjectVideo: words.pastProjectVideo,
  eaProgram: words.eaProgram,
  manualList: words.manualList,
};

storiesOf('Template - Contents', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Default User with Enough Points -  Contents', () => {
    const [contentType, setContentType] = useState<ContentTypeKeys>(
      'pastVideos',
    );

    return (
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
        <Contents
          userPoints={number("User's points", 1000)}
          contentTitle={words[contentType]}
          contentTypes={contentTypes}
          contents={lists[contentType]}
          onSelectContentType={(contentTypeKey: ContentTypeKeys) =>
            setContentType(contentTypeKey)
          }
          onPressPurchase={action('onPressPurchase')}
          onPressPurchasePoints={action('onPressPurchasePoints')}
          selectedType={select(
            'Selected Type',
            ['pastVideos', 'pastProjectVideo', 'eaProgram', 'manualList'],
            'pastVideos',
          )}
          userId="testUser"
          purchases={{
            testPurchase: {
              id: 'testPurchase',
              ref: 'testRef',
              tags: { videoLecture: true },
              title: '',
              points: 4,
            },
          }}
          navigateToManualContentViewer={action(
            'navigate-to-manual-content-viewer',
          )}
          isFetchingVideos={boolean('Is Fetching Videos', false)}
          isFetchingProjectContents={boolean(
            'Is Fetching Project Contents',
            false,
          )}
          isFetchingEAPrograms={boolean('Is Fetching EAPrograms', false)}
          isFetchingManuals={boolean('Is Fetching Manuals', false)}
          isPurchasingContent={boolean('Is Purchasing Content', false)}
        />
        <ContactInfoBanner
          onClickCall={action('on-click-call')}
          onClickMail={action('on-click-mail')}
        />
      </Container>
    );
  })
  .add('Default User with Low Points -  Contents', () => {
    const [contentType, setContentType] = useState<ContentTypeKeys>(
      'pastVideos',
    );

    return (
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
        <Contents
          userPoints={number("User's points", 5)}
          contentTitle={words[contentType]}
          contentTypes={contentTypes}
          contents={lists[contentType]}
          onSelectContentType={(contentTypeKey: ContentTypeKeys) =>
            setContentType(contentTypeKey)
          }
          onPressPurchase={action('onPressPurchase')}
          onPressPurchasePoints={action('onPressPurchasePoints')}
          selectedType={select(
            'Selected Type',
            ['pastVideos', 'pastProjectVideo', 'eaProgram', 'manualList'],
            'pastVideos',
          )}
          userId="testUser"
          purchases={{
            testPurchase: {
              id: 'testPurchase',
              ref: 'testRef',
              tags: { videoLecture: true },
              title: '',
              points: 4,
            },
          }}
          navigateToManualContentViewer={action(
            'navigate-to-content-manual-viewer',
          )}
          isFetchingVideos={boolean('Is Fetching Videos', false)}
          isFetchingProjectContents={boolean(
            'Is Fetching Project Contents',
            false,
          )}
          isFetchingEAPrograms={boolean('Is Fetching EAPrograms', false)}
          isFetchingManuals={boolean('Is Fetching Manuals', false)}
          isPurchasingContent={boolean('Is Purchasing Content', false)}
        />
        <ContactInfoBanner
          onClickCall={action('on-click-call')}
          onClickMail={action('on-click-mail')}
        />
      </Container>
    );
  });
