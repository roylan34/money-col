import React, { PureComponent } from 'react';
import { QRContainer, QRIcon } from './elements';
import { qr } from '../../../assets/icons';

class QRBanner extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <QRContainer>
        <QRIcon src={qr} />
      </QRContainer>
    );
  };
}

export default QRBanner;
