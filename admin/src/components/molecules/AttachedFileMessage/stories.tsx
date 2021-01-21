import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  text,
  number,
  boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { AttachedFileMessage } from '.';

const fileSizeOptions = {
  min: 0,
  max: 20000,
};

storiesOf('Molecule - AttachedFileMessage', module)
  .addDecorator(withKnobs)
  .add('Own File Message', () => (
    <AttachedFileMessage
      fileUrl={text('File URL', 'https://www.google.com')}
      theme={select('Theme', ['own', 'others'], 'own')}
      fileName={text('File Name', 'The File Name.jpg')}
      fileSizeInKB={number('File Size in KB', 124, fileSizeOptions)}
      isRead={boolean('Is Read', false)}
      dateSent={text('Date Sent', '09/07/20 11:24')}
    />
  ))
  .add('Others File Message', () => (
    <AttachedFileMessage
      fileUrl={text('File URL', 'https://www.google.com')}
      theme={select('Theme', ['own', 'others'], 'others')}
      fileName={text('File Name', 'The File Name.jpg')}
      fileSizeInKB={number('File Size in KB', 124, fileSizeOptions)}
      isRead={boolean('Is Read', false)}
      dateSent={text('Date Sent', '09/07/20 11:24')}
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
      dateSent={text('Date Sent', '09/07/20 11:24')}
    />
  ));
