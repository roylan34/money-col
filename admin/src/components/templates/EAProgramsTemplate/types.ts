import { SubmitValues } from '../../organisms/FileDescription/types';
import { ChoicesValues } from '../../molecules/RecommendedDropdown/types';

export type EAProgramRowData = {
  title: string;
  publish: '公開' | '非公開';
  createdAt: string;
  thumbnail: string;
  status: string;
  id: string;
  description: string;
  disclosure: '制限なし' | 'エリートランク以上' | 'プライムランクのみ';
  salesPlan: '無料' | '有料';
  salePoints: string;
  fileName: string;
  downloadableUrl: string;
  recommendedValue: ChoicesValues | '';
};

export type UploadAndUpdateValues = {
  eaFile: File | null;
} & SubmitValues;
