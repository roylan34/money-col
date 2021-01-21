import Immutable from 'immutable';
import { RootStateOrAny } from 'react-redux';
import { AnyAction } from 'redux';

import {
  CREATE_OR_UPDATE_CONVERSATION_REQUEST,
  CREATE_OR_UPDATE_CONVERSATION_FAILURE,
  CREATE_OR_UPDATE_CONVERSATION_SUCCESS,
  GET_CONVERSATIONS_REQUEST,
  GET_CONVERSATIONS_FAILURE,
  GET_CONVERSATIONS_SUCCESS,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_SUCCESS,
  // GET_CONVERSATION_BY_ID_REQUEST,
  // GET_CONVERSATION_BY_ID_FAILURE,
  // GET_CONVERSATION_BY_ID_SUCCESS,
  UPDATE_CONVERSATION_READ_STATUS_FAILURE,
  UPDATE_CONVERSATION_READ_STATUS_REQUEST,
  UPDATE_CONVERSATION_READ_STATUS_SUCCESS,
  GET_FILE_TO_BLOB_REQUEST,
  GET_FILE_TO_BLOB_SUCCESS,
  GET_FILE_TO_BLOB_FAILURE,
} from './actionType';

export const initialState = {
  conversations: {},
  messages: {},
  failedRequests: {},
  successfulRequests: {},
  currentFileBlob: {},
  requests: {},
};

export type ConversationStore = typeof initialState;

export default (
  state: RootStateOrAny = initialState,
  action: AnyAction,
): object => {
  const { payload, type } = action;

  switch (type) {
    case CREATE_OR_UPDATE_CONVERSATION_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', CREATE_OR_UPDATE_CONVERSATION_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['conversations', payload.response.conversation.id],
          () => payload.response.conversation,
        )
        .updateIn(['messages', payload.response.conversation.id], () => {
          const conversationId = payload.response.conversation.id;
          const messages =
            state.messages && state.messages[conversationId]
              ? [...state.messages[conversationId]]
              : [];

          return messages.concat(payload.response.message);
        })
        .updateIn(
          ['requests', CREATE_OR_UPDATE_CONVERSATION_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case CREATE_OR_UPDATE_CONVERSATION_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', CREATE_OR_UPDATE_CONVERSATION_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case CREATE_OR_UPDATE_CONVERSATION_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', CREATE_OR_UPDATE_CONVERSATION_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', CREATE_OR_UPDATE_CONVERSATION_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case GET_CONVERSATIONS_REQUEST:
      return Immutable.fromJS(state)
        .updateIn(
          ['requests', GET_CONVERSATIONS_REQUEST, 'pending'],
          () => true,
        )
        .toJS();
    case GET_CONVERSATIONS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', GET_CONVERSATIONS_REQUEST],
          () => payload.response,
        )
        .updateIn(['conversations'], () => {
          const convo = Object.assign(
            state.conversations,
            payload.response.conversations,
          );
          return convo;
        })
        .updateIn(
          ['requests', GET_CONVERSATIONS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case GET_CONVERSATIONS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', GET_CONVERSATIONS_REQUEST],
          () => payload.error,
        )
        .updateIn(
          ['requests', GET_CONVERSATIONS_REQUEST, 'pending'],
          () => false,
        )
        .toJS();
    case GET_MESSAGES_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', GET_MESSAGES_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['messages', payload.response.id],
          () => payload.response.messages,
        )
        .toJS();
    case GET_MESSAGES_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(['failedRequests', GET_MESSAGES_REQUEST], () => payload.error)
        .toJS();
    // case GET_CONVERSATION_BY_ID_SUCCESS:
    //   return Immutable.fromJS(state)
    //     .updateIn(
    //       ['successfulRequests', GET_CONVERSATION_BY_ID_REQUEST],
    //       () => payload.response,
    //     )
    //     .updateIn(
    //       ['conversations', payload.response.id],
    //       () => payload.response,
    //     )
    //     .toJS();
    // case GET_CONVERSATION_BY_ID_FAILURE:
    //   return Immutable.fromJS(state)
    //     .updateIn(
    //       ['failedRequests', GET_CONVERSATION_BY_ID_REQUEST],
    //       () => payload.error,
    //     )
    //     .toJS();

    case UPDATE_CONVERSATION_READ_STATUS_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['successfulRequests', UPDATE_CONVERSATION_READ_STATUS_REQUEST],
          () => payload.response,
        )
        .updateIn(
          ['conversations', payload.response.id],
          () => payload.response,
        )
        .toJS();
    case UPDATE_CONVERSATION_READ_STATUS_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['failedRequests', UPDATE_CONVERSATION_READ_STATUS_REQUEST],
          () => payload.error,
        )
        .toJS();
    case GET_FILE_TO_BLOB_SUCCESS:
      return Immutable.fromJS(state)
        .updateIn(
          ['currentFileBlob', GET_FILE_TO_BLOB_REQUEST],
          () => payload.response,
        )
        .toJS();
    case GET_FILE_TO_BLOB_FAILURE:
      return Immutable.fromJS(state)
        .updateIn(
          ['currentFileBlob', GET_FILE_TO_BLOB_REQUEST],
          () => payload.error,
        )
        .toJS();
    default:
      return state;
  }
};
