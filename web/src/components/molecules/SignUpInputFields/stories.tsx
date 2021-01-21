import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { SignUpInputFields } from '.';

const Container = styled.div`
  height: 100vh;
  width: 325px;
`;

storiesOf('Molecule - SignUpInputFields', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default Sign Up Form Fields', () => (
    <SignUpInputFields
      email={text('Email', '')}
      lastName={text('Last Name', '')}
      firstName={text('First Name', '')}
      password={text('Password', '')}
      retypedPassword={text('Retyped Password', '')}
      joinMailingList={select('Is Checked', ['true', 'false'], 'true')}
      onChangeEmail={action('on-change-email')}
      onChangeLastName={action('on-change-last-name')}
      onChangeFirstName={action('on-change-first-name')}
      onChangePassword={action('on-change-password')}
      onChangeRetypePassword={action('on-change-retype-password')}
      onChangeJoinMailingList={action('on-change-join-mailing-list')}
    />
  ))
  .add('Sign Up Form Fields With Container', () => (
    <Container>
      <SignUpInputFields
        email={text('Email', '')}
        lastName={text('Last Name', '')}
        firstName={text('First Name', '')}
        password={text('Password', '')}
        retypedPassword={text('Retyped Password', '')}
        joinMailingList={select('Is Checked', ['true', 'false'], 'true')}
        onChangeEmail={action('on-change-email')}
        onChangeLastName={action('on-change-last-name')}
        onChangeFirstName={action('on-change-first-name')}
        onChangePassword={action('on-change-password')}
        onChangeRetypePassword={action('on-change-retype-password')}
        onChangeJoinMailingList={action('on-change-join-mailing-list')}
      />
    </Container>
  ));
