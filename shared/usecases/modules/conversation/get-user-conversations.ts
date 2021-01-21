import ConversationRepository from '../../ports/ConversationRepository';
import UserRepository from '../../ports/UserRepository';

import { Conversation, User } from '../../../domain/entities/';

export type getUserConversationUseCase = (params: {
  userId?: string;
  instructorId?: string;
  limit: number;
  lastId: string;
}) => Promise<{
  data: Conversation[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
}>;

export const buildGetUserConversation = (dependencies: {
  conversationRepo: ConversationRepository;
  userRepo: UserRepository;
}): getUserConversationUseCase => {
  const { conversationRepo, userRepo } = dependencies;

  const getUserConversation: getUserConversationUseCase = async (params) => {
    const { userId, instructorId, limit, lastId } = params;

    try {
      const id = userId || instructorId;

      if (!id) {
        throw new Error('An error occured');
      }

      const key = userId ? 'userId' : 'instructorId';

      const where = [[key, '==', id]] as [[string, '==', string]];

      const {
        data,
        hasNextPage,
        hasPrevPage,
      } = await conversationRepo.findByPage({
        where,
        lastId,
        limit,
        orderBy: 'previewMessageData.createdAt',
        sort: 'desc',
        mode: 'next',
        firstId: '',
      });

      const conversations = await Promise.all(
        data.map(async (convo) => {
          const { participants } = convo;

          const keys = Object.keys(participants);

          const user1 = (await userRepo.findById(keys[0])) as User;
          const user2 = (await userRepo.findById(keys[1])) as User;

          return {
            ...convo,
            participants: {
              [user1.id]: user1,
              [user2.id]: user2,
            },
          };
        }),
      );

      return { data: conversations, hasNextPage, hasPrevPage };
    } catch (error) {
      throw error;
    }
  };

  return getUserConversation;
};
