import UserRepository from '../../usecases/ports/UserRepository';
import { PaymentHistory } from '../../domain/entities/paymentHistory';
import { User, SubscriberProfile } from '../../domain/entities/user';
import {
  insert,
  findById,
  update,
  find,
  getTimestamp,
  paginateFind,
} from './generic-repository';
import {
  FirebaseFirestore,
  FirestoreCollectionReference,
  FirebaseStorage,
  FirestoreTimestamp,
  Timestamp,
} from '../../drivers/Firestore';

export default class UserRepositoryFirebaseImpl implements UserRepository {
  firestore: FirebaseFirestore;
  storage: FirebaseStorage;
  usersRef: FirestoreCollectionReference;
  paymentsHistoryRef: FirestoreCollectionReference;
  // purchaseKey: string;
  transactionKey: string;
  timestamp: FirestoreTimestamp;

  constructor(
    firestore: FirebaseFirestore,
    storage: FirebaseStorage,
    timestamp: FirestoreTimestamp,
    collection: string = 'users',
    paymentsHistoryCollection: string = 'paymentHistory',
  ) {
    this.firestore = firestore;
    this.usersRef = this.firestore.collection(collection);
    this.paymentsHistoryRef = this.firestore.collection(
      paymentsHistoryCollection,
    );
    this.timestamp = timestamp;
    this.storage = storage;
    this.transactionKey = 'transactions';
  }

  insert = (params: User): Promise<string> => {
    try {
      return insert(this.usersRef, params, this.timestamp);
    } catch (error) {
      throw error;
    }
  };

  findById = async (id: string): Promise<User | undefined> => {
    try {
      let user = (await findById(this.usersRef, id)) as User & {
        lastLogIn?: Timestamp;
        subscriberProfile?: SubscriberProfile & {
          lastGiveawayClaimDate?: Timestamp;
        };
      };

      const lastLogIn = user.lastLogIn ? user.lastLogIn.toDate() : undefined;

      if (user.subscriberProfile) {
        user.subscriberProfile = {
          ...user.subscriberProfile,
          lastGiveawayClaimDate: user.subscriberProfile.lastGiveawayClaimDate
            ? user.subscriberProfile.lastGiveawayClaimDate.toDate()
            : undefined,
        } as SubscriberProfile & {
          lastGiveawayClaimDate?: Timestamp;
        };
      }

      return { ...user, lastLogIn };
    } catch (error) {
      throw error;
    }
  };

  update = (
    id: string,
    params: {
      hasUpdatedDefaultPassword?: boolean;
      name?: { firstName: string; lastName: string };
      photoURL?: string;
    },
  ): Promise<void> => {
    try {
      return update(this.usersRef, id, params, this.timestamp);
    } catch (error) {
      throw error;
    }
  };

