import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Ranks } from '../../atoms/ProgressBar/types';
import { News } from '../../molecules/NewsList/types';
import { IconKeyTypes } from '../../organisms/MovieItem';
import { SubmitValues as QuestionValues } from '../../organisms/AskInstructorContent/types';
import { ContentTypeKeys } from '../../molecules/ContentListSelector';
import { PreviewCardParams } from '../../organisms/MovieItem/types';
import { MyPage } from '../../templates/MyPage';
import { paths } from '../../../constants/routes/urls';
import { PurchaseCollectionKey } from '../../templates/MyPage/content/types';
import { UserRankTitle, Purchase } from '../../../domain/entities';
import { PURCHASE_CONTENT_REQUEST } from '../../../redux/user/actionType';

type Props = {
  name: string;
  rank: Ranks;
  points: number;
  percentage: number;
  pointsNeeded: number;
  recommendedMoviesPreview: {
    recommendedPastVideos: Array<PreviewCardParams>;
    recommendedTopics: Array<PreviewCardParams>;
    recommendedEA: Array<PreviewCardParams>;
  };
  newsList: Array<News>;
  instructors: Array<{ id: string; name: string }>;
  hasLoggedOut: boolean;
  userId: string;
  hasPurchased: boolean;
  purchasedItem: Purchase;
  purchases: { [key: string]: Purchase };
  fetchRecommendedFirstRow: () => void;
  fetchRecommendedSecondRow: () => void;
  fetchRecommendedThirdRow: () => void;
  fetchNewsList: () => void;
  fetchInstructorsList: () => void;
  purchaseContentByKey: (
    userId: string,
    collectionKey: PurchaseCollectionKey,
    itemId: string,
    rank: UserRankTitle,
  ) => void;
  fetchPurchases: (userId: string) => void;
  logout: () => void;
  dismissRequestsOfUser: (actionType: string) => void;
  addOrUpdateConversation: (
    params: {
      files?: Array<File>;
      title?: string;
      content: string;
      userId: string;
      instructorId: string;
      senderId: string;
    },
    rank: UserRankTitle,
  ) => void;
  discount: number;
  score: number;
  isFetchingRecommendedVideos: boolean;
  isFetchingRecommendedProjects: boolean;
  isFetchingRecommendedEAPrograms: boolean;
  isPurchasingContent: boolean;
  isFetchingNews: boolean;
  isSendingMsg: boolean;
  hasSeenWelcomeToast?: boolean;
  setHasSeenWelcome: (
    id: string,
    params: { hasSeenWelcomeToast: boolean },
  ) => void;
  lastGiveawayInfo?: {
    points: number;
    timestamp: number;
  };
} & RouteComponentProps<
  {},
  {},
  {
    [key: string]: string | boolean | Purchase;
  }
>;

