import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import { LeftSideBarItem } from '.';

const tabs = [
  'user',
  'teacher',
  'videos',
  'project',
  'eaProgram',
  'article',
  'mailbox',
  'logout',
];

storiesOf('Atom - LeftSideBarItem', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Left Sidebar Item', () => (
    <LeftSideBarItem
      tab={select('Tab', tabs, 'user')}
      logOut={action('logout')}
    />
  ));
