import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DatePicker } from '.';

storiesOf('Atom - DatePicker', module).add('Default Date Picker', () => (
  <DatePicker onChangeDate={action('on-change-date')} />
));
