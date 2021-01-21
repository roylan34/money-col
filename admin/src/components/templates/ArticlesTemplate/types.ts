import { SubmitValues } from '../../organisms/ArticleDescription/types';

export type ArticlesRowData = {
  title: string;
  publish: '公開' | '非公開';
  createdAt: string;
  disclosure: '制限なし' | 'エリートランク以上' | 'プライムランクのみ';
  thumbnail: string;
  fileName: string;
  downloadableUrl: string;
  id: string;
};

export type PostValues = {
  articleFile: File | null;
} & SubmitValues;
