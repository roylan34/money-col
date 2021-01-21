import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';
import { MessagePreview } from '.';
import { DUMMY_MESSAGE_PREVIEW_DATA } from './constants';

storiesOf('Organism - MessagePreview', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Message Preview List', () => {
    const [convoId, onChangeSelectedMsg] = useState('');

    return (
      <MessagePreview
        conversations={object('Messages', DUMMY_MESSAGE_PREVIEW_DATA)}
        messageSelected={convoId}
        onChangeSelectedMsg={onChangeSelectedMsg}
        onClickSettings={action('on-click-settings')}
        onLoadMoreConvo={() => Promise.resolve('lastConvoId')}
        isRowConvoLoaded={() => false}
      />
    );
  });
