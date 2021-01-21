import { Conversation, Message } from '../../domain/entities';

export default interface ConversationRepository {
  create(
    params: Conversation,
    message: Message,
    attachments?: Array<File>,
    userId?: string,
  ): Promise<{ conversationId: string; messageId: string }>;
  update(
    id: string,
    params: Conversation,
    message: Message,
    attachments?: Array<File>,
    userId?: string,
  ): Promise<{ conversationId: string; messageId: string }>;
  find(query?: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<Conversation[]>;
  findByPage(query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit: number;
    mode: 'prev' | 'next';
    orderBy?: string;
    sort?: 'desc' | 'asc';
    firstId: string;
    lastId: string;
  }): Promise<{
    data: Conversation[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }>;
  findById(id: string): Promise<Conversation>;
  findMessages(
    convoId: string,
    query?: {
      where?: [
        string,
        '<' | '<=' | '==' | '>=' | '>',
        string | number | boolean,
      ][];
      limit?: number;
      page?: number;
      orderBy?: string;
      sort?: 'desc' | 'asc';
    },
  ): Promise<Message[]>;
  getMessages(convoId: string): Promise<Message[]>;
  getMessageById(convoId: string, messageId: string): Promise<Message>;
  updateConversationStatus(id: string, params: Conversation): Promise<void>;
  getFileToBlob(url: string): Promise<Blob>;
}
