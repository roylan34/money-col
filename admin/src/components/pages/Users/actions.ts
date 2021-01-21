import { AnyAction } from 'redux';
import { fetchSubscribersByPage } from '../../../redux/subscriber/action';
import { addScheduledGiveaway } from '../../../redux/giveaway/action';

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

export const addGiveaway = (params: {
  points: number;
  effectiveDate: Date;
}): AnyAction => {
  return addScheduledGiveaway(params);
};

export type DispatchFromProps = {
  fetchSubscribers: typeof fetchSubscribers;
};
