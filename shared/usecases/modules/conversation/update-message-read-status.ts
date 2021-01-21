import ConversationRepository from '../../ports/ConversationRepository';
import { getConversationByIdUseCase } from './get-conversation-by-id';
import { Conversation } from '../../../domain/entities/';

export type updateMessageReadStatusUseCase = (
  conversationId: string,
  userId: string,
) => Promise<Conversation>;

export const buildUpdateMessageReadStatus = (dependencies: {
  conversationRepo: ConversationRepository;
  getConversationById: getConversationByIdUseCase;
}): updateMessageReadStatusUseCase => {
  const { conversationRepo, getConversationById } = dependencies;

  const updateMessageReadStatus: updateMessageReadStatusUseCase = async (
    conversationId,
    userId,
  ) => {
    try {
      const {
        previewMessageData,
        lastReadMessage,
        ...convoData
      } = await conversationRepo.findById(conversationId);

      const updatedConversation = {
        ...convoData,
        previewMessageData: {
          ...previewMessageData,
          unreadMessages: {
            ...previewMessageData.unreadMessages,
            [userId]: 0,
          },
        },
        lastReadMessage: {
          ...lastReadMessage,
          [userId]: previewMessageData.id,
        },
      };

      await conversationRepo.updateConversationStatus(
        conversationId,
        updatedConversation,
      );

      return getConversationById(conversationId);
    } catch (error) {
      throw error;
    }
  };

  return updateMessageReadStatus;
};
