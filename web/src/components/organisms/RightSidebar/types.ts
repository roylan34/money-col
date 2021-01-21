import { Ranks } from '../../atoms/ProgressBar/types';

export interface ProfileCardParams {
  name: string;
  percentage?: number;
  rank: Ranks;
  pointsNeeded: number;
}
