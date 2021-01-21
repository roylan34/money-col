import React, { PureComponent } from 'react';
import {
  Container,
  TextAreaWrapper,
  TopWrapper,
  BottomWrapper,
  SubmitWrapper,
  FileInputWrapper,
  ErrorMsg,
  AttachedFileListContainer,
  AttachedFilePreviewWrapper,
  MobileAttachFile,
  MobileSendButton,
  Cover,
  ErrorModalWrapper,
  TitleContainer,
  Title,
  Divider,
  ModalBody,
  CloseButtonWrapper,
} from './elements';
import { MessageValues } from './types';
import { filesAccepted } from './constants';
import { TextArea } from '../../atoms/TextArea';
import { Button } from '../../atoms/Button';
import { FileInput } from '../../atoms/FileInput';
import { BluePlane } from '../../atoms/Icons';
import { AttachedFilePreview } from '../../molecules/AttachedFilePreview';
import { words } from '../../../constants';
import { convertBytesToKB, removeElementAtIndex } from '../../../utils';

type Props = {
  isSendingMessage: boolean;
  onPressSend: (values: MessageValues) => void;
  shouldResetInputBox?: boolean;
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

  componentDidUpdate(prevProps: Props) {
    const { shouldResetInputBox } = this.props;

    if (
      prevProps.shouldResetInputBox !== shouldResetInputBox &&
      shouldResetInputBox
    ) {
      this.setState({ message: '', files: [] });
    }
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
    // this.setState({ message: '', files: [] });
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
          <AttachedFilePreviewWrapper key={`${index}:${file.name}`}>
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
    const { isSendingMessage } = this.props;
    const hasInput = !!message || files.length > 0;
    const shouldDisableSend = !hasInput || fileSizeError !== '';

    return (
      <Container hasAttachedFile={files.length > 0}>
        {this.renderAttachedFiles()}
        <TopWrapper>
          <MobileAttachFile>
            <FileInput
              onAttachFile={this.onChangeFileInput}
              filesAccepted={filesAccepted}
            />
          </MobileAttachFile>
          <TextAreaWrapper hasAttachedFile={files.length > 0}>
            <TextArea
              placeholder={words.mailboxInputPlaceholder}
              onChange={this.onChangeMessage}
              theme="noBorder"
              value={message}
            />
          </TextAreaWrapper>
          <MobileSendButton
            onClick={shouldDisableSend ? () => {} : this.onSendMessage}>
            <BluePlane disabled={shouldDisableSend} />
          </MobileSendButton>
        </TopWrapper>
        <BottomWrapper>
          <SubmitWrapper>
            <Button
              textSize="16px"
              title={words.mailboxInputSendButton}
              onPress={this.onSendMessage}
              disabled={shouldDisableSend}
              isLoading={isSendingMessage}
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
        <Cover isVisible={!!fileSizeError}>
          <ErrorModalWrapper>
            <TitleContainer>
              <Title>エラー</Title>
              <Divider />
            </TitleContainer>
            <ModalBody>
              <ErrorMsg>{fileSizeError}</ErrorMsg>
              <CloseButtonWrapper>
                <Button
                  textSize="16px"
                  title="OK"
                  onPress={this.closeErrorModal}
                />
              </CloseButtonWrapper>
            </ModalBody>
          </ErrorModalWrapper>
        </Cover>
      </Container>
    );
  };
}

export default MailboxInputBox;
