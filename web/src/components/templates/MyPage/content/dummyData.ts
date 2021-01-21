import { Ranks } from '../../../atoms/ProgressBar/types';

export const DUMMY_NEWS_DATA = [
  {
    date: '2020.03.26',
    title: '新型コロナウイルス感染症対策についてはこちら',
    link:
      'https://www.google.com/search?source=hp&ei=aL6zXuSKGYKnoASMup6oBA&q=latest+news+in+cebu',
    id: '01',
  },
  {
    date: '2020.03.27',
    title: '新型コロナウイルス感染症対策についてはこちら',
    link:
      'https://www.google.com/search?source=hp&ei=aL6zXuSKGYKnoASMup6oBA&q=latest+news+in+cebu',
    id: '02',
  },
  {
    date: '2020.03.28',
    title: '新型コロナウイルス感染症対策についてはこちら',
    link:
      'https://www.google.com/search?source=hp&ei=aL6zXuSKGYKnoASMup6oBA&q=latest+news+in+cebu',
    id: '03',
  },
  {
    date: '2020.03.29',
    title: '新型コロナウイルス感染症対策についてはこちら',
    link:
      'https://www.google.com/search?source=hp&ei=aL6zXuSKGYKnoASMup6oBA&q=latest+news+in+cebu',
    id: '04',
  },
  {
    date: '2020.03.30',
    title: '新型コロナウイルス感染症対策についてはこちら',
    link:
      'https://www.google.com/search?source=hp&ei=aL6zXuSKGYKnoASMup6oBA&q=latest+news+in+cebu',
    id: '05',
  },
  {
    date: '2020.03.31',
    title: '新型コロナウイルス感染症対策についてはこちら',
    link:
      'https://www.google.com/search?source=hp&ei=aL6zXuSKGYKnoASMup6oBA&q=latest+news+in+cebu',
    id: '06',
  },
];

export const DUMMY_ADS = [
  {
    imageUrl:
      'https://media.istockphoto.com/vectors/black-friday-up-to-50-off-sale-advertisement-square-template-over-vector-id871723404',
    link: 'https://www.google.com',
  },
  {
    imageUrl:
      'https://media.istockphoto.com/vectors/black-friday-up-to-50-off-sale-advertisement-square-template-over-vector-id871723404',
    link: 'https://www.google.com',
  },
  {
    imageUrl:
      'https://media.istockphoto.com/vectors/black-friday-up-to-50-off-sale-advertisement-square-template-over-vector-id871723404',
    link: 'https://www.google.com',
  },
];

const DUMMY_DESCRIPTION =
  'これはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれはダミーですこれは';

export const DUMMY_PREVIEW = [
  {
    thumbnailURL:
      'https://www.gannett-cdn.com/media/2019/03/04/USATODAY/usatsports/thinkstockphotos-106381832-e1486139813174.jpg?width=2560',
    title: '【マネカレ過去動画】3月配信分 ',
    points: 10,
    id: 'aksnjkfhjhjjhj13msd',
    description: DUMMY_DESCRIPTION,
    tags: {
      showOnMyPage: true,
      primeContent: true,
      eliteContent: true,
      regularContent: true,
    },
  },
  {
    thumbnailURL:
      'https://www.gannett-cdn.com/media/2019/03/04/USATODAY/usatsports/thinkstockphotos-106381832-e1486139813174.jpg?width=2560',
    title: '【マネカレ過去動画】3月配信分 ',
    points: 10,
    id: 'aksdjhajgfjjk11b23',
    description: DUMMY_DESCRIPTION,
    tags: {
      showOnMyPage: true,
      primeContent: true,
      eliteContent: true,
      regularContent: false,
    },
  },
  {
    thumbnailURL:
      'https://www.gannett-cdn.com/media/2019/03/04/USATODAY/usatsports/thinkstockphotos-106381832-e1486139813174.jpg?width=2560',
    title: '【マネカレ過去動画】3月配信分 ',
    points: 10,
    id: 'ajsbdhkgqhkghg1',
    description: DUMMY_DESCRIPTION,
    tags: {
      showOnMyPage: true,
      primeContent: true,
      eliteContent: false,
      regularContent: false,
    },
  },
];

export const DUMMY_RECOMMENDED_PREVIEW_DATA = {
  recommendedPastVideos: DUMMY_PREVIEW,
  recommendedTopics: DUMMY_PREVIEW,
  recommendedEA: DUMMY_PREVIEW,
};

export const DUMMY_INSTRUCTORS = [
  { id: 'id1', name: 'お金田　太郎　先生' },
  { id: 'test2', name: '新咲　金一郎　先生' },
];

export const DUMMY_PROFILE_CARD = {
  name: 'マネカレ　太郎',
  percentage: 0,
  rank: 'プライム' as Ranks,
  pointsNeeded: 8,
};

export const DUMMY_POINTS = 300;

export const DUMMY_LINK_FOR_PURCHASING = '/purchase-points';
