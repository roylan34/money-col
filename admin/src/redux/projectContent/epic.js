/* eslint-disable */
import { combineEpics, ofType, StateObservable } from 'redux-observable';
import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

import {
  addProjectContentFailure,
  addProjectContentSuccess,
  fetchProjectContentsFailure,
  fetchProjectContentsSuccess,
  updateProjectContentSuccess,
  updateProjectContentFailure,
  deleteProjectContentsFailure,
  deleteProjectContentsSuccess,
} from './action';
import {
  ADD_PROJECT_CONTENT_REQUEST,
  FETCH_PROJECT_CONTENTS_REQUEST,
  UPDATE_PROJECT_CONTENT_REQUEST,
  DELETE_PROJECT_CONTENTS_REQUEST,
} from './actionType';

export const addProjectContentEpic = (
  action$,
  state$,
  {
    projectContentInteractor: { addProjectContent },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(ADD_PROJECT_CONTENT_REQUEST),
    mergeMap(
      ({
        payload: {
          projectContentParams,
          thumbnailParams,
          params,
          recommendedIds,
        },
      }) => {
        return from(
          addProjectContent(
            projectContentParams,
            thumbnailParams,
            params,
            recommendedIds,
          ),
        ).pipe(
          mergeMap(response => {
            const projectContents = arrayOfObjectsToObject(
              response.projectContents,
              'id',
            );
            const recommended = arrayOfObjectsToObject(
              response.recommended,
              'recommendedListIndex',
            );

            return [addProjectContentSuccess({ projectContents, recommended })];
          }),
          catchError(error => {
            return of(addProjectContentFailure(error));
          }),
        );
      },
    ),
  );

export const fetchProjectContentsEpic = (
  action$,
  state$,
  {
    projectContentInteractor: { fetchProjectContentsWithRecommended },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(FETCH_PROJECT_CONTENTS_REQUEST),
    mergeMap(({ payload: { query } }) => {
      return from(fetchProjectContentsWithRecommended(query)).pipe(
        mergeMap(response => {
          const { hasNextPage, hasPrevPage } = response;
          const projectContents = arrayOfObjectsToObject(
            response.projectContents,
            'id',
          );
          const recommended = arrayOfObjectsToObject(
            response.recommended,
            'recommendedListIndex',
          );

          return [
            fetchProjectContentsSuccess({
              projectContents,
              recommended,
              hasNextPage,
              hasPrevPage,
            }),
          ];
        }),
        catchError(error => {
          return of(fetchProjectContentsFailure(error));
        }),
      );
    }),
  );

export const updateProjectContentEpic = (
  action$,
  state$,
  {
    projectContentInteractor: { updateProjectContent },
    utils: { arrayOfObjectsToObject },
  },
) =>
  action$.pipe(
    ofType(UPDATE_PROJECT_CONTENT_REQUEST),
    mergeMap(({ payload: { id, thumbnailParams, params, recommendedIds } }) => {
      return from(
        updateProjectContent(id, params, thumbnailParams, recommendedIds),
      ).pipe(
        mergeMap(response => {
          const projectContents = arrayOfObjectsToObject(
            response.projectContents,
            'id',
          );
          const recommended = arrayOfObjectsToObject(
            response.recommended,
            'recommendedListIndex',
          );

          return [
            updateProjectContentSuccess({ projectContents, recommended }),
          ];
        }),
        catchError(error => {
          return of(updateProjectContentFailure(error));
        }),
      );
    }),
  );

export const deleteProjectContentsEpic = (
  action$,
  state$,
  { projectContentInteractor: { removeProjectContentsById } },
) =>
  action$.pipe(
    ofType(DELETE_PROJECT_CONTENTS_REQUEST),
    mergeMap(({ payload: { ids } }) => {
      return from(removeProjectContentsById(ids)).pipe(
        mergeMap(response => {
          return [deleteProjectContentsSuccess(response)];
        }),
        catchError(error => {
          return of(deleteProjectContentsFailure(error));
        }),
      );
    }),
  );

export default combineEpics(
  addProjectContentEpic,
  fetchProjectContentsEpic,
  updateProjectContentEpic,
  deleteProjectContentsEpic,
);
