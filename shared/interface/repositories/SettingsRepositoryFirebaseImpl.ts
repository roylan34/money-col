import SettingsRepository from '../../usecases/ports/SettingsRepository';
import { findById } from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreCollectionReference,
} from '../../drivers/Firestore';

const POINTS_TO_PRICE_DOC_ID = 'pointsPrice';

export default class SettingsRepositoryFirebaseImpl
  implements SettingsRepository {
  firestore: FirebaseFirestore;
  settingsRef: FirestoreCollectionReference;

  constructor(firestore: FirebaseFirestore, collection: string = 'settings') {
    this.firestore = firestore;
    this.settingsRef = this.firestore.collection(collection);
  }

  fetchPriceOfPoints = async (): Promise<{ [key: string]: number }> => {
    try {
      return (await findById(this.settingsRef, POINTS_TO_PRICE_DOC_ID)) as {
        [key: string]: number;
      };
    } catch (error) {
      throw error;
    }
  };
}
