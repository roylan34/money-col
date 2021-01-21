import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PointMgmtModal } from '.';

storiesOf('Molecule - PointMgmtModal Contents', module)
  .add('Specific Point Management Modal Contents', () => (
    <PointMgmtModal
      onConfirmPoints={action('on-confirm-points')}
      onClose={action('on-press-close')}
    />
  ))
  .add('For All Point Management Modal Contents', () => (
    <PointMgmtModal
      onConfirmPoints={action('on-confirm-points')}
      onClose={action('on-press-close')}
      theme="forAll"
    />
  ));
