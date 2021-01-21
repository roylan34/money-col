/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  createOrUpdateConversationFailure,
  createOrUpdateConversationSuccess,
  getConversationsFailure,
  getConversationsSuccess,
  getMessagesFailure,
  getMessagesSuccess,
  getConversationByIdSuccess,
  getConversationByIdFailure,
  updateConvoReadStatusSuccess,
  updateConvoReadStatusFailure,
  getFileBlob,
  getFileBlobSuccess,
  getFileBlobFailure,
} from './action';
import {
  CREATE_OR_UPDATE_CONVERSATION_REQUEST,
  GET_CONVERSATIONS_REQUEST,
  GET_MESSAGES_REQUEST,
  GET_CONVERSATION_BY_ID_REQUEST,
  UPDATE_CONVERSATION_READ_STATUS_REQUEST,
  GET_FILE_TO_BLOB_REQUEST,
} from './actionType';
import { setUser } from '../user/action';

export const createOrUpdateConversationEpic = (
  action$,
  state$,
  {
    conversationInteractor: { addOrUpdateConversation },
    utils: { formatMessage },
  },
) =>
  action$.pipe(
    ofType(CREATE_OR_UPDATE_CONVERSATION_REQUEST),
    mergeMap(({ payload: { params } }) => {
      return from(addOrUpdateConversation(params)).pipe(
        mergeMap(response => {
          const { user, conversation, message } = response;
          const [formattedMessage] = formatMessage([message]);

          return [
            createOrUpdateConversationSuccess({
              conversation,
              message: formattedMessage,
            }),
            setUser(user),
          ];
        }),
        catchError(error => {
          return of(createOrUpdateConversationFailure(error));
        }),
      );
    }),
  );

export const getConversationsEpic = (
  action$,
  state$,
  {
    conversationInteractor: { getUserConversations },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(GET_CONVERSATIONS_REQUEST),
    mergeMap(({ payload: { params } }) => {
      return from(getUserConversations(params)).pipe(
        mergeMap(response => {
          const { data, hasNextPage, hasPrevPage } = response;
          const conversations = arrayOfObjectsToObject(data, 'id');
          return [
            getConversationsSuccess({
              conversations,
              hasNextPage,
              hasPrevPage,
            }),
          ];
        }),
        catchError(error => {
          return of(getConversationsFailure(error));
        }),
      );
    }),
  );

export const getMessagesEpic = (
  action$,
  state$,
  { conversationInteractor: { getUserMessages }, utils: { formatMessage } },
) =>
  action$.pipe(
    ofType(GET_MESSAGES_REQUEST),
    mergeMap(({ payload: { conversationId } }) => {
      return from(getUserMessages(conversationId)).pipe(
        mergeMap(response => {
          const messages = response[conversationId];
          const formattedMessages = formatMessage(messages);
          return [
            getMessagesSuccess({
              id: conversationId,
              messages: formattedMessages,
            }),
          ];
        }),
        catchError(error => {
          return of(getMessagesFailure(error));
        }),
      );
    }),
  );

export const getConversationByIdEpic = (
  action$,
  state$,
  { conversationInteractor: { getConversationById } },
) =>
  action$.pipe(
    ofType(GET_CONVERSATION_BY_ID_REQUEST),
    mergeMap(({ payload: { id } }) => {
      return from(getConversationById(id)).pipe(
        mergeMap(response => {
          return [getConversationByIdSuccess(response)];
        }),
        catchError(error => {
          return of(getConversationByIdFailure(error));
        }),
      );
    }),
  );

export const updateConvoReadStatusEpic = (
  action$,
  state$,
  { conversationInteractor: { updateMessageReadStatus } },
) =>
  action$.pipe(
    ofType(UPDATE_CONVERSATION_READ_STATUS_REQUEST),
    mergeMap(({ payload: { conversationId, userId } }) => {
      return from(updateMessageReadStatus(conversationId, userId)).pipe(
        mergeMap(response => {
          return [updateConvoReadStatusSuccess(response)];
        }),
        catchError(error => {
          return of(updateConvoReadStatusFailure(error));
        }),
      );
    }),
  );

export const getFileBlobEpic = (
  action$,
  state$,
  { conversationInteractor: { getFileToBlob } },
) =>
  action$.pipe(
    ofType(GET_FILE_TO_BLOB_REQUEST),
    mergeMap(({ payload: { params } }) => {
      return from(getFileToBlob(params)).pipe(
        mergeMap(response => {
          return [getFileBlobSuccess(response)];
        }),
        catchError(error => {
          return of(getFileBlobFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  createOrUpdateConversationEpic,
  getConversationsEpic,
  getMessagesEpic,
  getConversationByIdEpic,
  updateConvoReadStatusEpic,
  getFileBlobEpic,
);
