import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ArticleDescription } from '.';

storiesOf('Organism - ArticleDescriptionModal', module)
  .addDecorator(withKnobs)
  .add('Article Description', () => (
    <ArticleDescription
      onCloseModal={action('on-close-modal')}
      onPressRelease={action('on-press-release')}
      title={text('Title', '')}
      disclosure=""
      publishSetting=""
      id={text('ID', 'ashdjhwurgr123h')}
      name={text('File Name', 'File Name')}
      thumbnail={text('Thumbnail', '')}
    />
  ));
