import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  text,
  number,
  boolean,
} from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';
import { AttachedFileMessage } from '.';

const fileSizeOptions = {
  min: 0,
  max: 20000,
};

// CORS error workaround: https://github.com/storybookjs/storybook/issues/7215
configureActions({
  depth: 2, // anything higher than 2 causes CORS error in iframe postMessage method
});

storiesOf('Molecule - AttachedFileMessage', module)
  .addDecorator(withKnobs)
  .add('Own File Message', () => (
    <AttachedFileMessage
      fileUrl={text('File URL', 'https://www.google.com')}
      theme={select('Theme', ['own', 'others'], 'own')}
      fileName={text('File Name', 'The File Name.jpg')}
      fileSizeInKB={number('File Size in KB', 124, fileSizeOptions)}
      isRead={boolean('Is Read', false)}
      dateSent={text('Date Sent', '17:45')}
      onDownloadFile={action('on-click-download-image')}
      onClickImage={action('on-click-image')}
    />
  ))
  .add('Others File Message', () => (
    <AttachedFileMessage
      fileUrl={text('File URL', 'https://www.google.com')}
      theme={select('Theme', ['own', 'others'], 'others')}
      fileName={text('File Name', 'The File Name.jpg')}
      fileSizeInKB={number('File Size in KB', 124, fileSizeOptions)}
      isRead={boolean('Is Read', false)}
      dateSent={text('Date Sent', '17:45')}
      onDownloadFile={action('on-click-download-image')}
      onClickImage={action('on-click-image')}
    />
  ))
  .add('Image File Message', () => (
    <AttachedFileMessage
      theme={select('Theme', ['own', 'others'], 'others')}
      fileName={text('File Name', 'The File Name.jpg')}
      fileSizeInKB={number('File Size in KB', 124, fileSizeOptions)}
      fileUrl={text(
        'Image Src',
        'https://timesofindia.indiatimes.com/thumb/msid-75628716,width-1200,height-900,resizemode-4/.jpg',
      )}
      isImage={true}
      onClickImage={action('on-click-image')}
      isRead={boolean('Is Read', false)}
      dateSent={text('Date Sent', '17:45')}
      onDownloadFile={action('on-click-download-image')}
    />
  ));
