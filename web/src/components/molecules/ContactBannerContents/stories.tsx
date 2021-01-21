import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, withActions } from '@storybook/addon-actions';
import styled from 'styled-components';
import { QRBanner, ContactBanner } from '.';
import { theme } from '../../../config/index';

const Wrapper = styled.div`
  width: 654px;
  @media ${theme.breakpoints.pc} {
    height: 472px;
  }
  @media ${theme.breakpoints.tablet} {
    height: 472px;
  }
  @media ${theme.breakpoints.mobile} {
    width: 100%;
  }
`;

storiesOf('Molecule - ContactBannerComponents', module)
  .addDecorator(withActions())
  .add('QRBanner', () => (
    <Wrapper>
      <QRBanner />
    </Wrapper>
  ))
  .add('ContactBanner', () => (
    <Wrapper>
      <ContactBanner
        onClickCall={action('on-click-call')}
        onClickMail={action('on-click-mail')}
      />
    </Wrapper>
  ));
