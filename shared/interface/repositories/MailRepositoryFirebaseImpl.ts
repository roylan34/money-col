import MailRepository from '../../usecases/ports/MailRepository';
import { insert } from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreCollectionReference,
  FirestoreTimestamp,
} from '../../drivers/Firestore';
import { EmailTypes } from '../../domain/entities';

export default class MailRepositoryFirebaseImpl implements MailRepository {
  firestore: FirebaseFirestore;
  mailRef: FirestoreCollectionReference;
  mailTemplatesRef: FirestoreCollectionReference;
  timestamp: FirestoreTimestamp;

  constructor(
    firestore: FirebaseFirestore,
    timestamp: FirestoreTimestamp,
    collection: string = 'mail',
    mailTemplatesCollection: string = 'mailTemplates',
  ) {
    this.firestore = firestore;
    this.mailRef = this.firestore.collection(collection);
    this.mailTemplatesRef = this.firestore.collection(mailTemplatesCollection);
    this.timestamp = timestamp;
  }

  create = async (
    receiverEmail: string,
    name: string,
    type: EmailTypes,
  ): Promise<void> => {
    try {
      const template = {
        data: {
          name,
        },
        name: type,
      };

      insert(this.mailRef, { template, to: receiverEmail }, this.timestamp);
    } catch (error) {
      throw error;
    }
  };
}
