import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { PointsHeldCard } from '.';

storiesOf('Molecule - PointsHeldCard', module)
  .addDecorator(withKnobs)
  .add('Points Held Card', () => (
    <PointsHeldCard points={number('Points', 100)} />
  ));