export default class HomePage extends PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    const {
      history: {
        location: { state },
      },
      logout,
      hasLoggedOut,
      hasPurchased,
      purchasedItem,
      dismissRequestsOfUser,
    } = this.props;

    if (prevProps.hasLoggedOut !== hasLoggedOut && hasLoggedOut) {
      this.props.history.replace(paths.login);
    }

    //@ts-ignore
    if (state && state.shouldLogout) {
      logout();
    }

    if (
      prevProps.hasPurchased !== hasPurchased &&
      hasPurchased &&
      prevProps.purchasedItem !== purchasedItem
    ) {
      dismissRequestsOfUser(PURCHASE_CONTENT_REQUEST);
    }
  }

  componentDidMount() {
    const {
      fetchPurchases,
      userId,
      setHasSeenWelcome,
      hasSeenWelcomeToast,
    } = this.props;
    this.fetchPageContent();
    fetchPurchases(userId);
    if (!hasSeenWelcomeToast) {
      setHasSeenWelcome(userId, { hasSeenWelcomeToast: true });
    }
  }

  fetchPageContent = () => {
    this.fetchRecommendedItems();
    // this.props.fetchNewsList();
    this.props.fetchInstructorsList();
  };

  fetchRecommendedItems = () => {
    const {
      fetchRecommendedFirstRow,
      fetchRecommendedSecondRow,
      fetchRecommendedThirdRow,
    } = this.props;

    fetchRecommendedFirstRow();
    fetchRecommendedSecondRow();
    fetchRecommendedThirdRow();
  };

  handleOnPressSeeMore = (key: IconKeyTypes) => {
    this.props.history.push({
      pathname: paths.contents,
      state: {
        defaultContentType: this.getContentTypeKey(key),
      },
    });
  };

  getContentTypeKey = (key: IconKeyTypes): ContentTypeKeys => {
    switch (key) {
      case 'recommendedVideos':
        return 'pastVideos';
      case 'recommendedTopics':
        return 'pastProjectVideo';
      case 'recommendedEA':
        return 'eaProgram';
      default:
        return 'pastVideos';
    }
  };

  onClickCall = () => {
    // Handle Call
  };

  //For now redirect to external bigmac site
  onClickMail = () => {
    // window.open(`${process.env.REACT_APP_WP_ENDPOINT}/contact`, '_blank');
    this.props.history.push({
      pathname: paths.mailBox,
      state: { isFromContactInfo: true },
    });
  };

  onPurchaseTile = (contentType: PurchaseCollectionKey, itemId: string) => {
    const { purchaseContentByKey, userId, rank } = this.props;

    purchaseContentByKey(userId, contentType, itemId, rank);
  };

  navigateToContentViewer = (purchased: Purchase) => {
    this.props.history.push({
      pathname: paths.contentsView,
      state: {
        purchase: purchased,
      },
    });
  };

  navigateToContentsFromLeftSidebar = () => {
    this.props.history.push({
      pathname: paths.contents,
      state: {
        defaultContentType: 'manualList',
      },
    });
  };

  handleOnSubmitQuestion = (question: QuestionValues) => {
    const { file, instructor, title, description } = question;
    const { addOrUpdateConversation, userId, rank } = this.props;

    addOrUpdateConversation(
      {
        files: file,
        userId,
        senderId: userId,
        instructorId: instructor,
        content: description,
        title,
      },
      rank,
    );
  };

  navigateToPurchasePoints = () => {
    this.props.history.push(paths.purchasePoints);
  };

  render = (): React.ReactElement => {
    const {
      name,
      rank,
      points,
      pointsNeeded,
      percentage,
      recommendedMoviesPreview,
      // newsList,
      instructors,
      purchases,
      userId,
      score,
      discount,
      isFetchingRecommendedVideos,
      isFetchingRecommendedProjects,
      isFetchingRecommendedEAPrograms,
      isPurchasingContent,
      // isFetchingNews,
      isSendingMsg,
      hasSeenWelcomeToast,
      purchasedItem,
      history: { location },
      lastGiveawayInfo,
    } = this.props;

    const isFromContentView =
      location.state && location.state.prevPath === paths.contentsView;
    return (
      <MyPage
        profileCard={{ name, percentage, rank, pointsNeeded }}
        points={points}
        // newsData={newsList}
        linkForPurchasing={paths.purchasePoints}
        recommendedMoviesPreview={recommendedMoviesPreview}
        instructors={instructors}
        purchases={purchases}
        userId={userId}
        onPressSeeMore={this.handleOnPressSeeMore}
        onSubmitQuestion={this.handleOnSubmitQuestion}
        onPurchaseTile={this.onPurchaseTile}
        navigateToContentViewer={this.navigateToContentViewer}
        navigateToContents={this.navigateToContentsFromLeftSidebar}
        discount={discount}
        score={score}
        isFetchingRecommendedVideos={isFetchingRecommendedVideos}
        isFetchingRecommendedProjects={isFetchingRecommendedProjects}
        isFetchingRecommendedEAPrograms={isFetchingRecommendedEAPrograms}
        isPurchasingContent={isPurchasingContent}
        // isFetchingNews={isFetchingNews}
        isSendingMsg={isSendingMsg}
        isFromContentView={isFromContentView}
        hasSeenWelcomeToast={hasSeenWelcomeToast}
        purchasedItem={purchasedItem}
        onClickMail={this.onClickMail}
        lastGiveawayInfo={lastGiveawayInfo}
        navigateToPurchasePoints={this.navigateToPurchasePoints}
      />
    );
  };
}
