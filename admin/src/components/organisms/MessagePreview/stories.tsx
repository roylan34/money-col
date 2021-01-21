import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MessagePreview } from '.';
import { DUMMY_MESSAGE_PREVIEW_DATA } from './constants';

storiesOf('Organism - MessagePreview', module)
  .addDecorator(withKnobs)
  .add('Default Message Preview List', () => {
    const [convoId, onChangeSelectedMsg] = useState('');

    return (
      <MessagePreview
        conversations={object('Messages', DUMMY_MESSAGE_PREVIEW_DATA)}
        messageSelected={convoId}
        onChangeSelectedMsg={onChangeSelectedMsg}
        onClickSettings={action('on-click-settings')}
        isAdmin={boolean('Is Admin', false)}
        onClickBackArrow={action('on-click-back-arrow')}
        onLoadMoreConvo={() => Promise.resolve("lastConvoId")}
        isRowConvoLoaded={() => false}
      />
    );
  })
  .add('Admin Message Preview List', () => {
    const [convoId, onChangeSelectedMsg] = useState('');

    return (
      <MessagePreview
        conversations={object('Messages', DUMMY_MESSAGE_PREVIEW_DATA)}
        messageSelected={convoId}
        onChangeSelectedMsg={onChangeSelectedMsg}
        onClickSettings={action('on-click-settings')}
        isAdmin={boolean('Is Admin', true)}
        onClickBackArrow={action('on-click-back-arrow')}
        onLoadMoreConvo={() => Promise.resolve("lastConvoId")}
        isRowConvoLoaded={() => false}
      />
    );
  });
