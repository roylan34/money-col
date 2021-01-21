import React, { PureComponent } from 'react';
import {
  Container,
  MessagePreviewWrapper,
  ConversationBody,
  ConversationHeader,
  AvatarWrapper,
  HeaderName,
  ConversationWrapper,
  InputBoxWrapper,
  Cover,
  SettingsContainer,
  BackIconWrapper,
  ConfirmationContainer,
  LoadingWrapper,
} from './elements';
import { MobileLeftArrow } from '../../atoms/Icons';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { Avatar } from '../../molecules/ProfileIcon';
import { MessageImageViewer } from '../../molecules/MessageImageViewer';
import { MailboxSettingsContent } from '../../molecules/MailboxSettingsContent';
import { MailboxSetttingsValues } from '../../molecules/MailboxSettingsContent/types';
import { MailboxModalContents } from '../../molecules/MailboxModalContents';
import { MessagePreview } from '../../organisms/MessagePreview';
import { MessagePreviewType } from '../../organisms/MessagePreview/types';
import { MessageConversation } from '../../organisms/MessageConversation';
import { MessageProps } from '../../organisms/MessageConversation/types';
import { MailboxInputBox } from '../../organisms/MailboxInputBox';
import { MessageValues } from '../../organisms/MailboxInputBox/types';
import { Toast } from '../../molecules/Toast';
import { words } from '../../../constants';

type Props = {
  conversations: MessagePreviewType;
  messages: Array<MessageProps>;
  messageSelected: string;
  userId: string;
  notifyRepliesWithEmail: string;
  displaySendConfirmation: string;
  userPoints: number;
  convoId: string;
  discount: number;
  score: number;
  isUpdatingMailboxSettings: boolean;
  isSendingMessage: boolean;
  isFetchingConvos: boolean;
  onChangeSelectedMsg: (convoId: string) => void;
  onChangeSettings: (values: MailboxSetttingsValues) => void;
  onSendMsg: (values: MessageValues) => void;
  onPurchasePoints: () => void;
  fetchMessages: (convoId: string) => void;
  onDownloadFile: (url: string, filename: string) => void;
  onLoadMoreConvo: () => Promise<string>;
  isRowConvoLoaded: ({ index }: { index: number }) => boolean;
  hasNextPageConvo?: boolean;
};

type State = {
  imageUrl: string;
  showImage: boolean;
  isSettingsVisible: boolean;
  openConversation: boolean;
  isConfirmationVisible: boolean;
  msgValues: MessageValues;
  toastTime?: number;
  toastTitle?: string;
  imageFilename: string;
  shouldResetInputBox: boolean;
};

