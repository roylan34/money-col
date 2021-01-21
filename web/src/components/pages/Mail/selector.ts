import { RootStateOrAny } from 'react-redux';
import {
  GET_CONVERSATIONS_REQUEST,
  GET_FILE_TO_BLOB_REQUEST,
  CREATE_OR_UPDATE_CONVERSATION_REQUEST,
} from '../../../redux/conversation/actionType';
import { UPDATE_MAILBOX_SETTINGS_REQUEST } from '../../../redux/user/actionType';
import { Conversation, User, UserRankTitle } from '../../../domain/entities';
import { MessagePreviewItemValues } from '../../organisms/MessagePreviewItem/types';
import { MessageProps } from '../../organisms/MessageConversation/types';

export type StateFromProps = {
  fetchMessagesError: string;
  conversations: {
    [key: string]: MessagePreviewItemValues & { instructorId: string };
  };
  messages: { [key: string]: Array<MessageProps> };
  userId: string;
  userPoints: number;
  rank?: UserRankTitle;
  discount: number;
  score: number;
  currentFileToBlob: Blob;
  displaySendConfirmation: boolean;
  notifyRepliesWithEmail: boolean;
  isUpdatingMailboxSettings: boolean;
  isSendingMessage: boolean;
  hasNextPageConvo: boolean;
  isFetchingConvos: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    user: {
      id: userId,
      subscriberProfile,
      subscriberProfile: {
        rank: { score },
      },
      mailBoxNotifSettings: { displaySendConfirmation, notifyRepliesWithEmail },
      requests: userRequests,
    },
    conversation: {
      conversations,
      failedRequests,
      messages,
      currentFileBlob,
      requests: convoRequests,
      successfulRequests,
    },
  } = state;

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

  const conversationPreviews = sortedConversationValues.reduce(
    (acc, curr) => {
      const {
        id: convoId,
        previewMessageData: { content, unreadMessages, createdAt },
        participants,
        instructorId,
        lastReadMessage,
      } = curr as Conversation;

      const [pairId] = Object.keys(participants).filter(x => x !== userId);
      const { name, photoURL } = participants[pairId] as User;
      const displayName = name ? `${name.lastName} ${name.firstName}` : '';
      const label = name ? name.lastName[0] : '';

      const preview = {
        [convoId]: {
          label,
          name: displayName,
          imgSrc: photoURL,
          recentMsg: content,
          unreadNumber: unreadMessages[userId] || 0,
          isAdmin: false,
          instructorId,
          createdAt,
          lastReadMessage: lastReadMessage ? lastReadMessage[instructorId] : '',
        },
      };

      //@ts-ignore
      return { ...acc, ...preview };
    },
    {
      [`${userId}_admin`]: {
        label: 'MA',
        imgSrc: '',
        name: 'Money College Admin',
        recentMsg: '',
        unreadNumber: 0,
        isAdmin: true,
      },
    },
  ) as {
    [key: string]: MessagePreviewItemValues & { instructorId: string };
  };

  const userPoints =
    subscriberProfile && subscriberProfile.points
      ? subscriberProfile.points
      : 0;

  const rank =
    subscriberProfile && subscriberProfile.rank
      ? subscriberProfile.rank.title
      : '';

  const discount = rank === 'プライム' ? 5 : rank === 'エリート' ? 2 : 1;

  const currentFileToBlob =
    currentFileBlob && currentFileBlob[GET_FILE_TO_BLOB_REQUEST];

  const isUpdatingMailboxSettings =
    userRequests &&
    userRequests[UPDATE_MAILBOX_SETTINGS_REQUEST] &&
    (userRequests[UPDATE_MAILBOX_SETTINGS_REQUEST].pending as boolean);

  const isSendingMessage =
    convoRequests &&
    convoRequests[CREATE_OR_UPDATE_CONVERSATION_REQUEST] &&
    (convoRequests[CREATE_OR_UPDATE_CONVERSATION_REQUEST].pending as boolean);

  const hasNextPageConvo = Boolean(
    successfulRequests[GET_CONVERSATIONS_REQUEST] &&
      successfulRequests[GET_CONVERSATIONS_REQUEST].hasNextPage,
  );
  const isFetchingConvos =
    convoRequests &&
    convoRequests[GET_CONVERSATIONS_REQUEST] &&
    (convoRequests[GET_CONVERSATIONS_REQUEST].pending as boolean);

  return {
    messages,
    userId,
    fetchMessagesError,
    conversations: conversationPreviews,
    userPoints,
    score,
    discount,
    currentFileToBlob,
    displaySendConfirmation,
    notifyRepliesWithEmail,
    isUpdatingMailboxSettings,
    isSendingMessage,
    hasNextPageConvo,
    isFetchingConvos,
  };
};
