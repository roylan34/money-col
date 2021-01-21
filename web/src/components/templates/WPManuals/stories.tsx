import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { WPManuals } from '.';
import { TopNavBar } from '../../organisms/TopNavBar';
import { words } from '../../../constants/words';
import { ContactInfoBanner } from '../../organisms/ContactInfoBanner';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

const contentTypes = {
  pastVideos: words.pastVideos,
  pastProjectVideo: words.pastProjectVideo,
  eaProgram: words.eaProgram,
  manualList: words.manualList,
};

storiesOf('Template - WPManuals', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Default - WPManuals Template', () => (
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
      <WPManuals
        title={text('Title', 'マネカレ')}
        htmlString={text(
          'HTML String',
          `<p>Insert Manual Content from WordPress here</p>`,
        )}
        onSelectContentType={action('onSelectContentType')}
        contentTypes={contentTypes}
      />
      <ContactInfoBanner
        onClickCall={action('on-click-call')}
        onClickMail={action('on-click-mail')}
      />
    </Container>
  ));
