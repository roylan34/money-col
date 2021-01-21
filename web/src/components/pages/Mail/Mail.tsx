import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { UserRankTitle } from '../../../domain/entities';
import { MailboxSetttingsValues } from '../../molecules/MailboxSettingsContent/types';
import { MessageProps } from '../../organisms/MessageConversation/types';
import { MessageValues } from '../../organisms/MailboxInputBox/types';
import { MessagePreviewItemValues } from '../../organisms/MessagePreviewItem/types';
import { MailboxTemplate } from '../../templates/Mailbox';
import { downloadFileBlob } from '../../../../../shared/utils';
import { paths } from '../../../constants/routes/urls';

type Props = {
  userId: string;
  conversations: {
    [key: string]: MessagePreviewItemValues & { instructorId: string };
  };
  messages: { [key: string]: Array<MessageProps> };
  userPoints: number;
  rank?: UserRankTitle;
  discount: number;
  score: number;
  currentFileToBlob: Blob;
  displaySendConfirmation: boolean;
  notifyRepliesWithEmail: boolean;
  isUpdatingMailboxSettings: boolean;
  isSendingMessage: boolean;
  isFetchingConvos: boolean;
  fetchMessages: (conversationId: string) => void;
  updateReadStatus: (conversationId: string, userId: string) => void;
  fetchFileBlob: (url: string) => void;
  sendMessage: (
    params: {
      files?: Array<File>;
      title?: string;
      content: string;
      userId: string;
      instructorId: string;
      senderId: string;
    },
    rank?: UserRankTitle,
  ) => void;
  fetchConversations: (params: {
    userId: string;
    limit: number;
    lastId: string;
  }) => void;
  hasNextPageConvo: boolean;
  updateMailSettings: (
    id: string,
    notifyRepliesWithEmail: boolean,
    displaySendConfirmation: boolean,
  ) => void;
} & RouteComponentProps<
  {},
  {},
  {
    isFromContactInfo?: boolean;
  }
>;

type State = {
  selectedConvoId: string;
  isFocused: boolean;
  currentFileName: string;
};

