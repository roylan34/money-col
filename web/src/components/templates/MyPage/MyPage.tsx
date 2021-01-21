import React, { PureComponent } from 'react';
import { Advertisement } from '../../atoms/Advertisement';
// import { NewsList } from '../../molecules/NewsList';
// import { News } from '../../molecules/NewsList/types';
import { AskInstructorButton } from '../../molecules/AskInstructorButton';
import { AskInstructorContent } from '../../organisms/AskInstructorContent';
import { SubmitValues as QuestionValues } from '../../organisms/AskInstructorContent/types';
import { RightSidebar } from '../../organisms/RightSidebar';
import { LeftSidebar } from '../../organisms/LeftSidebar';
import { ProfileCardParams } from '../../organisms/RightSidebar/types';
import { MovieItem, IconKeyTypes } from '../../organisms/MovieItem';
import { PreviewCardParams } from '../../organisms/MovieItem/types';
import { PurchaseModal } from '../../organisms/PurchaseModal';
import { ContactInfoBanner } from '../../organisms/ContactInfoBanner';
import { AdvertisementModel, Purchase } from '../../../domain/entities';
import { CONTENT } from './content';
import { RecommendedItemTitles, PurchaseCollectionKey } from './content/types';
import {
  Container,
  MainContentsContainer,
  RightSidebarContainer,
  LeftSidebarContainer,
  AskInstuctorContainer,
  AdsContainer,
  Cover,
  PurchaseModalWrapper,
  // NewsLoadingWrapper,
} from './elements';
import { getPurchaseCollectionKey } from './utils';
import { Toast } from '../../molecules/Toast';
import { words } from '../../../constants';

type Props = {
  // newsData: Array<News>;
  profileCard: ProfileCardParams;
  points: number;
  linkForPurchasing: string;
  ads?: Array<AdvertisementModel>;
  recommendedMoviesPreview: {
    recommendedPastVideos: Array<PreviewCardParams>;
    recommendedTopics: Array<PreviewCardParams>;
    recommendedEA: Array<PreviewCardParams>;
  };
  instructors: Array<{ id: string; name: string }>;
  purchases: { [key: string]: Purchase };
  userId: string;
  discount?: number;
  score?: number;
  isFetchingRecommendedVideos: boolean;
  isFetchingRecommendedProjects: boolean;
  isFetchingRecommendedEAPrograms: boolean;
  isPurchasingContent: boolean;
  // isFetchingNews: boolean;
  isSendingMsg: boolean;
  isFromContentView: boolean;
  hasSeenWelcomeToast?: boolean;
  purchasedItem?: Purchase;
  onClickMail: () => void;
  lastGiveawayInfo?: {
    points: number;
    timestamp: number;
  };
  onPressSeeMore: (key: IconKeyTypes) => void;
  onSubmitQuestion: (values: QuestionValues) => void;
  onPurchaseTile: (contentType: PurchaseCollectionKey, itemId: string) => void;
  navigateToContentViewer: (purchased: Purchase) => void;
  navigateToContents: () => void;
  navigateToPurchasePoints: () => void;
};

type State = {
  isAskInstructorVisible: boolean;
  isPurchaseModalVisible: boolean;
  selectedCard: PreviewCardParams;
  contentType: keyof RecommendedItemTitles;
  toastTime?: number;
  toastTitle?: string;
};

