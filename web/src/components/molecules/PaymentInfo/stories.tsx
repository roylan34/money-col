import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PaymentInfo } from '.';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CARD_BRANDS = [
  'American Express',
  'Diners Club',
  'Discover',
  'JCB',
  'MasterCard',
  'UnionPay',
  'Visa',
  'Unknown',
];

storiesOf('Molecule - PaymentInfo', module)
  .addDecorator(withKnobs)
  .add('Default Payment Info', () => {
    const hasCard = boolean('Has Card', false, 'Card Object');

    return (
      <Container>
        <PaymentInfo
          card={{
            brand: select('Card Brand', CARD_BRANDS, 'Unknown', 'Card Object'),
            last4: text('Last 4 Digits', '0000', 'Card Object'),
          }}
          onPressAddCard={action('on-press-add-card')}
          hasCard={hasCard}
          onPressDeleteCard={action('on-press-delete-card')}
          hideAddButton={hasCard}
          onPressCancel={action('on-press-cancel')}
          errors={object('Errors', {}, 'Payment Info')}
        />
      </Container>
    );
  });
