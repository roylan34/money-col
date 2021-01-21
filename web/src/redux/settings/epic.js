/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  setPriceMapOfPoints,
  fetchPriceMapOfPointsSuccess,
  fetchPriceMapOfPointsFailure,
} from './action';
import { FETCH_PRICE_MAP_REQUEST } from './actionType';

export const fetchPriceMapOfPointsEpic = (
  action$,
  state$,
  { settingsInteractor: { fetchPointsPrice } },
) =>
  action$.pipe(
    ofType(FETCH_PRICE_MAP_REQUEST),
    mergeMap(() => {
      return from(fetchPointsPrice()).pipe(
        mergeMap(response => {
          return [
            fetchPriceMapOfPointsSuccess(response.pointsToPrice),
            setPriceMapOfPoints({ priceMapOfPoints: response.pointsToPrice }),
          ];
        }),
        catchError(error => {
          return of(fetchPriceMapOfPointsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(fetchPriceMapOfPointsEpic);
