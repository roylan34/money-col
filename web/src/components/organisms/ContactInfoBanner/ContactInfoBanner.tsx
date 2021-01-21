import React, { PureComponent } from 'react';
import { Container, ContactAndQRWrapper } from './elements';
import { ContactBanner, QRBanner } from '../../molecules/ContactBannerContents';

type Props = {
  onClickCall: () => void;
  onClickMail: () => void;
};

class ContactInfoBanner extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onClickCall, onClickMail } = this.props;
    return (
      <Container>
        <ContactAndQRWrapper>
          <ContactBanner onClickCall={onClickCall} onClickMail={onClickMail} />
        </ContactAndQRWrapper>
        <ContactAndQRWrapper>
          <QRBanner />
        </ContactAndQRWrapper>
      </Container>
    );
  };
}

export default ContactInfoBanner;
