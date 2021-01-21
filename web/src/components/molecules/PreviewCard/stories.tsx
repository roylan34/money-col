import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  number,
  object,
  boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PreviewCard } from '.';

storiesOf('Molecule - Preview Card', module)
  .addDecorator(withKnobs)
  .add('Default Preview Card', () => (
    <PreviewCard
      imageSource={text(
        'Image Source',
        'https://www.gannett-cdn.com/media/2019/03/04/USATODAY/usatsports/thinkstockphotos-106381832-e1486139813174.jpg?width=2560',
      )}
      title={text('Title', '【マネカレ過去動画】3月配信分 ')}
      points={number('Points', 10)}
      tags={object('Tags', {
        showOnMyPage: false,
        primeContent: boolean('Is Prime Content', true),
        eliteContent: boolean('Is Prime Content', true),
        regularContent: boolean('Is Prime Content', true),
      })}
      id={text('ID', 'jsfjjn35nkljdsfm25')}
      description="Test Description"
      onPressCard={action('on-press-card')}
    />
  ))
  .add('Bought Preview Card', () => (
    <PreviewCard
      imageSource={text(
        'Image Source',
        'https://www.gannett-cdn.com/media/2019/03/04/USATODAY/usatsports/thinkstockphotos-106381832-e1486139813174.jpg?width=2560',
      )}
      title={text('Title', '【マネカレ過去動画】3月配信分 ')}
      points={number('Points', 10)}
      tags={object('Tags', {
        showOnMyPage: false,
        primeContent: boolean('Is Prime Content', true),
        eliteContent: boolean('Is Prime Content', true),
        regularContent: boolean('Is Prime Content', true),
      })}
      id={text('ID', 'jsfjjn35nkljdsfm25')}
      description="Test Description"
      onPressCard={action('on-press-card')}
      theme="bought"
    />
  ));
