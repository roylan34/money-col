import React, { PureComponent } from 'react';
import Interweave from 'interweave';
import { Button } from '../../atoms/Button';
import {
  Container,
  Image,
  MainItemDetails,
  TextContainer,
  Title,
  Description,
  PurchaseContainer,
  PointsContainer,
  Points,
  ButtonWrapper,
  Divider,
  HiddenTouchable,
  ImageWrapper,
  BannerImg,
} from './elements';
import { words } from '../../../constants';
import { EliteAndPrimeBanner, PrimeOnlyBanner } from '../../atoms/Icons';

type Props = {
  title: string;
  description: string;
  points: number;
  thumbnailURL: string;
  buttonTheme?: 'primary' | 'inverse';
  onPressPurchase: () => void;
  tags: {
    primeContent: boolean;
    eliteContent: boolean;
    regularContent: boolean;
  };
  isManualType?: boolean;
  id: string;
  navigateToManualContentViewer: (manualId: string) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isRestricted: false as false | true,
};

export default class ContentListItem extends PureComponent<
  Props & DefaultProps
> {
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

  onPressManual = () => {
    const { id, navigateToManualContentViewer } = this.props;
    navigateToManualContentViewer(id);
  };

  render = (): React.ReactElement => {
    const {
      title,
      description,
      points,
      thumbnailURL,
      onPressPurchase,
      buttonTheme = 'primary',
      isRestricted,
      isManualType = false,
    } = this.props;

    return (
      <Container className="content-list-item">
        <ImageWrapper>
          {this.getBanner()}
          <Image src={thumbnailURL} />
        </ImageWrapper>
        <MainItemDetails>
          <TextContainer>
            <Title>{title}</Title>
            <Description>
              <Interweave content={description} />
            </Description>
          </TextContainer>
          {!isManualType ? (
            <PurchaseContainer>
              <PointsContainer>
                <Points>{points}</Points>
                <Points>pt</Points>
              </PointsContainer>
              <ButtonWrapper>
                <Button
                  onPress={onPressPurchase}
                  title={
                    isRestricted
                      ? words.unavailable
                      : buttonTheme === 'primary'
                      ? words.buy
                      : words.browse
                  }
                  theme={buttonTheme}
                />
              </ButtonWrapper>
            </PurchaseContainer>
          ) : null}
        </MainItemDetails>
        <Divider />
        <HiddenTouchable
          onClick={isManualType ? this.onPressManual : onPressPurchase}
          isManualType={isManualType}
        />
      </Container>
    );
  };
}
