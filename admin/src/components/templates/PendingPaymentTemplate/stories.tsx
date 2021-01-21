import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { PendingPaymentTemplate } from '.';
import { DUMMY_PENDING_DATA } from './constants';
import { LeftSidebar } from '../../molecules/LeftSidebar';

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

storiesOf('Template - PendingPaymentTemplate', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={7}>
      {getStory()}
    </MemoryRouter>
  ))
  .addDecorator(withKnobs)
  .add('Pending Payment Template', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <PendingPaymentTemplate
        data={DUMMY_PENDING_DATA}
        onAddPoints={action('on-add-points')}
        onPressPrev={action('on-press-prev')}
        onPressNext={action('on-press-next')}
        hasPrevPage={boolean('hasPrevPage', false)}
        hasNextPage={boolean('hasNextPage', false)}
      />
    </Container>
  ));
