import PaymentHistoryRepository from '../../usecases/ports/PaymentHistoryRepository';
import { PaymentHistory } from '../../domain/entities/paymentHistory';
import { User } from '../../domain/entities';
import {
  insert,
  update,
  exists,
  findById,
  find,
  paginateFind,
} from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreCollectionReference,
  FirestoreTimestamp,
  Timestamp,
} from '../../drivers/Firestore';

export default class PaymentHistoryRepositoryFirebaseImpl
  implements PaymentHistoryRepository {
  firestore: FirebaseFirestore;
  paymentHistoryRef: FirestoreCollectionReference;
  usersRef: FirestoreCollectionReference;
  mailRef: FirestoreCollectionReference;
  collectionKey: string;
  timestamp: FirestoreTimestamp;

  constructor(
    firestore: FirebaseFirestore,
    timestamp: FirestoreTimestamp,
    collection: string = 'paymentHistory',
    usersCollection: string = 'users',
    mailCollection: string = 'mail',
  ) {
    this.firestore = firestore;
    this.paymentHistoryRef = this.firestore.collection(collection);
    this.collectionKey = 'paymentHistory';
    this.usersRef = this.firestore.collection(usersCollection);
    this.mailRef = this.firestore.collection(mailCollection);
    this.timestamp = timestamp;
  }

  findById = async (id: string): Promise<PaymentHistory | undefined> => {
    let paymentHistory = (await findById(
      this.paymentHistoryRef,
      id,
    )) as PaymentHistory;
    return paymentHistory;
  };

  create = async (params: PaymentHistory): Promise<string> => {
    try {
      const paymentHistoryDoc = this.paymentHistoryRef.doc();

      return insert(
        this.paymentHistoryRef,
        { ...params, id: paymentHistoryDoc.id },
        this.timestamp,
      );
    } catch (error) {
      throw error;
    }
  };

  update = async (id: string, params: PaymentHistory): Promise<string> => {
    try {
      const doesExist = await exists(this.paymentHistoryRef, 'id', id);

      if (!doesExist) {
        throw new Error('Not found');
      }

      await update(this.paymentHistoryRef, id, params, this.timestamp);

      return id;
    } catch (error) {
      throw error;
    }
  };

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
  }): Promise<PaymentHistory[]> => {
    try {
      const paymentHistories = (await find(
        this.paymentHistoryRef,
        query,
      )) as Array<PaymentHistory & { createdAt: Timestamp }>;

      return paymentHistories.map((paymentHistory) => {
        const createdAt = paymentHistory.createdAt as Timestamp;

        return {
          ...paymentHistory,
          createdAt: createdAt.toDate(),
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
    data: PaymentHistory[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }> => {
    const {
      data: paymentHistories,
      hasPrevPage,
      hasNextPage,
    } = (await paginateFind(this.paymentHistoryRef, query)) as {
      data: Array<PaymentHistory>;
      hasPrevPage: boolean;
      hasNextPage: boolean;
    };

    const data = paymentHistories.map((paymentHistory) => {
      const createdAt = (paymentHistory.createdAt as unknown) as Timestamp;
      return {
        ...paymentHistory,
        createdAt: createdAt.toDate(),
      };
    });

    return { data, hasPrevPage, hasNextPage };
  };

  settlePendingPayment = async (
    pendingId: string,
    userId: string,
    email: string,
  ): Promise<void> => {
    try {
      const userRef = this.usersRef.doc(userId);
      const pendingPaymentRef = this.paymentHistoryRef.doc(pendingId);
      const emailRef = this.mailRef.doc();

      await this.firestore.runTransaction(async (transaction) => {
        const user = await transaction.get(userRef);
        const pendingPayment = await transaction.get(pendingPaymentRef);

        if (user.exists && pendingPayment.exists) {
          try {
            const userData = user.data() as User;
            const pendingPaymentData = pendingPayment.data() as PaymentHistory;
            const updatedPoints =
              (userData.subscriberProfile?.points || 0) +
              pendingPaymentData.pointsPurchased;

            transaction.update(userRef, {
              subscriberProfile: {
                ...userData.subscriberProfile,
                points: updatedPoints,
              },
            });

            transaction.update(pendingPaymentRef, {
              status: 'SUCCESS',
            });

            const nameOfUser = userData.name.lastName;
            transaction.set(emailRef, {
              template: {
                data: {
                  name: nameOfUser,
                },
                name: 'completedPendingTransaction',
              },
              to: email,
            });
          } catch (error) {
            throw error;
          }
        }
      });
    } catch (error) {
      throw error;
    }
  };
}
