import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '.';
import { storyStyles } from './elements';

storiesOf('Atom - Card', module).add('Container Card', () => (
  <Card>
    <p style={storyStyles.text}>HELLO</p>
  </Card>
));
