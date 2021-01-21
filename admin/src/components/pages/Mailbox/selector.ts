import { RootStateOrAny } from 'react-redux';
import {
  GET_CONVERSATIONS_REQUEST,
  CREATE_OR_UPDATE_CONVERSATION_REQUEST,
} from '../../../redux/conversation/actionType';
import { Conversation } from '../../../domain/entities';
import { MessagePreviewItemValues } from '../../molecules/MessagePreviewItem/types';
import { MessageProps } from '../../organisms/MessageConversation/types';

export type StateFromProps = {
  fetchMessagesError: string;
  conversations: {
    [key: string]: MessagePreviewItemValues & { userId: string };
  };
  messages: { [key: string]: Array<MessageProps> };
  userId: string;
  isAdmin: boolean;
  participants: Array<string>;
  isSendingMsg: boolean;
  isFetchingConvos: boolean;
  hasNextPageConvo: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    user: { id: loggedInUserId, roles },
    conversation: {
      conversations,
      failedRequests,
      messages,
      requests: convoRequests,
      successfulRequests,
    },
  } = state;

  const isAdmin = roles && roles.admin;

  const fetchMessagesError =
    failedRequests &&
    failedRequests[GET_CONVERSATIONS_REQUEST] &&
    failedRequests[GET_CONVERSATIONS_REQUEST].message;

  const sortedConversationValues = Object.values(conversations);
  sortedConversationValues.sort((a, b) => {
    const first = (a as Conversation) as { updatedAt: Date };
    const second = (b as Conversation) as { updatedAt: Date };

    return second.updatedAt.getTime() - first.updatedAt.getTime();
  });
  let participantsIds: string[] = [];

  const conversationPreviews = sortedConversationValues.reduce((acc, curr) => {
    const {
      id: convoId,
      previewMessageData: { content, unreadMessages, createdAt, id, senderId },
      participants,
      userId,
      instructorId,
      lastReadMessage,
    } = curr as Conversation;

    const { name, photoURL } =
      (participants &&
        (participants[userId] as {
          name: { firstName: string; lastName: string };
          photoURL: string;
        })) ||
      {};
    const displayName = name ? `${name.lastName} ${name.firstName}` : '';
    const label = name ? name.lastName[0] : '';
    participantsIds = participantsIds.concat(Object.keys(participants));
    const hasReplied = senderId === instructorId;

    const preview = {
      [convoId]: {
        label,
        name: displayName,
        imgSrc: photoURL,
        recentMsg: content,
        unreadNumber: unreadMessages[instructorId] || 0,
        isAdmin: false,
        userId,
        createdAt,
        id,
        hasReplied,
        lastReadMessage: lastReadMessage ? lastReadMessage[userId] : '',
      },
    };

    //@ts-ignore
    return { ...acc, ...preview };
  }, {}) as {
    [key: string]: MessagePreviewItemValues & { userId: string };
  };

  const isSendingMsg =
    convoRequests &&
    convoRequests[CREATE_OR_UPDATE_CONVERSATION_REQUEST] &&
    (convoRequests[CREATE_OR_UPDATE_CONVERSATION_REQUEST].pending as boolean);

  const isFetchingConvos =
    convoRequests &&
    convoRequests[GET_CONVERSATIONS_REQUEST] &&
    (convoRequests[GET_CONVERSATIONS_REQUEST].pending as boolean);
  const hasNextPageConvo = Boolean(
    successfulRequests[GET_CONVERSATIONS_REQUEST] &&
      successfulRequests[GET_CONVERSATIONS_REQUEST].hasNextPage,
  );

  return {
    messages,
    userId: loggedInUserId,
    fetchMessagesError,
    conversations: conversationPreviews,
    isAdmin,
    participants: participantsIds,
    isSendingMsg,
    isFetchingConvos,
    hasNextPageConvo,
  };
};
