import ConversationRepository from '../../ports/ConversationRepository';
import UserRepository from '../../ports/UserRepository';
import MailRepository from '../../ports/MailRepository';

import {
  buildAddOrUpdateConversation,
  addOrUpdateConversationUseCase,
} from './add-or-update-conversation';
import {
  buildGetUserConversation,
  getUserConversationUseCase,
} from './get-user-conversations';
import {
  buildGetUserMessages,
  getUserMessagesUseCase,
} from './get-user-messages';
import {
  buildGetConversationById,
  getConversationByIdUseCase,
} from './get-conversation-by-id';
import {
  buildUpdateMessageReadStatus,
  updateMessageReadStatusUseCase,
} from './update-message-read-status';
import { buildGetFileToBlob, getFileToBlobUseCase } from './get-file-to-blob';

export default (dependencies: {
  conversationRepo: ConversationRepository;
  userRepo: UserRepository;
  mailRepo: MailRepository;
}): {
  addOrUpdateConversation: addOrUpdateConversationUseCase;
  getUserConversations: getUserConversationUseCase;
  getUserMessages: getUserMessagesUseCase;
  getConversationById: getConversationByIdUseCase;
  updateMessageReadStatus: updateMessageReadStatusUseCase;
  getFileToBlob: getFileToBlobUseCase;
} => {
  const { conversationRepo, userRepo, mailRepo } = dependencies;

  const addOrUpdateConversation = buildAddOrUpdateConversation({
    userRepo,
    conversationRepo,
    mailRepo,
  });
  const getUserConversations = buildGetUserConversation({
    conversationRepo,
    userRepo,
  });
  const getUserMessages = buildGetUserMessages({
    conversationRepo,
  });
  const getConversationById = buildGetConversationById({
    conversationRepo,
    userRepo,
  });
  const updateMessageReadStatus = buildUpdateMessageReadStatus({
    conversationRepo,
    getConversationById,
  });
  const getFileToBlob = buildGetFileToBlob({
    conversationRepo,
  });

  return {
    addOrUpdateConversation,
    getUserConversations,
    getUserMessages,
    getConversationById,
    updateMessageReadStatus,
    getFileToBlob,
  };
};
