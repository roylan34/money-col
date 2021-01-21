import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import styled from 'styled-components';
import {
  Clock,
  Close,
  Warning,
  RecommendedVideos,
  RecommendedTopics,
  PastVideos,
  TopicVideos,
  Mail,
  MobileMail,
  UpwardChart,
  Flag,
  DollarSign,
  Manual,
  GoldCrown,
  Shopping,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  PaperClip,
  Call,
  LeftArrow,
  BrandLogo,
  Home,
  MasterCard,
  Visa,
  AmericanExpress,
  DinersClub,
  Discover,
  Jcb,
  UnionPay,
  UnknownCard,
  File,
  Playback,
  EliteAndPrimeBanner,
  PrimeOnlyBanner,
  Star,
  Cart,
  Gear,
  AttachedFile,
  BluePaperClip,
  BluePlane,
  MobileLeftArrow,
  PayPal,
  PointsCoin,
  WhiteCheck,
  PaymentXMark,
} from '.';
import { theme } from '../../../config/index';

const WIDTH = 'WIDTH';
const HEIGHT = 'HEIGHT';

const Container = styled.div<{ color?: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props): string => props.color || '#033297'};
`;

const MobileMailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  width: 60px;
  height: 60px;
`;

const ShoppingContainer = styled.div`
  background-color: ${theme.colors.red.primary};
`;

