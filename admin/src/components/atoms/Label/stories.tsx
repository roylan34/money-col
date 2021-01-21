import React from 'react';

import { storiesOf } from '@storybook/react';

import { Label } from '.';

storiesOf('Label', module)
  .add('label', () => <Label>Off-duty</Label>)
  .add('with japanese characters', () => <Label>勤務外ss</Label>)
  .add('with custom style', () => (
    <Label style={{ fontSize: 50, fontWeight: 'bold' }}>
      Overridden font-size
    </Label>
  ));
