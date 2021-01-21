import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ListItemMenu } from '.';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

storiesOf('Molecule - ListItemMenu', module).add('List Item Menu', () => (
  <Container>
    <ListItemMenu
      onClickEdit={action('on-click-edit')}
      onClickDelete={action('on-click-delete')}
    />
  </Container>
));
