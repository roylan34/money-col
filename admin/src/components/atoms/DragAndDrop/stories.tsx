import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DragAndDrop } from '.';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1000px;
  height: 672px;
`;

storiesOf('Atom - DragAndDrop', module)
  .add('Drag And Drop Video Input', () => (
    <Wrapper>
      <DragAndDrop
        onSelectFile={action('on-select-video-file')}
        accepted="video"
      />
    </Wrapper>
  ))
  .add('Drag And Drop PDF Input', () => (
    <Wrapper>
      <DragAndDrop onSelectFile={action('on-select-pdf-file')} accepted="pdf" />
    </Wrapper>
  ));
