import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import { ProfileCard } from '.';

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

storiesOf('Molecule - ProfileCard', module)
  .addDecorator(withKnobs)
  .add('ProfileCard', () => (
    <ProfileCard
      name={text('Name', 'マネカレ　太郎 さん')}
      percentage={number('Percentage', 40, options)}
      rank={select(
        'Rank',
        ['レギュラー', 'エリート', 'プライム'],
        'レギュラー',
      )}
      pointsNeeded={number('Points Needed', 8)}
    />
  ));
