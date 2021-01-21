import {
  fetchPurchasedItems,
  fetchPurchase,
} from '../../../redux/purchase/action';

import { AnyAction } from 'redux';

export const fetchPurchasedVideosAndProjects = (userId: string): AnyAction => {
  return fetchPurchasedItems(userId);
};

export const fetchPurchases = (userId: string): AnyAction => {
  return fetchPurchase(userId, {});
};

export type DispatchFromProps = {
  fetchPurchasedVideosAndProjects: typeof fetchPurchasedVideosAndProjects;
  fetchPurchases: typeof fetchPurchases;
};
