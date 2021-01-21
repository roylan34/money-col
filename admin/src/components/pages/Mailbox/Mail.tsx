import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { MailboxTemplate } from '../../templates/MailboxTemplate';
import { MessagePreviewItemValues } from '../../molecules/MessagePreviewItem/types';
import { MessageValues } from '../../organisms/MailboxInputBox/types';
import { MessageProps } from '../../organisms/MessageConversation/types';

type Props = {
  userId: string;
  conversations: {
    [key: string]: MessagePreviewItemValues & { userId: string };
  };
  messages: { [key: string]: Array<MessageProps> };
  isAdmin: boolean;
  participants: Array<string>;
  isSendingMsg: boolean;
  isFetchingConvos: boolean;
  fetchMessages: (conversationId: string) => void;
  updateReadStatus: (conversationId: string, userId: string) => void;
  fetchConversations: (params: {
    instructorId: string;
    limit: number;
    lastId: string;
  }) => void;
  sendMessage: (params: {
    files?: Array<File>;
    title?: string;
    content: string;
    userId: string;
    instructorId: string;
    senderId: string;
  }) => void;
  hasNextPageConvo: boolean;
} & RouteComponentProps;

type State = {
  selectedConvoId: string;
  ownership: 'admin' | 'instructor';
  instructorId: string;
  isFocused: boolean;
};

export default class Mail extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedConvoId: '',
      ownership: 'instructor',
      instructorId: '',
      isFocused: false,
    };
  }

  componentDidMount() {
    const {
      location: { search },
      isAdmin,
      userId,
    } = this.props;

    window.addEventListener('focus', this.onFocus);
    window.addEventListener('blur', this.onBlur);

    if (isAdmin && !search) {
      this.setState(
        {
          ownership: 'admin',
        },
        () => this.handleLoadMoreConversation(),
      );
    } else {
      const id = isAdmin ? search.replace(/\?id=/, '') : userId;
      this.setState({ ownership: 'instructor', instructorId: id }, () =>
        this.handleLoadMoreConversation(),
      );
    }
  }

  componentWilUnmount() {
    window.removeEventListener('focus', this.onFocus);
    window.removeEventListener('blur', this.onBlur);
  }

  componentDidUpdate(prevProps: Props) {
    const { conversations, userId, updateReadStatus, isAdmin } = this.props;
    const { isFocused, selectedConvoId } = this.state;
    const isUnread =
      conversations[selectedConvoId] &&
      conversations[selectedConvoId].unreadNumber > 0;

    if (
      JSON.stringify(prevProps.conversations[selectedConvoId]) !==
      JSON.stringify(conversations[selectedConvoId]) &&
      isUnread &&
      isFocused &&
      !isAdmin
    ) {
      updateReadStatus(selectedConvoId, userId);
    }
  }

  handleLoadMoreConversation = (): Promise<string> => {
    const { userId, fetchConversations, conversations, } = this.props;

    const convoIds = Object.keys(conversations);
    const lastId = convoIds.length > 0 ? convoIds[convoIds.length - 1] : '';

    fetchConversations({
      instructorId: userId,
      limit: 10,
      lastId: lastId !== "admin" ? lastId : '',
    });

    return new Promise((resolve) => {
      resolve(lastId);
    })
  }

  isRowConvoLoaded = ({ index }: { index: number }) => {
    const { conversations } = this.props;

    const convoId = Object.keys(conversations)[index];
    return !!conversations[convoId];
  }

  handleOnSelectConversation = (conversationId: string) => {
    this.setState({ selectedConvoId: conversationId }, () =>
      this.markUnreadAsRead(),
    );
  };

  getMessages = (conversationId: string) => {
    const { fetchMessages } = this.props;
    fetchMessages(conversationId);
  };

  handleSendMessage = (values: MessageValues) => {
    const { selectedConvoId } = this.state;
    const { sendMessage, userId: instructorId, conversations } = this.props;
    const { files, message } = values;
    const studentId =
      selectedConvoId && conversations && conversations[selectedConvoId]
        ? conversations[selectedConvoId].userId
        : '';

    sendMessage({
      files,
      content: message,
      userId: studentId,
      instructorId,
      senderId: instructorId,
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  markUnreadAsRead = () => {
    const { conversations, userId, updateReadStatus, isAdmin } = this.props;
    const { isFocused, selectedConvoId } = this.state;
    const isUnread =
      conversations[selectedConvoId] &&
      conversations[selectedConvoId].unreadNumber > 0;
    if (isUnread && isFocused && !isAdmin) {
      updateReadStatus(selectedConvoId, userId);
    }
  };

  onFocus = () => {
    this.setState({ isFocused: true }, () => this.markUnreadAsRead());
  };

  onBlur = () => {
    this.setState({ isFocused: false });
  };

  render = (): React.ReactNode => {
    const {
      conversations,
      messages,
      userId,
      isAdmin,
      participants,
      isSendingMsg,
      isFetchingConvos,
      hasNextPageConvo
    } = this.props;
    const { selectedConvoId, ownership, instructorId } = this.state;
    const selectedMessages =
      selectedConvoId && messages && messages[selectedConvoId]
        ? messages[selectedConvoId]
        : [];

    return (
      <MailboxTemplate
        convoId={selectedConvoId}
        isAdmin={isAdmin}
        userId={userId}
        conversations={conversations}
        messages={selectedMessages}
        messageSelected={selectedConvoId}
        onChangeSelectedMsg={this.handleOnSelectConversation}
        onChangeSettings={() => { }}
        notifSettingValue="true"
        notifOfUsageSettingValue="false"
        onSendMsg={this.handleSendMessage}
        onPurchasePoints={() => console.log('on-purchase-points')}
        fetchMessages={this.getMessages}
        onClickBackArrow={this.goBack}
        ownership={ownership}
        participants={participants}
        instructorId={instructorId}
        isSendingMsg={isSendingMsg}
        isFetchingConvos={isFetchingConvos}
        hasNextPageConvo={hasNextPageConvo}
        onLoadMoreConvo={this.handleLoadMoreConversation}
        isRowConvoLoaded={this.isRowConvoLoaded}
      />
    );
  };
}
