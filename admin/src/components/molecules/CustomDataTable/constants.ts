import { nameLabel, videoItem } from './stories';

type DUMMY_USER_TYPE = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  rank: string;
  points: number;
};

export const DUMMY_USER_DATA: Array<DUMMY_USER_TYPE> = [
  {
    id: 1,
    name: 'Aaron Nunez',
    email: 'aaron.nunez@gmail.com',
    createdAt: '2020/05/05 11:45',
    rank: 'プライム',
    points: 10,
  },
  {
    id: 2,
    name: 'Reina Brooks',
    email: 'reinabrooks1992@gmail.com',
    createdAt: '2020/05/04 8:30',
    rank: 'プライム',
    points: 0,
  },
  {
    id: 3,
    name: 'Donald Chavez',
    email: 'donald.chavez@yahoo.com',
    createdAt: '2020/05/03 15:20',
    rank: 'レギュラー',
    points: 100,
  },
];

export const DUMMY_USER_COLUMN = [
  {
    name: 'Name',
    selector: 'name',
    cell: (row: DUMMY_USER_TYPE): JSX.Element => nameLabel(row.name),
  },
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Created At',
    selector: 'createdAt',
    sortable: true,
  },
  {
    name: 'Rank',
    selector: 'rank',
  },
  {
    name: 'Points',
    selector: 'points',
  },
];

type VideoItem = {
  imgUrl: string;
  videoLength: number;
  title: string;
  description: string;
};

type DUMMY_VIDEO_ITEM_TYPE = {
  videoItem: VideoItem;
  publishSettings: '公開' | '非公開';
  limit: '制限なし' | 'プライムのみ';
  createdAt: string;
  views: number;
  id: number;
};

export const DUMMY_VIDEO_ITEM_DATA: Array<DUMMY_VIDEO_ITEM_TYPE> = [
  {
    videoItem: {
      imgUrl:
        'https://i.pinimg.com/originals/8b/95/f8/8b95f82995e881ada8d57f1a56672f8e.png',
      videoLength: 144000,
      title: 'コードギアス 反逆のルルーシュ',
      description: 'I cried on the last episode of season 2 huhu',
    },
    publishSettings: '公開',
    limit: '制限なし',
    createdAt: '2020/6/20',
    views: 20,
    id: 1,
  },
  {
    videoItem: {
      imgUrl:
        'https://vignette.wikia.nocookie.net/assassinationclassroom/images/a/a7/Korosensei_Death.jpg/revision/latest?cb=20181018000549',
      videoLength: 12143,
      title: '暗殺教室',
      description: 'I cried on the last episode too huhu',
    },
    publishSettings: '非公開',
    limit: 'プライムのみ',
    createdAt: '2020/6/20',
    views: 20,
    id: 2,
  },
];

export const DUMMY_VIDEO_ITEM_COLUMN = [
  {
    name: '動画',
    selector: 'videoItem',
    minWidth: '430px',
    cell: (row: DUMMY_VIDEO_ITEM_TYPE): JSX.Element =>
      videoItem(
        row.videoItem.imgUrl,
        row.videoItem.videoLength,
        row.videoItem.title,
        row.videoItem.description,
      ),
  },
  {
    name: '公開設定',
    selector: 'publishSettings',
  },
  {
    name: '制限',
    selector: 'limit',
  },
  {
    name: '日付',
    selector: 'createdAt',
    sortable: true,
  },
  {
    name: '視聴回数',
    selector: 'views',
  },
];
