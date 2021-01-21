/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  addScheduledGiveawaySuccess,
  addScheduledGiveawayFailure,
} from './action';
import { ADD_GIVEAWAY_REQUEST } from './actionType';

import { words } from '../../constants';

export const addScheduledGiveawayEpic = (
  action$,
  state$,
  { giveawayInteractor: { addGiveaway } },
) =>
  action$.pipe(
    ofType(ADD_GIVEAWAY_REQUEST),
    mergeMap(({ payload: { params } }) => {
      return from(addGiveaway(params)).pipe(
        mergeMap(response => {
          return [
            addScheduledGiveawaySuccess({
              ...response,
              message: words.addGiveAwaysSuccessMsg,
            }),
          ];
        }),
        catchError(error => {
          return of(addScheduledGiveawayFailure(error));
        }),
      );
    }),
  );

export default combineEpics(addScheduledGiveawayEpic);
