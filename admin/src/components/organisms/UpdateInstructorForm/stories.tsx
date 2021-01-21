import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { UpdateInstructorForm } from '.';

storiesOf('Organism - UpdateInstructorForm', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Update Instructor Form', () => (
    <UpdateInstructorForm
      onPressUpdate={action('on-press-update')}
      isNotifyEmail={select('Notify email?', ['true', 'false'], 'true')}
      lastName={text('Last Name', '')}
      firstName={text('First Name', '')}
      email={text('Email', '')}
      imageSource={text('Profile Photo', '')}
      onAttachFile={action('on-press-attach-photo')}
    />
  ));
