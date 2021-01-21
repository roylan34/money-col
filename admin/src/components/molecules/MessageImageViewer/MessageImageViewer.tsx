import React, { PureComponent } from 'react';
import {
  Container,
  Header,
  CloseCircle,
  DownloadCircle,
  Image,
} from './elements';

type Props = {
  imageSrc: string;
  isVisible: boolean;
  onClose: () => void;
};

class MessageImageViewer extends PureComponent<Props> {
  onDownload = () => {
    const { imageSrc } = this.props;

    const win = window.open(imageSrc, '_blank');
    if (win) win.focus();
  };

  render = (): React.ReactElement => {
    const { imageSrc, isVisible, onClose } = this.props;

    return (
      <Container isVisible={isVisible}>
        <Header>
          <CloseCircle onClick={onClose} />
          <DownloadCircle onClick={this.onDownload} />
        </Header>
        <Image src={imageSrc} alt="Image attachment" />
      </Container>
    );
  };
}

export default MessageImageViewer;
