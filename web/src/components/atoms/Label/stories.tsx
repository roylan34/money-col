import React from 'react';

import { storiesOf } from '@storybook/react';

import { Label } from '.';

const style = {
  fontSize: 50,
  fontWeight: 'bold',
};

storiesOf('Label', module)
  .add('label', () => <Label>Off-duty</Label>)
  .add('with japanese characters', () => <Label>勤務外ss</Label>)
  .add('with custom style', () => (
    <Label style={style}>Overridden font-size</Label>
  ));
