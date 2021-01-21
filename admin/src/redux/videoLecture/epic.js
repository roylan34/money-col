/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  addVideoLectureFailure,
  addVideoLectureSuccess,
  fetchVideoLecturesFailure,
  fetchVideoLecturesSuccess,
  updateVideoLectureSuccess,
  updateVideoLectureFailure,
  deleteVideoLecturesFailure,
  deleteVideoLecturesSuccess,
} from './action';
import {
  ADD_VIDEO_LECTURE_REQUEST,
  FETCH_VIDEO_LECTURES_REQUEST,
  UPDATE_VIDEO_LECTURE_REQUEST,
  DELETE_VIDEO_LECTURES_REQUEST,
} from './actionType';

export const addVideoLectureEpic = (
  action$,
  state$,
  {
    videoLectureInteractor: { addVideoLecture },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(ADD_VIDEO_LECTURE_REQUEST),
    mergeMap(
      ({
        payload: { videoParams, thumbnailParams, params, recommendedIds },
      }) => {
        return from(
          addVideoLecture(videoParams, thumbnailParams, params, recommendedIds),
        ).pipe(
          mergeMap(response => {
            const videoLectures = arrayOfObjectsToObject(
              response.videoLectures,
              'id',
            );
            const recommended = arrayOfObjectsToObject(
              response.recommended,
              'recommendedListIndex',
            );
            return [addVideoLectureSuccess({ videoLectures, recommended })];
          }),
          catchError(error => {
            return of(addVideoLectureFailure(error));
          }),
        );
      },
    ),
  );

export const fetchVideoLecturesEpic = (
  action$,
  state$,
  {
    videoLectureInteractor: { fetchVideoLectures },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(FETCH_VIDEO_LECTURES_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchVideoLectures(query)).pipe(
        mergeMap(response => {
          const { data, hasNextPage, hasPrevPage } = response.videoLectures;
          const videoLecturesArray = arrayOfObjectsToObject(data, 'id');
          const recommended = arrayOfObjectsToObject(
            response.recommended,
            'recommendedListIndex',
          );
          const videoLectures = {
            hasNextPage,
            hasPrevPage,
            lectures: videoLecturesArray,
          };
          return [fetchVideoLecturesSuccess({ videoLectures, recommended })];
        }),
        catchError(error => {
          return of(fetchVideoLecturesFailure(error));
        }),
      );
    }),
  );

export const updateVideoLectureEpic = (
  action$,
  state$,
  {
    videoLectureInteractor: { updateVideoLecture },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(UPDATE_VIDEO_LECTURE_REQUEST),
    mergeMap(({ payload: { id, thumbnailParams, params, recommendedIds } }) => {
      return from(
        updateVideoLecture(id, params, thumbnailParams, recommendedIds),
      ).pipe(
        mergeMap(response => {
          const videoLectures = arrayOfObjectsToObject(
            response.videoLectures,
            'id',
          );
          const recommended = arrayOfObjectsToObject(
            response.recommended,
            'recommendedListIndex',
          );

          return [updateVideoLectureSuccess({ videoLectures, recommended })];
        }),
        catchError(error => {
          return of(updateVideoLectureFailure(error));
        }),
      );
    }),
  );

export const deleteVideoLecturesEpic = (
  action$,
  state$,
  { videoLectureInteractor: { removeVideoLecturesById } },
) =>
  action$.pipe(
    ofType(DELETE_VIDEO_LECTURES_REQUEST),
    mergeMap(({ payload: { ids } }) => {
      return from(removeVideoLecturesById(ids)).pipe(
        mergeMap(response => {
          return [deleteVideoLecturesSuccess(response)];
        }),
        catchError(error => {
          return of(deleteVideoLecturesFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  addVideoLectureEpic,
  fetchVideoLecturesEpic,
  updateVideoLectureEpic,
  deleteVideoLecturesEpic,
);
