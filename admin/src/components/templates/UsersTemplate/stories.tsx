import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';
import { UsersTemplate } from '.';
import { DUMMY_USERS } from './constants';
import { LeftSidebar } from '../../molecules/LeftSidebar';
import { theme } from '../../../config';

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

storiesOf('Template - UsersTemplate', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={0}>
      {getStory()}
    </MemoryRouter>
  ))
  .addDecorator(storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  ))
  .add('List of Users', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <UsersTemplate
        data={DUMMY_USERS}
        // onChangeSearch={action('on-change-search')}
        onConfirmPoints={action('on-confirm-points')}
        onPressPrev={action('on-press-prev')}
        onPressNext={action('on-press-next')}
        hasPrevPage={boolean('hasPrevPage', false)}
        hasNextPage={boolean('hasNextPage', false)}
        isLoading={false}
      />
    </Container>
  ))
  .add('fetching users..', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <UsersTemplate
        data={DUMMY_USERS}
        // onChangeSearch={action('on-change-search')}
        onConfirmPoints={action('on-confirm-points')}
        onPressPrev={action('on-press-prev')}
        onPressNext={action('on-press-next')}
        hasPrevPage={boolean('hasPrevPage', false)}
        hasNextPage={boolean('hasNextPage', false)}
        isLoading={true}
      />
    </Container>
  ));
