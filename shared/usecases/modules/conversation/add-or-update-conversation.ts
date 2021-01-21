import ConversationRepository from '../../ports/ConversationRepository';
import UserRepository from '../../ports/UserRepository';
import MailRepository from '../../ports/MailRepository';

import { Conversation, Message, User } from '../../../domain/entities/';

export type addOrUpdateConversationUseCase = (params: {
  files?: Array<File>;
  title?: string;
  content: string;
  userId: string;
  instructorId: string;
  senderId: string;
}) => Promise<{ conversation: Conversation; user: User; message: Message }>;

export const buildAddOrUpdateConversation = (dependencies: {
  conversationRepo: ConversationRepository;
  userRepo: UserRepository;
  mailRepo: MailRepository;
}): addOrUpdateConversationUseCase => {
  const { conversationRepo, userRepo, mailRepo } = dependencies;

  const addOrUpdateConversation: addOrUpdateConversationUseCase = async (
    params,
  ) => {
    try {
      const { senderId, instructorId, userId, title, content, files } = params;

      const conversationId = `${userId}_${instructorId}`;

      let [conversation] = await conversationRepo.find({
        where: [['id', '==', conversationId]],
      });

      const recipientId = senderId !== userId ? userId : instructorId;

      const message = {
        content: title
          ? `[タイトル]\\n${title}\\n\\n[本文]\\n${content}`
          : content,
        senderId,
        recipientId,
        conversationId,
      } as Message;

      const unreadMessages = conversation
        ? conversation.previewMessageData.unreadMessages
        : {
            [userId]: 0,
            [instructorId]: 0,
          };

      const previewMessageData = {
        content: message.content.slice(0, 30),
        senderId,
        recipientId,
        unreadMessages: {
          [userId]: senderId === userId ? 0 : unreadMessages[userId] + 1,
          [instructorId]:
            senderId === instructorId ? 0 : unreadMessages[instructorId] + 1,
        },
        createdAt: new Date(),
        id: '',
      };

      let messageId = '';

      if (!conversation) {
        const participants = {
          [userId]: true,
          [instructorId]: true,
        };
        const lastReadMessage = {
          [userId]: '',
          [instructorId]: '',
        };

        const response = await conversationRepo.create(
          {
            id: conversationId,
            participants,
            previewMessageData,
            instructorId,
            userId,
            lastReadMessage,
          } as Conversation,
          message,
          files,
          userId,
        );
        messageId = response.messageId;
      } else {
        const response = await conversationRepo.update(
          conversationId,
          // @ts-ignore
          { previewMessageData },
          message,
          files,
          userId,
        );

        messageId = response.messageId;
      }

      const [
        [conversationDoc],
        user,
        messageDoc,
        instructor,
      ] = await Promise.all([
        conversationRepo.find({
          where: [['id', '==', conversationId]],
        }),
        userRepo.findById(userId) as Promise<User>,
        conversationRepo.getMessageById(conversationId, messageId),
        userRepo.findById(instructorId) as Promise<User>,
      ]);

      const participants = { [userId]: user, [instructorId]: instructor };

      if (
        senderId === instructorId &&
        user.mailBoxNotifSettings.notifyRepliesWithEmail
      ) {
        await mailRepo.create(user.email, user.name.lastName, 'hasReplied');
      } 
      else if (
        senderId === userId &&
        instructor.mailBoxNotifSettings.notifyRepliesWithEmail
      ) {
        await mailRepo.create(instructor.email, instructor.name.lastName, 'hasReplied');
      }

      return {
        conversation: { ...conversationDoc, participants },
        user,
        message: messageDoc,
      };
    } catch (error) {
      throw error;
    }
  };

  return addOrUpdateConversation;
};
