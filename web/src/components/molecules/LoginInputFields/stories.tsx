import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { LoginInputFields } from '.';

const Container = styled.div`
  height: 100vh;
  width: 300px;
`;

storiesOf('Molecule - LoginInputFields', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions())
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default Log In Form Fields', () => (
    <LoginInputFields
      email={text('Email', '')}
      password={text('Password', '')}
      onChangeEmail={action('on-change-email')}
      onChangePassword={action('on-change-password')}
    />
  ))
  .add('Log In Form Fields With Container', () => (
    <Container>
      <LoginInputFields
        email={text('Email', '')}
        password={text('Password', '')}
        onChangeEmail={action('on-change-email')}
        onChangePassword={action('on-change-password')}
      />
    </Container>
  ));
