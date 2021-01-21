import { AnyAction } from 'redux';
import {
  FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST,
  FETCH_RECOMMENDED_PROJECT_CONTENTS_FAILURE,
  FETCH_RECOMMENDED_PROJECT_CONTENTS_SUCCESS,
  SET_PROJECT_CONTENT_DATA,
  SET_RECOMMENDED_PROJECT_CONTENTS,
  FETCH_LAST_BOUGHT_PROJECT_CONTENTS_REQUEST,
  FETCH_LAST_BOUGHT_PROJECT_CONTENTS_FAILURE,
  FETCH_LAST_BOUGHT_PROJECT_CONTENTS_SUCCESS,
  SET_LAST_BOUGHT_PROJECT_CONTENTS,
  FETCH_PROJECT_CONTENTS_FAILURE,
  FETCH_PROJECT_CONTENTS_REQUEST,
  FETCH_PROJECT_CONTENTS_SUCCESS,
} from './actionType';
import { ProjectContent } from '../../domain/entities';

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

export const fetchProjectContentsSuccess = (response: Object): AnyAction => ({
  type: FETCH_PROJECT_CONTENTS_SUCCESS,
  payload: { response },
});

export const fetchProjectContentsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_PROJECT_CONTENTS_FAILURE,
  payload: { error },
});

export const fetchRecommendedProjectContents = (): AnyAction => ({
  type: FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST,
});

export const fetchRecommendedProjectContentsSuccess = (
  response: Object,
): AnyAction => ({
  type: FETCH_RECOMMENDED_PROJECT_CONTENTS_SUCCESS,
  payload: { response },
});

export const fetchRecommendedProjectContentsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_RECOMMENDED_PROJECT_CONTENTS_FAILURE,
  payload: { error },
});

export const setProjectContentData = (projectContentData: {
  [key: string]: ProjectContent;
}): AnyAction => ({
  type: SET_PROJECT_CONTENT_DATA,
  payload: projectContentData,
});

export const setLastBoughtProjectContents = (
  lastBoughtProjectContents: Array<ProjectContent>,
): AnyAction => ({
  type: SET_LAST_BOUGHT_PROJECT_CONTENTS,
  payload: lastBoughtProjectContents,
});

export const setRecommendedProjectContentIds = (
  recommendedProjectContent: Array<ProjectContent>,
): AnyAction => ({
  type: SET_RECOMMENDED_PROJECT_CONTENTS,
  payload: recommendedProjectContent,
});

export const fetchLastBoughtProjectContents = (
  keys: Array<string>,
): AnyAction => ({
  type: FETCH_LAST_BOUGHT_PROJECT_CONTENTS_REQUEST,
  payload: { keys },
});

export const fetchLastBoughtProjectContentsSuccess = (
  response: Object,
): AnyAction => ({
  type: FETCH_LAST_BOUGHT_PROJECT_CONTENTS_SUCCESS,
  payload: { response },
});

export const fetchLastBoughtProjectContentsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_LAST_BOUGHT_PROJECT_CONTENTS_FAILURE,
  payload: { error },
});
