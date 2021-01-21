import React, { PureComponent, ChangeEvent } from 'react';
import { Container, AttachFileInput, ButtonContainer } from './elements';

type Props = {
  onAttachFile: (file: File) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  filesAccepted: '' as string,
};

class FileInput extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  handleOnChange = (event: ChangeEvent) => {
    const { onAttachFile } = this.props;
    const target = event.target as HTMLInputElement;

    if (target.files) {
      const file = target.files[0];

      onAttachFile(file);
    }
  };

  render = (): React.ReactElement => {
    const { filesAccepted } = this.props;

    return (
      <Container>
        <ButtonContainer htmlFor="attachFile" />
        <AttachFileInput
          id="attachFile"
          type="file"
          onChange={this.handleOnChange}
          accept={filesAccepted}
        />
      </Container>
    );
  };
}

export default FileInput;
