import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { AskInstructorContent } from '.';

const SAMPLE = [
  { id: 'testId1', name: 'お金田　太郎　先生' },
  { id: 'testId2', name: '新咲　金一郎　先生' },
];

storiesOf('Organism - AskInstructorContent', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Ask Instructor Modal', () => (
    <AskInstructorContent
      instructors={SAMPLE}
      onSubmit={action('OnSubmit')}
      onPressClose={action('on-press-close')}
      userPoints={number("User's points", 100)}
      isSendingMsg={boolean('Is Sending Msg', false)}
      navigateToPurchasePoints={action('navigate-to-purchase-points')}
    />
  ));
