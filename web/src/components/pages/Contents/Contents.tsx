import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Contents } from '../../templates/Contents';
import { ContentTypeKeys } from '../../molecules/ContentListSelector';
import { ContentExcerpt } from '../../organisms/ContentList';
import { FetchContentsDispatchProps } from './actions';
import { UserRankTitle, Purchase } from '../../../domain/entities';

import { words } from '../../../constants';
import { paths } from '../../../constants/routes/urls';

type ContentCollectionKeys =
  | 'manuals'
  | 'EAPrograms'
  | 'videoLectures'
  | 'projectContents';

type Props = {
  points: number;
  fetchVideoContents: (query?: FetchContentsDispatchProps) => void;
  fetchProjectContentsList: (query?: FetchContentsDispatchProps) => void;
  fetchManualContents: (query?: FetchContentsDispatchProps) => void;
  fetchEAProgramContents: (query?: FetchContentsDispatchProps) => void;
  videoContents: { [key: string]: ContentExcerpt };
  projectContents: { [key: string]: ContentExcerpt };
  manualContents: { [key: string]: ContentExcerpt };
  EAProgramContents: { [key: string]: ContentExcerpt };
  userId: string;
  rank: UserRankTitle;
  purchaseContentByKey: (
    userId: string,
    collectionKey: ContentCollectionKeys,
    itemId: string,
    rank: UserRankTitle,
  ) => void;
  successfulPurchaseTimeStamp: string;
  purchaseErrorTimestamp: string;
  purchaseError: string;
  purchase: Purchase;
  fetchPurchases: (userId: string) => void;
  purchases: { [key: string]: Purchase };
  isFetchingVideos: boolean;
  isFetchingProjectContents: boolean;
  isFetchingEAPrograms: boolean;
  isFetchingManuals: boolean;
  isPurchasingContent: boolean;
} & RouteComponentProps<
  {},
  {},
  {
    defaultContentType?: ContentTypeKeys;
    purchase?: Purchase;
    manualId?: string;
  }
>;

type State = {
  contentType: ContentTypeKeys;
};

export default class ContentsPage extends PureComponent<Props, State> {
  collectionKeys: {
    pastVideos: ContentCollectionKeys;
    pastProjectVideo: ContentCollectionKeys;
    manualList: ContentCollectionKeys;
    eaProgram: ContentCollectionKeys;
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      contentType: 'pastVideos',
    };

    this.collectionKeys = {
      pastVideos: 'videoLectures',
      pastProjectVideo: 'projectContents',
      manualList: 'manuals',
      eaProgram: 'EAPrograms',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const {
      location: { state },
      fetchPurchases,
      userId,
    } = this.props;

    fetchPurchases(userId);

    this.handleSelectContentType(
      state && state.defaultContentType
        ? state.defaultContentType
        : 'pastVideos',
    );
  }

  componentDidUpdate(prevProps: Props) {
    const prevSuccessTimeStamp = prevProps.successfulPurchaseTimeStamp;
    const prevErrorTimestamp = prevProps.purchaseErrorTimestamp;

    const {
      successfulPurchaseTimeStamp,
      purchaseErrorTimestamp,
      purchaseError,
      purchase,
    } = this.props;
    if (
      prevSuccessTimeStamp !== successfulPurchaseTimeStamp &&
      successfulPurchaseTimeStamp
    ) {
      this.props.history.push({
        pathname: paths.contentsView,
        state: {
          purchase,
        },
      });
    } else if (prevErrorTimestamp !== purchaseErrorTimestamp && purchaseError) {
      this.props.history.push('/temp-error');
    }
  }

  handleSelectContentType = (contentTypeKey: ContentTypeKeys) => {
    const {
      fetchVideoContents,
      // fetchManualContents,
      // fetchEAProgramContents,
      // fetchProjectContentsList,
    } = this.props;

    this.setState({ contentType: contentTypeKey }, () => {
      switch (contentTypeKey) {
        case 'pastVideos': {
          fetchVideoContents({
            where: [
              ['isPublished', '==', true],
              ['isDeleted', '==', false],
            ],
            orderBy: 'createdAt',
          });
          break;
        }
        // case 'pastProjectVideo': {
        //   fetchProjectContentsList({
        //     where: [
        //       ['isPublished', '==', true],
        //       ['isDeleted', '==', false],
        //     ],
        //     orderBy: 'createdAt',
        //   });
        //   break;
        // }
        // case 'manualList': {
        //   fetchManualContents({
        //     where: [
        //       ['isPublished', '==', true],
        //       ['isDeleted', '==', false],
        //     ],
        //     orderBy: 'createdAt',
        //   });
        //   break;
        // }
        // case 'eaProgram': {
        //   fetchEAProgramContents({
        //     where: [
        //       ['isPublished', '==', true],
        //       ['isDeleted', '==', false],
        //     ],
        //     orderBy: 'createdAt',
        //   });
        //   break;
        // }
        default:
      }
    });
  };

  handlePurchase = (contentId: string) => {
    const { purchaseContentByKey, userId, rank, purchases } = this.props;
    const { contentType } = this.state;
    const collectionKey = this.collectionKeys[contentType];
    const purchasedItem = purchases[`${userId}_${contentId}`];
    if (!purchases || !purchasedItem) {
      purchaseContentByKey(userId, collectionKey, contentId, rank);
    } else {
      this.props.history.push({
        pathname: paths.contentsView,
        state: {
          purchase: purchasedItem,
        },
      });
    }
  };

  onPressPurchasePoints = () => {
    this.props.history.push('/purchase-points');
  };

  navigateToContentManualViewer = (manualId: string) => {
    this.props.history.push({
      pathname: paths.contentsView,
      state: {
        manualId,
      },
    });
  };

  render = (): React.ReactElement => {
    const {
      points,
      videoContents,
      projectContents,
      manualContents,
      EAProgramContents,
      userId,
      purchases,
      isFetchingVideos,
      isFetchingProjectContents,
      isFetchingEAPrograms,
      isFetchingManuals,
      isPurchasingContent,
    } = this.props;
    const { contentType } = this.state;

    const contents = {
      pastVideos: videoContents,
      pastProjectVideo: projectContents,
      eaProgram: EAProgramContents,
      manualList: manualContents,
    };

    const contentTypes = {
      pastVideos: words.pastVideos,
      pastProjectVideo: words.pastProjectVideo,
      eaProgram: words.eaProgram,
      manualList: words.manualList,
    };

    return (
      <Contents
        userPoints={points}
        contentTitle={words[contentType]}
        contentTypes={contentTypes}
        contents={contents[contentType]}
        onSelectContentType={this.handleSelectContentType}
        onPressPurchase={this.handlePurchase}
        onPressPurchasePoints={this.onPressPurchasePoints}
        selectedType={contentType}
        userId={userId}
        purchases={purchases}
        navigateToManualContentViewer={this.navigateToContentManualViewer}
        isFetchingVideos={isFetchingVideos}
        isFetchingProjectContents={isFetchingProjectContents}
        isFetchingEAPrograms={isFetchingEAPrograms}
        isFetchingManuals={isFetchingManuals}
        isPurchasingContent={isPurchasingContent}
      />
    );
  };
}
