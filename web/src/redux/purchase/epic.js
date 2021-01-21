/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  fetchPurchaseFailure,
  fetchPurchaseSuccess,
  setPurchases,
  fetchRecentPurchasesFailure,
  fetchRecentPurchasesSuccess,
  setRecentManualPurchases,
  setRecentVideoLecturePurchases,
  fetchPurchasedItemsFailure,
  fetchPurchasedItemsSuccess,
  setPurchasedVideosAndProjects,
} from './action';
import {
  FETCH_PURCHASE_REQUEST,
  FETCH_RECENT_PURCHASES_REQUEST,
  FETCH_PURCHASED_VIDEOS_AND_PROJECTS_REQUEST,
} from './actionType';
import { arrayOfObjectsToObject } from '../../utils';

export const fetchPurchaseEpic = (
  action$,
  state$,
  { purchaseInteractor: { fetchPurchase } },
) =>
  action$.pipe(
    ofType(FETCH_PURCHASE_REQUEST),
    mergeMap(({ payload: { userId, query } }) => {
      return from(fetchPurchase(userId, query)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            setPurchases(responseObject),
            fetchPurchaseSuccess(responseObject),
          ];
        }),
        catchError(error => {
          return of(fetchPurchaseFailure(error));
        }),
      );
    }),
  );

export const fetchRecentPurchasesEpic = (
  action$,
  state$,
  { purchaseInteractor: { fetchRecentPurchases } },
) =>
  action$.pipe(
    ofType(FETCH_RECENT_PURCHASES_REQUEST),
    mergeMap(({ payload: { userId, tags }, payload }) => {
      const collectionKey = tags;

      return from(fetchRecentPurchases(userId, tags)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            collectionKey === 'videoLectures'
              ? setRecentVideoLecturePurchases(response)
              : setRecentManualPurchases(response),
            fetchRecentPurchasesSuccess(responseObject),
          ];
        }),
        catchError(error => {
          return of(fetchRecentPurchasesFailure(error));
        }),
      );
    }),
  );

export const fetchPurchasedItemsEpic = (
  action$,
  state$,
  { purchaseInteractor: { fetchPurchasedItems } },
) =>
  action$.pipe(
    ofType(FETCH_PURCHASED_VIDEOS_AND_PROJECTS_REQUEST),
    mergeMap(({ payload: { userId } }) => {
      return from(fetchPurchasedItems(userId)).pipe(
        mergeMap(response => {
          return [
            fetchPurchasedItemsSuccess(response),
            setPurchasedVideosAndProjects(response),
          ];
        }),
        catchError(error => {
          return of(fetchPurchasedItemsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  fetchPurchaseEpic,
  fetchRecentPurchasesEpic,
  fetchPurchasedItemsEpic,
);
