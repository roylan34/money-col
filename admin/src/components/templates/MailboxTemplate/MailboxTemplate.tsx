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
  LoadingWrapper,
} from './elements';
import { Avatar } from '../../atoms/Avatar';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { MessageImageViewer } from '../../molecules/MessageImageViewer';
import { MailboxSettingsContent } from '../../molecules/MailboxSettingsContent';
import { MailboxSetttingsValues } from '../../molecules/MailboxSettingsContent/types';
import { MessagePreview } from '../../organisms/MessagePreview';
import { MessagePreviewType } from '../../organisms/MessagePreview/types';
import { MessageConversation } from '../../organisms/MessageConversation';
import { MessageProps } from '../../organisms/MessageConversation/types';
import { MailboxInputBox } from '../../organisms/MailboxInputBox';
import { MessageValues } from '../../organisms/MailboxInputBox/types';

type Props = {
  conversations: MessagePreviewType;
  messages: Array<MessageProps>;
  messageSelected: string;
  notifSettingValue: string;
  notifOfUsageSettingValue: string;
  userId: string;
  convoId: string;
  isAdmin: boolean;
  participants: Array<string>;
  instructorId: string;
  isSendingMsg: boolean;
  isFetchingConvos: boolean;
  onChangeSelectedMsg: (convoId: string) => void;
  onChangeSettings: (values: MailboxSetttingsValues) => void;
  onSendMsg: (values: MessageValues) => void;
  onPurchasePoints: () => void;
  fetchMessages: (convoId: string) => void;
  onClickBackArrow: () => void;
  onLoadMoreConvo: () => Promise<string>;
  isRowConvoLoaded: ({ index }: { index: number }) => boolean;
  hasNextPageConvo?: boolean;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isAdmin: false as boolean,
  ownership: 'instructor' as 'admin' | 'instructor',
};

type State = {
  imageUrl: string;
  showImage: boolean;
  isSettingsVisible: boolean;
  openConversation: boolean;
  msgValues: MessageValues;
};

class MailboxTemplate extends PureComponent<Props & DefaultProps, State> {
  static defaultProps = defaultProps;

  constructor(props: Props & DefaultProps) {
    super(props);

    this.state = {
      imageUrl: '',
      showImage: false,
      isSettingsVisible: false,
      openConversation: false,
      msgValues: {
        message: '',
        files: [],
      },
    };
  }

  componentDidUpdate(prevProps: Props) {
    const { messageSelected, fetchMessages, messages } = this.props;
    if (prevProps.messageSelected !== messageSelected && !!messageSelected) {
      fetchMessages(messageSelected);
    }

    if (prevProps.messages !== messages && messages) {
      this.setState({ openConversation: true });
    }
  }

  onPressImage = (imageUrl: string) => {
    this.setState({ imageUrl }, () => this.setState({ showImage: true }));
  };

  onCloseImage = () => {
    this.setState({ showImage: false });
  };

  onPressSettings = () => {
    this.setState({ isSettingsVisible: true });
  };

  onPressSettingsDone = (values: MailboxSetttingsValues) => {
    const { onChangeSettings } = this.props;

    this.setState({ isSettingsVisible: false }, () => onChangeSettings(values));
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
      userId,
      isAdmin,
      onClickBackArrow,
      notifSettingValue,
      notifOfUsageSettingValue,
      onSendMsg,
      ownership,
      participants,
      instructorId,
      isSendingMsg,
      isFetchingConvos,
      onLoadMoreConvo,
      isRowConvoLoaded,
      hasNextPageConvo,
    } = this.props;
    const {
      openConversation,
      imageUrl,
      showImage,
      isSettingsVisible,
    } = this.state;

    return (
      <Container>
        {
          isFetchingConvos ? (
            <LoadingWrapper>
              <LoadingIndicator />
            </LoadingWrapper>
          ) : (
              <>
                <MessageImageViewer
                  imageSrc={imageUrl}
                  isVisible={showImage}
                  onClose={this.onCloseImage}
                />
                <MessagePreviewWrapper hasSelectedMsg={openConversation}>
                  <MessagePreview
                    conversations={conversations}
                    messageSelected={messageSelected}
                    onChangeSelectedMsg={onChangeSelectedMsg}
                    onClickSettings={this.onPressSettings}
                    isAdmin={isAdmin}
                    onClickBackArrow={onClickBackArrow}
                    onLoadMoreConvo={onLoadMoreConvo}
                    isRowConvoLoaded={isRowConvoLoaded}
                    hasNextPageConvo={hasNextPageConvo}
                  />
                </MessagePreviewWrapper>
                <ConversationBody hasSelectedMsg={openConversation}>
                  <ConversationHeader>
                    <AvatarWrapper>
                      <Avatar
                        label={conversations[messageSelected]?.label}
                        imageSource={conversations[messageSelected]?.imgSrc}
                        isAdmin={conversations[messageSelected]?.isAdmin}
                      />
                    </AvatarWrapper>
                    <HeaderName>{conversations[messageSelected]?.name}</HeaderName>
                  </ConversationHeader>
                  <ConversationWrapper>
                    <MessageConversation
                      convoId={messageSelected}
                      userId={userId}
                      messages={messages}
                      participants={participants}
                      onPressImage={this.onPressImage}
                      onScrollToTop={this.onScrollToTop}
                      ownership={ownership}
                      instructorId={instructorId}
                      lastReadMessage={
                        conversations[messageSelected]?.lastReadMessage || ''
                      }
                    />
                  </ConversationWrapper>
                  {(ownership === 'admin' ||
                    (ownership === 'instructor' && !isAdmin)) && (
                      <InputBoxWrapper>
                        <MailboxInputBox
                          onPressSend={onSendMsg}
                          isSendingMsg={isSendingMsg}
                        />
                      </InputBoxWrapper>
                    )}
                </ConversationBody>
                {!isAdmin && (
                  <>
                    <Cover isVisible={isSettingsVisible}>
                      <SettingsContainer>
                        <MailboxSettingsContent
                          notifSettings={notifSettingValue}
                          notifOfUsageSettings={notifOfUsageSettingValue}
                          onPressDone={this.onPressSettingsDone}
                        />
                      </SettingsContainer>
                    </Cover>
                  </>
                )}
              </>
            )
        }
      </Container >
    );
  };
}

export default MailboxTemplate;
