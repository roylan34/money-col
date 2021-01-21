import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HamburgerButton } from '.';

storiesOf('Atom - HamburgerButton', module).add(
  'Default Hamburger Button',
  () => <HamburgerButton onToggle={action('OnToggle')} />,
);
