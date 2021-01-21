/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  fetchSubscribersByPageSuccess,
  fetchSubscribersByPageFailure,
  fetchPurchaseFailure,
  fetchPurchaseSuccess,
  updateSubscriberByPageSuccess,
  updateSubscriberByPageFailure,
} from './action';
import {
  FETCH_SUBSCRIBERS_REQUEST,
  FETCH_PURCHASE_REQUEST,
  UPDATE_SUBSCRIBER_REQUEST,
} from './actionType';

export const fetchSubscribersByPageEpic = (
  action$,
  state$,
  { userInteractor: { fetchSubscribers }, utils: { arrayOfObjectsToObject } },
) =>
  action$.pipe(
    ofType(FETCH_SUBSCRIBERS_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchSubscribers(query)).pipe(
        mergeMap(response => {
          const { subscribers } = response;
          const subscribersArray = arrayOfObjectsToObject(subscribers, 'id');

          return [
            fetchSubscribersByPageSuccess({
              ...response,
              subscribers: subscribersArray,
            }),
          ];
        }),
        catchError(error => {
          return of(fetchSubscribersByPageFailure(error));
        }),
      );
    }),
  );

// export const fetchPurchaseEpic = (
//   action$,
//   state$,
//   { purchaseInteractor: { fetchPurchase }, utils: { arrayOfObjectsToObject } },
// ) =>
//   action$.pipe(
//     ofType(FETCH_PURCHASE_REQUEST),
//     mergeMap(({ payload: { userId, query } }) => {
//       return from(fetchPurchase(userId, query)).pipe(
//         mergeMap(response => {
//           const purchases = arrayOfObjectsToObject(response, 'id');

//           // TO DO: implement pagination in another PR
//           return [
//             fetchPurchaseSuccess({
//               purchases,
//               hasNextPage: false,
//               hasPrevPage: false,
//             }),
//           ];
//         }),
//         catchError(error => {
//           return of(fetchPurchaseFailure(error));
//         }),
//       );
//     }),
//   );

export const fetchPurchaseEpic = (
  action$,
  state$,
  { purchaseInteractor: { fetchPurchase }, utils: { arrayOfObjectsToObject } },
) =>
  action$.pipe(
    ofType(FETCH_PURCHASE_REQUEST),
    mergeMap(({ payload: { userId, query } }) => {
      return from(fetchPurchase(userId, query)).pipe(
        mergeMap(response => {
          const { data, hasNextPage, hasPrevPage } = response;
          const purchases = arrayOfObjectsToObject(data, 'id');
          return [
            fetchPurchaseSuccess({
              hasNextPage,
              hasPrevPage,
              purchases,
            }),
          ];
        }),
        catchError(error => {
          return of(fetchPurchaseFailure(error));
        }),
      );
    }),
  );

export const updateSubscriberEpic = (
  action$,
  state$,
  { userInteractor: { updateSubscriber } },
) =>
  action$.pipe(
    ofType(UPDATE_SUBSCRIBER_REQUEST),
    mergeMap(({ payload: { id, points, inputPoints } }) => {
      return from(updateSubscriber(id, points, inputPoints)).pipe(
        mergeMap(response => {
          return [updateSubscriberByPageSuccess({ [response.id]: response })];
        }),
        catchError(error => {
          return of(updateSubscriberByPageFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  fetchSubscribersByPageEpic,
  fetchPurchaseEpic,
  updateSubscriberEpic,
);
