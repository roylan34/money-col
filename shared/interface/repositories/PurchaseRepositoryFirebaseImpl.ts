import PurchaseRepository from '../../usecases/ports/PurchaseRepository';
import { Purchase } from '../../domain/entities/purchase';
import { find, insert, paginateFind } from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreTimestamp,
  Timestamp,
} from '../../drivers/Firestore';

// RENAME THIS AS TRANSACTIONS
// BETWEEN USER COLLECTION AND TRANSACTIONS SUBCOLLECTION
export default class PurchaseRepositoryFirebaseImpl
  implements PurchaseRepository {
  firestore: FirebaseFirestore;
  usersKey: string;
  transactionKey: string;
  timestamp: FirestoreTimestamp;

  constructor(
    firestore: FirebaseFirestore,
    timestamp: FirestoreTimestamp,
    userCollection: string = 'users',
    transactionCollection: string = 'transactions',
  ) {
    this.firestore = firestore;
    this.usersKey = userCollection;
    this.transactionKey = transactionCollection;
    this.timestamp = timestamp;
  }

  find = async (
    userId: string,
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
  ): Promise<Purchase[] | undefined> => {
    try {
      const transactionPath = `${this.usersKey}/${userId}/${this.transactionKey}`;
      const transactionRef = this.firestore.collection(transactionPath);
      const transactions = (await find(transactionRef, query)) as Purchase[];
      return transactions.map((transaction) => {
        const { createdAt } = transaction as Purchase & {
          createdAt: Timestamp;
        };
        return { ...transaction, createdAt: createdAt.toDate() };
      });
    } catch (error) {
      throw error;
    }
  };

  findByPage = async (
    userId: string,
    query: {
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
    },
  ): Promise<{
    data: Purchase[] | undefined;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }> => {
    try {
      const transactionPath = `${this.usersKey}/${userId}/${this.transactionKey}`;
      const transactionRef = this.firestore.collection(transactionPath);
      const {
        data: transactions,
        hasNextPage,
        hasPrevPage,
      } = (await paginateFind(transactionRef, query)) as {
        data: Array<Purchase & { createdAt: Timestamp }>;
        hasNextPage: boolean;
        hasPrevPage: boolean;
      };

      const purchases = transactions.map((transaction) => {
        const createdAt = transaction.createdAt as Timestamp;

        return {
          ...transaction,
          createdAt: createdAt.toDate(),
        };
      });

      return {
        data: purchases,
        hasNextPage,
        hasPrevPage,
      };
    } catch (error) {
      throw error;
    }
  };

  insert = async (userId: string, params: Purchase): Promise<string> => {
    const transactionPath = `${this.usersKey}/${userId}/${this.transactionKey}`;
    const transactionRef = this.firestore.collection(transactionPath);
    const id = await insert(transactionRef, params, this.timestamp);
    return id;
  };
}
