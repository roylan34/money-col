import React, { PureComponent } from 'react';
import {
  Container,
  AdContainer,
  CardContainer,
  BoughtContentsCardWrapper,
} from './elements';
import { ProfileCard } from '../../molecules/ProfileCard';
import { PointsHeldCard } from '../../molecules/PointsHeldCard';
import { PurchasePointsCard } from '../../molecules/PurchasePointsCard';
import { BoughtContentsCard } from '../../molecules/BoughtContentsCard';
import { Advertisement } from '../../atoms/Advertisement';
import { ProfileCardParams } from './types';
import { AdvertisementModel } from '../../../domain/entities';

type Props = {
  profileCard: ProfileCardParams;
  points: number;
  linkForPurchasing: string;
  ads?: Array<AdvertisementModel>;
};

class RightSidebar extends PureComponent<Props> {
  static defaultProps = {
    profileCard: { percentage: 0 },
  };

  render = (): React.ReactElement => {
    const { profileCard, points, ads, linkForPurchasing } = this.props;
    // TODO Accept ads as children instead
    return (
      <Container>
        <ProfileCard
          name={profileCard.name}
          rank={profileCard.rank}
          percentage={profileCard.percentage}
          pointsNeeded={profileCard.pointsNeeded}
        />
        <CardContainer>
          <PointsHeldCard points={points} />
          <PurchasePointsCard link={linkForPurchasing} />
        </CardContainer>
        <BoughtContentsCardWrapper>
          <BoughtContentsCard />
        </BoughtContentsCardWrapper>
        <AdContainer>
          {ads && ads.length > 0
            ? ads.map(ad => <Advertisement {...ad} />)
            : null}
        </AdContainer>
      </Container>
    );
  };
}

export default RightSidebar;
