import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ContentList } from '.';

export const DUMMY_CONTENT = [
  {
    id: 'content1',
    title:
      '【マネカレ】FXのプロになる！ ！FX基礎知識とチャートの見方完全攻略講座',
    description:
      '〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜',
    points: 50,
    thumbnailURL:
      'https://static.depositphotos.com/storage/image/b2abb61f9dbb99666610308d25ac37837fec0be8.jpg',
    tags: {
      showOnMyPage: true,
      primeContent: true,
      eliteContent: true,
      regularContent: true,
    },
    isRestricted: false,
  },
  {
    id: 'content2',
    title:
      '【マネカレ】FXのプロになる！ ！FX基礎知識とチャートの見方完全攻略講座',
    description:
      '〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜',
    points: 50,
    thumbnailURL:
      'https://static.depositphotos.com/storage/image/b2abb61f9dbb99666610308d25ac37837fec0be8.jpg',
    tags: {
      showOnMyPage: true,
      primeContent: true,
      eliteContent: true,
      regularContent: false,
    },
    isRestricted: true,
  },
  {
    id: 'content3',
    title:
      '【マネカレ】FXのプロになる！ ！FX基礎知識とチャートの見方完全攻略講座',
    description:
      '〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜',
    points: 50,
    thumbnailURL:
      'https://static.depositphotos.com/storage/image/b2abb61f9dbb99666610308d25ac37837fec0be8.jpg',
    tags: {
      showOnMyPage: true,
      primeContent: true,
      eliteContent: true,
      regularContent: false,
    },
    isRestricted: true,
  },
  {
    id: 'content4',
    title:
      '【マネカレ】FXのプロになる！ ！FX基礎知識とチャートの見方完全攻略講座',
    description:
      '〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜',
    points: 50,
    thumbnailURL:
      'https://static.depositphotos.com/storage/image/b2abb61f9dbb99666610308d25ac37837fec0be8.jpg',
    tags: {
      showOnMyPage: true,
      primeContent: true,
      eliteContent: false,
      regularContent: false,
    },
    isRestricted: true,
  },
];

storiesOf('Organism - ContentList', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default ContentList', () => (
    <ContentList
      contents={object('Contents', DUMMY_CONTENT)}
      onPressPurchase={action('onPressPurchase')}
      userId="testUser"
      purchases={{
        testPurchase: {
          id: 'testPurchase',
          ref: 'testRef',
          title: '',
          points: 4,
          tags: { videoLecture: true },
        },
      }}
      contentType={select(
        'Content Type',
        ['pastVideos', 'pastProjectVideo', 'eaProgram', 'manualList'],
        'pastVideos',
      )}
      navigateToManualContentViewer={action(
        'navigate-to-manual-content-viewer',
      )}
      isFetchingVideos={boolean('Is Fetching Videos', false)}
      isFetchingProjectsContents={boolean(
        'Is Fetching Project Contents',
        false,
      )}
      isFetchingEAPrograms={boolean('Is Fetching EAPrograms', false)}
      isFetchingManuals={boolean('Is Fetching Manuals', false)}
    />
  ));
