import { AnyAction } from 'redux';
import {
  FETCH_PURCHASE_REQUEST,
  FETCH_PURCHASE_FAILURE,
  FETCH_PURCHASE_SUCCESS,
  SET_PURCHASES,
  FETCH_RECENT_PURCHASES_REQUEST,
  FETCH_RECENT_PURCHASES_FAILURE,
  FETCH_RECENT_PURCHASES_SUCCESS,
  SET_RECENT_VIDEO_LECTURE_PURCHASES,
  SET_RECENT_MANUAL_PURCHASES,
  FETCH_PURCHASED_VIDEOS_AND_PROJECTS_REQUEST,
  FETCH_PURCHASED_VIDEOS_AND_PROJECTS_SUCCESS,
  FETCH_PURCHASED_VIDEOS_AND_PROJECTS_FAILURE,
  SET_PURCHASED_VIDEOS_AND_PROJECTS,
} from './actionType';
import { Purchase } from '../../domain/entities';

export const fetchPurchase = (
  userId: string,
  query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  },
): AnyAction => ({
  type: FETCH_PURCHASE_REQUEST,
  payload: { userId, query },
});

export const fetchPurchaseSuccess = (response: Object): AnyAction => ({
  type: FETCH_PURCHASE_SUCCESS,
  payload: { response },
});

export const fetchPurchaseFailure = (error: Error | string): AnyAction => ({
  type: FETCH_PURCHASE_FAILURE,
  payload: { error },
});

export const setPurchases = (purchases: {
  [key: string]: Purchase;
}): AnyAction => ({
  type: SET_PURCHASES,
  payload: purchases,
});

export const fetchRecentPurchases = (
  userId: string,
  tags: 'manuals' | 'videoLectures',
): AnyAction => ({
  type: FETCH_RECENT_PURCHASES_REQUEST,
  payload: { userId, tags },
});

export const fetchRecentPurchasesSuccess = (response: Object): AnyAction => ({
  type: FETCH_RECENT_PURCHASES_SUCCESS,
  payload: { response },
});

export const fetchRecentPurchasesFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_RECENT_PURCHASES_FAILURE,
  payload: { error },
});

export const setRecentManualPurchases = (purchases: {
  [key: string]: Purchase;
}): AnyAction => ({
  type: SET_RECENT_MANUAL_PURCHASES,
  payload: purchases,
});

export const setRecentVideoLecturePurchases = (purchases: {
  [key: string]: Purchase;
}): AnyAction => ({
  type: SET_RECENT_VIDEO_LECTURE_PURCHASES,
  payload: purchases,
});

export const fetchPurchasedItems = (userId: string): AnyAction => ({
  type: FETCH_PURCHASED_VIDEOS_AND_PROJECTS_REQUEST,
  payload: { userId },
});

export const fetchPurchasedItemsSuccess = (response: Object): AnyAction => ({
  type: FETCH_PURCHASED_VIDEOS_AND_PROJECTS_SUCCESS,
  payload: { response },
});

export const fetchPurchasedItemsFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_PURCHASED_VIDEOS_AND_PROJECTS_FAILURE,
  payload: { error },
});

export const setPurchasedVideosAndProjects = (response: Object): AnyAction => ({
  type: SET_PURCHASED_VIDEOS_AND_PROJECTS,
  payload: { response },
});
