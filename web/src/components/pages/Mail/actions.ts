import { AnyAction } from 'redux';
import { createOrUpdateConversation } from '../../../redux/conversation/action';
import {
  getConversations,
  getMessages,
  updateConvoReadStatus,
  getFileBlob,
} from '../../../redux/conversation/action';
import { updateMailboxSettings } from '../../../redux/user/action';
import { UserRankTitle } from '../../../domain/entities';

export const sendMessage = (
  params: {
    files?: Array<File>;
    title?: string;
    content: string;
    userId: string;
    instructorId: string;
    senderId: string;
  },
  rank?: UserRankTitle,
): AnyAction => {
  return createOrUpdateConversation(params, rank);
};

export const fetchConversations = (params: {
  userId: string;
  limit: number;
  lastId: string;
}): AnyAction => {
  return getConversations(params);
};

export const fetchMessages = (conversationId: string): AnyAction => {
  return getMessages(conversationId);
};

export const updateReadStatus = (
  conversationId: string,
  userId: string,
): AnyAction => {
  return updateConvoReadStatus(conversationId, userId);
};

export const fetchFileBlob = (url: string): AnyAction => {
  return getFileBlob({ url });
};

export const updateMailSettings = (
  id: string,
  notifyRepliesWithEmail: boolean,
  displaySendConfirmation: boolean,
): AnyAction => {
  return updateMailboxSettings(id, {
    mailBoxNotifSettings: {
      notifyRepliesWithEmail,
      displaySendConfirmation,
    },
  });
};

export type DispatchFromProps = {
  sendMessage: typeof sendMessage;
  fetchConversations: typeof fetchConversations;
  fetchMessages: typeof fetchMessages;
  updateReadStatus: typeof updateReadStatus;
  fetchFileBlob: typeof fetchFileBlob;
};
