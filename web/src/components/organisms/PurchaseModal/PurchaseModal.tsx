import React, { PureComponent } from 'react';
import Interweave from 'interweave';
import {
  Container,
  Body,
  ThumbnailContainer,
  ThumbnailWrapper,
  Points,
  BannerImg,
  ImageWrapper,
  TitleAndDescContainer,
  Title,
  Description,
} from './elements';
import ModalTitle from './ModalTitle';
import { Separator } from './modalTitleElements';
import Confirmation from './Confirmation';
import { EliteAndPrimeBanner, PrimeOnlyBanner } from '../../atoms/Icons';
import { PreviewCardParams } from '../../organisms/MovieItem/types';
import { paths } from '../../../constants/routes/urls';

type Props = {
  onPressCancel: () => void;
  onPressBuy: () => void;
  isRestricted: boolean;
  cardData: PreviewCardParams;
  totalPoints: number;
  isPurchasingContent?: boolean;
};

class PurchaseModal extends PureComponent<Props> {
  getBanner = (): React.ReactNode => {
    const {
      cardData: { tags },
    } = this.props;

    if (!tags) {
      return null;
    } else if (!tags.regularContent && tags.eliteContent && tags.primeContent) {
      return (
        <BannerImg>
          <EliteAndPrimeBanner />
        </BannerImg>
      );
    } else if (
      !tags.regularContent &&
      !tags.eliteContent &&
      tags.primeContent
    ) {
      return (
        <BannerImg>
          <PrimeOnlyBanner />
        </BannerImg>
      );
    }

    return null;
  };

  gotoPurchasePoints = () => {
    window.location.href = paths.purchasePoints;
  };

  render = (): React.ReactElement => {
    const {
      onPressBuy,
      onPressCancel,
      isRestricted,
      cardData,
      totalPoints,
      isPurchasingContent,
    } = this.props;

    return (
      <Container>
        <ModalTitle />
        <Body>
          <ThumbnailContainer>
            <ImageWrapper>
              {this.getBanner()}
              <ThumbnailWrapper
                src={cardData.thumbnailURL}
                alt={cardData.title}
              />
            </ImageWrapper>
            <Points>{cardData.points}pt</Points>
          </ThumbnailContainer>
          <TitleAndDescContainer>
            <Title>{cardData.title}</Title>
            <Description>
              <Interweave content={cardData.description} />
            </Description>
          </TitleAndDescContainer>
        </Body>
        <Separator />
        <Confirmation
          onPressBuy={onPressBuy}
          onPressCancel={onPressCancel}
          hasError={isRestricted}
          cost={cardData.points}
          totalPoints={totalPoints}
          isPurchasingContent={isPurchasingContent}
          gotoPurchasePoints={this.gotoPurchasePoints}
        />
      </Container>
    );
  };
}

export default PurchaseModal;
