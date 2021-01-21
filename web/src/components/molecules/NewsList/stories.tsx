import React from 'react';
import { storiesOf } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { NewsList } from '.';
import { SAMPLE_DATA } from './constants';

storiesOf('Molecule - NewsList', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('News List', () => <NewsList newsData={SAMPLE_DATA} />);
