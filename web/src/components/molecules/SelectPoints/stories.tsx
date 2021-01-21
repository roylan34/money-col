import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { SelectPoints } from '.';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`;

storiesOf('Molecule - SelectPoints', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Select points to purchase', () => (
    <Container>
      <SelectPoints
        pointsToPrice={object('Points: Price', {
          '500pts': '50000',
          '100pts': '10000',
          '50pts': '5000',
          '10pts': '1000',
        })}
        onPressPurchase={action('on-press-purchase')}
        onPressReturn={action('on-press-return')}
      />
    </Container>
  ));
