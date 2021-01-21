import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Button } from '.';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  width: 100px;
  border-radius: 25px;
`;

const onPress = (): void => {};

storiesOf('Atom - Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <Container>
      <Button
        onPress={onPress}
        title={text('Title', 'Me iz Button')}
        theme={select(
          'Theme',
          ['primary', 'secondary', 'light', 'inverse'],
          'primary',
        )}
        textSize={text('Font Size', '14px')}
      />
    </Container>
  ))
  .add('Disabled Button', () => (
    <Container>
      <Button disabled title="Me iz disabled" onPress={onPress} />
    </Container>
  ))
  .add(
    'Button Loading...',
    () => (
      <Container>
        <Button disabled title="Me iz loading" onPress={onPress} isLoading />
      </Container>
    ),
    {
      storyshots: { disable: true },
    },
  );
