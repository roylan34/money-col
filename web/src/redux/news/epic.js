/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import { setNews, fetchNewsFailure, fetchNewsSuccess } from './action';
import { FETCH_NEWS_REQUEST } from './actionType';

export const fetchNewsEpic = (
  action$,
  state$,
  { newsInteractor: { fetchNewsList } },
) =>
  action$.pipe(
    ofType(FETCH_NEWS_REQUEST),
    mergeMap(() => {
      return from(fetchNewsList()).pipe(
        mergeMap(response => {
          return [setNews(response), fetchNewsSuccess(response)];
        }),
        catchError(error => {
          return of(fetchNewsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(fetchNewsEpic);
