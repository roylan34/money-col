import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ToastProps } from '../../molecules/Toast';
import styled from 'styled-components';

import { ToastColumn } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Text = styled.p`
  font-size: 12;
  position: absolute;
  top: 0;
`;

storiesOf('Organism - ToastColumn', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default - ToastColumn', () => (
    <Container>
      <Text>
        ToastColumn will disappear in 5 seconds or as soon as the close button
        is pressed. Space on top is for the top nav bar.
      </Text>
      <ToastColumn
        toastsList={object('Toasts List', [
          {
            title: 'Title 1',
            message: 'Hello.',
            type: 'success',
            id: 'toast1',
          },
          { title: 'Error 1', message: 'Hello.', type: 'error', id: 'toast2' },
        ] as Array<ToastProps & { id: string }>)}
      />
    </Container>
  ));
