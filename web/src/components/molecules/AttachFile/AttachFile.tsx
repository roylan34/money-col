import React, { PureComponent, ChangeEvent } from 'react';
import {
  Container,
  ButtonContainer,
  AttachFileInput,
  FileNameContainer,
  Filename,
  SizeLabel,
  Placeholder,
} from './elements';

type Props = {
  onChange?: (file: File | Array<File>) => void;
  setFieldValue?: (
    field: string,
    value: File,
    shouldValidate?: boolean | undefined,
  ) => void;
  theme: 'askInstructor' | 'basicInfo';
  placeholder?: string;
  id?: string;
  isClearFilename?: boolean | undefined;
  updateUserSuccessInfo?: { message: string; timestamp: number };
};

type State = {
  filename: string;
};

class AttachFile extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      filename: '',
    };
  }

  static defaultProps = {
    placeholder: '',
  };

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.updateUserSuccessInfo?.timestamp !==
        this.props.updateUserSuccessInfo?.timestamp &&
      this.props.isClearFilename
    ) {
      this.setState({ filename: '' });
    }
  }

  handleOnChange = (event: ChangeEvent) => {
    const { onChange, setFieldValue, id, theme } = this.props;
    const target = event.target as HTMLInputElement;

    let filename: string = '';

    if (theme === 'basicInfo') {
      if (target.files?.length) {
        const file = target.files[0];

        filename = file.name;
        if (onChange) {
          onChange(file);
        }
        if (setFieldValue) {
          setFieldValue(id || 'file', file);
        }
        this.setState({ filename });
      }
    } else {
      if (target.files && target.files.length > 5) {
        alert('You can only upload a maximum of 5 files.');
      } else {
        if (target.files) {
          if (onChange) {
            let files: Array<File> = [];
            let fileNames = '';
            for (let i = 0; i < target.files.length; i++) {
              files.push(target.files[i]);
              fileNames = fileNames + target.files[i].name + ';';
            }

            onChange(files);
            this.setState({ filename: fileNames });
          }
        }
      }
    }
  };

  render = (): React.ReactElement => {
    const { theme, placeholder, id = 'attach-file' } = this.props;
    const { filename } = this.state;

    return (
      <Container>
        <FileNameContainer theme={theme}>
          {filename.length ? (
            <Filename>{filename}</Filename>
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
          {theme === 'askInstructor' && (
            <SizeLabel theme={theme}>（○○MB以下）</SizeLabel>
          )}
        </FileNameContainer>
        <ButtonContainer htmlFor={id} theme={theme} />
        <AttachFileInput
          id={id}
          type="file"
          onChange={this.handleOnChange}
          multiple={theme === 'askInstructor'}
        />
        {theme === 'basicInfo' && (
          <SizeLabel theme={theme}>（○○MB以下）</SizeLabel>
        )}
      </Container>
    );
  };
}

export default AttachFile;
