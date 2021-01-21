import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { RecommendedDropdown } from '.';
import { ChoicesValues } from './types';

const choices: Array<ChoicesValues | ''> = [
  '',
  '設定しない',
  'おすすめ1に表示する',
  'おすすめ2に表示する',
  'おすすめ3に表示する',
];

storiesOf('Molecule - RecommendedDropdown', module)
  .addDecorator(withKnobs)
  .add('Recommended Dropdown', () => (
    <RecommendedDropdown
      value={select('Choices', choices, '')}
      onChangeSelected={action('on-change-selected')}
    />
  ));
