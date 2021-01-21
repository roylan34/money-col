import { RecommendedItemTitles, PurchaseCollectionKey } from './content/types';

export const getPurchaseCollectionKey: {
  [key in keyof RecommendedItemTitles]: PurchaseCollectionKey;
} = {
  recommendedPastVideos: 'videoLectures',
  recommendedTopics: 'projectContents',
  recommendedEA: 'EAPrograms',
};
