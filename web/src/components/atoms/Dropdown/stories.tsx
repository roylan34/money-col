import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from '.';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  max-width: 550px;
  height: 48px;
  border: thin solid #2b489f;
  border-radius: 2px;
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
`;

const SAMPLE = [
  'お金田　太郎　先生',
  '新咲　金一郎　先生',
  'Lelouch vi Brittania',
  'Koro sensei',
];

storiesOf('Atom - Dropdown', module).add('Default', () => (
  <Screen>
    <Container>
      <Dropdown data={SAMPLE} value="" onChange={action('OnChange')} />
    </Container>
  </Screen>
));
