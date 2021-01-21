import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { FileInput } from '.';

const FileInputWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  margin-top: 3px;
`;

storiesOf('Atom - FileInput', module).add('File Input', () => (
  <FileInputWrapper>
    <FileInput onAttachFile={action('on-attach-file')} />
  </FileInputWrapper>
));
