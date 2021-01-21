import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { NewsItem } from '.';

storiesOf('Atom - NewsItem', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default NewsItem', () => (
    <NewsItem
      date={text('Date', '2020.03.31')}
      title={text('Title', '新型コロナウイルス感染症対策についてはこちら')}
      link={text(
        'Link to News Article',
        'https://www.google.com/search?source=hp&ei=aL6zXuSKGYKnoASMup6oBA&q=latest+news+in+cebu',
      )}
    />
  ));
