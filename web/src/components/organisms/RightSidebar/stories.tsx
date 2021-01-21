import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  object,
  text,
  number,
  select,
} from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RightSidebar } from '.';
import { ProfileCardParams } from './types';

import { BrowserRouter as Router } from 'react-router-dom';

const percentageOptions = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

const PROFILE_CARD_VALUE: ProfileCardParams = {
  name: text('Name', 'マネカレ　太郎 さん'),
  rank: select('Rank', ['レギュラー', 'エリート', 'プライム'], 'レギュラー'),
  percentage: number('Percentage', 40, percentageOptions),
  pointsNeeded: number('Points Needed', 8),
};

const ADS_VALUE = [
  {
    imageUrl: text(
      'Image URL',
      'https://media.istockphoto.com/vectors/black-friday-up-to-50-off-sale-advertisement-square-template-over-vector-id871723404',
    ),
    link: text('Ad Link', 'https://www.google.com'),
  },
];

storiesOf('Organism - RightSidebar', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Right Sidebar', () => (
    <Router>
      <RightSidebar
        profileCard={object(
          'Profile Card Props',
          PROFILE_CARD_VALUE,
          'Profile Card Props',
        )}
        points={number('Points', 100)}
        linkForPurchasing={text(
          'Link for purchasing points',
          'https://www.shopee.ph',
        )}
        ads={object('Ads Props', ADS_VALUE, 'Ads Props')}
      />
    </Router>
  ));
