import React, { PureComponent } from 'react';
import {
  Container,
  Header,
  CloseCircle,
  DownloadCircle,
  Image,
  CompleteText,
} from './elements';

type Props = {
  imageSrc: string;
  isVisible: boolean;
  onClose: () => void;
  onDownloadFile: () => void;
};

class MessageImageViewer extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { imageSrc, isVisible, onClose, onDownloadFile } = this.props;

    return (
      <Container isVisible={isVisible}>
        <Header>
          <CloseCircle onClick={onClose}>
            <CompleteText>完了</CompleteText>
          </CloseCircle>
          <DownloadCircle onClick={onDownloadFile} />
        </Header>
        <Image src={imageSrc} alt="Image attachment" />
      </Container>
    );
  };
}

export default MessageImageViewer;
