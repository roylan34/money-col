import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { UpdateProfileTemplate } from '.';
import { LeftSidebar } from '../../molecules/LeftSidebar';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

const LeftSideBarContainer = styled.div`
  min-height: 100%;
`;

const Content = styled.div`
  margin-left: 67px;
`;

const initialEntries = ['/users', '/mailbox', '/logout'];

storiesOf('Template - UpdateProfileTemplate', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={0}>
      {getStory()}
    </MemoryRouter>
  ))
  .add('Default Update Profile', () => (
    <Container>
      <LeftSideBarContainer>
        <LeftSidebar isInstructor logOut={action('logout')} />
      </LeftSideBarContainer>
      <Content>
        <UpdateProfileTemplate
          onPressUpdate={action('on-press-update')}
          isNotifyEmail={select('Notify email?', ['true', 'false'], 'true')}
          lastName={text('Last Name', '')}
          firstName={text('First Name', '')}
          email={text('Email', '')}
        />
      </Content>
    </Container>
  ));
