import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ContentListSelector } from '.';
import { words } from '../../../constants/words';

const contentTypes = {
  pastVideos: words.pastVideos,
  pastProjectVideo: words.pastProjectVideo,
  eaProgram: words.eaProgram,
  manualList: words.manualList,
};

storiesOf('Molecule - ContentListSelector', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default - ContentListSelector', () => (
    <ContentListSelector
      onPressSelect={action('onPressSelect')}
      selectedType={select(
        'Selected Type',
        ['pastVideos', 'pastProjectVideo', 'eaProgram', 'manualList'],
        'pastVideos',
      )}
      contentTypes={contentTypes}
    />
  ));
