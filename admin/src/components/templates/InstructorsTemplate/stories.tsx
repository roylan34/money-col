import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import { IDataTableColumn } from 'react-data-table-component';
import styled from 'styled-components';
import { InstructorsTemplate } from '.';
import { LeftSidebar } from '../../molecules/LeftSidebar';
import { DUMMY_INSTRUCTORS, DUMMY_INSTRUCTOR_OBJECT } from './dummy';
import { Instructor } from '../../../domain/entities';

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

storiesOf('Template - InstructorsTemplate', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={1}>
      {getStory()}
    </MemoryRouter>
  ))
  .add('Instructors Template', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <InstructorsTemplate
        data={(DUMMY_INSTRUCTORS as unknown) as IDataTableColumn<Object>[]}
        onChangeSelect={action('on-change-select')}
        onDeleteSelected={action('on-delete-selected')}
        onPostInstructor={action('on-post-instructor')}
        onRegister={action('on-register')}
        onUpdate={action('on-update')}
        instructors={object(
          'instructors object',
          (DUMMY_INSTRUCTOR_OBJECT as unknown) as { [key: string]: Instructor },
        )}
      />
      ,
    </Container>
  ));
