import {
  FirestoreDocumentChange,
  FirestoreQuerySnapshot,
  FirebaseFirestore,
} from '../../drivers/Firestore';
import { Conversation } from '../../domain/entities';

export const initializeConversationListener = (
  firestore: FirebaseFirestore,
  callback: (conversations: Array<Conversation>) => void,
  key: 'instructorId' | 'userId',
  id: string,
): void => {
  try {
    firestore
      .collection('conversations')
      .where(key, '==', id)
      .onSnapshot((querySnapshot: FirestoreQuerySnapshot) => {
        const conversations: Conversation[] = [];
        querySnapshot
          .docChanges()
          .forEach((change: FirestoreDocumentChange) => {
            if (change.type === 'added' || change.type === 'modified') {
              // causes deployment error
              // @ts-ignore
              const data: Conversation = change.doc.data();
              conversations.push(data);
            }
          });
        if (conversations.length > 0) {
          callback(conversations);
        }
      });
  } catch (error) {
    throw error;
  }
};
