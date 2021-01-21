import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { PurchasePointsCard } from '.';

storiesOf('Molecule - PurchasePointsCard', module)
  .addDecorator(withKnobs)
  .add('Purchase Points Card', () => (
    <PurchasePointsCard
      link={text('Link for purchasing points', 'https://www.google.com')}
    />
  ));