export default class extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isAskInstructorVisible: false,
      isPurchaseModalVisible: false,
      selectedCard: {
        thumbnailURL: '',
        title: '',
        points: 0,
        id: '',
        description: '',
        tags: {
          showOnMyPage: false,
          primeContent: false,
          eliteContent: false,
          regularContent: false,
        },
      },
      contentType: 'recommendedPastVideos',
      toastTime: 0,
      toastTitle: '',
    };
  }

  componentDidMount() {
    const { hasSeenWelcomeToast } = this.props;
    if (!hasSeenWelcomeToast) {
      this.setToastState(words.welcomeToast);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const {
      score,
      discount,
      purchasedItem,
      navigateToContentViewer,
      isPurchasingContent,
      isFromContentView,
      lastGiveawayInfo,
    } = this.props;
    const prevPurchased = prevProps.purchasedItem
      ? prevProps.purchasedItem.createdAt
      : null;
    const isPurchaseListUpdated =
      prevPurchased !== purchasedItem &&
      purchasedItem &&
      purchasedItem.createdAt;

    if (
      isPurchaseListUpdated &&
      discount &&
      typeof score === 'number' &&
      !isFromContentView
    ) {
      this.setToastState(`${discount}${words.pointsWereRefunded}`, () =>
        purchasedItem ? navigateToContentViewer(purchasedItem) : {},
      );
    }

    if (
      prevProps.isPurchasingContent !== isPurchasingContent &&
      !isPurchasingContent
    ) {
      this.setState({ isPurchaseModalVisible: false });
    }

    if (
      prevProps.lastGiveawayInfo &&
      prevProps.lastGiveawayInfo.points !== lastGiveawayInfo?.points &&
      lastGiveawayInfo?.points &&
      lastGiveawayInfo?.points > 0 &&
      prevProps.lastGiveawayInfo.timestamp !== lastGiveawayInfo?.timestamp &&
      lastGiveawayInfo?.timestamp
    ) {
      this.setToastState(
        `運営より${lastGiveawayInfo?.points}pt配布されました。`,
      );
    }
  }

  setToastState = (toastTitle: string, callback?: () => void) => {
    this.setState(
      () => ({ toastTime: Date.now(), toastTitle }),
      () => {
        if (callback) {
          callback();
        }
      },
    );
  };

  getIsRestricted = (selectedCard: PreviewCardParams): boolean => {
    const { tags } = selectedCard;
    const {
      profileCard: { rank },
    } = this.props;

    if (rank === 'レギュラー') {
      if (tags.regularContent) return false;

      return true;
    } else if (rank === 'エリート') {
      if (tags.eliteContent) return false;

      return true;
    } else if (rank === 'プライム') {
      if (tags.primeContent) return false;

      return true;
    }

    return false;
  };

  toggleAskInstructorForm = () =>
    this.setState((prevState: State) => ({
      isAskInstructorVisible: !prevState.isAskInstructorVisible,
    }));

  onOpenPurchaseModal = (
    selectedCard: PreviewCardParams,
    contentType: keyof RecommendedItemTitles,
  ) => {
    const { purchases, userId, navigateToContentViewer } = this.props;
    const purchasedItem = purchases[`${userId}_${selectedCard.id}`];

    if (!purchases || !purchasedItem) {
      this.setState({ selectedCard, contentType }, () =>
        this.setState({ isPurchaseModalVisible: true }),
      );
    } else {
      navigateToContentViewer(purchasedItem);
    }
  };

  onPressPurchaseTile = () => {
    const { selectedCard, contentType } = this.state;
    const { onPurchaseTile } = this.props;

    onPurchaseTile(getPurchaseCollectionKey[contentType], selectedCard.id);
  };

  onClosePurchaseModal = () => {
    this.setState({ isPurchaseModalVisible: false });
  };

  onPressBuy = () => {
    this.onPressPurchaseTile();
  };

  renderMovieItemCards = (): React.ReactNode => {
    const {
      recommendedMoviesPreview,
      onPressSeeMore,
      isFetchingRecommendedVideos,
      isFetchingRecommendedProjects,
      isFetchingRecommendedEAPrograms,
      userId,
      purchases,
    } = this.props;
    const recommendItemEntries = Object.entries(
      recommendedMoviesPreview,
    ) as Array<[keyof RecommendedItemTitles, Array<PreviewCardParams>]>;
    const isFetchingContentType: { [key: string]: boolean } = {
      recommendedPastVideos: isFetchingRecommendedVideos,
      recommendedTopics: isFetchingRecommendedProjects,
      recommendedEA: isFetchingRecommendedEAPrograms,
    };

    return recommendItemEntries.map(
      (data: [keyof RecommendedItemTitles, Array<PreviewCardParams>], idx) => (
        <MovieItem
          key={idx}
          {...CONTENT.recommendedItemTitles[data[0]]}
          previewCardData={data[1]}
          handleOnPress={onPressSeeMore}
          onPressCard={this.onOpenPurchaseModal}
          contentType={data[0]}
          isFetching={isFetchingContentType[data[0]]}
          userId={userId}
          purchases={purchases}
        />
      ),
    );
  };

  // Note: This is temporary; ads will be from a third-party provider
  renderAds = () => {
    const { ads } = this.props;

    return ads && ads.length > 0 ? (
      <AdsContainer>
        {ads.map(ad => (
          <Advertisement {...ad} />
        ))}
      </AdsContainer>
    ) : null;
  };

  onPressSeeMoreLeftSidebar = () => {
    const { navigateToContents } = this.props;

    navigateToContents();
  };

  // This should be removed after Dropdown component is refactored
  // This will fail if there are instructors with the same name
  handleOnSubmitQuestion = (values: QuestionValues) => {
    const { instructors, onSubmitQuestion } = this.props;
    const [{ id }] = instructors.filter(
      instructor => instructor.name === values.instructor,
    );
    onSubmitQuestion({ ...values, instructor: id });
  };

  renderToast = (title?: string, toastKey?: string | number) => {
    if (title && toastKey) {
      return (
        <Toast type="reward" title={title} message="" toastKey={toastKey} />
      );
    }
  };

  render = (): React.ReactElement => {
    const {
      // newsData,
      profileCard,
      points,
      linkForPurchasing,
      instructors,
      ads,
      isPurchasingContent,
      // isFetchingNews,
      isSendingMsg,
      onClickMail,
      navigateToPurchasePoints,
    } = this.props;
    const {
      isAskInstructorVisible,
      isPurchaseModalVisible,
      selectedCard,
      toastTitle,
      toastTime,
    } = this.state;
    const isRestricted = this.getIsRestricted(selectedCard);

    return (
      <>
        {this.renderToast(toastTitle, toastTime)}
        <Container>
          <AskInstuctorContainer>
            {isAskInstructorVisible ? (
              <AskInstructorContent
                instructors={instructors}
                onPressClose={this.toggleAskInstructorForm}
                onSubmit={this.handleOnSubmitQuestion}
                userPoints={points}
                isSendingMsg={isSendingMsg}
                navigateToPurchasePoints={navigateToPurchasePoints}
              />
            ) : (
              <AskInstructorButton onPress={this.toggleAskInstructorForm} />
            )}
          </AskInstuctorContainer>
          <RightSidebarContainer>
            <RightSidebar
              profileCard={profileCard}
              points={points}
              linkForPurchasing={linkForPurchasing}
              ads={ads}
            />
          </RightSidebarContainer>
          <LeftSidebarContainer>
            <LeftSidebar
              sidebarContentsList={CONTENT.leftSidebarContent}
              onPressSeeMore={this.onPressSeeMoreLeftSidebar}
            />
          </LeftSidebarContainer>
          <MainContentsContainer>
            {/* TODO: Uncomment fetching news */}
            {/* {isFetchingNews ? (
              <NewsLoadingWrapper>
                <LoadingIndicator />
              </NewsLoadingWrapper>
            ) : (
              <NewsList newsData={newsData} />
            )} */}
            {this.renderMovieItemCards()}
          </MainContentsContainer>
          {/* {this.renderAds()} */}
        </Container>
        <Cover isVisible={isPurchaseModalVisible}>
          <PurchaseModalWrapper>
            <PurchaseModal
              onPressCancel={this.onClosePurchaseModal}
              onPressBuy={this.onPressBuy}
              isRestricted={isRestricted}
              cardData={selectedCard}
              totalPoints={points}
              isPurchasingContent={isPurchasingContent}
            />
          </PurchaseModalWrapper>
        </Cover>
        <ContactInfoBanner
          onClickCall={() => console.log('onClick-call')}
          onClickMail={onClickMail}
        />
      </>
    );
  };
}
