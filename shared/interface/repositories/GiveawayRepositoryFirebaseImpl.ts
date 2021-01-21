import GiveawayRepository from '../../usecases/ports/GiveawayRepository';
import { Giveaway } from '../../domain/entities/giveaway';
import { insert, find } from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreTimestamp,
  FirestoreCollectionReference,
} from '../../drivers/Firestore';

export default class GiveawayRepositoryFirebaseImpl
  implements GiveawayRepository {
  firestore: FirebaseFirestore;
  giveawayCollecion: FirestoreCollectionReference;
  timestamp: FirestoreTimestamp;

  constructor(
    firestore: FirebaseFirestore,
    timestamp: FirestoreTimestamp,
    giveawayCollection: string = 'giveaways',
  ) {
    this.firestore = firestore;
    this.giveawayCollecion = this.firestore.collection(giveawayCollection);
    this.timestamp = timestamp;
  }

  find = async (query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }): Promise<Giveaway[]> => {
    try {
      const giveaways = (await find(this.giveawayCollecion, {
        ...query,
      })) as Giveaway[];

      return giveaways;
    } catch (error) {
      throw error;
    }
  };

  insert = async (params: Giveaway) => {
    const id = await insert(this.giveawayCollecion, params, this.timestamp);
    return id;
  };
}
