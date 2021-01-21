import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { HamburgerContent } from '.';

storiesOf('Molecule - HamburgerContent', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Hamburger Items', () => (
    <HamburgerContent
      onPressHamburgerItem={action('OnClickHamburgerItem')}
      label={text('Label', 'YY')}
      imageSource={text('Image Source', '')}
      name={text('Name', 'マネカレ　太郎さん')}
    />
  ));
