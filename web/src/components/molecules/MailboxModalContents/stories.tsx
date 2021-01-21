import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MailboxModalContents } from '.';

storiesOf('Molecule - MailboxModalContents', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withKnobs)
  .add('User with enough points Mailbox Modal contents', () => (
    <MailboxModalContents
      title={text('Title', '送信確認')}
      msg={text(
        'Message',
        '5ポイントを使用してメッセージを送信しますか？あなたの保有ポイント：◯ポイント',
      )}
      onCancel={action('on-cancel')}
      onConfirm={action('on-confirm')}
    />
  ))
  .add('User with not enough points Mailbox Modal contents', () => (
    <MailboxModalContents
      title={text('Title', 'ポイント不足')}
      msg={text(
        'Message',
        'ポイントが不足しています。 追加のポイント購入を行いますか？',
      )}
      onCancel={action('on-cancel')}
      onConfirm={action('on-confirm')}
      theme="notEnoughPoints"
    />
  ));
