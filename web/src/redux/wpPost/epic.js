/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  fetchPostsBySlugFailure,
  fetchPostsBySlugSuccess,
  setPost,
} from './action';
import { FETCH_POSTS_BY_SLUG_REQUEST } from './actionType';

export const fetchPostsBySlugEpic = (
  action$,
  state$,
  { WPPostInteractor: { fetchWPPostsBySlug } },
) =>
  action$.pipe(
    ofType(FETCH_POSTS_BY_SLUG_REQUEST),
    mergeMap(({ payload: { slug } }) => {
      return from(fetchWPPostsBySlug(slug)).pipe(
        mergeMap(response => {
          return [
            fetchPostsBySlugSuccess(response),
            setPost({ [slug]: response }),
          ];
        }),
        catchError(error => {
          return of(fetchPostsBySlugFailure(error));
        }),
      );
    }),
  );

export default combineEpics(fetchPostsBySlugEpic);
