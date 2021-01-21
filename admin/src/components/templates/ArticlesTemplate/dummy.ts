import { ArticlesRowData } from './types';

export const DUMMY_ARTICLES: Array<ArticlesRowData> = [
  {
    title: 'Money Collegeが新しくリリース されました',
    publish: '公開',
    createdAt: '2020/7/1',
    disclosure: '制限なし',
    downloadableUrl: 'https://www.google.com',
    fileName: 'fileName1.pdf',
    id: 'id1',
    thumbnail:
      'https://www.whats-on-netflix.com/wp-content/uploads/2019/12/K-Drama-Series-Reply-1988-Coming-to-Netflix-in-January.jpg',
  },
  {
    title: '新案件のご案内',
    publish: '公開',
    createdAt: '2020/6/24',
    disclosure: 'エリートランク以上',
    downloadableUrl: 'https://www.google.com',
    fileName: 'fileName2.pdf',
    id: 'id2',
    thumbnail:
      'https://asianwiki.com/images/d/d5/It%27s_Okay_to_Not_Be_Okay-CPsm1.jpg',
  },
  {
    title: '新案件のご案内',
    publish: '非公開',
    createdAt: '2020/6/4',
    disclosure: 'プライムランクのみ',
    downloadableUrl: 'https://www.google.com',
    fileName: 'fileName3.pdf',
    id: 'id3',
    thumbnail: 'https://cdn.wallpapersafari.com/32/11/BW7Kde.jpg',
  },
];
