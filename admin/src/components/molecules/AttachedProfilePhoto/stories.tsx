import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { AttachedProfilePhoto } from '.';

storiesOf('Molecule - AttachedProfilePhoto', module)
  .addDecorator(withKnobs)
  .add('Attached Profile Photo', () => {
    const [image, setImage] = useState<string>('');

    const attachPhoto = (file: File) => {
      if (file) {
        const reader = new window.FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => setImage(reader.result as string);
        reader.onerror = error => console.log(error);
      }
    };

    return (
      <AttachedProfilePhoto imageSource={image} onAttachFile={attachPhoto} />
    );
  });
