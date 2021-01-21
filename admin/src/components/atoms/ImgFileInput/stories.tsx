import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ImgFileInput } from '.';

storiesOf('Atom - ImgFileInput', module)
  .add('Empty Image File Input', () => (
    <ImgFileInput onChangeFile={action('on-change-file')} value={null} />
  ))
  .add('Image File Input with URL', () => (
    <ImgFileInput
      onChangeFile={action('on-change-file')}
      value="https://cdn.myanimelist.net/s/common/uploaded_files/1446435249-fa90bbc0193df219dffb8b473b8f4b15.jpeg"
    />
  ));
