import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs, select } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { PaymentConfirmation } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

storiesOf('Molecule - PaymentConfirmation', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Payment Confirmation', () => (
    <Container>
      <PaymentConfirmation
        theme={select('Theme', ['success', 'failedAddingPoints'], 'success')}
      />
    </Container>
  ));
