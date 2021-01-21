import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { AttachedFilePreview } from '.';

const fileSizeOptions = {
  min: 0,
  max: 20000,
  range: true,
};

const Container = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

storiesOf('Molecule - AttachedFilePreview', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Attached File Preview', () => (
    <Container>
      <AttachedFilePreview
        fileName={text('File Name', 'The file name.jpg')}
        fileSizeInKB={number('File Size in KB', 124, fileSizeOptions)}
        index={number('Index', 0)}
        onClose={action('on-close')}
      />
    </Container>
  ));
