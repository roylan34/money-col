export type RecommendedItem = {
  title: string;
  iconKey: 'recommendedVideos' | 'recommendedTopics' | 'recommendedEA';
};

export type RecommendedItemTitles = {
  recommendedPastVideos: RecommendedItem;
  recommendedTopics: RecommendedItem;
  recommendedEA: RecommendedItem;
};

export type PurchaseCollectionKey =
  | 'manuals'
  | 'EAPrograms'
  | 'videoLectures'
  | 'projectContents';
