import { fetchVideos } from '../../../redux/videoLecture/action';
import { fetchProjectContents } from '../../../redux/projectContent/action';
import { fetchManuals } from '../../../redux/manual/action';
import { fetchEAPrograms } from '../../../redux/EAProgram/action';
import { purchaseContent } from '../../../redux/user/action';
import { UserRankTitle } from '../../../domain/entities';
import { fetchPurchase } from '../../../redux/purchase/action';

import { AnyAction } from 'redux';

export type FetchContentsDispatchProps = {
  where?: [string, '<' | '<=' | '==' | '>=' | '>', string | number | boolean][];
  limit?: number;
  page?: number;
  orderBy?: string;
  sort?: 'desc' | 'asc';
};

export const fetchVideoContents = (
  query?: FetchContentsDispatchProps,
): AnyAction => {
  return fetchVideos(query);
};

export const fetchProjectContentsList = (
  query?: FetchContentsDispatchProps,
): AnyAction => {
  return fetchProjectContents(query);
};

export const fetchManualContents = (
  query?: FetchContentsDispatchProps,
): AnyAction => {
  return fetchManuals(query);
};

export const fetchEAProgramContents = (
  query?: FetchContentsDispatchProps,
): AnyAction => {
  return fetchEAPrograms(query);
};

export const purchaseContentByKey = (
  userId: string,
  collectionKey: 'manuals' | 'EAPrograms' | 'videoLectures' | 'projectContents',
  itemId: string,
  rank: UserRankTitle,
): AnyAction => {
  return purchaseContent(userId, collectionKey, itemId, rank);
};

export const fetchPurchases = (userId: string): AnyAction => {
  return fetchPurchase(userId, {});
};

export type DispatchFromProps = {
  fetchVideoContents: typeof fetchVideoContents;
  fetchManualContents: typeof fetchManualContents;
  fetchEAProgramContents: typeof fetchEAProgramContents;
  purchaseContentByKey: typeof purchaseContentByKey;
  fetchPurchases: typeof fetchPurchases;
  fetchProjectContentsList: typeof fetchProjectContentsList;
};
