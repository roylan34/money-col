import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MovieItem } from '.';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { SAMPLE_CARD_DATA } from './constants';

storiesOf('Organism - MovieItem', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Movie Item', () => (
    <MovieItem
      title={text('Title', 'あなたにおすすめの過去動画')}
      iconKey={select(
        'Icons',
        ['recommendedVideos', 'recommendedTopics', 'recommendedEA'],
        'recommendedVideos',
      )}
      previewCardData={SAMPLE_CARD_DATA}
      handleOnPress={action('handleOnPress')}
      onPressCard={action('on-press-card')}
      contentType={select(
        'Content Type',
        ['recommendedPastVideos', 'recommendedTopics', 'recommendedEA'],
        'recommendedPastVideos',
      )}
      isFetching={boolean('Is Fetching', false)}
      userId={'lsknVOSDFlsdkfj'}
    />
  ));
