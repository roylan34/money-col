/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import { updatePaymentHistory } from './action';
import { UPDATE_PAYMENT_HISTORY_REQUEST } from './actionType';

import { words } from '../../constants';

export const updatePaymentHistoryEpic = (
  action$,
  state$,
  { userInteractor: { updatePaymentHistory } },
) =>
  action$.pipe(
    ofType(UPDATE_PAYMENT_HISTORY_REQUEST),
    mergeMap(({ payload: { id, params } }) => {
      return from(updatePaymentHistory(id, params)).pipe(
        mergeMap(response => {
          return [
            updateUserSuccess({
              ...response,
              timestamp: new Date().getTime(),
              message: words.profileHasBeenUpdated,
            }),
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

export default combineEpics(updatePaymentHistoryEpic);
