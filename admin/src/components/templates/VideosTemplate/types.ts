import { SubmitValues } from '../../organisms/FileDescription/types';
import { ChoicesValues } from '../../molecules/RecommendedDropdown/types';

export type RecommendedValue =
  | ''
  | '設定しない'
  | 'おすすめ1に表示する'
  | 'おすすめ2に表示する'
  | 'おすすめ3に表示する';

type VideoItem = {
  imgUrl: string;
  videoLength: number;
  title: string;
  description: string;
};

export type VideoItemRow = {
  videoItem: VideoItem;
  publishSettings: string;
  limit: string;
  createdAt: string;
  views: number;
  status: string;
  id: string;
  salesPlan: string;
  salePoints: string;
  fileName: string;
  downloadableUrl: string;
  recommendedValue: ChoicesValues | '';
};

export type UploadAndUpdateValues = {
  videoFile: File | null;
} & SubmitValues;
