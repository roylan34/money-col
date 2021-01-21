import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { RegisterInstructorForm } from '.';

storiesOf(
  'Organism - RegisterInstructorForm',
  module,
).add('Register Instructor Form', () => (
  <RegisterInstructorForm
    onPressBack={action('on-press-back')}
    onPressCancel={action('on-press-cancel')}
    onRegister={action('on-register')}
    lastName={text('Last Name', '')}
    firstName={text('First Name', '')}
    email={text('Email', '')}
  />
));
