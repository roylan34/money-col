import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ConfirmationModal } from '.';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: bisque;
`;

const Wrapper = styled.div`
  width: 369px;
  height: 224px;
`;

storiesOf('Molecule - ConfirmationModal', module)
  .addDecorator(withKnobs)
  .add('Default Confirmation Modal', () => (
    <Container>
      <Wrapper>
        <ConfirmationModal
          msg={text('Message', 'この動画を削除しますか？')}
          onCancel={action('on-cancel')}
          onDelete={action('on-delete')}
        />
      </Wrapper>
    </Container>
  ));
