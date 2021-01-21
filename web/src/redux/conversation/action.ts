import { AnyAction } from 'redux';
import {
  CREATE_OR_UPDATE_CONVERSATION_REQUEST,
  CREATE_OR_UPDATE_CONVERSATION_FAILURE,
  CREATE_OR_UPDATE_CONVERSATION_SUCCESS,
  GET_CONVERSATIONS_FAILURE,
  GET_CONVERSATIONS_REQUEST,
  GET_CONVERSATIONS_SUCCESS,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_SUCCESS,
  GET_CONVERSATION_BY_ID_FAILURE,
  GET_CONVERSATION_BY_ID_REQUEST,
  GET_CONVERSATION_BY_ID_SUCCESS,
  UPDATE_CONVERSATION_READ_STATUS_REQUEST,
  UPDATE_CONVERSATION_READ_STATUS_FAILURE,
  UPDATE_CONVERSATION_READ_STATUS_SUCCESS,
  GET_FILE_TO_BLOB_REQUEST,
  GET_FILE_TO_BLOB_SUCCESS,
  GET_FILE_TO_BLOB_FAILURE,
} from './actionType';
import { UserRankTitle } from '../../domain/entities';

export const createOrUpdateConversation = (
  params: {
    files?: Array<File>;
    title?: string;
    content: string;
    userId: string;
    instructorId: string;
    senderId: string;
  },
  // this will be used for the future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rank?: UserRankTitle,
): AnyAction => ({
  type: CREATE_OR_UPDATE_CONVERSATION_REQUEST,
  payload: { params },
});

export const createOrUpdateConversationSuccess = (
  response: Object,
): AnyAction => ({
  type: CREATE_OR_UPDATE_CONVERSATION_SUCCESS,
  payload: { response },
});

export const createOrUpdateConversationFailure = (
  error: Error | string,
): AnyAction => ({
  type: CREATE_OR_UPDATE_CONVERSATION_FAILURE,
  payload: { error },
});

export const getConversations = (params: {
  userId: string;
  limit: number;
  lastId: string;
}): AnyAction => ({
  type: GET_CONVERSATIONS_REQUEST,
  payload: { params },
});

export const getConversationsSuccess = (response: Object): AnyAction => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: { response },
});

export const getConversationsFailure = (error: Error | string): AnyAction => ({
  type: GET_CONVERSATIONS_FAILURE,
  payload: { error },
});

export const getMessages = (conversationId: string): AnyAction => ({
  type: GET_MESSAGES_REQUEST,
  payload: { conversationId },
});

export const getMessagesSuccess = (response: Object): AnyAction => ({
  type: GET_MESSAGES_SUCCESS,
  payload: { response },
});

export const getMessagesFailure = (error: Error | string): AnyAction => ({
  type: GET_MESSAGES_FAILURE,
  payload: { error },
});

export const getConversationById = (id: string): AnyAction => ({
  type: GET_CONVERSATION_BY_ID_REQUEST,
  payload: { id },
});

export const getConversationByIdSuccess = (response: Object): AnyAction => ({
  type: GET_CONVERSATION_BY_ID_SUCCESS,
  payload: { response },
});

export const getConversationByIdFailure = (
  error: Error | string,
): AnyAction => ({
  type: GET_CONVERSATION_BY_ID_FAILURE,
  payload: { error },
});

export const updateConvoReadStatus = (
  conversationId: string,
  userId: string,
): AnyAction => ({
  type: UPDATE_CONVERSATION_READ_STATUS_REQUEST,
  payload: { conversationId, userId },
});

export const updateConvoReadStatusSuccess = (response: Object): AnyAction => ({
  type: UPDATE_CONVERSATION_READ_STATUS_SUCCESS,
  payload: { response },
});

export const updateConvoReadStatusFailure = (
  error: Error | string,
): AnyAction => ({
  type: UPDATE_CONVERSATION_READ_STATUS_FAILURE,
  payload: { error },
});

export const getFileBlob = (params: { url: string }): AnyAction => ({
  type: GET_FILE_TO_BLOB_REQUEST,
  payload: { params },
});

export const getFileBlobSuccess = (response: Object): AnyAction => ({
  type: GET_FILE_TO_BLOB_SUCCESS,
  payload: { response },
});

export const getFileBlobFailure = (error: Error | string): AnyAction => ({
  type: GET_FILE_TO_BLOB_FAILURE,
  payload: { error },
});
