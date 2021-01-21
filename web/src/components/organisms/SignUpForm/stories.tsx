import React from 'react';
import { storiesOf } from '@storybook/react';
import { withActions, action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  object,
  boolean,
  select,
} from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { SignUpForm } from '.';

const Container = styled.div`
  height: 100vh;
`;

storiesOf('Organism - SignUpForm', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions())
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default Sign Up Form', () => (
    <Container>
      <SignUpForm
        email={text('Email', '')}
        lastName={text('Last Name', '')}
        firstName={text('First Name', '')}
        password={text('Password', '')}
        retypedPassword={text('Retyped Password', '')}
        joinMailingList={select('Is Checked', ['true', 'false'], 'true')}
        errors={object('Errors', {})}
        isSignUpPending={boolean('Is Signup Pending', false)}
        onChangeEmail={action('on-change-email')}
        onChangeLastName={action('on-change-last-name')}
        onChangeFirstName={action('on-change-first-name')}
        onChangePassword={action('on-change-password')}
        onChangeRetypePassword={action('on-change-retyped-password')}
        onChangeJoinMailingList={action('on-change-join-mailing-list')}
        onClickSignUp={action('on-click-sign-up')}
        isButtonDisabled={boolean('Is Button Disabled', false)}
      />
    </Container>
  ))
  .add('Sign Up Form With Error', () => (
    <Container>
      <SignUpForm
        email={text('Email', '')}
        lastName={text('Last Name', '')}
        firstName={text('First Name', '')}
        password={text('Password', '')}
        retypedPassword={text('Retyped Password', '')}
        joinMailingList={select('Is Checked', ['true', 'false'], 'true')}
        errors={object('Errors', {
          error1: 'このフィールドは入力必須です。',
        })}
        isSignUpPending={boolean('Is Signup Pending', false)}
        onChangeEmail={action('on-change-email')}
        onChangeLastName={action('on-change-last-name')}
        onChangeFirstName={action('on-change-first-name')}
        onChangePassword={action('on-change-password')}
        onChangeRetypePassword={action('on-change-retyped-password')}
        onChangeJoinMailingList={action('on-change-join-mailing-list')}
        onClickSignUp={action('on-click-sign-up')}
        isButtonDisabled={boolean('Is Button Disabled', true)}
      />
    </Container>
  ));
