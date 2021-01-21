import { RootStateOrAny } from 'react-redux';
import {
  setVideoPurchaseRestriction,
  setProjectContentPurchaseRestriction,
  setEAContentPurchaseRestriction,
  setManualContentViewByRank,
} from '../utils/contentsUtils';
import { ContentExcerpt } from '../../organisms/ContentList';
import { PURCHASE_CONTENT_REQUEST } from '../../../redux/user/actionType';
import { FETCH_VIDEOS_REQUEST } from '../../../redux/videoLecture/actionType';
import { FETCH_PROJECT_CONTENTS_REQUEST } from '../../../redux/projectContent/actionType';
import { FETCH_EA_PROGRAMS_REQUEST } from '../../../redux/EAProgram/actionType';
import { FETCH_MANUALS_REQUEST } from '../../../redux/manual/actionType';
import { UserRankTitle, Purchase } from '../../../domain/entities';

export type StateFromProps = {
  points: number;
  videoContents: { [key: string]: ContentExcerpt };
  projectContents: { [key: string]: ContentExcerpt };
  manualContents: { [key: string]: ContentExcerpt };
  EAProgramContents: { [key: string]: ContentExcerpt };
  userId: string;
  successfulPurchaseTimeStamp: string;
  purchaseErrorTimestamp: string;
  purchaseError: string;
  rank: UserRankTitle;
  purchase: Purchase;
  purchases: { [key: string]: Purchase };
  isFetchingVideos: boolean;
  isFetchingProjectContents: boolean;
  isFetchingEAPrograms: boolean;
  isFetchingManuals: boolean;
  isPurchasingContent: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    user: {
      id,
      subscriberProfile: {
        points,
        rank: { title },
      },
      successfulRequests,
      failedRequests,
      requests: userRequests,
    },
    videoLecture: { videos, requests: videoRequests },
    projectContent: { projectContents, requests: projectRequests },
    manual: { manuals, requests: manualRequests },
    EAProgram: { EAPrograms, requests: eaProgramRequests },
    purchase: { purchases },
  } = state;

  const videoContents = setVideoPurchaseRestriction(videos, title);
  const manualContents = setManualContentViewByRank(manuals, title);
  const EAProgramContents = EAPrograms;

  const userId = id;

  const purchase =
    successfulRequests &&
    successfulRequests[PURCHASE_CONTENT_REQUEST] &&
    successfulRequests[PURCHASE_CONTENT_REQUEST].purchase;

  const successfulPurchaseTimeStamp =
    successfulRequests &&
    successfulRequests[PURCHASE_CONTENT_REQUEST] &&
    String(successfulRequests[PURCHASE_CONTENT_REQUEST].timestamp);

  const purchaseErrorTimestamp =
    failedRequests &&
    failedRequests[PURCHASE_CONTENT_REQUEST] &&
    String(failedRequests[PURCHASE_CONTENT_REQUEST].timestamp);

  const purchaseError =
    failedRequests &&
    failedRequests[PURCHASE_CONTENT_REQUEST] &&
    failedRequests[PURCHASE_CONTENT_REQUEST].message;
  const rank = title;

  const isFetchingVideos =
    videoRequests[FETCH_VIDEOS_REQUEST] &&
    (videoRequests[FETCH_VIDEOS_REQUEST].pending as boolean);

  const isFetchingProjectContents =
    projectRequests[FETCH_PROJECT_CONTENTS_REQUEST] &&
    (projectRequests[FETCH_PROJECT_CONTENTS_REQUEST].pending as boolean);

  const isFetchingEAPrograms =
    eaProgramRequests[FETCH_EA_PROGRAMS_REQUEST] &&
    (eaProgramRequests[FETCH_EA_PROGRAMS_REQUEST].pending as boolean);

  const isFetchingManuals =
    manualRequests[FETCH_MANUALS_REQUEST] &&
    (manualRequests[FETCH_MANUALS_REQUEST].pending as boolean);

  const isPurchasingContent =
    userRequests &&
    userRequests[PURCHASE_CONTENT_REQUEST] &&
    (userRequests[PURCHASE_CONTENT_REQUEST].pending as boolean);

  return {
    points,
    videoContents,
    projectContents: setProjectContentPurchaseRestriction(
      projectContents,
      rank,
    ),
    //@ts-ignore
    manualContents,
    EAProgramContents: setEAContentPurchaseRestriction(EAProgramContents, rank),
    userId,
    successfulPurchaseTimeStamp,
    purchaseErrorTimestamp,
    purchaseError,
    rank,
    purchase,
    purchases,
    isFetchingVideos,
    isFetchingProjectContents,
    isPurchasingContent,
    isFetchingEAPrograms,
    isFetchingManuals,
  };
};
