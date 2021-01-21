import { fetchRecommendedVideos } from '../../../redux/videoLecture/action';
import { fetchNews } from '../../../redux/news/action';
import {
  fetchInstructors,
  purchaseContent,
  dismissUserRequests,
  updateUser,
} from '../../../redux/user/action';
import { fetchRecommendedEAPrograms } from '../../../redux/EAProgram/action';
import { fetchRecommendedProjectContents } from '../../../redux/projectContent/action';
import { fetchPurchase } from '../../../redux/purchase/action';
import { UserRankTitle } from '../../../domain/entities';
import { createOrUpdateConversation } from '../../../redux/conversation/action';

import { signOut } from '../../../redux/auth/action';
import { AnyAction } from 'redux';

export type MyPageDispatchProps = { recentlyBoughtKeys: Array<string> };

export const fetchRecommendedFirstRow = (): AnyAction => {
  return fetchRecommendedVideos();
};

export const fetchRecommendedSecondRow = (): AnyAction => {
  return fetchRecommendedProjectContents();
};

export const fetchRecommendedThirdRow = (): AnyAction => {
  return fetchRecommendedEAPrograms();
};

export const fetchNewsList = (): AnyAction => {
  return fetchNews();
};

export const fetchInstructorsList = (): AnyAction => {
  return fetchInstructors();
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

export const dismissRequestsOfUser = (actionType: string): AnyAction => {
  return dismissUserRequests(actionType);
};

export const logout = (): AnyAction => {
  return signOut();
};

export const addOrUpdateConversation = (
  params: {
    files?: Array<File>;
    title?: string;
    content: string;
    userId: string;
    instructorId: string;
    senderId: string;
  },
  rank?: UserRankTitle,
): AnyAction => {
  return createOrUpdateConversation(params, rank);
};

export const setHasSeenWelcome = (
  id: string,
  params: { hasSeenWelcomeToast: boolean },
): AnyAction => {
  return updateUser(id, { subscriberProfile: params });
};

export type DispatchFromProps = {
  fetchRecommendedFirstRow: typeof fetchRecommendedFirstRow;
  fetchRecommendedSecondRow: typeof fetchRecommendedSecondRow;
  fetchRecommendedThirdRow: typeof fetchRecommendedThirdRow;
  fetchNewsList: typeof fetchNewsList;
  fetchInstructorsList: typeof fetchInstructorsList;
  purchaseContentByKey: typeof purchaseContentByKey;
  fetchPurchases: typeof fetchPurchases;
  logout: typeof logout;
  dismissRequestsOfUser: typeof dismissRequestsOfUser;
  addOrUpdateConversation: typeof addOrUpdateConversation;
  setHasSeenWelcome: typeof setHasSeenWelcome;
};
