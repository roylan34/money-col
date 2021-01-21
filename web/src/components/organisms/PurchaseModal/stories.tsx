import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, object } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { PurchaseModal } from '.';
import { theme } from '../../../config/index';

const Container = styled.div`
  width: 690px;
  height: 797px;
  @media ${theme.breakpoints.mobile} {
    width: 312px;
    height: 816px;
  }
`;

storiesOf('Organism - PurchaseModal', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Purchase Modal Contents', () => (
    <Container>
      <PurchaseModal
        onPressBuy={action('on-press-buy')}
        onPressCancel={action('on-press-cancel')}
        isRestricted={boolean('Is Restricted', true)}
        totalPoints={number('Total Points', 300)}
        cardData={object('Card Data', {
          id: 'ajsbdjkbajkb2',
          title: 'Test Title',
          points: 100,
          thumbnailURL:
            'https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg',
          description:
            'これはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれは',
          tags: {
            showOnMyPage: false,
            primeContent: true,
            eliteContent: true,
            regularContent: true,
          },
        })}
        isPurchasingContent={boolean('Is Purchasing Content', false)}
      />
    </Container>
  ))
  .add('Purchase Modal Contents not enough points', () => (
    <Container>
      <PurchaseModal
        onPressBuy={action('on-press-buy')}
        onPressCancel={action('on-press-cancel')}
        isRestricted={boolean('Is Restricted', false)}
        totalPoints={number('Total Points', 50)}
        cardData={object('Card Data', {
          id: 'ajsbdjkbajkb2',
          title: 'Test Title',
          points: 100,
          thumbnailURL:
            'https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg',
          description:
            'これはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれは',
          tags: {
            showOnMyPage: false,
            primeContent: true,
            eliteContent: true,
            regularContent: true,
          },
        })}
        isPurchasingContent={boolean('Is Purchasing Content', false)}
      />
    </Container>
  ));
