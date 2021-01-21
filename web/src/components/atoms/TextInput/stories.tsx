import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { TextInput } from '.';

const Container = styled.div`
  display: inline-block;
  width: 100px;
`;

const themeValues: Array<
  'default' | 'blueBottomBorder' | 'noBorder' | 'blue'
> = ['default', 'blueBottomBorder', 'noBorder', 'blue'];

storiesOf('Atom - TextInput', module)
  .addDecorator(withKnobs)
  .add('Text input', () => (
    <TextInput
      placeholder={text('Placeholder', 'Employee Number')}
      theme={select('Theme', themeValues, 'default')}
    />
  ))
  .add('Password', () => (
    <TextInput
      placeholder="Password"
      type="password"
      theme={select('Theme', themeValues, 'default')}
    />
  ))
  .add('Japanese placeholder', () => (
    <TextInput
      placeholder="ログイン"
      theme={select('Theme', themeValues, 'default')}
    />
  ))
  .add('Blue Bottom Border', () => (
    <TextInput
      placeholder="ログイン"
      theme={select('Theme', themeValues, 'blueBottomBorder')}
    />
  ))
  .add('With container', () => (
    <Container>
      <TextInput
        placeholder="ログイン"
        theme={select('Theme', themeValues, 'default')}
      />
    </Container>
  ))
  .add('Disabled', () => (
    <TextInput
      placeholder={text('Placeholder', 'Employee Number')}
      theme={select('Theme', themeValues, 'default')}
      disabled={boolean('Disabled', true)}
    />
  ));
