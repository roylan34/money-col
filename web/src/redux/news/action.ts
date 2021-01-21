import { AnyAction } from 'redux';
import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  SET_NEWS,
} from './actionType';
import { News } from '../../domain/entities';

export const fetchNews = (): AnyAction => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (response: Object): AnyAction => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { response },
});

export const fetchNewsFailure = (error: Error | string): AnyAction => ({
  type: FETCH_NEWS_FAILURE,
  payload: { error },
});

export const setNews = (newsList: Array<News>): AnyAction => ({
  type: SET_NEWS,
  payload: newsList,
});
