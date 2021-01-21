/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  fetchPaymentHistoriesSuccess,
  fetchPaymentHistoriesFailure,
  settlePendingPaymentSuccess,
  settlePendingPaymentFailure,
} from './action';
import {
  FETCH_PAYMENT_HISTORIES_REQUEST,
  SETTLE_PENDING_PAYMENT_REQUEST,
} from './actionType';

export const fetchPaymentHistoriesEpic = (
  action$,
  state$,
  {
    paymentHistoryInteractor: { fetchPaymentHistories },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(FETCH_PAYMENT_HISTORIES_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchPaymentHistories(query)).pipe(
        mergeMap(response => {
          const { paymentHistories } = response;
          const paymentHistoriesArray = arrayOfObjectsToObject(
            paymentHistories,
            'id',
          );

          return [
            fetchPaymentHistoriesSuccess({
              ...response,
              paymentHistories: paymentHistoriesArray,
            }),
          ];
        }),
        catchError(error => {
          return of(fetchPaymentHistoriesFailure(error));
        }),
      );
    }),
  );

export const settlePendingPaymentEpic = (
  action$,
  state$,
  { paymentHistoryInteractor: { settlePendingPayment } },
) =>
  action$.pipe(
    ofType(SETTLE_PENDING_PAYMENT_REQUEST),
    mergeMap(({ payload: { pendingId, userId, email } }) => {
      return from(settlePendingPayment(pendingId, userId, email)).pipe(
        mergeMap(response => {
          return [settlePendingPaymentSuccess({ response })];
        }),
        catchError(error => {
          return of(settlePendingPaymentFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  fetchPaymentHistoriesEpic,
  settlePendingPaymentEpic,
);
