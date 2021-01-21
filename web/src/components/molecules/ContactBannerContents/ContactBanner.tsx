import React, { PureComponent } from 'react';
import { ContactCall } from '../../atoms/Icons';
import { ContactMail } from '../../atoms/Icons/Mail';
import {
  ContactContainer,
  ContactWrapper,
  CallContainer,
  ContactLabel,
  IconWrapper,
  ContactText,
} from './elements';
import { words } from '../../../constants';

type Props = {
  onClickCall: () => void;
  onClickMail: () => void;
};

class ContactBanner extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onClickCall, onClickMail } = this.props;
    return (
      <ContactContainer>
        <ContactWrapper>
          <CallContainer onClick={onClickCall}>
            <IconWrapper>
              <ContactCall />
            </IconWrapper>
            <ContactText>0776-43-9189</ContactText>
          </CallContainer>
          <CallContainer onClick={onClickMail}>
            <IconWrapper>
              <ContactMail />
            </IconWrapper>
            <ContactText>お問合せ</ContactText>
          </CallContainer>
          <ContactLabel>{words.contactBannerLabel}</ContactLabel>
        </ContactWrapper>
      </ContactContainer>
    );
  };
}

export default ContactBanner;
