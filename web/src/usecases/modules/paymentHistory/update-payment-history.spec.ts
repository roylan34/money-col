import PaymentHistoryRepositoryFirebaseImpl from '../../../../../shared/interface/repositories/PaymentHistoryRepositoryFirebaseImpl';
import { buildUpdatePaymentHistory } from '../../../../../shared/usecases/modules/paymentHistory/update-payment-history';
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
    const paymentsHistoryCollection = 'paymentHistory-a7a126de';

    const updatePaymentHistory = buildUpdatePaymentHistory({
      paymentHistRepo: new PaymentHistoryRepositoryFirebaseImpl(
        firestore,
        timestamp,
        paymentsHistoryCollection,
      ),
    });

    const ref = await firestore.collection(paymentsHistoryCollection).add({
      userId: '1959d898-cc47-4c07-a087-0d18a5ad621a',
      status: 'PENDING',
      type: 'PAYPAL',
      amount: 100,
      pointsPurchased: 10,
      chargeID: '',
    });
    const doc = await ref.get();
    const paymentHistoryId = doc.id;

    await updatePaymentHistory(paymentHistoryId, { status: 'CANCELLED' });

    const paymentHistory = await firestore
      .collection(paymentsHistoryCollection)
      .doc(paymentHistoryId)
      .get();

    const paymentHistoryData = paymentHistory.data() as PaymentHistory;

    expect(paymentHistoryData.status).toEqual('CANCELLED');
    expect(paymentHistoryData.type).toEqual('PAYPAL');
    expect(paymentHistoryData.userId).toEqual(
      '1959d898-cc47-4c07-a087-0d18a5ad621a',
    );
    expect(paymentHistoryData.amount).toEqual(100);
    expect(paymentHistoryData.pointsPurchased).toEqual(10);

    // firestore
    //   .collection(paymentsHistoryCollection)
    //   .doc(paymentHistoryId)
    //   .delete();
  });
});
