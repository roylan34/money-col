import { ChoicesValues } from '../../molecules/RecommendedDropdown/types';

export type SubmitValues = {
  title: string;
  desc: string;
  file?: File | string | null;
  disclosure: string;
  salesPlan: string;
  salePrice?: string;
  publishSetting: string;
  recommendedValue: ChoicesValues | '';
};

export type RecommendedItems = {
  [key: string]: string;
};
