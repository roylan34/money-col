import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { LoginForm } from '.';

const Container = styled.div`
  height: 100vh;
`;

storiesOf('Organisms - LoginForm', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withActions())
  .addDecorator(withKnobs)
  .add('Default Login form', () => (
    <Container>
      <LoginForm
        email={text('Email', 'hello@email.com')}
        password={text('Password', 'password1234')}
        errors={object('Error Object', {})}
        isButtonDisabled={boolean('Button Disabled', false)}
        onChangeEmail={action('on-email-change')}
        onChangePassword={action('on-password-change')}
        onClickLogin={action('on-button-click')}
        isLoginPending={boolean('Is Login Pending', false)}
      />
    </Container>
  ))
  .add('Login form With Error', () => (
    <Container>
      <LoginForm
        email={text('Email', 'hello@email.com')}
        password={text('Password', 'password1234')}
        errors={object('Error Object', {
          loginError1: '社員番号またはパスワードに誤りがあります',
        })}
        isButtonDisabled={boolean('Button Disabled', false)}
        onChangeEmail={action('on-email-change')}
        onChangePassword={action('on-password-change')}
        onClickLogin={action('on-button-click')}
        isLoginPending={boolean('Is Login Pending', false)}
      />
    </Container>
  ));
