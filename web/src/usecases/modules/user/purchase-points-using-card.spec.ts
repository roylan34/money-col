import UserRepository from '../../../../../shared/usecases/ports/UserRepository';
import UserRepositoryFirebaseImpl from '../../../../../shared/interface/repositories/UserRepositoryFirebaseImpl';
import PaymentHistoryRepositoryFirebaseImpl from '../../../../../shared/interface/repositories/PaymentHistoryRepositoryFirebaseImpl';
import { buildPurchasePointsUsingCard } from '../../../../../shared/usecases/modules/user/purchase-points-using-card';
import { PaymentHistory } from '../../../../../shared/domain/entities/paymentHistory';
import { User } from '../../../../../shared/domain/entities/user';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCz2_n6WjeYs4TU-H9l0HQWgwqcm06Swco',
  authDomain: 'money-college-test.firebaseapp.com',
  databaseURL: 'https://money-college-test.firebaseio.com',
  projectId: 'money-college-test',
  storageBucket: 'money-college-test.appspot.com',
  messagingSenderId: '945112144629',
  appId: '1:945112144629:web:44db975db0e275208243bc',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.Timestamp;

describe('purchase-points-using-card tests', () => {
  test('chargeCard failed', async () => {
    const paymentsHistoryCollection = 'paymentHistory-d619d335';
    const usersCollection = 'users-f62af1f7';
    const chargeCard = () => Promise.reject('error 1');

    const purchasePointsUsingCard = buildPurchasePointsUsingCard({
      paymentHistRepo: new PaymentHistoryRepositoryFirebaseImpl(
        firestore,
        timestamp,
        paymentsHistoryCollection,
      ),
      userRepo: new UserRepositoryFirebaseImpl(
        firestore,
        storage,
        timestamp,
        usersCollection,
        paymentsHistoryCollection,
      ),
      userInteractor: {
        chargeCard,
      },
    });

    await expect(
      purchasePointsUsingCard(
        '42b6647d-dcaf-4cfa-809c-b5ffb46b0eea',
        10,
        '79c810ec-bc69-48c2-ac80-ad770dc2d5ce',
        100,
      ),
    ).rejects.toEqual('error 1');

    const snapshot = await firestore
      .collection(paymentsHistoryCollection)
      .get();

    const { docs } = snapshot;

    expect(docs.length).toEqual(1);

    const [paymentHistory] = docs;
    const paymentHistoryData = paymentHistory.data() as PaymentHistory;
    const paymentHistoryId = paymentHistory.id;

    expect(paymentHistoryData.status).toEqual('FAILED');

    firestore
      .collection(paymentsHistoryCollection)
      .doc(paymentHistoryId)
      .delete();
  });

  test('addPoints failed', async () => {
    class MockUserRepo implements UserRepository {
      insert(): Promise<string> {
        return Promise.resolve('');
      }
      findById(): Promise<User | undefined> {
        return Promise.resolve(undefined);
      }
      update(): Promise<void> {
        return Promise.resolve();
      }
      upload(): Promise<string> {
        return Promise.resolve('');
      }
      find(): Promise<User[]> {
        return Promise.resolve([]);
      }
      findByPage(): Promise<{
        data: User[];
        hasNextPage: boolean;
        hasPrevPage: boolean;
      }> {
        return Promise.resolve({
          data: [],
          hasNextPage: false,
          hasPrevPage: false,
        });
      }
      purchaseContent(): Promise<number> {
        return Promise.resolve(1);
      }
      deleteByIds(): Promise<void> {
        return Promise.resolve();
      }
      addPoints(): Promise<void> {
        return Promise.reject(new Error('Trasaction Failed')); // addPoints transaction failed here
      }
    }
    const paymentsHistoryCollection = 'paymentHistory-239ece7d';
    const chargeCard = () =>
      Promise.resolve({
        paid: true,
        id: '9acb5227-bf44-4092-aedf-78ff7fc219a8',
      });

    const purchasePointsUsingCard = buildPurchasePointsUsingCard({
      paymentHistRepo: new PaymentHistoryRepositoryFirebaseImpl(
        firestore,
        timestamp,
        paymentsHistoryCollection,
      ),
      userRepo: new MockUserRepo(),
      userInteractor: {
        chargeCard,
      },
    });

    await expect(
      purchasePointsUsingCard(
        'be2b2263-d1bc-49e6-9c3b-a3f3485cb1f0',
        10,
        '8088a5fe-d10d-498e-90b7-1286b5d39542',
        100,
      ),
    ).rejects.toEqual(Error('Trasaction Failed'));

    const snapshot = await firestore
      .collection(paymentsHistoryCollection)
      .get();

    const { docs } = snapshot;

    expect(docs.length).toEqual(1);

    const [paymentHistory] = docs;
    const paymentHistoryData = paymentHistory.data() as PaymentHistory;
    const paymentHistoryId = paymentHistory.id;

    expect(paymentHistoryData.status).toEqual('PENDING');

    firestore
      .collection(paymentsHistoryCollection)
      .doc(paymentHistoryId)
      .delete();
  });

  it('should work', async () => {
    const paymentsHistoryCollection = 'paymentHistory-d619d335';
    const usersCollection = 'users-f62af1f7';
    const userId = '74515e82-c612-4fff-9f48-4b8e698b74d8';
    const chargeCard = () =>
      Promise.resolve({
        paid: true,
        id: '3841df8e-7e78-42ed-82ec-d6ba5c7d1cb5',
      });

    const purchasePointsUsingCard = buildPurchasePointsUsingCard({
      paymentHistRepo: new PaymentHistoryRepositoryFirebaseImpl(
        firestore,
        timestamp,
        paymentsHistoryCollection,
      ),
      userRepo: new UserRepositoryFirebaseImpl(
        firestore,
        storage,
        timestamp,
        usersCollection,
        paymentsHistoryCollection,
      ),
      userInteractor: {
        chargeCard,
      },
    });

    await firestore
      .collection(usersCollection)
      .doc(userId)
      .set({
        email: 'john@gmail.com',
        name: {
          firstName: 'john',
          lastName: 'doe',
        },
        roles: {
          lecturer: false,
          subscriber: true,
          admin: false,
        },
        subscriberProfile: {
          rank: {
            score: 1,
            title: 'レギュラー',
            percentage: 1,
          },
          hasUnreadMessage: false,
          subscribedToMailingList: false,
          points: 50,
        },
        stripe: {},
      });

    await purchasePointsUsingCard(
      userId,
      30,
      '79c810ec-bc69-48c2-ac80-ad770dc2d5ce',
      300,
    );

    const user = await firestore
      .collection(usersCollection)
      .doc(userId)
      .get();

    const userData = user.data();

    const { points } = userData!.subscriberProfile;

    expect(points).toEqual(80);

    const snapshot = await firestore
      .collection(paymentsHistoryCollection)
      .get();

    const { docs } = snapshot;

    expect(docs.length).toEqual(1);

    const [paymentHistory] = docs;
    const { status, chargeID } = paymentHistory.data() as PaymentHistory;
    const paymentHistoryId = paymentHistory.id;

    expect(status).toEqual('SUCCESS');
    expect(chargeID).toEqual('3841df8e-7e78-42ed-82ec-d6ba5c7d1cb5');

    firestore
      .collection(paymentsHistoryCollection)
      .doc(paymentHistoryId)
      .delete();

    firestore
      .collection(usersCollection)
      .doc(userId)
      .delete();
  });
});
