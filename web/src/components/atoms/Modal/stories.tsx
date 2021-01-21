import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Modal } from '.';
import styled from 'styled-components';

const Children = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
  border-radius: inherit;
`;

const ModalWrapper = styled.div`
  width: 752px;
  height: 919px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0);
`;

storiesOf('Atom - Modal', module)
  .addDecorator(withKnobs)
  .add('Default Modal with children component', () => (
    <ModalWrapper>
      <Modal isVisible={boolean('Is Visible', true)}>
        <Children />
      </Modal>
    </ModalWrapper>
  ));
