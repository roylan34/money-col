import React, { PureComponent } from 'react';
import {
  ParentContainer,
  ProgressContainer,
  Progress,
  RankUpText,
  RankUpTextWrapper,
  PointsNeeded,
  PrimeContainter,
  CrownWrapper,
} from './elements';
import { Ranks } from './types';
import { GoldCrown } from '../Icons';

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  rank: 'レギュラー' as Ranks,
  percentage: 0 as number,
  pointsNeeded: 0 as number,
};

class ProgressBar extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { percentage, pointsNeeded, rank } = this.props;

    return (
      <ParentContainer>
        {rank === 'プライム' ? (
          <PrimeContainter>
            <RankUpText>ランクアップ済み</RankUpText>
            <CrownWrapper>
              <GoldCrown />
            </CrownWrapper>
          </PrimeContainter>
        ) : (
          <>
            <RankUpTextWrapper>
              <RankUpText>あと</RankUpText>
              <PointsNeeded>{pointsNeeded}</PointsNeeded>
              <RankUpText>pt 利用でランクアップ！</RankUpText>
            </RankUpTextWrapper>
            <ProgressContainer>
              <Progress percentage={`${percentage}%`} rank={rank} />
            </ProgressContainer>
          </>
        )}
      </ParentContainer>
    );
  };
}

export default ProgressBar;
