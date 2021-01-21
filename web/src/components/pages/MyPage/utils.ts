import { UserRankTitle } from '../../../domain/entities';

const pointsNeeded = {
  レギュラー: 200,
  エリート: 500,
};

export const getNeededPoints = (
  points: number,
  rank: UserRankTitle,
): number => {
  if (rank !== 'プライム') {
    return pointsNeeded[rank] - points;
  }

  return 0;
};