  upload = async (path: string, file: File): Promise<string> => {
    try {
      const childRef = this.storage.ref().child(path);

      await childRef.put(file);

      return childRef.getDownloadURL();
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
  }): Promise<User[]> => {
    const users = (await find(this.usersRef, query)) as Array<
      User & { lastLogIn: Timestamp }
    >;
    return users.map((user) => {
      const lastLogIn = user.lastLogIn as Timestamp;

      return {
        ...user,
        lastLogIn: lastLogIn ? lastLogIn.toDate() : undefined,
      };
    });
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
  }): Promise<{ data: User[]; hasNextPage: boolean; hasPrevPage: boolean }> => {
    const { data: users, hasPrevPage, hasNextPage } = (await paginateFind(
      this.usersRef,
      query,
    )) as {
      data: Array<User & { lastLogIn: Timestamp }>;
      hasPrevPage: boolean;
      hasNextPage: boolean;
    };

    const data = users.map((user) => {
      const lastLogIn = user.lastLogIn as Timestamp;

      return {
        ...user,
        lastLogIn: lastLogIn ? lastLogIn.toDate() : undefined,
      };
    });

    return { data, hasNextPage, hasPrevPage };
  };

  // NOTE: this needs to be refactored
  purchaseContent = async (
    userId: string,
    itemId: string,
    purchaseDoc: {
      id: string;
      ref: string;
      title: string;
      tags: {
        [key: string]: boolean;
      };
    },
    discount: number,
  ): Promise<number> => {
    try {
      const purchaseRef = this.usersRef
        .doc(userId)
        .collection(this.transactionKey)
        .doc(purchaseDoc.id);
      const userRef = this.usersRef.doc(userId);
      const contentRef = this.firestore.doc(purchaseDoc.ref);

      const batch = this.firestore.batch();

      const pointRefund = await this.firestore.runTransaction(
        async (transaction) => {
          const purchaseDocSnapshot = await transaction.get(purchaseRef);
          const contentSnapshot = await transaction.get(contentRef);

          if (purchaseDocSnapshot.exists) {
            throw new Error('You have already purchased this item.');
          }

          if (!contentSnapshot.exists) {
            throw new Error('An error occurred');
          }

          const contentData = contentSnapshot.data() as {
            id: string;
            points: number;
            title: string;
            purchases: number;
          };

          const userSnapshot = await transaction.get(userRef);
          const userData = userSnapshot.data() as User;

          if (!userData.subscriberProfile) {
            throw new Error('An error occurred');
          }

          if (userData.subscriberProfile.points < contentData.points) {
            throw new Error('Not enough points.');
          }

          const pointsToDeduct =
            contentData.points >= 5
              ? contentData.points - discount
              : contentData.points;

          // create purchase
          const createdAt = getTimestamp(this.timestamp);
          batch.set(
            purchaseRef,
            {
              ...purchaseDoc,
              title: `『${contentData.title}』 ${purchaseDoc.title}`,
              points: pointsToDeduct * -1,
              createdAt,
              updatedAt: createdAt,
            },
            { merge: true },
          );

          const score =
            userData.subscriberProfile.rank.score + contentData.points;
          const title =
            score <= 199
              ? 'レギュラー'
              : score <= 499
              ? 'エリート'
              : 'プライム';
          const quotient = score <= 199 ? 200 : 300;
          const numerator = score <= 199 ? score : score - 200;
          const percentage =
            title === 'プライム'
              ? 100
              : Number(((numerator / quotient) * 100).toFixed(2));

          // update user's points
          batch.set(
            this.usersRef.doc(userId),
            {
              subscriberProfile: {
                points: userData.subscriberProfile.points - pointsToDeduct,
                rank: {
                  score,
                  title,
                  percentage,
                },
              },
            },
            { merge: true },
          );

          // update document's purchase count
          batch.update(contentRef, {
            purchases: contentData.purchases + 1,
          });
          return contentData.points >= 5 ? discount : 0;
        },
      );

      await batch.commit();

      return pointRefund;
    } catch (error) {
      throw error;
    }
  };
  deleteByIds = async (ids: Array<string>): Promise<void> => {
    try {
      const batch = this.firestore.batch();

      ids.forEach((id) => {
        const document = this.usersRef.doc(id);
        batch.update(document, {
          isDeleted: true,
          deletedAt: getTimestamp(this.timestamp),
        });
      });

      await batch.commit();
    } catch (error) {
      throw error;
    }
  };

  addPoints = async (
    userId: string,
    paymentHistoryId: string,
    chargeID: string,
  ): Promise<void> => {
    const userRef = this.usersRef.doc(userId);
    const paymentHistoryRef = this.paymentsHistoryRef.doc(paymentHistoryId);

    return this.firestore.runTransaction(async (transaction) => {
      const user = await transaction.get(userRef);
      const paymentHistory = await transaction.get(paymentHistoryRef);

      if (user.exists && paymentHistory.exists) {
        try {
          const userData = user.data() as User;
          const paymentHistoryData = paymentHistory.data() as PaymentHistory;

          if (!userData.subscriberProfile) {
            throw new Error('An error occured.');
          }

          const updatedPoints =
            userData.subscriberProfile.points +
            paymentHistoryData.pointsPurchased;

          await transaction.update(userRef, {
            subscriberProfile: {
              ...userData.subscriberProfile,
              points: updatedPoints,
            },
          });

          await transaction.update(paymentHistoryRef, {
            status: 'SUCCESS',
            chargeID,
          });
          // Note: Remove this comment if you want to simulate failure in adding points but successful in charging the credit card.
          // throw Error('simulate error in adding points');
        } catch (e) {
          throw { errorCode: 'fail-add-points' };
        }
      } else {
        throw new Error('404');
      }
    });
  };
}
