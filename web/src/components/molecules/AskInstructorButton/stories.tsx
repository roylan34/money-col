import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { AskInstructorButton } from '.';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

storiesOf('Molecule - AskInstructorButton', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default AskInstructorButton', () => (
    <Container>
      <AskInstructorButton onPress={action('on-press')} />
    </Container>
  ));
