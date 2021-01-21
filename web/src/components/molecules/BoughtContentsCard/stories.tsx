import React from 'react';
import { storiesOf } from '@storybook/react';
import { BoughtContentsCard } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

storiesOf('Molecule - BoughtContentsCard', module).add(
  'Bought Contents Card',
  () => (
    <Router>
      <BoughtContentsCard />
    </Router>
  ),
);
