import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Advertisement } from '.';

const ADVERTISEMENT_SAMPLES = {
  rectangular: {
    imageSource: 'http://pebbles.in/3983/spoken-english-thro-tamil-1-2.jpg',
    adLink: 'https://en.wikipedia.org/wiki/Web_banner',
  },
  square: {
    imageSource:
      'https://media.istockphoto.com/vectors/black-friday-up-to-50-off-sale-advertisement-square-template-over-vector-id871723404',
    adLink: 'https://calendar.google.com/',
  },
};

storiesOf('Atom - Advertisement', module)
  .addDecorator(withKnobs)
  .add('Rectangular Advertisement', () => (
    <Advertisement
      imageUrl={text(
        'Image Source',
        ADVERTISEMENT_SAMPLES.rectangular.imageSource,
      )}
      link={text(
        'Advertisement Link',
        ADVERTISEMENT_SAMPLES.rectangular.adLink,
      )}
    />
  ))
  .add('Square Advertisement', () => (
    <Advertisement
      imageUrl={text('Image Source', ADVERTISEMENT_SAMPLES.square.imageSource)}
      link={text('Advertisement Link', ADVERTISEMENT_SAMPLES.square.adLink)}
    />
  ));
