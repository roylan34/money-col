import React from 'react';

import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { AppLogo } from '.';

const Container = styled.div`
  display: inline-block;
  width: 100px;
`;

storiesOf('Logos', module)
  .add('app logo', () => <AppLogo />)
  .add('with container', () => (
    <Container>
      <AppLogo width="100%" height="100%" />
    </Container>
  ));
