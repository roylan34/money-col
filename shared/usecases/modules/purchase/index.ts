import PurchaseRepo from '../../ports/PurchaseRepository';
import VideoLectureRepo from '../../ports/VideoLectureRepository';
import ManualRepo from '../../ports/ManualRepository';
import ProjectContentRepo from '../../ports/ProjectContentRepository';

import { buildFetchPurchase, fetchPurchaseUseCase } from './fetch-purchase';
// TO DOOO
import { buildFetchMultipleManuals } from '../manual/fetch-multiple-manuals';
import { buildFetchMultipleVideos } from '../videoLecture/fetch-multiple-videos';
import { buildFetchMultipleProjectContents } from '../projectContent/fetch-multiple-project-contents';
import {
  buildFetchRecentPurchase,
  fetchRecentPurchaseUseCase,
} from './fetch-recent-purchases';
import {
  buildFetchPurchasedItems,
  fetchPurchasedItemsUseCase,
} from './fetch-purchased-items';

export default (dependencies: {
  purchaseRepo: PurchaseRepo;
  videoLectureRepo: VideoLectureRepo;
  manualRepo: ManualRepo;
  projectContentRepo: ProjectContentRepo;
}): {
  fetchPurchase: fetchPurchaseUseCase;
  fetchRecentPurchases: fetchRecentPurchaseUseCase;
  fetchPurchasedItems: fetchPurchasedItemsUseCase;
} => {
  const {
    purchaseRepo,
    manualRepo,
    videoLectureRepo,
    projectContentRepo,
  } = dependencies;

  const fetchPurchase = buildFetchPurchase({ purchaseRepo });
  const fetchMultipleManuals = buildFetchMultipleManuals({ manualRepo });
  const fetchMultipleVideos = buildFetchMultipleVideos({
    videoLectureRepo,
  });
  const fetchMultipleProjectContents = buildFetchMultipleProjectContents({
    projectContentRepo,
  });
  const fetchPurchasedItems = buildFetchPurchasedItems({
    purchaseRepo,
    projectInteractor: { fetchMultipleProjectContents },
    videoLectureInteractor: { fetchMultipleVideos },
  });

  const fetchRecentPurchases = buildFetchRecentPurchase({
    purchaseRepo,
    manualInteractor: {
      fetchMultipleManuals,
    },
    videoLectureInteractor: {
      fetchMultipleVideos,
    },
  });

  return { fetchPurchase, fetchRecentPurchases, fetchPurchasedItems };
};
