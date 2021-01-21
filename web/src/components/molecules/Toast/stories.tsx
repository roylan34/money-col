import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { Toast } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Text = styled.p`
  font-size: 12;
  position: absolute;
  bottom: 10px;
`;

storiesOf('Molecule - Toast', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Success - Toast', () => (
    <Container>
      <Text>
        Toast will disappear in 5 seconds or as soon as the close button is
        pressed
      </Text>
      <Toast
        title={text('Title', '更新完了')}
        message={text('Message', '◯◯の更新が正常に行われました。')}
        type={select('Type', ['error', 'success', 'reward'], 'success')}
      />
    </Container>
  ))
  .add('Error - Toast', () => (
    <Container>
      <Text>
        Toast will disappear in 5 seconds or as soon as the close button is
        pressed
      </Text>
      <Toast
        title={text('Title', 'エラー')}
        message={text('Message', 'エラーが発生しました。もう一度お試し下さい')}
        type={select('Type', ['error', 'success', 'reward'], 'error')}
      />
    </Container>
  ))
  .add('Reward - Toast', () => (
    <Container>
      <Text>
        Toast will disappear in 5 seconds or as soon as the close button is
        pressed
      </Text>
      <Toast
        title={text('Title', '◯ptがキャッシュバックされました')}
        message={text('Message', '')}
        type={select('Type', ['error', 'success', 'reward'], 'reward')}
      />
    </Container>
  ));
