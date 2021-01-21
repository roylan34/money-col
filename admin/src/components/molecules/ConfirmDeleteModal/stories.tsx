import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import words from '../../../constants/words';
import { ConfirmDeleteModal } from '.';

storiesOf(
  'Molecule - ConfirmDeleteModal',
  module,
).add('Default Confirm delete Modal', () => (
  <ConfirmDeleteModal
    isConfirmDeleteVisible={true}
    msg={words.confirmDelete}
    onCancel={action('on-cancel')}
    onDelete={action('on-delete')}
  />
));
