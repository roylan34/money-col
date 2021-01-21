import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { InstructorFormContents } from '.';

storiesOf('Molecule - InstructorFormContents', module)
  .addDecorator(withKnobs)
  .add('Register Instructor Form', () => (
    <InstructorFormContents
      lastName={text('Last Name', '')}
      firstName={text('First Name', '')}
      email={text('Email', '')}
      shouldDisableButton={boolean('Disable Register Button', false)}
      onChangeLastName={action('on-change-last-name')}
      onChangeFirstName={action('on-change-first-name')}
      onChangeEmail={action('on-change-email')}
      onPressCancel={action('on-press-cancel')}
      onPressRegister={action('on-press-register')}
    />
  ));
