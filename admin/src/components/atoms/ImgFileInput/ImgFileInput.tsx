import React, { PureComponent, ChangeEvent } from 'react';
import {
  Container,
  FileInputLabel,
  FileInput,
  SelectedImage,
  OverlayFileInput,
  RemoveThumbnailWrapper,
} from './elements';

type Props = {
  onChangeFile: (file: File | null) => void;
  value: string | File | null;
};

type State = {
  file: File | null | string;
};

class ImgFileInput extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      file: props.value,
    };
  }

  onSelectFile = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const { onChangeFile } = this.props;

    if (target.files) {
      this.setState({ file: target.files[0] }, () =>
        // @ts-ignore
        onChangeFile(target.files[0]),
      );
    }
  };

  onRemoveThumbnail = () => {
    const { onChangeFile } = this.props;
    this.setState({ file: null }, () => onChangeFile(null));
  };

  render = (): React.ReactElement => {
    const { file } = this.state;
    const imageSrc =
      file !== null
        ? typeof file === 'string' || file instanceof String
          ? (file as string)
          : URL.createObjectURL(file)
        : undefined;

    return (
      <Container>
        {file !== null ? (
          <>
            <RemoveThumbnailWrapper onClick={this.onRemoveThumbnail} />
            <SelectedImage src={imageSrc} />
            <OverlayFileInput htmlFor="imgInput" />
            <FileInput
              type="file"
              id="imgInput"
              accept="image/*"
              onChange={this.onSelectFile}
            />
          </>
        ) : (
          <>
            <FileInputLabel htmlFor="imgInput" />
            <FileInput
              type="file"
              id="imgInput"
              accept="image/*"
              onChange={this.onSelectFile}
            />
          </>
        )}
      </Container>
    );
  };
}

export default ImgFileInput;
