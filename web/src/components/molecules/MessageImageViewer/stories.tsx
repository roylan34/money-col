import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MessageImageViewer } from '.';

storiesOf('Molecule - MessageImageViewer', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
    storyshots: { disable: true },
  })
  .add('Message Image Viewer', () => (
    <MessageImageViewer
      imageSrc={text('Image Src', 'https://i.imgur.com/PjenVVj.jpg')}
      isVisible={boolean('Is Visible', true)}
      onClose={action('on-press-close')}
      onDownloadFile={action('on-click-download-file')}
    />
  ));
