import UserRepositoryFirebaseImpl from '../../../../shared/interface/repositories/UserRepositoryFirebaseImpl';

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

const userCollection = 'users-224f25b9';
const paymentHistoryCollection = 'paymentHistory-a1b77d82';

const createUser = async (id: string, data: Object) => {
  await firestore
    .collection(userCollection)
    .doc(id)
    .set(data);
};

const createDummyUser = async (id: string) => {
  await createUser(id, {
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
      points: 10,
    },
    stripe: {},
  });
};

const createDummyPaymentHistory = async (id: string, userId: string) => {
  await firestore
    .collection(paymentHistoryCollection)
    .doc(id)
    .set({
      userId,
      status: 'PENDING',
      type: 'STRIPE',
      amount: 200,
      pointsPurchased: 20,
      chargeID: '859c50d8-d911-440d-a108-bd45a6eaf6b3',
    });
};

const deleteDummyPaymentHistory = async (id: string) => {
  await firestore
    .collection(paymentHistoryCollection)
    .doc(id)
    .delete();
};

const deleteDummyUser = async (id: string) => {
  await firestore
    .collection(userCollection)
    .doc(id)
    .delete();
};

describe('UserRepositoryFirebaseImpl tests', () => {
  it('should update the payment history status and user points', async () => {
    const userId = '24b0fd92-3f1c-472c-b5f5-49fd59254763';
    const paymentHistoryId = 'da889e89-789f-482a-82e9-fb9698575c4e';

    const userRepo = new UserRepositoryFirebaseImpl(
      firestore,
      storage,
      timestamp,
      userCollection,
      paymentHistoryCollection,
    );

    await createDummyUser(userId);

    await createDummyPaymentHistory(paymentHistoryId, userId);

    await userRepo.addPoints(
      userId,
      paymentHistoryId,
      'c9b4c196-d631-4aa0-8ecb-b49061ada962',
    );

    const user = await firestore
      .collection(userCollection)
      .doc(userId)
      .get();

    const userData = user.data();

    const { points } = userData!.subscriberProfile;

    expect(points).toEqual(30);

    const paymentHistory = await firestore
      .collection(paymentHistoryCollection)
      .doc(paymentHistoryId)
      .get();

    const paymentHistoryData = paymentHistory.data();

    const { status, chargeID } = paymentHistoryData!;

    expect(status).toEqual('SUCCESS');
    expect(chargeID).toEqual('c9b4c196-d631-4aa0-8ecb-b49061ada962');

    await deleteDummyUser(userId);

    await deleteDummyPaymentHistory(paymentHistoryId);
  });

  test('user does not exist', async () => {
    const userId = 'f88053b1-1ef7-4e35-bd01-8efd591a1d64';
    const paymentHistoryId = '1f80d0c5-c47f-424d-8f88-422b615e4d07';

    const userRepo = new UserRepositoryFirebaseImpl(
      firestore,
      storage,
      timestamp,
      userCollection,
      paymentHistoryCollection,
    );

    await createDummyPaymentHistory(paymentHistoryId, userId);

    expect(userRepo.addPoints(userId, paymentHistoryId)).rejects.toEqual(
      Error('404'),
    );

    await deleteDummyPaymentHistory(paymentHistoryId);
  });

  test('paymentHistory does not exist', async () => {
    const userId = '60415378-bf32-4a2d-99db-93dc95f3c3b4';
    const paymentHistoryId = '6fc33780-1055-41f9-b221-a35849647dba';

    const userRepo = new UserRepositoryFirebaseImpl(
      firestore,
      storage,
      timestamp,
      userCollection,
      paymentHistoryCollection,
    );

    await createDummyUser(userId);

    await expect(
      userRepo.addPoints(
        userId,
        paymentHistoryId,
        '22c5f4ab-d8bf-4541-8702-abe96c4b0bba',
      ),
    ).rejects.toEqual(Error('404'));

    await deleteDummyUser(userId);
  });

  test('user has no subscriberProfile', async () => {
    const userId = '1fee5b0d-91e0-494e-aa0d-abecec257258';
    const paymentHistoryId = '166386b2-f920-4e56-9723-a530a1a5c1c3';

    const userRepo = new UserRepositoryFirebaseImpl(
      firestore,
      storage,
      timestamp,
      userCollection,
      paymentHistoryCollection,
    );

    await createUser(userId, {
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
      stripe: {},
    });

    await createDummyPaymentHistory(paymentHistoryId, userId);

    await expect(
      userRepo.addPoints(
        userId,
        paymentHistoryId,
        '3243629f-671f-44bb-9014-f4feafa9b5f9',
      ),
    ).rejects.toEqual(TypeError("Cannot read property 'points' of undefined"));

    await deleteDummyUser(userId);

    await deleteDummyPaymentHistory(paymentHistoryId);
  });
});
