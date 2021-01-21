import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';

import { LeftSidebar } from '.';
import { sidebarContentsList, manualContentsList } from './constants';

storiesOf('Organism - LeftSidebar', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Default LeftSidebar', () => (
    <LeftSidebar
      sidebarContentsList={object('LeftSidebar contentslist list', [
        ...sidebarContentsList,
        ...manualContentsList,
      ])}
      onPressSeeMore={action('navigate-to-contents')}
    />
  ));
