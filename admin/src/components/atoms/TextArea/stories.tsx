import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { TextArea } from '.';
import styled from 'styled-components';

const Container = styled.div`
  width: 550px;
  height: 251px;
  font-size: 10px;
  line-height: 15px;
  border-radius: 4px;
`;

storiesOf('Atom - TextArea', module)
  .addDecorator(withKnobs)
  .add('Default Text Area', () => (
    <Container>
      <TextArea
        placeholder={text('Placeholder', '動画の説明')}
        disabled={boolean('Disabled', false)}
        onChange={action('OnChange')}
      />
    </Container>
  ))
  .add('Gray Text Area', () => (
    <Container>
      <TextArea
        placeholder={text('Placeholder', '動画の説明')}
        disabled={boolean('Disabled', false)}
        onChange={action('OnChange')}
        theme="gray"
      />
    </Container>
  ))
  .add('No Border Text Area', () => (
    <Container>
      <TextArea
        placeholder={text('Placeholder', '動画の説明')}
        disabled={boolean('Disabled', false)}
        onChange={action('OnChange')}
        theme="noBorder"
      />
    </Container>
  ))
  .add('Text Area with Character Limit', () => (
    <Container>
      <TextArea
        placeholder={text('Placeholder', '動画の説明')}
        disabled={boolean('Disabled', false)}
        onChange={action('OnChange')}
        theme="gray"
        maxLimit={number('Max Limit', 100)}
        value={text(
          'Value of Text Area',
          'This Text Area has a character limit of 100.',
        )}
      />
    </Container>
  ))
  .add('Text Area that has exceeded limit', () => (
    <Container>
      <TextArea
        placeholder={text('Placeholder', '動画の説明')}
        disabled={boolean('Disabled', false)}
        onChange={action('OnChange')}
        theme="gray"
        maxLimit={number('Max Limit', 100)}
        value={text(
          'Value of Text Area',
          'This Text Area has a character limit of 100. dfjhdjfsshsjkddhsfjksddhsfkjhsdfksdjasdjasdjasjdqwertyu',
        )}
      />
    </Container>
  ));
