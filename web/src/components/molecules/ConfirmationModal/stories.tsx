import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ConfirmationModal } from '.';
import styled from 'styled-components';
import { theme } from '../../../config/index';
import { words } from '../../../constants';

export const Container = styled.div`
  width: 442px;
  background-color: #eaeaea;

  @media ${theme.breakpoints.mobile} {
    width: 312px;
  }
`;

const MSG =
  '◯◯ポイントを使用して質問を送信しますか？あなたの保有ポイント：◯◯ポイント';

storiesOf('Molecule - ConfirmationModal', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default Confirmation Modal', () => (
    <Container>
      <ConfirmationModal
        message={text('Message', MSG)}
        onCancel={action('OnCancel')}
        onConfirm={action('OnConfirm')}
        isLoading={boolean('Is Loading', false)}
      />
    </Container>
  ))
  .add('Default Purchase Content - Confirmation Modal', () => (
    <Container>
      <ConfirmationModal
        title={text('Title', words.purchaseConfirmation)}
        message={text(
          'Message',
          `◯◯${words.purchaseVideoPrompt}\n${words.yourPoints}◯${words.points}`,
        )}
        subtitle={text(
          'Subtitle',
          '【マネカレ】FXのプロになる！ ！FX基礎知識とチャートの見方完全攻略講座',
        )}
        onCancel={action('OnCancel')}
        onConfirm={action('OnConfirm')}
        isLoading={boolean('Is Loading', false)}
      />
    </Container>
  ))
  .add('Error Purchase Content - Confirmation Modal', () => (
    <Container>
      <ConfirmationModal
        title={text('Title', words.notEnoughPoints)}
        messageTheme={text('Message Theme', 'error') as 'error'}
        message={text('Message', words.replenishPointsPrompt)}
        onCancel={action('OnCancel')}
        onConfirm={action('OnConfirm')}
        isLoading={boolean('Is Loading', false)}
      />
    </Container>
  ));
