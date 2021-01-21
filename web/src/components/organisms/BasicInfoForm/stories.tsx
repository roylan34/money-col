import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import { BasicInfoForm } from '.';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

storiesOf('Organism - BasicInfoForm', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default BasicInfoForm', () => (
    <Container>
      <BasicInfoForm
        lastName={text('Last Name', 'マネカレ')}
        firstName={text('First Name', '太郎')}
        email={text('Email', 'manekare@email.com')}
        errors={object('Errors', {})}
        isButtonDisabled={boolean('Is Button Disabled', true)}
        onChangePhoto={action('on-change-photo')}
        onChangeLastName={action('on-change-last-name')}
        onChangeFirstName={action('on-change-first-name')}
        onChangeEmail={action('on-change-email')}
        onSubmit={action('on-press-submit')}
        isEmailVerified={boolean('Is Email Verified', false)}
      />
    </Container>
  ));
