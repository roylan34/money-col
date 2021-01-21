import { UserDetailsData, PtUsageHistoryData } from './types';

export const DUMMY_USER_DETAIL: Array<UserDetailsData> = [
  {
    name: '山田　たろう ',
    email: 'aaron.nunez@gmail.com',
    createdAt: '2020/05/05 11:45',
    ownedPoints: 10,
    rank: 'プライム',
  },
];

export const DUMMY_PT_USAGE_HISTORY: Array<PtUsageHistoryData> = [
  {
    id: '1',
    event: 'ポイント配布',
    eventDateAndTime: '2020/07/16 22:30',
    points: 50,
  },
  {
    id: '11',
    event: 'おすすめ動画購入',
    eventDateAndTime: '2020/05/05 11:45',
    points: -10,
  },
  {
    id: '111',
    event: 'ポイント購入',
    eventDateAndTime: '2019/09/12 11:45',
    points: 100,
  },
  {
    id: '12',
    event: 'ボーナス付与',
    eventDateAndTime: '2019/08/30 09:30',
    points: 10,
  },
  {
    id: '9122',
    event: '案件動画購入',
    eventDateAndTime: '2019/08/22 18:10',
    points: -20,
  },
  {
    id: '13',
    event: 'おすすめ動画購入',
    eventDateAndTime: '2019/06/23 10:48',
    points: -20,
  },
  {
    id: '133',
    event: 'おすすめ動画購入',
    eventDateAndTime: '2019/06/23 10:45',
    points: -20,
  },
  {
    id: '1123',
    event: 'メール送信',
    eventDateAndTime: '2019/05/05 06:45',
    points: -5,
  },
  {
    id: '1321',
    event: 'ポイント購入',
    eventDateAndTime: '2019/01/01 11:45',
    points: 50,
  },
];
