import { AnyAction } from 'redux';
import {
  fetchSubscribersByPage,
  fetchPurchase,
  updateSubscriberByPage,
} from '../../../redux/subscriber/action';

export const fetchSubscribers = (query: {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit: number;
  mode: 'prev' | 'next';
  orderBy?: string;
  sort?: 'desc' | 'asc';
  firstId: string;
  lastId: string;
}): AnyAction => {
  return fetchSubscribersByPage(query);
};

export const fetchPurchases = (
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
): AnyAction => {
  return fetchPurchase(userId, query);
};

export const updateSubscriber = (
  userId: string,
  points: number,
  inputPoints: number,
): AnyAction => {
  return updateSubscriberByPage(userId, points, inputPoints);
};

export type DispatchFromProps = {
  fetchSubscribers: typeof fetchSubscribers;
  updateSubscriber: typeof updateSubscriber;
};
