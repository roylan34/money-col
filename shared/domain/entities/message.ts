import { BaseModel } from './baseModel';

export type Message = {
  content: string;
  attachments?: Array<{
    fileURL: string;
    size: string;
    name: string;
  }>;
  senderId: string;
  recipientId: string;
  conversationId: string;
} & BaseModel;
