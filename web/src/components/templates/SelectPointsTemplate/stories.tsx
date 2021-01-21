import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { SelectPointsTemplate } from '.';

storiesOf('Template - SelectPointsTemplate', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  })
  .add('Select Points Template', () => (
    <SelectPointsTemplate
      pointsToPrice={object('Points: Price', {
        '500pts': '50000',
        '100pts': '10000',
        '50pts': '5000',
        '10pts': '1000',
      })}
      onPressPurchase={action('on-press-purchase')}
      onPressReturn={action('on-press-return')}
    />
  ));
