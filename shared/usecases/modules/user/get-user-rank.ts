import { UserRankTitle } from '../../../domain/entities/user';

export type getUserRankUseCase = (params: { score: number }) => UserRankTitle;

export const buildGetUserRank = (): getUserRankUseCase => {
  const getUserRank: getUserRankUseCase = (params) => {
    const { score } = params;
    if (score <= 199) {
      return 'レギュラー';
    } else if (score <= 499) {
      return 'エリート';
    } else {
      return 'プライム';
    }
  };

  return getUserRank;
};
