import React, { PureComponent } from 'react';
import { FileInput } from '../../atoms/FileInput';
import {
  Container,
  PhotoPreviewWrapper,
  AttachedPhoto,
  FileInputWrapper,
} from './elements';

type Props = {
  imageSource: string;
  onAttachFile: (file: File) => void;
  setFieldValue?: (
    field: string,
    value: File,
    shouldValidate?: boolean | undefined,
  ) => void;
};

class AttachedProfilePhoto extends PureComponent<Props> {
  handleAttach = (file: File) => {
    const { setFieldValue, onAttachFile } = this.props;
    if (setFieldValue) {
      setFieldValue('photo', file);
    }
    if (file) {
      onAttachFile(file);
    }
  };

  render() {
    const { imageSource } = this.props;

    return (
      <Container>
        <PhotoPreviewWrapper>
          <AttachedPhoto src={imageSource} />
        </PhotoPreviewWrapper>
        <FileInputWrapper>
          <FileInput filesAccepted="image/*" onAttachFile={this.handleAttach} />
        </FileInputWrapper>
      </Container>
    );
  }
}

export default AttachedProfilePhoto;