class MailboxTemplate extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imageUrl: '',
      imageFilename: '',
      showImage: false,
      isSettingsVisible: false,
      openConversation: false,
      isConfirmationVisible: false,
      msgValues: {
        message: '',
        files: [],
      },
      shouldResetInputBox: false,
    };
  }

  componentDidUpdate(prevProps: Props) {
    const {
      messageSelected,
      fetchMessages,
      messages,
      score,
      discount,
      isUpdatingMailboxSettings,
      isSendingMessage,
      convoId,
      userId,
    } = this.props;

    if (prevProps.messageSelected !== messageSelected && !!messageSelected) {
      fetchMessages(messageSelected);
    }

    if (prevProps.messages !== messages && messages && messages.length > 0) {
      this.setState({ openConversation: true });
    }

    if (prevProps.score !== score && discount && typeof score === 'number') {
      this.setToastState(discount);
    }

    if (
      prevProps.isUpdatingMailboxSettings !== isUpdatingMailboxSettings &&
      !isUpdatingMailboxSettings
    ) {
      this.setState({ isSettingsVisible: false });
    }

    if (prevProps.isSendingMessage !== isSendingMessage && !isSendingMessage) {
      this.setState({ shouldResetInputBox: false });
    }

    if (
      prevProps.convoId !== convoId &&
      !!convoId &&
      convoId === `${userId}_admin`
    ) {
      this.setState({ openConversation: true });
    }
  }

  setToastState = (discount: number) => {
    const toastTitle = `${discount}${words.pointsWereRefunded}`;
    this.setState(() => ({ toastTime: Date.now(), toastTitle }));
  };

  onPressBackConvo = () => {
    this.setState({ openConversation: false });
  };

  onPressImage = (imageUrl: string, imageFilename: string) => {
    this.setState({ imageUrl, imageFilename }, () =>
      this.setState({ showImage: true }),
    );
  };

  onCloseImage = () => {
    this.setState({ showImage: false });
  };

  onPressSettings = () => {
    this.setState({ isSettingsVisible: true });
  };

  onPressSettingsDone = (values: MailboxSetttingsValues) => {
    const {
      onChangeSettings,
      notifyRepliesWithEmail: prevNotifyRepliesWithEmail,
      displaySendConfirmation: prevDisplaySendConfirmation,
    } = this.props;

    if (
      prevNotifyRepliesWithEmail !== values.notifyRepliesWithEmail ||
      prevDisplaySendConfirmation !== values.displaySendConfirmation
    ) {
      onChangeSettings(values);
    } else {
      this.setState({ isSettingsVisible: false });
    }
  };

  getConfirmationModalMsg = (): string => {
    const { userPoints } = this.props;
    return userPoints >= 5
      ? `5ポイントを使用してメッセージを送信しますか？あなたの保有ポイント：${userPoints}ポイント`
      : 'ポイントが不足しています。 追加のポイント購入を行いますか？';
  };

  onPressSendMsg = (msgValues: MessageValues) => {
    const {
      displaySendConfirmation,
      onSendMsg,
      onPurchasePoints,
      userPoints,
    } = this.props;

    if (displaySendConfirmation === 'true') {
      this.setState({ isConfirmationVisible: true, msgValues });
    } else {
      this.setState({ shouldResetInputBox: true });
      if (userPoints >= 5) onSendMsg(msgValues);
      else onPurchasePoints();
    }
  };

  onCancelSending = () => {
    this.setState({ isConfirmationVisible: false, shouldResetInputBox: false });
  };

  onConfirmSend = () => {
    const { onSendMsg, onPurchasePoints, userPoints } = this.props;
    const { msgValues } = this.state;

    if (userPoints >= 5) {
      this.setState(
        { isConfirmationVisible: false, shouldResetInputBox: true },
        () => onSendMsg(msgValues),
      );
    } else {
      this.setState(
        { isConfirmationVisible: false, shouldResetInputBox: true },
        () => onPurchasePoints(),
      );
    }
  };

  onScrollToTop = () => {
    const { fetchMessages, convoId } = this.props;

    fetchMessages(convoId);
  };

  render = (): React.ReactElement => {
    const {
      conversations,
      messages,
      messageSelected,
      onChangeSelectedMsg,
      notifyRepliesWithEmail,
      displaySendConfirmation,
      userPoints,
      userId,
      onDownloadFile,
      isUpdatingMailboxSettings,
      isSendingMessage,
      onLoadMoreConvo,
      isRowConvoLoaded,
      hasNextPageConvo,
      isFetchingConvos,
    } = this.props;
    const {
      imageUrl,
      imageFilename,
      showImage,
      isSettingsVisible,
      openConversation,
      isConfirmationVisible,
      toastTitle,
      toastTime,
      shouldResetInputBox,
    } = this.state;

    return (
      <Container>
        {toastTitle ? (
          <Toast
            type="reward"
            title={toastTitle}
            message=""
            toastKey={toastTime}
          />
        ) : null}
        <MessageImageViewer
          imageSrc={imageUrl}
          isVisible={showImage}
          onClose={this.onCloseImage}
          onDownloadFile={() => onDownloadFile(imageUrl, imageFilename)}
        />
        {isFetchingConvos ? (
          <LoadingWrapper>
            <LoadingIndicator />
          </LoadingWrapper>
        ) : (
          <>
            <MessagePreviewWrapper hasSelectedMsg={openConversation}>
              <MessagePreview
                conversations={conversations}
                messageSelected={messageSelected}
                onChangeSelectedMsg={onChangeSelectedMsg}
                onClickSettings={this.onPressSettings}
                onLoadMoreConvo={onLoadMoreConvo}
                isRowConvoLoaded={isRowConvoLoaded}
                hasNextPageConvo={hasNextPageConvo}
              />
            </MessagePreviewWrapper>
            <ConversationBody hasSelectedMsg={openConversation}>
              <ConversationHeader>
                <BackIconWrapper onClick={this.onPressBackConvo}>
                  <MobileLeftArrow />
                </BackIconWrapper>
                <AvatarWrapper>
                  <Avatar
                    label={conversations[messageSelected]?.label}
                    imageSource={conversations[messageSelected]?.imgSrc}
                    isAdmin={conversations[messageSelected]?.isAdmin}
                    theme="message"
                  />
                </AvatarWrapper>
                <HeaderName>{conversations[messageSelected]?.name}</HeaderName>
              </ConversationHeader>
              <ConversationWrapper>
                <MessageConversation
                  convoId={messageSelected}
                  userId={userId}
                  messages={messages}
                  onPressImage={this.onPressImage}
                  onScrollToTop={this.onScrollToTop}
                  lastReadMessage={
                    conversations[messageSelected]?.lastReadMessage || ''
                  }
                  onDownloadFile={onDownloadFile}
                />
              </ConversationWrapper>
              <InputBoxWrapper>
                <MailboxInputBox
                  onPressSend={this.onPressSendMsg}
                  shouldResetInputBox={shouldResetInputBox}
                  isSendingMessage={isSendingMessage}
                />
              </InputBoxWrapper>
            </ConversationBody>
          </>
        )}
        <Cover isVisible={isSettingsVisible}>
          <SettingsContainer>
            <MailboxSettingsContent
              notifyRepliesWithEmail={notifyRepliesWithEmail}
              displaySendConfirmation={displaySendConfirmation}
              isUpdatingMailboxSettings={isUpdatingMailboxSettings}
              onPressDone={this.onPressSettingsDone}
            />
          </SettingsContainer>
        </Cover>
        <Cover isVisible={isConfirmationVisible}>
          <ConfirmationContainer>
            <MailboxModalContents
              title={
                userPoints >= 5
                  ? words.confirmationTitle
                  : words.notEnoughPoints
              }
              msg={this.getConfirmationModalMsg()}
              theme={userPoints >= 5 ? 'enoughPoints' : 'notEnoughPoints'}
              onCancel={this.onCancelSending}
              onConfirm={this.onConfirmSend}
            />
          </ConfirmationContainer>
        </Cover>
      </Container>
    );
  };
}

export default MailboxTemplate;
