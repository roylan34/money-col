import ConversationRepository from '../../ports/ConversationRepository';
import UserRepository from '../../ports/UserRepository';

import { Conversation, User } from '../../../domain/entities/';

export type getConversationByIdUseCase = (id: string) => Promise<Conversation>;

export const buildGetConversationById = (dependencies: {
  conversationRepo: ConversationRepository;
  userRepo: UserRepository;
}): getConversationByIdUseCase => {
  const { conversationRepo, userRepo } = dependencies;

  const getConversationById: getConversationByIdUseCase = async (
    id: string,
  ) => {
    try {
      const conversation = await conversationRepo.findById(id);

      if (!conversation) {
        throw new Error('An error occured');
      }

      const { participants } = conversation;
      const keys = Object.keys(participants);

      const user1 = (await userRepo.findById(keys[0])) as User;
      const user2 = (await userRepo.findById(keys[1])) as User;

      return {
        ...conversation,
        participants: {
          [user1.id]: user1,
          [user2.id]: user2,
        },
      };
    } catch (error) {
      throw error;
    }
  };

  return getConversationById;
};