export default class Mail extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedConvoId: '',
      isFocused: false,
      currentFileName: '',
    };
  }

  componentDidMount() {
    const { userId, fetchConversations, history, fetchMessages } = this.props;
    fetchConversations({
      userId,
      limit: 10,
      lastId: '',
    });
    window.addEventListener('focus', this.onFocus);
    window.addEventListener('blur', this.onBlur);

    if (history.location.state && history.location.state.isFromContactInfo) {
      this.setState({ selectedConvoId: `${userId}_admin` }, () =>
        fetchMessages(`${userId}_admin`),
      );
    }
  }

  componentDidUpdate(prevProps: Props) {
    const {
      conversations,
      userId,
      updateReadStatus,
      currentFileToBlob,
    } = this.props;
    const { isFocused, selectedConvoId, currentFileName } = this.state;
    const isUnread =
      conversations[selectedConvoId] &&
      conversations[selectedConvoId].unreadNumber > 0;

    if (
      JSON.stringify(prevProps.conversations[selectedConvoId]) !==
        JSON.stringify(conversations[selectedConvoId]) &&
      isUnread &&
      isFocused
    ) {
      updateReadStatus(selectedConvoId, userId);
    }

    if (
      prevProps.currentFileToBlob !== currentFileToBlob &&
      currentFileToBlob
    ) {
      downloadFileBlob(currentFileToBlob, currentFileName);
    }
  }

  componentWilUnmount() {
    window.removeEventListener('focus', this.onFocus);
    window.removeEventListener('blur', this.onBlur);
  }

  handleLoadMoreConversation = (): Promise<string> => {
    const { userId, fetchConversations, conversations } = this.props;

    const convoKeys = Object.keys(conversations);
    const lastId = convoKeys.length > 0 ? convoKeys[convoKeys.length - 1] : '';
    if (lastId) {
      fetchConversations({
        userId,
        limit: 10,
        lastId: lastId,
      });
    }

    return new Promise(resolve => {
      resolve(lastId);
    });
  };

  isRowConvoLoaded = ({ index }: { index: number }) => {
    const { conversations } = this.props;

    const convoId = Object.keys(conversations)[index];
    return !!conversations[convoId];
  };

  navigateToPurchasePoints = () => {
    this.props.history.push(paths.purchasePoints);
  };

  handleOnSelectConversation = (conversationId: string) => {
    this.setState({ selectedConvoId: conversationId }, () =>
      this.markUnreadAsRead(),
    );
  };

  getMessages = (conversationId: string) => {
    const { fetchMessages } = this.props;
    fetchMessages(conversationId);
  };

  handleOnSendMessage = (messageValues: MessageValues) => {
    const { selectedConvoId } = this.state;
    const { sendMessage, userId, conversations, rank } = this.props;
    const { files, message } = messageValues;
    const instructorId =
      selectedConvoId && conversations && conversations[selectedConvoId]
        ? conversations[selectedConvoId].instructorId
        : '';

    sendMessage(
      {
        files,
        content: message,
        userId,
        instructorId,
        senderId: userId,
      },
      rank,
    );
  };

  markUnreadAsRead = () => {
    const { conversations, userId, updateReadStatus } = this.props;
    const { isFocused, selectedConvoId } = this.state;
    const isUnread =
      conversations[selectedConvoId] &&
      conversations[selectedConvoId].unreadNumber > 0;

    if (isUnread && isFocused) {
      updateReadStatus(selectedConvoId, userId);
    }
  };

  onFocus = () => {
    this.setState({ isFocused: true }, () => this.markUnreadAsRead());
  };

  onBlur = () => {
    this.setState({ isFocused: false });
  };

  handleFileBlob = (url: string, filename: string) => {
    this.setState({ currentFileName: filename }, () =>
      this.props.fetchFileBlob(url),
    );
  };

  onChangeMailboxSettings = (values: MailboxSetttingsValues) => {
    const { userId, updateMailSettings } = this.props;
    const notifyRepliesWithEmail = values.notifyRepliesWithEmail === 'true';
    const displaySendConfirmation = values.displaySendConfirmation === 'true';

    updateMailSettings(userId, notifyRepliesWithEmail, displaySendConfirmation);
  };

  render = (): React.ReactNode => {
    const {
      conversations,
      messages,
      userPoints,
      userId,
      discount,
      score,
      displaySendConfirmation,
      notifyRepliesWithEmail,
      isUpdatingMailboxSettings,
      isSendingMessage,
      hasNextPageConvo,
      isFetchingConvos,
    } = this.props;
    const { selectedConvoId } = this.state;
    const selectedMessages =
      selectedConvoId && messages && messages[selectedConvoId]
        ? messages[selectedConvoId]
        : [];
    return (
      <MailboxTemplate
        convoId={selectedConvoId}
        userId={userId}
        conversations={conversations}
        messages={selectedMessages}
        messageSelected={selectedConvoId}
        onChangeSelectedMsg={this.handleOnSelectConversation}
        onChangeSettings={this.onChangeMailboxSettings}
        notifyRepliesWithEmail={notifyRepliesWithEmail.toString()}
        displaySendConfirmation={displaySendConfirmation.toString()}
        userPoints={userPoints}
        onSendMsg={this.handleOnSendMessage}
        onPurchasePoints={this.navigateToPurchasePoints}
        fetchMessages={this.getMessages}
        discount={discount}
        score={score}
        onDownloadFile={this.handleFileBlob}
        isUpdatingMailboxSettings={isUpdatingMailboxSettings}
        isSendingMessage={isSendingMessage}
        hasNextPageConvo={hasNextPageConvo}
        onLoadMoreConvo={this.handleLoadMoreConversation}
        isRowConvoLoaded={this.isRowConvoLoaded}
        isFetchingConvos={isFetchingConvos}
      />
    );
  };
}
