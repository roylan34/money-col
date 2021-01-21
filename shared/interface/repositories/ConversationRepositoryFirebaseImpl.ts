import ConversationRepository from '../../usecases/ports/ConversationRepository';
import { Conversation, Message, User } from '../../domain/entities';
import {
  findById,
  find,
  getTimestamp,
  update,
  paginateFind,
} from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreCollectionReference,
  FirebaseStorage,
  FirestoreTimestamp,
  Timestamp,
  FirestoreBatch,
} from '../../drivers/Firestore';
import { convertBytesToKB } from '../../utils';
import axios, { AxiosResponse, AxiosError } from 'axios';
import words from '../../constants/words';

export default class ConversationRepositoryFirebaseImpl
  implements ConversationRepository {
  firestore: FirebaseFirestore;
  storage: FirebaseStorage;
  conversationRef: FirestoreCollectionReference;
  messagesCollection: string;
  timestamp: FirestoreTimestamp;
  collectionKey: string;
  usersCollection: string;
  purchaseKey: string;

  constructor(
    firestore: FirebaseFirestore,
    storage: FirebaseStorage,
    timestamp: FirestoreTimestamp,
    collection: string = 'conversations',
    messagesCollection: string = 'messages',
    usersCollection: string = 'users',
  ) {
    this.firestore = firestore;
    this.conversationRef = this.firestore.collection(collection);
    this.messagesCollection = messagesCollection;
    this.storage = storage;
    this.timestamp = timestamp;
    this.collectionKey = collection;
    this.usersCollection = usersCollection;
    this.purchaseKey = 'purchases';
  }

  getDownloadURL = async (storageURL: string): Promise<string> => {
    return await this.storage.refFromURL(storageURL).getDownloadURL();
  };

  getMessages = async (convoId: string): Promise<Message[]> => {
    const messagesCollection = this.conversationRef
      .doc(convoId)
      .collection(this.messagesCollection);
    const messages = (await find(messagesCollection, {
      orderBy: 'createdAt',
      sort: 'asc',
    })) as Message[];

    return await Promise.all(
      messages.map(async (message) => {
        const { attachments, createdAt } = message as Message & {
          createdAt: Timestamp;
        };

        const formattedAttachments = attachments
          ? await Promise.all(
              attachments.map(async (att) => {
                const fileURL = await this.getDownloadURL(att.fileURL);
                return { ...att, fileURL };
              }),
            )
          : undefined;

        return {
          ...message,
          attachments: formattedAttachments,
          createdAt: createdAt.toDate(),
        };
      }),
    );
  };

  getMessageById = async (
    convoId: string,
    messageId: string,
  ): Promise<Message> => {
    const messagesCollection = this.conversationRef
      .doc(convoId)
      .collection(this.messagesCollection);
    const message = (await findById(
      messagesCollection,
      messageId,
    )) as Message & { createdAt: Timestamp; updatedAt: Timestamp };
    const { attachments } = message;

    const formattedAttachments = attachments
      ? await Promise.all(
          attachments.map(async (att) => {
            const fileURL = await this.getDownloadURL(att.fileURL);
            return { ...att, fileURL };
          }),
        )
      : [];

    const createdAt = message.createdAt as Timestamp;
    const updatedAt = message.updatedAt as Timestamp;

    return {
      ...message,
      attachments: formattedAttachments,
      createdAt: createdAt.toDate(),
      updatedAt: updatedAt.toDate(),
    };
  };

  deductPoints = async (
    senderId: string,
    batch: FirestoreBatch,
    conversationId: string,
    messageId: string,
    logTitle: string,
  ) => {
    const userRef = this.firestore.collection(this.usersCollection);
    const userData = (await findById(userRef, senderId)) as User;

    const { subscriberProfile } = userData;

    if (!subscriberProfile) {
      throw new Error('Something went wrong');
    }

    const { rank } = subscriberProfile;
    const discount =
      rank.title === 'プライム' ? 5 : rank.title === 'エリート' ? 2 : 1;

    const score = rank.score + 5;
    const title =
      score <= 199 ? 'レギュラー' : score <= 499 ? 'エリート' : 'プライム';
    const quotient = score <= 199 ? 200 : 300;
    const numerator = score <= 199 ? score : score - 200;
    const percentage =
      title === 'プライム'
        ? 100
        : Number(((numerator / quotient) * 100).toFixed(2));

    const points = subscriberProfile.points - 5 + discount;
    const updatedSubscriberProfile = {
      points,
      rank: {
        score,
        title,
        percentage,
      },
    };
    batch.set(
      userRef.doc(senderId),
      {
        subscriberProfile: updatedSubscriberProfile,
      },
      { merge: true },
    );
    const purchaseData = this.createPurchaseHistory(
      senderId,
      conversationId,
      messageId,
      5 - discount,
      logTitle,
    );
    const purchaseRef = userRef
      .doc(senderId)
      .collection(this.purchaseKey)
      .doc(purchaseData.id);

    batch.set(purchaseRef, purchaseData);
  };

  createPurchaseHistory = (
    senderId: string,
    conversationId: string,
    messageId: string,
    points: number,
    title: string,
  ) => {
    const createdAt = getTimestamp(this.timestamp);

    return {
      id: `${senderId}_${messageId}`,
      ref: `${conversationId}/${messageId}`,
      title,
      tags: {
        messages: true,
      },
      points,
      createdAt,
    };
  };

  uploadMessageAttachments = async (
    attachments: Array<File> = [],
    converastionId: string,
    messageId: string,
  ) => {
    if (!attachments) {
      return [];
    }
    return await Promise.all(
      attachments.map((file, index) => {
        const { name, size } = file;
        const metadata = { name, size: String(convertBytesToKB(size)) };

        return this.upload(
          { file, metadata },
          converastionId,
          `${messageId}_${index}`,
        );
      }),
    );
  };

  create = async (
    conversation: Conversation,
    message: Message,
    attachments: Array<File> = [],
    userId: string,
  ): Promise<{ conversationId: string; messageId: string }> => {
    try {
      const conversationDoc = this.conversationRef.doc(conversation.id);
      const messageDoc = conversationDoc
        .collection(this.messagesCollection)
        .doc();

      const attachmentData = await this.uploadMessageAttachments(
        attachments,
        conversationDoc.id,
        messageDoc.id,
      );

      const batch = this.firestore.batch();

      const createdAt = getTimestamp(this.timestamp);

      const { senderId } = message;
      const lastReadMessage = {
        ...conversation.lastReadMessage,
        [senderId]: messageDoc.id,
      };

      // message
      batch.set(messageDoc, {
        ...message,
        attachments: attachmentData,
        createdAt,
        updatedAt: createdAt,
        id: messageDoc.id,
      });

      // conversation
      batch.set(
        conversationDoc,
        {
          ...conversation,
          previewMessageData: {
            ...conversation.previewMessageData,
            createdAt,
            id: messageDoc.id,
          },
          createdAt,
          updatedAt: createdAt,
          lastReadMessage,
        },
        { merge: true },
      );

      if (senderId === userId) {
        await this.deductPoints(
          senderId,
          batch,
          conversationDoc.id,
          messageDoc.id,
          words.purchaseHistory.askInstructor,
        );
      }

      await batch.commit();

      const messageId = messageDoc.id;

      return { conversationId: conversationDoc.id, messageId };
    } catch (error) {
      throw error;
    }
  };

  upload = async (
    params: {
      file: File;
      metadata?: { name: string; size: string };
    },
    conversationId: string,
    fileId: string,
  ): Promise<{ fileURL: string; name?: string; size?: string }> => {
    try {
      const { file, metadata = {} } = params;

      const extension = file.name.split('.').pop();
      const ref = `${this.collectionKey}/${conversationId}/${fileId}.${extension}`;
      const customMetadata = metadata
        ? { customMetadata: metadata }
        : undefined;

      const task = await this.storage.ref(ref).put(file, customMetadata);
      await this.getMessages(conversationId);
      return {
        fileURL: `gs://${task.metadata.bucket}/${task.metadata.fullPath}`,
        ...metadata,
      };
    } catch (error) {
      throw error;
    }
  };

  find = async (query?: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<Conversation[]> => {
    try {
      const conversations = (await find(
        this.conversationRef,
        query || {},
      )) as Array<
        Conversation & {
          createdAt: Timestamp;
          updatedAt: Timestamp;
          previewMessageData: { createdAt: Timestamp };
        }
      >;
      return conversations.map((convo) => {
        return {
          ...convo,
          updatedAt: convo.updatedAt.toDate(),
        };
      });
    } catch (error) {
      throw error;
    }
  };

  findByPage = async (query: {
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
  }> => {
    const {
      data: conversations,
      hasPrevPage,
      hasNextPage,
    } = (await paginateFind(this.conversationRef, query)) as {
      data: Array<
        Conversation & {
          createdAt: Timestamp;
          updatedAt: Timestamp;
          previewMessageData: { createdAt: Timestamp };
        }
      >;
      hasPrevPage: boolean;
      hasNextPage: boolean;
    };

    const data = conversations.map((convo) => {
      return {
        ...convo,
        updatedAt: convo.updatedAt.toDate(),
      };
    });

    return { data, hasNextPage, hasPrevPage };
  };

  findById = async (id: string): Promise<Conversation> => {
    try {
      const {
        updatedAt,
        createdAt,
        previewMessageData,
        ...convo
      } = (await findById(this.conversationRef, id)) as Conversation & {
        createdAt: Timestamp;
        updatedAt: Timestamp;
        previewMessageData: { createdAt: Timestamp };
      };

      return {
        ...convo,
        updatedAt: updatedAt.toDate(),
        createdAt: createdAt.toDate(),
        previewMessageData: {
          ...previewMessageData,
          createdAt: previewMessageData.createdAt.toDate(),
        },
      };
    } catch (error) {
      throw error;
    }
  };

  update = async (
    id: string,
    conversation: Conversation,
    message: Message,
    attachments: Array<File> = [],
    userId?: string,
  ): Promise<{ conversationId: string; messageId: string }> => {
    try {
      const conversationDoc = this.conversationRef.doc(id);
      const messageDoc = conversationDoc
        .collection(this.messagesCollection)
        .doc();

      const attachmentData = await this.uploadMessageAttachments(
        attachments,
        conversationDoc.id,
        messageDoc.id,
      );

      const batch = this.firestore.batch();
      const { senderId } = message;
      const lastReadMessage = {
        ...conversation.lastReadMessage,
        [senderId]: messageDoc.id,
      };

      const createdAt = getTimestamp(this.timestamp);

      // message
      batch.set(
        messageDoc,
        {
          ...message,
          id: messageDoc.id,
          attachments: attachmentData,
          createdAt,
          updatedAt: createdAt,
        },
        { merge: true },
      );

      // conversation
      batch.set(
        conversationDoc,
        {
          ...conversation,
          previewMessageData: {
            ...conversation.previewMessageData,
            createdAt,
            id: messageDoc.id,
          },
          updatedAt: createdAt,
          lastReadMessage,
        },
        { merge: true },
      );

      // update user points
      if (senderId === userId) {
        await this.deductPoints(
          senderId,
          batch,
          conversationDoc.id,
          messageDoc.id,
          words.purchaseHistory.replyToInstructor,
        );
      }

      await batch.commit();

      const messageId = messageDoc.id;

      return { conversationId: conversationDoc.id, messageId };
    } catch (error) {
      throw error;
    }
  };

  findMessages = async (
    convoId: string,
    query: {
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
  ): Promise<Message[]> => {
    const messagesCollection = this.conversationRef
      .doc(convoId)
      .collection(this.messagesCollection);
    const messages = (await find(messagesCollection, query)) as Message[];
    return messages;
  };

  updateConversationStatus = async (
    id: string,
    params: Conversation,
  ): Promise<void> => {
    await update(this.conversationRef, id, params, this.timestamp);
  };

  getFileToBlob = async (fileUrl: string): Promise<Blob> => {
    // @ts-ignore
    return axios
      .get(fileUrl, { responseType: 'blob' })
      .then((response: AxiosResponse<object>) => {
        const { data } = response;
        return data;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  };
}
