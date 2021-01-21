import React, { PureComponent } from 'react';
import { Card } from '../../atoms/Card';
import { ProgressBar } from '../../atoms/ProgressBar';
import {
  Container,
  Separator,
  Name,
  Text,
  Rank,
  TopTextContainer,
  BottomTextContainer,
  RankContainer,
  ProgressContainer,
} from './elements';
import { Ranks } from '../../atoms/ProgressBar/types';
import { words } from '../../../constants';

type Props = {
  name: string;
  percentage?: number;
  rank: Ranks;
  pointsNeeded?: number;
};

class ProfileCard extends PureComponent<Props> {
  static defaultProps = {
    percentage: 0,
    pointsNeeded: 0,
  };

  render = (): React.ReactElement => {
    const { name, percentage, rank, pointsNeeded } = this.props;

    return (
      <Card>
        <Container>
          <Name numberOfLines={2}>
            {name}
            {words.san}
          </Name>
          <Separator />
          <ProgressContainer>
            <ProgressBar
              percentage={percentage}
              pointsNeeded={pointsNeeded}
              rank={rank}
            />
          </ProgressContainer>
          <Separator />
          <RankContainer>
            <TopTextContainer>
              <Text>あなたは</Text>
            </TopTextContainer>
            <BottomTextContainer>
              <Rank>{rank}</Rank>
              <Text>ランクです</Text>
            </BottomTextContainer>
          </RankContainer>
        </Container>
      </Card>
    );
  };
}

export default ProfileCard;
