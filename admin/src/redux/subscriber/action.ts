import { AnyAction } from 'redux';
import {
  FETCH_SUBSCRIBERS_REQUEST,
  FETCH_SUBSCRIBERS_FAILURE,
  FETCH_SUBSCRIBERS_SUCCESS,
  FETCH_PURCHASE_REQUEST,
  FETCH_PURCHASE_FAILURE,
  FETCH_PURCHASE_SUCCESS,
  UPDATE_SUBSCRIBER_REQUEST,
  UPDATE_SUBSCRIBER_SUCCESS,
  UPDATE_SUBSCRIBER_FAILURE,
} from './actionType';

export const fetchSubscribersByPage = (query: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit: number;
  mode: 'prev' | 'next';
  orderBy?: string;
  sort?: 'desc' | 'asc';
  firstId: string;
  lastId: string;
}): AnyAction => ({
  type: FETCH_SUBSCRIBERS_REQUEST,
  payload: { query },
});

export const fetchSubscribersByPageSuccess = (response: Object): AnyAction => ({
  type: FETCH_SUBSCRIBERS_SUCCESS,
  payload: { response },
});

export const fetchSubscribersByPageFailure = (
  error: Error | string,
): AnyAction => ({
  type: FETCH_SUBSCRIBERS_FAILURE,
  payload: { error },
});

// export const fetchPurchase = (
//   userId: string,
//   query: {
//     where?: [
//       string,
//       '<' | '<=' | '==' | '>=' | '>',
//       string | number | boolean,
//     ][];
//     limit?: number;
//     page?: number;
//     orderBy?: string;
//     sort?: 'desc' | 'asc';
//   },
// ): AnyAction => ({
//   type: FETCH_PURCHASE_REQUEST,
//   payload: { userId, query },
// });

export const fetchPurchase = (
  userId: string,
  query: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit: number;
    mode: 'prev' | 'next';
    orderBy?: string;
    sort?: 'desc' | 'asc';
    firstId: string;
    lastId: string;
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

export const updateSubscriberByPage = (
  id: string,
  points: number,
  inputPoints: number,
): AnyAction => ({
  type: UPDATE_SUBSCRIBER_REQUEST,
  payload: { id, points, inputPoints },
});

export const updateSubscriberByPageSuccess = (response: Object): AnyAction => ({
  type: UPDATE_SUBSCRIBER_SUCCESS,
  payload: { response },
});

export const updateSubscriberByPageFailure = (
  error: Error | string,
): AnyAction => ({
  type: UPDATE_SUBSCRIBER_FAILURE,
  payload: { error },
});
