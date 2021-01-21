import PaymentHistoryRepositoryFirebaseImpl from '../../../../../shared/interface/repositories/PaymentHistoryRepositoryFirebaseImpl';
import { buildCreatePaymentHistory } from '../../../../../shared/usecases/modules/paymentHistory/create-payment-history';
import { PaymentHistory } from '../../../../../shared/domain/entities/paymentHistory';

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
// allow any if spec file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const firestore: any = firebase.firestore();
// const storage = firebase.storage();
const timestamp = firebase.firestore.Timestamp;

describe('create-payment-history-paypal tests', () => {
  test('PaymentHistory created', async () => {
    const paymentsHistoryCollection = 'paymentHistory-2043b696';

    const createPaymentHistory = buildCreatePaymentHistory({
      paymentHistRepo: new PaymentHistoryRepositoryFirebaseImpl(
        firestore,
        timestamp,
        paymentsHistoryCollection,
      ),
    });

    await createPaymentHistory({
      userId: 'cdbb7787-3d1d-4886-adac-e300571feb14',
      pointsToBePurchased: 10,
      amountInJPY: 100,
      type: 'Paypal',
      email: 'test@email.com',
    });

    const snapshot = await firestore
      .collection(paymentsHistoryCollection)
      .get();

    const { docs } = snapshot;

    expect(docs.length).toEqual(1);

    const [paymentHistory] = docs;
    const paymentHistoryData = paymentHistory.data() as PaymentHistory;
    const paymentHistoryId = paymentHistory.id;

    expect(paymentHistoryData.status).toEqual('PENDING');
    expect(paymentHistoryData.type).toEqual('Paypal');
    expect(paymentHistoryData.userId).toEqual(
      'cdbb7787-3d1d-4886-adac-e300571feb14',
    );
    expect(paymentHistoryData.amount).toEqual(100);
    expect(paymentHistoryData.pointsPurchased).toEqual(10);

    firestore
      .collection(paymentsHistoryCollection)
      .doc(paymentHistoryId)
      .delete();
  });
});
