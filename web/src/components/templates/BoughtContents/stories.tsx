import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { BoughtContentsTemplate } from '.';
import { DUMMY_CONTENT_VIDEOS, DUMMY_CONTENT_PAST_PROJ_VIDS } from './dummy';
import { TopNavBar } from '../../organisms/TopNavBar';
import { BoughtContentTypes } from '../../organisms/BoughtContentsHeader/types';
import { words } from '../../../constants';
import { ContactInfoBanner } from '../../organisms/ContactInfoBanner';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const contentTypes = {
  videos: words.boughtContentsHeaders.videos,
  projectContents: words.boughtContentsHeaders.projectContents,
};

const sampleData = {
  videos: DUMMY_CONTENT_VIDEOS,
  projectContents: DUMMY_CONTENT_PAST_PROJ_VIDS,
};

storiesOf('Template - BoughtContents', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addDecorator(withKnobs)
  .add('Bought Contents', () => {
    const [contentType, setContentType] = useState<BoughtContentTypes>(
      'videos',
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
        <BoughtContentsTemplate
          title={words.purchasedItems}
          contentTypes={contentTypes}
          selectedType={contentType}
          onSelectContentType={(contentTypeKey: BoughtContentTypes) =>
            setContentType(contentTypeKey)
          }
          data={sampleData[contentType]}
          onPressCard={action('on-press-card')}
        />
        <ContactInfoBanner
          onClickCall={action('on-click-call')}
          onClickMail={action('on-click-mail')}
        />
      </Container>
    );
  });
