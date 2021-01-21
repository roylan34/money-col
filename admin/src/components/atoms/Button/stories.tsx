import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button, EditButton } from '.';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  width: 100px;
  border-radius: 25px;
`;

const AuthButtonWrapper = styled.div`
  width: 176px;
  height: 50px;
  border-radius: 4px;
`;

storiesOf('Atom - Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <Container>
      <Button
        onPress={action('OnPress')}
        title={text('Title', 'Me iz Button')}
        theme={select('Theme', ['primary', 'secondary', 'light'], 'primary')}
        textSize={text('Font Size', '14px')}
      />
    </Container>
  ))
  .add('Auth Button', () => (
    <AuthButtonWrapper>
      <Button
        onPress={action('OnPress')}
        title={text('Title', 'パスワード変更')}
        theme={select('Theme', ['primary', 'secondary', 'light'], 'primary')}
        textSize={text('Font Size', '16px')}
      />
    </AuthButtonWrapper>
  ))
  .add('Disabled Button', () => (
    <Container>
      <Button disabled title="Me iz disabled" onPress={action('OnPress')} />
    </Container>
  ))
  .add('Loading Button', () => (
    <Container>
      <Button
        onPress={action('OnPress')}
        title={text('Title', 'Me iz Button')}
        theme={select('Theme', ['primary', 'secondary', 'light'], 'primary')}
        textSize={text('Font Size', '14px')}
        isLoading
      />
    </Container>
  ))
  .add('Edit Button', () => (
    <Container>
      <EditButton onClick={action('on-press-edit')} />
    </Container>
  ));
