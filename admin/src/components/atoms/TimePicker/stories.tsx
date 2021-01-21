import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TimePicker } from '.';

storiesOf('Atom - TimePicker', module).add('Default Time Picker', () => (
  <TimePicker onChangeTime={action('on-change-time')} />
));
