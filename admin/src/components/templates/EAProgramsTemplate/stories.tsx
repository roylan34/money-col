import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { EAProgramsTemplate } from '.';
import {
  DUMMY_EA_PROGRAMS,
  DUMMY_RECOMMENDED_ITEMS,
  DUMMY_RECOMMENDED_TITLES,
} from './dummy';
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

storiesOf('Template - EAProgramsTemplate', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={4}>
      {getStory()}
    </MemoryRouter>
  ))
  .add('EAPrograms Template', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <EAProgramsTemplate
        onPressDelete={action('on-press-delete')}
        // @ts-ignore
        data={DUMMY_EA_PROGRAMS}
        onChangeSelect={action('on-change-select')}
        onSort={action('on-sort')}
        onUploadAndUpdate={action('on-upload-and-update')}
        recommendedItems={DUMMY_RECOMMENDED_ITEMS}
        recommendedTitles={DUMMY_RECOMMENDED_TITLES}
        onEditFileDesc={action('on-edit-file-description')}
      />
    </Container>
  ));
