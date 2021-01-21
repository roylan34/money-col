import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Message } from '.';

const SAMPLE_OWN_MSG = `はじめまして！
こちらこそありがとうございます。`;

const SAMPLE_OTHERS_MSG = `初めまして。 Money Collegeで専属講師を務めております、金田と申します。この度はお問い合わせありがとうございます。 ご質問についてですが、まずは~~~~~~~~~~~~~~~~~~が求められると思います。 何卒よろしくお願いいたします。`;

storiesOf('Atom - Message', module)
  .addDecorator(withKnobs)
  .add('Own Message', () => (
    <Message
      msg={text('Message', SAMPLE_OWN_MSG)}
      theme={select('Theme', ['own', 'others'], 'own')}
      isRead={boolean('Is Read', false)}
      dateSent={text('Date Sent', '17:45')}
    />
  ))
  .add('Others Message', () => (
    <Message
      msg={text('Message', SAMPLE_OTHERS_MSG)}
      theme={select('Theme', ['own', 'others'], 'others')}
      isRead={boolean('Is Read', false)}
      dateSent={text('Date Sent', '17:45')}
    />
  ));
