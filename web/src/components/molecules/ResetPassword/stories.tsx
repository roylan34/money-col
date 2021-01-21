import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { NewPassInputField, EmailInputField } from '.';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

storiesOf('Molecule - ResetPassword', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Reset Password', () => (
    <Container>
      <NewPassInputField
        onPressSubmitNewPass={action('onPressSubmitNewPass')}
        errors={object('Errors', {})}
        isResetPasswordPending={boolean('Is Reset Password Pending', false)}
      />
    </Container>
  ))
  .add('Email Reset Password Link', () => (
    <Container>
      <EmailInputField
        onPressSubmitEmail={action('onPressSubmitEmail')}
        errors={object('Errors', {})}
        email={text('Email', '')}
        isResetPasswordLinkPending={boolean(
          'Is Reset Password Link Pending',
          false,
        )}
        isLoggedIn={boolean('is Authenticated', false)}
      />
    </Container>
  ));
