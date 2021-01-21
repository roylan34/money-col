import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { TextArea } from '.';
import styled from 'styled-components';

const Container = styled.div`
  width: 550px;
  height: 251px;
`;

storiesOf('Atom - TextArea', module)
  .addDecorator(withKnobs)
  .add('Default Text Area', () => (
    <Container>
      <TextArea
        placeholder={text('Placeholder', '本文を入力')}
        disabled={boolean('Disabled', false)}
        onChange={action('OnChange')}
      />
    </Container>
  ))
  .add('No Border Text Area', () => (
    <Container>
      <TextArea
        placeholder={text('Placeholder', '本文を入力')}
        disabled={boolean('Disabled', false)}
        onChange={action('OnChange')}
        theme="noBorder"
      />
    </Container>
  ));
