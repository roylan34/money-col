import React, { PureComponent } from 'react';
import {
  Container,
  CloseCircle,
  AttachedFileCircle,
  NameContainer,
  FileName,
  FileSize,
} from './elements';

type Props = {
  fileName: string;
  fileSizeInKB: number;
  index: number;
  onClose: (index: number) => void;
};

class AttachedFilePreview extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { fileName, fileSizeInKB, index, onClose } = this.props;

    return (
      <Container>
        <CloseCircle onClick={() => onClose(index)} />
        <AttachedFileCircle />
        <NameContainer>
          <FileName>{fileName}</FileName>
          <FileSize>{`${fileSizeInKB}KB`}</FileSize>
        </NameContainer>
      </Container>
    );
  };
}

export default AttachedFilePreview;
