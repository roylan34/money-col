import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MessageImageViewer } from '.';

storiesOf('Molecule - MessageImageViewer', module)
  .addDecorator(withKnobs)
  .add('Message Image Viewer', () => (
    <MessageImageViewer
      imageSrc={text('Image Src', 'https://i.imgur.com/PjenVVj.jpg')}
      isVisible={boolean('Is Visible', true)}
      onClose={action('on-press-close')}
    />
  ));
