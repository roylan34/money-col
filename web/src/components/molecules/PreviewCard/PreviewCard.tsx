import React, { PureComponent } from 'react';
import {
  PreviewCardContainer,
  PreviewWrapper,
  PreviewImage,
  Title,
  Points,
  BottomContainer,
  ImageWrapper,
  BannerImg,
} from './elements';
import { PrimeOnlyBanner, EliteAndPrimeBanner } from '../../atoms/Icons';
import { PreviewCardParams } from '../../organisms/MovieItem/types';

type Props = {
  imageSource: string;
  title: string;
  description: string;
  points: number;
  id: string;
  tags: {
    showOnMyPage: boolean;
    primeContent: boolean;
    eliteContent: boolean;
    regularContent: boolean;
  };
  purchased?: boolean;
  onPressCard: (card: PreviewCardParams) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'default' as 'default' | 'bought',
};

class PreviewCard extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;
  getBanner = (): React.ReactNode => {
    const { tags } = this.props;

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

  render = (): React.ReactElement => {
    const {
      title,
      points,
      imageSource,
      onPressCard,
      id,
      description,
      tags,
      theme,
      purchased,
    } = this.props;

    return (
      <PreviewCardContainer
        onClick={() =>
          onPressCard({
            title,
            points,
            id,
            description,
            tags,
            thumbnailURL: imageSource,
          })
        }>
        <PreviewWrapper isBought={theme === 'bought'}>
          <ImageWrapper isBought={theme === 'bought'}>
            {this.getBanner()}
            <PreviewImage src={imageSource} alt="Preview Image" />
          </ImageWrapper>
          <BottomContainer>
            <Title>{title}</Title>
            {theme === 'default' && (
              <Points>{!purchased ? `${points}pt` : `購入済み`}</Points>
            )}
          </BottomContainer>
        </PreviewWrapper>
      </PreviewCardContainer>
    );
  };
}

export default PreviewCard;
