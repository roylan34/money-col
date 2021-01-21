import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { ErrorPageContent } from '.';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

storiesOf('Molecule - ErrorPageContent', module)
  .addDecorator(withKnobs)
  .add('Default error page content', () => (
    <Container>
      <ErrorPageContent
        title={text('Title', '操作中に予期せぬエラーが発生しました')}
        message={text('Message', 'Well, sorry this is unexpected....')}
        buttonReturnTitle={'ホームに戻る'}
        handleReturnHome={action('on-click-redirect-home')}
      />
    </Container>
  ));
