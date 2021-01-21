import { RootStateOrAny } from 'react-redux';
import { Ranks } from '../../atoms/ProgressBar/types';
import { PreviewCardParams } from '../../organisms/MovieItem/types';
import { News } from '../../../domain/entities';
import { SIGN_OUT_REQUEST } from '../../../redux/auth/actionType';
import {
  PURCHASE_CONTENT_REQUEST,
  CLAIM_GIVEAWAYS_REQUEST,
} from '../../../redux/user/actionType';
import { FETCH_RECOMMENDED_VIDEOS_REQUEST } from '../../../redux/videoLecture/actionType';
import { FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST } from '../../../redux/projectContent/actionType';
import { FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST } from '../../../redux/EAProgram/actionType';
import { FETCH_NEWS_REQUEST } from '../../../redux/news/actionType';
import { CREATE_OR_UPDATE_CONVERSATION_REQUEST } from '../../../redux/conversation/actionType';
import { Purchase } from '../../../domain/entities';
import { getNeededPoints } from './utils';

export type RecommendedItems = {
  recommendedPastVideos: Array<PreviewCardParams>;
  recommendedTopics: Array<PreviewCardParams>;
  recommendedEA: Array<PreviewCardParams>;
};

export type StateFromProps = {
  name: string;
  rank: Ranks;
  points: number;
  percentage: number;
  recommendedMoviesPreview: RecommendedItems;
  newsList: Array<News>;
  instructors: Array<{ id: string; name: string }>;
  hasLoggedOut: boolean;
  userId: string;
  pointsNeeded: number;
  hasPurchased: boolean;
  purchasedItem: Purchase;
  purchases: { [key: string]: Purchase };
  discount: number;
  score: number;
  isFetchingRecommendedVideos: boolean;
  isFetchingRecommendedProjects: boolean;
  isFetchingRecommendedEAPrograms: boolean;
  isPurchasingContent: boolean;
  isFetchingNews: boolean;
  isSendingMsg: boolean;
  hasSeenWelcomeToast?: boolean;
  lastGiveawayInfo?: {
    points: number;
    timestamp: number;
  };
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    // Display in MyPage the logout error if request fails
    auth: { successfulRequests },
    user: {
      id,
      name: { firstName, lastName },
      subscriberProfile: {
        points,
        rank: { title, percentage, score },
        hasSeenWelcomeToast,
      },
      instructors,
      successfulRequests: purchaseSuccess,
      requests: userRequests,
    },
    videoLecture: { recommendedVideos, requests: videoRequests },
    projectContent: { recommendedProjectContents, requests: projectRequests },
    news: { newsList, requests: newsRequests },
    EAProgram: { recommendedEAPrograms, requests: eaProgramRequests },
    purchase: { purchases },
    conversation: { requests: convoRequests },
  } = state;

  const name = `${lastName} ${firstName}`;
  const rank = title as Ranks;
  const recommendedMoviesPreview = {
    recommendedPastVideos: recommendedVideos,
    recommendedTopics: recommendedProjectContents,
    recommendedEA: recommendedEAPrograms,
  };

  const hasLoggedOut =
    successfulRequests && successfulRequests[SIGN_OUT_REQUEST];
  const hasPurchased =
    purchaseSuccess && purchaseSuccess[PURCHASE_CONTENT_REQUEST];
  let purchasedItem;
  if (hasPurchased) {
    purchasedItem = purchaseSuccess[PURCHASE_CONTENT_REQUEST].purchase;
  }

  const userId = id;
  const pointsNeeded = getNeededPoints(score, title);
  const instructorList = Object.values(instructors) as Array<{
    id: string;
    name: string;
  }>;

  const discount = rank === 'プライム' ? 5 : rank === 'エリート' ? 2 : 1;

  const isFetchingRecommendedVideos =
    videoRequests[FETCH_RECOMMENDED_VIDEOS_REQUEST] &&
    (videoRequests[FETCH_RECOMMENDED_VIDEOS_REQUEST].pending as boolean);

  const isFetchingRecommendedProjects =
    projectRequests[FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST] &&
    (projectRequests[FETCH_RECOMMENDED_PROJECT_CONTENTS_REQUEST]
      .pending as boolean);

  const isFetchingRecommendedEAPrograms =
    eaProgramRequests[FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST] &&
    (eaProgramRequests[FETCH_RECOMMENDED_EA_PROGRAMS_REQUEST]
      .pending as boolean);

  const isPurchasingContent =
    userRequests &&
    userRequests[PURCHASE_CONTENT_REQUEST] &&
    (userRequests[PURCHASE_CONTENT_REQUEST].pending as boolean);

  const isFetchingNews =
    newsRequests[FETCH_NEWS_REQUEST] &&
    (newsRequests[FETCH_NEWS_REQUEST].pending as boolean);

  const isSendingMsg =
    convoRequests[CREATE_OR_UPDATE_CONVERSATION_REQUEST] &&
    (convoRequests[CREATE_OR_UPDATE_CONVERSATION_REQUEST].pending as boolean);

  const lastGiveawayInfo = (purchaseSuccess &&
    purchaseSuccess[CLAIM_GIVEAWAYS_REQUEST] && {
      points: purchaseSuccess[CLAIM_GIVEAWAYS_REQUEST].lastGiveawayPointsClaim,
      timestamp: purchaseSuccess[CLAIM_GIVEAWAYS_REQUEST].timeStamp,
    }) || { points: 0, timestamp: null };

  return {
    name,
    rank,
    points,
    percentage,
    recommendedMoviesPreview,
    newsList,
    instructors: instructorList,
    hasLoggedOut,
    userId,
    pointsNeeded,
    hasPurchased,
    purchasedItem,
    purchases,
    discount,
    score,
    isFetchingRecommendedVideos,
    isFetchingRecommendedProjects,
    isFetchingRecommendedEAPrograms,
    isPurchasingContent,
    isFetchingNews,
    isSendingMsg,
    hasSeenWelcomeToast,
    lastGiveawayInfo,
  };
};
