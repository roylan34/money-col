import { AnyAction } from 'redux';
import {
  ADD_PROJECT_CONTENT_REQUEST,
  ADD_PROJECT_CONTENT_FAILURE,
  ADD_PROJECT_CONTENT_SUCCESS,
  FETCH_PROJECT_CONTENTS_REQUEST,
  FETCH_PROJECT_CONTENTS_FAILURE,
  FETCH_PROJECT_CONTENTS_SUCCESS,
  UPDATE_PROJECT_CONTENT_REQUEST,
  UPDATE_PROJECT_CONTENT_FAILURE,
  UPDATE_PROJECT_CONTENT_SUCCESS,
  DELETE_PROJECT_CONTENTS_REQUEST,
  DELETE_PROJECT_CONTENTS_FAILURE,
  DELETE_PROJECT_CONTENTS_SUCCESS,
} from './actionType';
import { ProjectContent } from '../../domain/entities';

export const addProjectContent = (
  projectContentParams: {
    file: File;
    metadata?: object;
  },
  thumbnailParams: {
    file: File;
    metadata?: object;
  },
  params: {
    title: string;
    description: string;
    points: number;
    isPublished: boolean;
    tags: {
      showOnMyPage: boolean;
      primeContent: boolean;
      eliteContent: boolean;
      regularContent: boolean;
      [key: string]: boolean;
    };
    recommendedListIndex: number | null;
  },
  recommendedIds?: { [key: string]: string },
): AnyAction => ({
  type: ADD_PROJECT_CONTENT_REQUEST,
  payload: { projectContentParams, thumbnailParams, params, recommendedIds },
});

export const addProjectContentSuccess = (response: Object): AnyAction => ({
  type: ADD_PROJECT_CONTENT_SUCCESS,
  payload: { response },
});

export const addProjectContentFailure = (error: Error | string): AnyAction => ({
  type: ADD_PROJECT_CONTENT_FAILURE,
  payload: { error },
});

export const fetchProjectContents = (query?: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
}): AnyAction => ({
  type: FETCH_PROJECT_CONTENTS_REQUEST,
  payload: { query },
});

export const fetchProjectContentsSuccess = (response: {
  projectContents: { [key: string]: ProjectContent };
  recommended: { [key: string]: ProjectContent };
}): AnyAction => ({
  type: FETCH_PROJECT_CONTENTS_SUCCESS,
  payload: { response },
});

export const fetchProjectContentsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_PROJECT_CONTENTS_FAILURE,
  payload: { error },
});

export const updateProjectContent = (
  id: string,
  params: {
    title: string;
    description: string;
    points: number;
    isPublished: boolean;
    tags: {
      showOnMyPage: boolean;
      primeContent: boolean;
      eliteContent: boolean;
      regularContent: boolean;
      [key: string]: boolean;
    };
    recommendedListIndex: number | null;
  },
  thumbnailParams?: {
    file: File;
    metadata?: object;
  },
  recommendedIds?: { [key: string]: string },
): AnyAction => ({
  type: UPDATE_PROJECT_CONTENT_REQUEST,
  payload: { id, thumbnailParams, params, recommendedIds },
});

export const updateProjectContentSuccess = (response: Object): AnyAction => ({
  type: UPDATE_PROJECT_CONTENT_SUCCESS,
  payload: { response },
});

export const updateProjectContentFailure = (
  error: Error | string,
): AnyAction => ({
  type: UPDATE_PROJECT_CONTENT_FAILURE,
  payload: { error },
});

export const deleteProjectContents = (ids: Array<string>): AnyAction => ({
  type: DELETE_PROJECT_CONTENTS_REQUEST,
  payload: { ids },
});

export const deleteProjectContentsSuccess = (response: Object): AnyAction => ({
  type: DELETE_PROJECT_CONTENTS_SUCCESS,
  payload: { response },
});

export const deleteProjectContentsFailure = (
  error: Error | string,
): AnyAction => ({
  type: DELETE_PROJECT_CONTENTS_FAILURE,
  payload: { error },
});