const CartContainer = styled.div`
  background-color: ${theme.colors.green.primary};
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
export const IconWrapper = styled.div<{ width: number; height: number }>`
  width: ${(props): string => `${props.width}px`};
  height: ${(props): string => `${props.height}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('Atom - Icons', module)
  .addDecorator(withKnobs)
  .addParameters({
    storyshots: { disable: true },
  })
  .add('clock', () => (
    <IconWrapper width={number(WIDTH, 24)} height={number(HEIGHT, 24)}>
      <Clock />
    </IconWrapper>
  ))
  .add('close', () => (
    <Container>
      <IconWrapper width={number(WIDTH, 14)} height={number(HEIGHT, 14)}>
        <Close />
      </IconWrapper>
    </Container>
  ))
  .add('Warning', () => (
    <Container>
      <Warning
        width={text('Width in percentage', '100%')}
        height={text('Height in percentage', '100%')}
        type={select('Type', ['error', 'success'], 'error')}
      />
    </Container>
  ))
  .add('Recommended Videos', () => (
    <IconWrapper width={number(WIDTH, 28)} height={number(HEIGHT, 26)}>
      <RecommendedVideos />
    </IconWrapper>
  ))
  .add('Recommended Topics', () => (
    <IconWrapper width={number(WIDTH, 24)} height={number(HEIGHT, 31)}>
      <RecommendedTopics />
    </IconWrapper>
  ))
  .add('Past Videos', () => (
    <IconWrapper width={number(WIDTH, 26)} height={number(HEIGHT, 26)}>
      <PastVideos />
    </IconWrapper>
  ))
  .add('Topic Videos', () => (
    <IconWrapper width={number(WIDTH, 26)} height={number(HEIGHT, 26)}>
      <TopicVideos />
    </IconWrapper>
  ))
  .add('Mail with Notif', () => (
    <Container>
      <Mail hasNotif />
    </Container>
  ))
  .add('Mail without Notif', () => (
    <Container>
      <Mail />
    </Container>
  ))
  .add('Mobile Mail', () => (
    <MobileMailContainer>
      <MobileMail />
    </MobileMailContainer>
  ))
  .add('Flag', () => (
    <Container>
      <IconWrapper width={number(WIDTH, 23)} height={number(HEIGHT, 26)}>
        <Flag />
      </IconWrapper>
    </Container>
  ))
  .add('DollarSign', () => (
    <Container>
      <IconWrapper width={number(WIDTH, 16)} height={number(HEIGHT, 28)}>
        <DollarSign />
      </IconWrapper>
    </Container>
  ))
  .add('UpwardChart', () => (
    <Container>
      <IconWrapper width={number(WIDTH, 30)} height={number(HEIGHT, 20)}>
        <UpwardChart />
      </IconWrapper>
    </Container>
  ))
  .add('Manual', () => (
    <Container>
      <IconWrapper width={number(WIDTH, 28)} height={number(HEIGHT, 31)}>
        <Manual />
      </IconWrapper>
    </Container>
  ))
  .add('GoldCrown', () => (
    <IconWrapper width={number(WIDTH, 40)} height={number(HEIGHT, 35)}>
      <GoldCrown />
    </IconWrapper>
  ))
  .add('Shopping', () => (
    <ShoppingContainer>
      <IconWrapper width={number(WIDTH, 57)} height={number(HEIGHT, 55)}>
        <Shopping />
      </IconWrapper>
    </ShoppingContainer>
  ))
  .add('Cart', () => (
    <CartContainer>
      <IconWrapper width={number(WIDTH, 58)} height={number(HEIGHT, 57)}>
        <Cart />
      </IconWrapper>
    </CartContainer>
  ))
  .add('Twitter', () => (
    <IconWrapper width={number(WIDTH, 36)} height={number(HEIGHT, 32)}>
      <Twitter />
    </IconWrapper>
  ))
  .add('Facebook', () => (
    <IconWrapper width={number(WIDTH, 22)} height={number(HEIGHT, 35)}>
      <Facebook />
    </IconWrapper>
  ))
  .add('Instagram', () => (
    <IconWrapper width={number(WIDTH, 36)} height={number(HEIGHT, 34)}>
      <Instagram />
    </IconWrapper>
  ))
  .add('Youtube', () => (
    <IconWrapper width={number(WIDTH, 36)} height={number(HEIGHT, 32)}>
      <Youtube />
    </IconWrapper>
  ))
  .add('PaperClip', () => (
    <Container color="#eaeaea">
      <IconWrapper width={number(WIDTH, 20)} height={number(HEIGHT, 22)}>
        <PaperClip />
      </IconWrapper>
    </Container>
  ))
  .add('Call', () => (
    <MobileMailContainer>
      <Call />
    </MobileMailContainer>
  ))
  .add('LeftArrow', () => (
    <Container color="#000000">
      <LeftArrow />
    </Container>
  ))
  .add('Brand Logo', () => (
    <BrandLogoContainer>
      <IconWrapper width={172} height={34}>
        <BrandLogo homeLink={text('Home Link', 'https://google.com')} />
      </IconWrapper>
    </BrandLogoContainer>
  ))
  .add('Home', () => (
    <Container>
      <IconWrapper width={number(WIDTH, 20)} height={number(HEIGHT, 17)}>
        <Home />
      </IconWrapper>
    </Container>
  ))
  .add('Master Card', () => (
    <IconWrapper width={number(WIDTH, 38)} height={number(HEIGHT, 30)}>
      <MasterCard />
    </IconWrapper>
  ))
  .add('Visa', () => (
    <IconWrapper width={number(WIDTH, 38)} height={number(HEIGHT, 30)}>
      <Visa />
    </IconWrapper>
  ))
  .add('American Express', () => (
    <IconWrapper width={number(WIDTH, 38)} height={number(HEIGHT, 30)}>
      <AmericanExpress />
    </IconWrapper>
  ))
  .add('Diners Club', () => (
    <IconWrapper width={number(WIDTH, 38)} height={number(HEIGHT, 30)}>
      <DinersClub />
    </IconWrapper>
  ))
  .add('Discover', () => (
    <IconWrapper width={number(WIDTH, 38)} height={number(HEIGHT, 30)}>
      <Discover />
    </IconWrapper>
  ))
  .add('JCB', () => (
    <IconWrapper width={number(WIDTH, 38)} height={number(HEIGHT, 30)}>
      <Jcb />
    </IconWrapper>
  ))
  .add('Union Pay', () => (
    <IconWrapper width={number(WIDTH, 38)} height={number(HEIGHT, 30)}>
      <UnionPay />
    </IconWrapper>
  ))
  .add('Unknown Card', () => (
    <IconWrapper width={number(WIDTH, 38)} height={number(HEIGHT, 30)}>
      <UnknownCard />
    </IconWrapper>
  ))
  .add('File', () => (
    <IconWrapper width={number(WIDTH, 40)} height={number(HEIGHT, 35)}>
      <File />
    </IconWrapper>
  ))
  .add('Playback', () => (
    <IconWrapper width={number(WIDTH, 105)} height={number(HEIGHT, 103)}>
      <Playback />
    </IconWrapper>
  ))
  .add('Elite And Prime Content Banner', () => (
    <IconWrapper width={130} height={34}>
      <EliteAndPrimeBanner />
    </IconWrapper>
  ))
  .add('Prime Only Banner', () => (
    <IconWrapper width={130} height={34}>
      <PrimeOnlyBanner />
    </IconWrapper>
  ))
  .add('Star', () => <Star />)
  .add('Gear', () => (
    <Container>
      <Gear />
    </Container>
  ))
  .add('Attached File', () => (
    <Container>
      <AttachedFile />
    </Container>
  ))
  .add('Blue Paper Clip', () => (
    <IconWrapper width={number(WIDTH, 25)} height={number(HEIGHT, 27)}>
      <BluePaperClip />
    </IconWrapper>
  ))
  .add('Blue Plane', () => <BluePlane />)
  .add('MobileLeftArrow', () => (
    <Container color="#ffffff">
      <MobileLeftArrow />
    </Container>
  ))
  .add('PayPal', () => <PayPal />)
  .add('PointsCoin', () => (
    <IconWrapper width={number(WIDTH, 44)} height={number(HEIGHT, 44)}>
      <PointsCoin />
    </IconWrapper>
  ))
  .add('White Check', () => (
    <Container color="darkblue">
      <IconWrapper width={number(WIDTH, 29)} height={number(HEIGHT, 23)}>
        <WhiteCheck />
      </IconWrapper>
    </Container>
  ))
  .add('Payment X Mark', () => (
    <Container color="darkblue">
      <PaymentXMark />
    </Container>
  ));
