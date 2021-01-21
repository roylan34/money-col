import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { Thumbnail } from '.';

storiesOf('Atom - Thumbnail', module)
  .addDecorator(withKnobs)
  .add('Video Thumbnail', () => (
    <Thumbnail
      imgUrl={text(
        'Thumbnail URL',
        'https://i.pinimg.com/originals/8b/95/f8/8b95f82995e881ada8d57f1a56672f8e.png',
      )}
      videoLength={number('Video Length in milliseconds', 144000)}
    />
  ));
