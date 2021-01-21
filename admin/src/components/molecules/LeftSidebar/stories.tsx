import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LeftSidebar } from '.';
import styled from 'styled-components';

const Container = styled.div`
  height: 900px;
`;

const initialEntries = [
  '/user',
  '/teacher',
  '/videos',
  '/project',
  '/eaProgram',
  'article',
  'mailbox',
  'logout',
];

storiesOf('Molecule - LeftSidebar', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={1}>
      {getStory()}
    </MemoryRouter>
  ))
  .add('Left Sidebar', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
    </Container>
  ));
