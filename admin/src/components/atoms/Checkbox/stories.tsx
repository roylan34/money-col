import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '.';
import styled from 'styled-components';
import { theme } from '../../../config/index';

const Container = styled.div`
  width: 321px;
  height: 30px;
  ${theme.handleTextOverflow};
`;

storiesOf('Atom - Checkbox', module)
  .addDecorator(withKnobs)
  .add('Default Checkbox', () => (
    <Container>
      <Checkbox
        value={select('Is Checked', ['true', 'false'], 'true')}
        onToggle={action('OnToggle')}
        label={text('Label', 'ログイン状態を保存する')}
      />
    </Container>
  ))
  .add('Settings Checkbox', () => (
    <Container>
      <Checkbox
        value={select('Is Checked', ['true', 'false'], 'true')}
        onToggle={action('OnToggle')}
        label={text('Label', 'ログイン状態を保存する')}
        theme="settings"
      />
    </Container>
  ));
