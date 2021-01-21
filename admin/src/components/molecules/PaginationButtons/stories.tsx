import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PaginationButtons } from '.';
import { theme } from '../../../config';

storiesOf('Molecule - PaginationButtons', module)
  .addDecorator(storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  ))
  .add('Default ', () => (
    <PaginationButtons
      onPressNext={action('on-press-next')}
      onPressPrev={action('on-press-prev')}
      hasPrevPage={boolean('hasPrevPage', false)}
      hasNextPage={boolean('hasNextPage', false)}
    />
  ));
