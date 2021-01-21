import { RootStateOrAny } from 'react-redux';
import { PtUsageHistoryData } from '../../templates/UsersDetailsTemplate/types';
import { Purchase, Subscriber } from '../../../domain/entities';
import {
  FETCH_PURCHASE_REQUEST,
  UPDATE_SUBSCRIBER_REQUEST,
} from '../../../redux/subscriber/actionType';

export type StateFromProps = {
  subscribers: { [key: string]: Subscriber };
  pointHistory: PtUsageHistoryData[];
  isFetchingUserEvents: boolean;
  isUpdatingUserPoints: boolean;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    subscriber: { subscribers, purchases, requests, hasPrevPage, hasNextPage },
  } = state;

  let pointHistory = {} as PtUsageHistoryData[];

  try {
    pointHistory = Object.values(purchases).map(values => {
      const { points, title, createdAt, id } = values as Purchase & {
        createdAt: Date;
      };
      return {
        id,
        event: title,
        eventDateAndTime: createdAt.toLocaleDateString(),
        points,
      } as PtUsageHistoryData;
    });
  } catch (err) {
    throw err;
  }

  const isFetchingUserEvents =
    requests[FETCH_PURCHASE_REQUEST] &&
    requests[FETCH_PURCHASE_REQUEST].isSending;
  const isUpdatingUserPoints =
    requests[UPDATE_SUBSCRIBER_REQUEST] &&
    requests[UPDATE_SUBSCRIBER_REQUEST].isSending;

  return {
    subscribers,
    pointHistory,
    isFetchingUserEvents,
    isUpdatingUserPoints,
    hasPrevPage,
    hasNextPage,
  };
};
