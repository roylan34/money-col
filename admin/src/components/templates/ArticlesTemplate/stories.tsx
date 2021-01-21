import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { IDataTableColumn } from 'react-data-table-component';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { ArticlesTemplate } from '.';
import { LeftSidebar } from '../../molecules/LeftSidebar';
import { DUMMY_ARTICLES } from './dummy';

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

storiesOf('Template - ArticlesTemplate', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={5}>
      {getStory()}
    </MemoryRouter>
  ))
  .add('Articles Template', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <ArticlesTemplate
        data={(DUMMY_ARTICLES as unknown) as IDataTableColumn<Object>[]}
        sortServer={false}
        onPostArticle={action('on-post-article')}
        onDeleteSelected={action('on-delete-selected')}
        onChangeSelect={action('on-change-select')}
        onSort={action('on-sort')}
        onUploadAndUpdate={action('on-upload-and-update')}
        onEditFileDesc={action('on-edit-file-description')}
      />
    </Container>
  ));
