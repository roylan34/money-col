import React, { PureComponent } from 'react';
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  BrandLogo,
} from '../../atoms/Icons';
import {
  Container,
  BrandContainer,
  IconsContainer,
  SNSContainer,
  IconContainer,
  LinksContainer,
  LinksWrapper,
  TextContainer,
  Text,
  BottomTextContainer,
  BottomText,
  CreditText,
} from './elements';
import { words } from '../../../constants';
import { FooterLinks } from './types';

class Footer extends PureComponent {
  renderLinks = (
    labels: Array<FooterLinks>,
    isFourth: boolean = false,
  ): React.ReactElement => {
    return (
      <TextContainer isFourth={isFourth}>
        {labels.map(data => (
          <Text key={data.label} href={data.link} target="_blank">
            {data.label}
          </Text>
        ))}
      </TextContainer>
    );
  };

  renderSecondColumn = (): React.ReactElement => {
    const labels = words.footerSecondColumn;
    return (
      <TextContainer isFourth={false}>
        <Text href={labels[0].link} target="_blank">
          {labels[0].label}
        </Text>
        {labels.map((data, index) => {
          return index !== 0 ? (
            <Text key={data.label} href={data.link} target="_blank" isNormal>
              {data.label}
            </Text>
          ) : null;
        })}
      </TextContainer>
    );
  };

  render = (): React.ReactElement => {
    return (
      <Container>
        <IconsContainer>
          <BrandContainer>
            <BrandLogo homeLink={''} />
          </BrandContainer>
          <SNSContainer>
            <IconContainer
              width={36}
              height={32}
              href={words.footerLinks.twitter}
              target="_blank">
              <Twitter />
            </IconContainer>
            <IconContainer
              width={22}
              height={35}
              href={words.footerLinks.facebook}
              target="_blank">
              <Facebook />
            </IconContainer>
            <IconContainer
              width={36}
              height={34}
              href={words.footerLinks.instagram}
              target="_blank">
              <Instagram />
            </IconContainer>
            <IconContainer
              width={36}
              height={32}
              href={words.footerLinks.youtube}
              target="_blank">
              <Youtube />
            </IconContainer>
          </SNSContainer>
          <CreditText>© Money College All Rights Reserved.</CreditText>
        </IconsContainer>
        <LinksContainer>
          <LinksWrapper>
            {this.renderLinks(words.footerFirstColumn)}
            {this.renderSecondColumn()}
            {this.renderLinks(words.footerThirdColumn)}
            {this.renderLinks(words.footerFourthColumn, true)}
          </LinksWrapper>
          <BottomTextContainer>
            <BottomText href={words.footerSiteMap.link} target="_blank">
              {words.footerSiteMap.label}
            </BottomText>
            <BottomText href={words.footerPrivacyPolicy.link} target="_blank">
              {words.footerPrivacyPolicy.label}
            </BottomText>
          </BottomTextContainer>
        </LinksContainer>
      </Container>
    );
  };
}

export default Footer;
