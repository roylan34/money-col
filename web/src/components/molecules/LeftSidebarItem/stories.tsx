import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';

import { LeftSidebarItem } from '.';
import { words } from '../../../constants';

const Container = styled.div`
  background-color: #033297;
  height: 100vh;
  width: 100vw;
`;

const sidebarContents = words.sidebar;

storiesOf('Molecule - LeftSidebarItem', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Default LeftSidebarItem', () => (
    <Container>
      <LeftSidebarItem
        title={text('Title', sidebarContents[0].title)}
        subTitle={text('SubTitle', sidebarContents[0].subTitle)}
        link={text('Link', 'https://www.google.com/')}
      />
    </Container>
  ));
