import React, { PureComponent } from 'react';
import { Button } from '../../atoms/Button';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { PreviewCard } from '../../molecules/PreviewCard';
import { Purchase } from '../../../domain/entities';
import { RecommendedItemTitles } from '../../templates/MyPage/content/types';
import { RecommendedVideos, RecommendedTopics, File } from '../../atoms/Icons';
import {
  Container,
  TitleContainer,
  Title,
  LeftContainer,
  ButtonContainer,
  PreviewContainer,
  MovieItemCard,
  RightContainer,
  IconWrapper,
  LoadingWrapper,
  HideFeatureContainer,
  HideFeature,
  HideFeatureLabel,
} from './elements';
import { PreviewCardParams } from './types';
import { words } from '../../../constants';

const Icons: { [key: string]: React.ReactElement } = {
  recommendedVideos: (
    <IconWrapper width={28} height={26}>
      <RecommendedVideos />
    </IconWrapper>
  ),
  recommendedTopics: (
    <IconWrapper width={24} height={31}>
      <RecommendedTopics />
    </IconWrapper>
  ),
  recommendedEA: (
    <IconWrapper width={17} height={21}>
      <File />
    </IconWrapper>
  ),
};

export type IconKeys =
  | 'recommendedVideos'
  | 'recommendedTopics'
  | 'recommendedEA';

type Props = {
  title: string;
  iconKey: IconKeys;
  previewCardData: Array<PreviewCardParams>;
  handleOnPress: (key: IconKeys) => void;
  onPressCard: (
    card: PreviewCardParams,
    contentType: keyof RecommendedItemTitles,
  ) => void;
  contentType: keyof RecommendedItemTitles;
  userId: string;
  purchases?: { [key: string]: Purchase };
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isFetching: false as boolean,
};

class MovieItem extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  onPressSeeMore = () => {
    const { iconKey, handleOnPress } = this.props;

    handleOnPress(iconKey);
  };

  onPressTileCard = (card: PreviewCardParams) => {
    const { contentType, onPressCard } = this.props;

    onPressCard(card, contentType);
  };

  checkCardItem = (itemId: string) => {
    const { userId, purchases } = this.props;
    const itemRendered = `${userId}_${itemId}`;
    return !!purchases && !!purchases[itemRendered];
  };

  render = (): React.ReactElement => {
    const {
      title,
      iconKey,
      previewCardData,
      isFetching,
      contentType,
    } = this.props;

    return (
      <MovieItemCard>
        {isFetching ? (
          <LoadingWrapper>
            <LoadingIndicator />
          </LoadingWrapper>
        ) : (
          <Container>
            <TitleContainer>
              <LeftContainer>
                {Icons[iconKey]}
                <Title>{title}</Title>
              </LeftContainer>
              {/* TODO: Remove conditional after 1st deploy */}
              {contentType === 'recommendedPastVideos' && (
                <RightContainer>
                  <ButtonContainer>
                    <Button
                      onPress={this.onPressSeeMore}
                      title="もっと見る"
                      theme="primary"
                      textSize="14px"
                      fontWeight="bold"
                      disabled={previewCardData.length === 0}
                    />
                  </ButtonContainer>
                </RightContainer>
              )}
            </TitleContainer>
            {/* TODO: Remove ternary operator. Only render PreviewContainer after 1st deploy. */}
            {contentType === 'recommendedPastVideos' ? (
              <PreviewContainer>
                {previewCardData.length > 0
                  ? previewCardData.map(data => (
                      <PreviewCard
                        imageSource={data.thumbnailURL}
                        title={data.title}
                        points={data.points}
                        key={data.thumbnailURL}
                        tags={data.tags}
                        id={data.id}
                        description={data.description}
                        onPressCard={this.onPressTileCard}
                        purchased={this.checkCardItem(data.id)}
                      />
                    ))
                  : words.noPurchasedContent}
              </PreviewContainer>
            ) : (
              <HideFeatureContainer>
                <HideFeature>
                  <HideFeatureLabel>現在準備中となります。</HideFeatureLabel>
                  <HideFeatureLabel>
                    公開まで少々お待ちください。
                  </HideFeatureLabel>
                </HideFeature>
              </HideFeatureContainer>
            )}
          </Container>
        )}
      </MovieItemCard>
    );
  };
}

export default MovieItem;
