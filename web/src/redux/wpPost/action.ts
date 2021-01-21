import { AnyAction } from 'redux';
import {
  FETCH_POSTS_BY_SLUG_FAILURE,
  FETCH_POSTS_BY_SLUG_REQUEST,
  FETCH_POSTS_BY_SLUG_SUCCESS,
  SET_POST,
} from './actionType';
import { WPPost } from '../../domain/entities';

export const fetchPostsBySlug = (slug: string): AnyAction => ({
  type: FETCH_POSTS_BY_SLUG_REQUEST,
  payload: {
    slug,
  },
});

export const fetchPostsBySlugSuccess = (response: Object): AnyAction => ({
  type: FETCH_POSTS_BY_SLUG_SUCCESS,
  payload: { response },
});

export const fetchPostsBySlugFailure = (error: Error | string): AnyAction => ({
  type: FETCH_POSTS_BY_SLUG_FAILURE,
  payload: { error },
});

export const setPost = (wpPost: { [key: string]: WPPost }): AnyAction => ({
  type: SET_POST,
  payload: wpPost,
});
