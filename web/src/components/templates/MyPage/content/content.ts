import { SidebarContents } from '../../../molecules/LeftSidebarItem/types';
import { RecommendedItemTitles } from './types';
import { words } from '../../../../constants';

const leftSidebarWords = words.sidebar as Array<SidebarContents>;

const pathName = ['investment', 'acount', 'virtual'];

const leftSidebarContent: Array<SidebarContents> = leftSidebarWords.map(
  (sidebarWords, index) => ({
    ...sidebarWords,
    link: `${process.env.REACT_APP_WP_ENDPOINT}${pathName[index]}`,
  }),
);

const recommendedItemTitles: RecommendedItemTitles = {
  recommendedPastVideos: {
    title: words.recommendedPastVideos,
    iconKey: 'recommendedVideos',
  },
  recommendedTopics: {
    title: words.recommendedTopics,
    iconKey: 'recommendedTopics',
  },
  recommendedEA: {
    title: words.recommendedEA,
    iconKey: 'recommendedEA',
  },
};

export const CONTENT = { leftSidebarContent, recommendedItemTitles };
