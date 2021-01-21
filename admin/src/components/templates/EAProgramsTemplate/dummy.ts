import { EAProgramRowData } from './types';
import { RecommendedItems } from '../../organisms/FileDescription/types';

export const DUMMY_RECOMMENDED_ITEMS: RecommendedItems = {
  0: 'sampleid1',
  1: 'sampleid2',
  2: 'sampleid3',
};

export const DUMMY_RECOMMENDED_TITLES: RecommendedItems = {
  0: 'This is a sample title 1.',
  1: 'This is a sample title 2.',
  2: 'This is a sample title 3.',
};

export const DUMMY_EA_PROGRAMS: Array<EAProgramRowData> = [
  {
    title: 'Money Collegeが新しくリリース されました',
    publish: '公開',
    createdAt: '2020/7/1',
    thumbnail:
      'https://static1.squarespace.com/static/5a3bcf23bff200779d426e03/5a46a8b5e4966b19e3c40449/5a4d3e83652dea5c440d3ee8/1587998008748/1098835-download-free-peaky-blinders-wallpapers-2197x1463.jpg?format=2500w',
    status: 'おすすめ1に表示',
    id: '1',
    description: 'EA Program 1',
    disclosure: '制限なし',
    salesPlan: '有料',
    salePoints: '3',
    fileName: 'EaProgram1.pdf',
    downloadableUrl: 'https://cityofdreams.xsrv.jp/ea-programs',
    recommendedValue: 'おすすめ1に表示する',
  },
  {
    title: '新案件のご案内',
    publish: '公開',
    createdAt: '2020/6/24',
    thumbnail:
      'https://mlpnk72yciwc.i.optimole.com/cqhiHLc-AqYteJxv/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/02/tua2-11.jpg',
    status: 'おすすめ2に表示',
    id: '2',
    description: 'EA Program 2',
    disclosure: 'エリートランク以上',
    salesPlan: '有料',
    salePoints: '5',
    fileName: 'EaProgram2.pdf',
    downloadableUrl: 'https://cityofdreams.xsrv.jp/ea-programs',
    recommendedValue: 'おすすめ2に表示する',
  },
  {
    title: '新案件のご案内',
    publish: '公開',
    createdAt: '2020/6/4',
    thumbnail: 'https://wallpapercave.com/wp/wp6954577.jpg',
    status: '',
    id: '3',
    description: 'EA Program 3',
    disclosure: 'プライムランクのみ',
    salesPlan: '無料',
    salePoints: '0',
    fileName: 'EaProgram3.pdf',
    downloadableUrl: 'https://cityofdreams.xsrv.jp/ea-programs',
    recommendedValue: '設定しない',
  },
];
