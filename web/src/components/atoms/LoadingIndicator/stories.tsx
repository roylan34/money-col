import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoadingIndicator } from '.';

storiesOf('Atom - Loading', module)
  .add('Loading Indicator', () => <LoadingIndicator />, {
    storyshots: { disable: true },
  })
  .add(
    'Loading Indicator with custom color',
    () => <LoadingIndicator spinnerColor={'#3f3'} />,
    {
      storyshots: { disable: true },
    },
  );
