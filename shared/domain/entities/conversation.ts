import { BaseModel } from './baseModel';
import { Message } from './message';
import { User } from './user';

export type Conversation = {
  participants: {
    [key: string]: boolean | User;
  };
  messages?: Array<Message>;
  previewMessageData: {
    content: string;
    senderId: string;
    recipientId: string;
    createdAt: Date;
    unreadMessages: {
      [key: string]: number;
    };
    id: string;
  };
  lastReadMessage: {
    [key: string]: string;
  };
  userId: string;
  instructorId: string;
} & BaseModel;
