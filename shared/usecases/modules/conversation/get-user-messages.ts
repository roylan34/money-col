import ConversationRepository from '../../ports/ConversationRepository';

import { Message } from '../../../domain/entities/';

export type getUserMessagesUseCase = (
  conversationId: string,
) => Promise<{ [key: string]: Message[] }>;

export const buildGetUserMessages = (dependencies: {
  conversationRepo: ConversationRepository;
}): getUserMessagesUseCase => {
  const { conversationRepo } = dependencies;

  const getUserMessages: getUserMessagesUseCase = async (conversationId) => {
    try {
      const messages = await conversationRepo.getMessages(conversationId);

      return { [conversationId]: messages };
    } catch (error) {
      throw error;
    }
  };

  return getUserMessages;
};
