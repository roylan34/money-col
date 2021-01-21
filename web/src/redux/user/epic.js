/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  setUser,
  updateUserFailure,
  updateUserSuccess,
  fetchUserSuccess,
  fetchUserFailure,
  fetchInstructorsFailure,
  fetchInstructorsSuccess,
  addCardSuccess,
  addCardFailure,
  deleteCardSuccess,
  deleteCardFailure,
  purchaseContentFailure,
  purchaseContentSuccess,
  purchasePointsUsingCardSuccess,
  purchasePointsUsingCardFailure,
  purchasePointsUsingPaypalSuccess,
  purchasePointsUsingPaypalFailure,
  setLastLogInFailure,
  setLastLogInSuccess,
  claimGiveawaysFailure,
  claimGiveawaysSuccess,
  updateMailboxSettingsSuccess,
  updateMailboxSettingsFailure,
} from './action';
import { setEmailVerified } from '../auth/action';
import {
  UPDATE_USER_REQUEST,
  FETCH_USER_REQUEST,
  FETCH_INSTRUCTORS_REQUEST,
  ADD_CARD_REQUEST,
  DELETE_CARD_REQUEST,
  PURCHASE_CONTENT_REQUEST,
  PURCHASE_POINTS_CARD_REQUEST,
  PURCHASE_POINTS_PAYPAL_REQUEST,
  SET_LAST_LOG_IN_REQUEST,
  CLAIM_GIVEAWAYS_REQUEST,
  UPDATE_MAILBOX_SETTINGS_REQUEST,
} from './actionType';

import { words } from '../../constants';
import { setPurchases } from '../purchase/action';

export const updateUserEpic = (
  action$,
  state$,
  { userInteractor: { updateUser } },
) =>
  action$.pipe(
    ofType(UPDATE_USER_REQUEST),
    mergeMap(({ payload: { id, params } }) => {
      return from(updateUser(id, params)).pipe(
        mergeMap(response => {
          const isEmailVerified = response.isEmailVerified;

          return [
            updateUserSuccess({
              ...response,
              timestamp: new Date().getTime(),
              message: words.updatedProfileMsg,
            }),
            setEmailVerified(isEmailVerified),
            setUser(response),
          ];
        }),
        catchError(error => {
          return of(
            updateUserFailure({ ...error, timestamp: new Date().getTime() }),
          );
        }),
      );
    }),
  );

export const fetchUserEpic = (
  action$,
  state$,
  { userInteractor: { fetchUser } },
) =>
  action$.pipe(
    ofType(FETCH_USER_REQUEST),
    mergeMap(({ payload: { id } }) => {
      return from(fetchUser({ id })).pipe(
        mergeMap(response => {
          const isEmailVerified = response.isEmailVerified;

          return [
            fetchUserSuccess(response),
            setEmailVerified(isEmailVerified),
            setUser(response),
          ];
        }),
        catchError(error => {
          return of(fetchUserFailure(error));
        }),
      );
    }),
  );

export const fetchInstructorsEpic = (
  action$,
  state$,
  { userInteractor: { fetchInstructors }, utils: { arrayOfObjectsToObject } },
) =>
  action$.pipe(
    ofType(FETCH_INSTRUCTORS_REQUEST),
    mergeMap(() => {
      return from(fetchInstructors()).pipe(
        mergeMap(response => {
          const instructors = arrayOfObjectsToObject(
            response,
            'id',
            ({ id, name }) => ({
              id,
              name: `${name.lastName} ${name.firstName} 先生`,
            }),
          );
          return [fetchInstructorsSuccess(instructors)];
        }),
        catchError(error => {
          return of(fetchInstructorsFailure(error));
        }),
      );
    }),
  );

export const addCardEpic = (action$, state$, { userInteractor: { addCard } }) =>
  action$.pipe(
    ofType(ADD_CARD_REQUEST),
    mergeMap(({ payload: { token, stripeCustomerId, userId } }) => {
      return from(addCard(token, stripeCustomerId, userId)).pipe(
        mergeMap(response => {
          return [addCardSuccess(response), setUser(response)];
        }),
        catchError(error => {
          return of(addCardFailure(error));
        }),
      );
    }),
  );

export const deleteCardEpic = (
  action$,
  state$,
  { userInteractor: { deleteCard } },
) =>
  action$.pipe(
    ofType(DELETE_CARD_REQUEST),
    mergeMap(({ payload: { stripeCustomerId, cardId, userId } }) => {
      return from(deleteCard(stripeCustomerId, cardId, userId)).pipe(
        mergeMap(response => {
          return [deleteCardSuccess(response), setUser(response)];
        }),
        catchError(error => {
          return of(deleteCardFailure(error));
        }),
      );
    }),
  );

