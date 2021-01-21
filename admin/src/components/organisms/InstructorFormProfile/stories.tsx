import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { InstructorFormProfile } from '.';

storiesOf('Organism - InstructorFormProfile', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addDecorator(withKnobs)
  .add('Update Instructor Profile', () => (
    <InstructorFormProfile
      lastName={text('Last Name', '')}
      firstName={text('First Name', '')}
      email={text('Email', '')}
      imageSource={text('Profile Photo', '')}
      isNotifyEmail={select('Notify email?', ['true', 'false'], 'true')}
      shouldDisableButton={boolean('Disable Update Button', false)}
      onChangeLastName={action('on-change-last-name')}
      onChangeFirstName={action('on-change-first-name')}
      onChangeEmail={action('on-change-email')}
      onPressUpdate={action('on-press-update')}
      onToggleEmailNotif={action('on-press-notifiy-email')}
      onAttachFile={action('on-press-attach-photo')}
    />
  ));
