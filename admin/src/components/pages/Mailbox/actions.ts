import { AnyAction } from 'redux';
import { createOrUpdateConversation } from '../../../redux/conversation/action';
import {
  getConversations,
  getMessages,
  updateConvoReadStatus,
} from '../../../redux/conversation/action';

export const sendMessage = (params: {
  files?: Array<File>;
  title?: string;
  content: string;
  userId: string;
  instructorId: string;
  senderId: string;
}): AnyAction => {
  return createOrUpdateConversation(params);
};

export const fetchConversations = (params: {
  instructorId: string;
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

export type DispatchFromProps = {
  sendMessage: typeof sendMessage;
  fetchConversations: typeof fetchConversations;
  fetchMessages: typeof fetchMessages;
  updateReadStatus: typeof updateReadStatus;
};
