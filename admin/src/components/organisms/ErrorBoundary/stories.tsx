import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { LeftSidebar } from '../../molecules/LeftSidebar';
import { ErrorBoundary } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const initialEntries = [
  '/users',
  '/teachers',
  '/videos',
  '/project-contents',
  '/ea-programs',
  '/articles',
  '/mailbox',
  '/pending-payments',
  '/logout',
];

storiesOf('Organism - ErrorBoundary', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={1}>
      {getStory()}
    </MemoryRouter>
  ))
  .add('Default page has error', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <ErrorBoundary>
        <div>{new Error('Content Error')} </div>
      </ErrorBoundary>
    </Container>
  ));
