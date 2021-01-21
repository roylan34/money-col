import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ContentTypeKeys } from '../../molecules/ContentListSelector';
import { ContentListHeader } from '.';
import { words } from '../../../constants';

const contentTypes = {
  pastVideos: words.pastVideos,
  pastProjectVideo: words.pastProjectVideo,
  eaProgram: words.eaProgram,
  manualList: words.manualList,
};

storiesOf('Organisms - ContentListHeader', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .add('Default -  ContentListHeader', () => {
    const [contentType, setContentType] = useState<ContentTypeKeys>(
      'pastVideos',
    );

    return (
      <ContentListHeader
        onPressSelect={(contentTypeKey: ContentTypeKeys) =>
          setContentType(contentTypeKey)
        }
        contentTitle={words[contentType]}
        selectedType={select(
          'Selected Type',
          ['pastVideos', 'pastProjectVideo', 'eaProgram', 'manualList'],
          'pastVideos',
        )}
        contentTypes={contentTypes}
      />
    );
  });
