import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ReplaceModal } from '.';
import styled from 'styled-components';

const Container = styled.div`
  width: 588px;
  height: 284px;
  background-color: white;
`;

storiesOf('Molecule - ReplaceRecommendedModal', module)
  .addDecorator(withKnobs)
  .add('Replace Modal', () => (
    <Container>
      <ReplaceModal
        oldTitle={text('Old Title', 'Old Title')}
        newTitle={text('New Title', 'New Title')}
        onCancel={action('on-cancel')}
        onReplace={action('on-replace')}
        index="1"
      />
    </Container>
  ));
