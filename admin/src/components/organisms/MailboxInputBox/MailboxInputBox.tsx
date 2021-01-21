import React, { PureComponent } from 'react';
import {
  Container,
  TextAreaWrapper,
  BottomWrapper,
  SubmitWrapper,
  FileInputWrapper,
  ErrorMsg,
  AttachedFileListContainer,
  AttachedFilePreviewWrapper,
} from './elements';
import { MessageValues } from './types';
import { filesAccepted } from './constants';
import { TextArea } from '../../atoms/TextArea';
import { Button } from '../../atoms/Button';
import { FileInput } from '../../atoms/FileInput';
import { AttachedFilePreview } from '../../molecules/AttachedFilePreview';
import { words } from '../../../constants';
import { convertBytesToKB, removeElementAtIndex } from '../../../utils';

type Props = {
  onPressSend: (values: MessageValues) => void;
  isSendingMsg: boolean;
};

type State = {
  message: string;
  files: File[];
  fileSizeError: string;
  isErrorModalVisible: boolean;
};

class MailboxInputBox extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      message: '',
      files: [],
      fileSizeError: '',
      isErrorModalVisible: false,
    };
  }

  onChangeMessage = (message: string) => {
    this.setState({ message });
  };

  onChangeFileInput = (file: File) => {
    if (file.size >= 20000000) {
      this.setState({
        fileSizeError: words.mailFileSizeError,
        isErrorModalVisible: true,
      });
    } else {
      const { files } = this.state;
      if (files.length < 5) {
        const newFiles = [...files, file];
        this.setState({
          files: newFiles,
          fileSizeError: '',
          isErrorModalVisible: false,
        });
      }
    }
  };

  onSendMessage = () => {
    const { onPressSend } = this.props;
    const { message, files } = this.state;

    onPressSend({ message, files });
    this.setState({ message: '' });
  };

  onCloseAttachedFilePreview = (index: number) => {
    const { files } = this.state;
    const newFiles = removeElementAtIndex(files, index);

    this.setState({ files: newFiles });
  };

  renderAttachedFiles = () => {
    const { files } = this.state;

    return files.length < 1 ? null : (
      <AttachedFileListContainer>
        {files.map((file, index) => (
          <AttachedFilePreviewWrapper key={file.name}>
            <AttachedFilePreview
              fileName={file.name}
              fileSizeInKB={convertBytesToKB(file.size)}
              index={index}
              onClose={this.onCloseAttachedFilePreview}
            />
          </AttachedFilePreviewWrapper>
        ))}
      </AttachedFileListContainer>
    );
  };

  closeErrorModal = () => {
    this.setState({ isErrorModalVisible: false, fileSizeError: '' });
  };

  render = (): React.ReactElement => {
    const { message, files, fileSizeError } = this.state;
    const { isSendingMsg } = this.props;
    const hasInput = !!message || files.length > 0;
    const shouldDisableSend = !hasInput || fileSizeError !== '';

    return (
      <Container hasAttachedFile={files.length > 0}>
        {this.renderAttachedFiles()}
        <TextAreaWrapper hasAttachedFile={files.length > 0}>
          <TextArea
            placeholder={words.mailboxInputPlaceholder}
            onChange={this.onChangeMessage}
            theme="noBorder"
            value={message}
          />
        </TextAreaWrapper>
        <BottomWrapper>
          <SubmitWrapper>
            <Button
              textSize="16px"
              title={words.mailboxInputSendButton}
              onPress={this.onSendMessage}
              disabled={shouldDisableSend || isSendingMsg}
              isLoading={isSendingMsg}
            />
          </SubmitWrapper>
          <FileInputWrapper>
            <FileInput
              onAttachFile={this.onChangeFileInput}
              filesAccepted={filesAccepted}
            />
          </FileInputWrapper>
          <ErrorMsg>{fileSizeError}</ErrorMsg>
        </BottomWrapper>
      </Container>
    );
  };
}

export default MailboxInputBox;
