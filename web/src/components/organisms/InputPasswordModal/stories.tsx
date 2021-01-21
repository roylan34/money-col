import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { InputPasswordModal } from '.';

storiesOf('Organism - InputPasswordModal', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default - Input Password Modal', () => (
    <InputPasswordModal
      onCancel={action('OnCancel')}
      onConfirm={action('OnConfirm')}
      onChangePassword={action('onChangePassword')}
      password={text('Password', 'password')}
      errors={object('Error', {})}
      isVisible={boolean('Is visible', true)}
      isConfirmButtonDisabled={boolean('Is confirm button disabled', false)}
    />
  ))
  .add('With Error - Input Password Modal', () => (
    <InputPasswordModal
      onCancel={action('OnCancel')}
      onConfirm={action('OnConfirm')}
      onChangePassword={action('onChangePassword')}
      password={text('Password', 'password')}
      errors={object('Error', { erro1: 'パスワードを正しく入力して下さい。' })}
      isVisible={boolean('Is visible', true)}
      isConfirmButtonDisabled={boolean('Is confirm button disabled', false)}
    />
  ));
