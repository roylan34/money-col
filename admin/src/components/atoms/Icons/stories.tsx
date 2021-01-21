import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  Clock,
  Close,
  Warning,
  BrandLogo,
  User,
  Teacher,
  Video,
  Project,
  EAProgram,
  Article,
  MailBox,
  Logout,
  DownwardArrow,
  VerticalCircles,
  PublishIcon,
  Copy,
  Trash,
  BackArrow,
  Gear,
  WhiteBackArrow,
  EditIcon,
  PendingPayment,
} from '.';
import { theme } from '../../../config/index';

const Container = styled.div`
  width: 100px;
`;

const ColoredContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.blue.primary};
`;

const IconWrapper = styled.div<{ width: number; height: number }>`
  width: ${(props): string => `${props.width}px`};
  height: ${(props): string => `${props.height}px`};
`;

const BrandLogoContainer = styled.div`
  width: 241px;
  height: 100px;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.breakpoints.mobile} {
    width: 216px;
    height: 60px;
    background-color: ${theme.colors.blue.primary};
  }
`;

storiesOf('Icons', module)
  .add('clock', () => <Clock />)
  .add('close', () => <Close />)
  .add('width container', () => (
    <Container>
      <Warning width="100%" height="100%" />
    </Container>
  ))
  .add('100x100', () => <Warning width="100px" height="100px" />)
  .add('Brand Logo', () => (
    <BrandLogoContainer>
      <IconWrapper width={320} height={39}>
        <BrandLogo homeLink="/" />
      </IconWrapper>
    </BrandLogoContainer>
  ))
  .add('User', () => (
    <ColoredContainer>
      <User />
    </ColoredContainer>
  ))
  .add('Teacher', () => (
    <ColoredContainer>
      <Teacher />
    </ColoredContainer>
  ))
  .add('Video', () => (
    <ColoredContainer>
      <Video />
    </ColoredContainer>
  ))
  .add('Project', () => (
    <ColoredContainer>
      <Project />
    </ColoredContainer>
  ))
  .add('EAProgram', () => (
    <ColoredContainer>
      <EAProgram />
    </ColoredContainer>
  ))
  .add('Article', () => (
    <ColoredContainer>
      <Article />
    </ColoredContainer>
  ))
  .add('Default Mail Box', () => (
    <ColoredContainer>
      <MailBox />
    </ColoredContainer>
  ))
  .add('Instructor Mail Box', () => <MailBox theme="instructors" />)
  .add('Logout', () => (
    <ColoredContainer>
      <Logout />
    </ColoredContainer>
  ))
  .add('Sort Arrow', () => <DownwardArrow />)
  .add('Vertical Circles Options', () => <VerticalCircles />)
  .add('Private PublishIcon', () => <PublishIcon isPrivate />)
  .add('Release PublishIcon', () => <PublishIcon />)
  .add('Copy', () => <Copy />)
  .add('Trash', () => <Trash />)
  .add('Back Arrow', () => <BackArrow />)
  .add('Gear', () => (
    <ColoredContainer>
      <Gear />
    </ColoredContainer>
  ))
  .add('White Back Arrow', () => (
    <ColoredContainer>
      <WhiteBackArrow />
    </ColoredContainer>
  ))
  .add('Edit Icon', () => <EditIcon />)
  .add('Pending Payment', () => <PendingPayment />);
