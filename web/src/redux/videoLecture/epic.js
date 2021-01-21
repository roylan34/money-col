/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  fetchRecommendedVideosSuccess,
  fetchRecommendedVideosFailure,
  setVideoData,
  setRecommendedVideoIds,
  fetchLastBoughtVideosSuccess,
  fetchLastBoughtVideosFailure,
  setLastBoughtVideos,
  fetchVideosFailure,
  fetchVideosSuccess,
} from './action';
import {
  FETCH_RECOMMENDED_VIDEOS_REQUEST,
  FETCH_LAST_BOUGHT_VIDEOS_REQUEST,
  FETCH_VIDEOS_REQUEST,
} from './actionType';
import { arrayOfObjectsToObject } from '../../utils';

export const fetchVideosEpic = (
  action$,
  state$,
  { videoLectureInteractor: { fetchVideos } },
) =>
  action$.pipe(
    ofType(FETCH_VIDEOS_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchVideos(query)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [fetchVideosSuccess(response), setVideoData(responseObject)];
        }),
        catchError(error => {
          return of(fetchVideosFailure(error));
        }),
      );
    }),
  );

export const fetchRecommendedVideosEpic = (
  action$,
  state$,
  { videoLectureInteractor: { fetchRecommendedVideos } },
) =>
  action$.pipe(
    ofType(FETCH_RECOMMENDED_VIDEOS_REQUEST),
    mergeMap(() => {
      return from(fetchRecommendedVideos()).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            fetchRecommendedVideosSuccess(response),
            setVideoData(responseObject),
            setRecommendedVideoIds(response),
          ];
        }),
        catchError(error => {
          return of(fetchRecommendedVideosFailure(error));
        }),
      );
    }),
  );

export const fetchLastBoughtVideosEpic = (
  action$,
  state$,
  { videoLectureInteractor: { fetchMultipleVideosById } },
) =>
  action$.pipe(
    ofType(FETCH_LAST_BOUGHT_VIDEOS_REQUEST),
    mergeMap(({ payload: { keys } }) => {
      return from(fetchMultipleVideosById(keys)).pipe(
        mergeMap(response => {
          const responseObject = arrayOfObjectsToObject(response, 'id');

          return [
            setVideoData(responseObject),
            setLastBoughtVideos(response),
            fetchLastBoughtVideosSuccess(response),
          ];
        }),
        catchError(error => {
          return of(fetchLastBoughtVideosFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  fetchRecommendedVideosEpic,
  fetchLastBoughtVideosEpic,
  fetchVideosEpic,
);
