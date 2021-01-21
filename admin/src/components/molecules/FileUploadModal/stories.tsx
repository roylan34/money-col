import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FileUploadModal } from '.';

storiesOf('Molecule - FileUploadModal', module)
  .addDecorator(withKnobs)
  .add('File Upload Modal', () => (
    <FileUploadModal
      title={text('Title', '動画のアップロード')}
      isVisible={boolean('Is Visible', true)}
      onClose={action('on-close')}
      onUpload={action('on-upload')}
    />
  ));
