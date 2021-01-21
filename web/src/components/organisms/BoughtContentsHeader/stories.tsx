import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { BoughtContentTypeKeys } from '../../molecules/ContentListSelector';
import { BoughtContentsHeader } from '.';
import { words } from '../../../constants/words';

const contentTypes = {
  boughtPastVideos: words.boughtPastVideos,
  case: words.case,
};

storiesOf('Organisms - BoughtContentsHeader', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .add('Default -  BoughtContentsHeader', () => {
    const [, setContentType] = useState<BoughtContentTypeKeys>(
      'boughtPastVideos',
    );

    return (
      <BoughtContentsHeader
        title={text('Title', words.purchasedItems)}
        onPressSelect={(contentTypeKey: BoughtContentTypeKeys) =>
          setContentType(contentTypeKey)
        }
        selectedType={select(
          'Selected Type',
          ['boughtPastVideos', 'case'],
          'boughtPastVideos',
        )}
        contentTypes={contentTypes}
      />
    );
  });
