import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { PDFViewer } from '.';

storiesOf('Organism - PDFViewer', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default PDF Viewer', () => (
    <PDFViewer fileURL="https://firebasestorage.googleapis.com/v0/b/money-college-dev-8a907.appspot.com/o/manuals%2FIfgqvHVJwCY1bnrXEKJW%2FIfgqvHVJwCY1bnrXEKJW.pdf?alt=media&token=3e159032-b52c-4156-ac38-392278bd40a2" />
  ));
