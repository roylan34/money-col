import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import { AttachFile } from '.';

storiesOf('Molecule - AttachFile', module)
  .addDecorator(withKnobs)
  .add('AskInstructor Theme', () => (
    <AttachFile
      onChange={action('OnChange')}
      theme={select('Theme', ['askInstructor', 'basicInfo'], 'askInstructor')}
    />
  ))
  .add('BasicInfo Theme', () => (
    <AttachFile
      onChange={action('OnChange')}
      theme={select('Theme', ['askInstructor', 'basicInfo'], 'basicInfo')}
    />
  ));
