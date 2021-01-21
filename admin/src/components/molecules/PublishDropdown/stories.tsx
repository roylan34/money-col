import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PublishDropdown } from '.';
import words from '../../../constants/words';

storiesOf('Molecule - PublishDropdown', module).add('Publish Dropdown', () => (
  <PublishDropdown
    onChange={action('on-change')}
    labels={words.publishDropdownValue}
    defValue={words.publishDropdownValue[0]}
  />
));