export const purchaseContentEpic = (
  action$,
  state$,
  { userInteractor: { addPurchase } },
) =>
  action$.pipe(
    ofType(PURCHASE_CONTENT_REQUEST),
    mergeMap(({ payload }) => {
      const { userId, collectionKey, itemId, rank } = payload;

      return from(addPurchase({ userId, collectionKey, itemId, rank })).pipe(
        mergeMap(response => {
          const { user, purchase } = response;

          return [
            setUser(user),
            setPurchases({ [purchase.id]: purchase }),
            purchaseContentSuccess({
              ...response,
              timestamp: new Date().getTime(),
              message: words.profileHasBeenUpdated,
              purchaseRef: purchase.ref,
            }),
          ];
        }),
        catchError(error => {
          return of(
            purchaseContentFailure({
              ...error,
              message: 'An error occured',
              timestamp: new Date().getTime(),
            }),
          );
        }),
      );
    }),
  );

export const purchasePointsUsingCardEpic = (
  action$,
  state$,
  { userInteractor: { purchasePointsUsingCard } },
) =>
  action$.pipe(
    ofType(PURCHASE_POINTS_CARD_REQUEST),
    mergeMap(
      ({
        payload: { userId, pointsToBePurchased, stripeCustomerId, amountInJPY },
      }) => {
        return from(
          purchasePointsUsingCard(
            userId,
            pointsToBePurchased,
            stripeCustomerId,
            amountInJPY,
          ),
        ).pipe(
          mergeMap(response => {
            return [
              purchasePointsUsingCardSuccess(response),
              setUser(response),
            ];
          }),
          catchError(error => {
            return of(purchasePointsUsingCardFailure(error));
          }),
        );
      },
    ),
  );

export const purchasePointsUsingPaypalEpic = (
  action$,
  state$,
  { userInteractor: { purchasePointsUsingPayPal } },
) =>
  action$.pipe(
    ofType(PURCHASE_POINTS_PAYPAL_REQUEST),
    mergeMap(({ payload: { userId, paymentHistId, chargeID } }) => {
      return from(
        purchasePointsUsingPayPal(userId, paymentHistId, chargeID),
      ).pipe(
        mergeMap(response => {
          return [
            purchasePointsUsingPaypalSuccess(response),
            setUser(response),
          ];
        }),
        catchError(error => {
          return of(purchasePointsUsingPaypalFailure(error));
        }),
      );
    }),
  );

export const setLastLogInEpic = (
  action$,
  state$,
  { userInteractor: { updateUser } },
) =>
  action$.pipe(
    ofType(SET_LAST_LOG_IN_REQUEST),
    mergeMap(({ payload: { id, params } }) => {
      return from(updateUser(id, params)).pipe(
        mergeMap(response => {
          return [setUser(response), setLastLogInSuccess(response)];
        }),
        catchError(error => {
          return of(setLastLogInFailure(error));
        }),
      );
    }),
  );

export const claimGiveawaysEpic = (
  action$,
  state$,
  { userInteractor: { claimUserGiveaways } },
) =>
  action$.pipe(
    ofType(CLAIM_GIVEAWAYS_REQUEST),
    mergeMap(({ payload: { userId, params } }) => {
      return from(claimUserGiveaways(userId, params)).pipe(
        mergeMap(response => {
          const lastGiveawayPointsClaim =
            response.subscriberProfile.lastGiveawayPointsClaim;

          return [
            setUser(response),
            claimGiveawaysSuccess({
              lastGiveawayPointsClaim,
              timeStamp: new Date().getTime(),
            }),
          ];
        }),
        catchError(error => {
          return of(claimGiveawaysFailure(error));
        }),
      );
    }),
  );

export const updateMailboxSettingsEpic = (
  action$,
  state$,
  { userInteractor: { updateUser } },
) =>
  action$.pipe(
    ofType(UPDATE_MAILBOX_SETTINGS_REQUEST),
    mergeMap(({ payload: { id, params } }) => {
      return from(updateUser(id, params)).pipe(
        mergeMap(response => {
          return [setUser(response), updateMailboxSettingsSuccess(response)];
        }),
        catchError(error => {
          return of(updateMailboxSettingsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  updateUserEpic,
  fetchUserEpic,
  fetchInstructorsEpic,
  addCardEpic,
  deleteCardEpic,
  purchaseContentEpic,
  purchasePointsUsingCardEpic,
  purchasePointsUsingPaypalEpic,
  setLastLogInEpic,
  claimGiveawaysEpic,
  updateMailboxSettingsEpic,
);
