import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { ProgressBar } from '.';

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

storiesOf('Atom - ProgressBar', module)
  .addDecorator(withKnobs)
  .add('Regular Rank Progress Bar', () => (
    <ProgressBar
      percentage={number('Percentage', 50, options)}
      pointsNeeded={number('Points Needed', 8)}
      rank="レギュラー"
    />
  ))
  .add('Elite Rank Progress Bar', () => (
    <ProgressBar
      percentage={number('Percentage', 50, options)}
      pointsNeeded={number('Points Needed', 8)}
      rank="エリート"
    />
  ))
  .add('Prime Rank Progress Bar', () => (
    <ProgressBar
      percentage={number('Percentage', 50, options)}
      pointsNeeded={number('Points Needed', 8)}
      rank="プライム"
    />
  ));
