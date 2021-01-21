import React, { PureComponent } from 'react';
import { ContentTypeKeys } from '../../molecules/ContentListSelector';
import { ContentListHeader } from '../../organisms/ContentListHeader';
import { ContentList, ContentExcerpt } from '../../organisms/ContentList';
import { Container } from './elements';
import { Purchase } from '../../../domain/entities';

import PurchaseModal from './PurchaseModal';

type Props = {
  userPoints: number;
  contentTitle: string;
  contents: { [key: string]: ContentExcerpt };
  selectedType: ContentTypeKeys;
  userId: string;
  purchases: { [key: string]: Purchase };
  onSelectContentType: (contentType: ContentTypeKeys) => void;
  onPressPurchase: (id: string) => void;
  onPressPurchasePoints: () => void;
  contentTypes: { [key: string]: string };
  navigateToManualContentViewer: (manualId: string) => void;
  isFetchingVideos: boolean;
  isFetchingProjectContents: boolean;
  isFetchingEAPrograms: boolean;
  isFetchingManuals: boolean;
  isPurchasingContent: boolean;
};

type State = {
  isPurchaseModalVisible: boolean;
  selectedContentId?: string;
};

export default class Contents extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isPurchaseModalVisible: false,
    };
  }

  componentDidUpdate(prevProps: Props) {
    const { isPurchasingContent } = this.props;

    if (
      prevProps.isPurchasingContent !== isPurchasingContent &&
      !isPurchasingContent
    ) {
      this.togglePurchaseModal();
    }
  }

  handleOnPressPurchase = (id: string) => {
    const { userId, purchases, onPressPurchase } = this.props;
    const purchasedItem = purchases[`${userId}_${id}`];
    if (purchasedItem) {
      onPressPurchase(id);
    } else {
      this.setState({ selectedContentId: id }, () =>
        this.togglePurchaseModal(),
      );
    }
  };

  handleOnPressPurchaseContent = () => {
    const { onPressPurchase } = this.props;
    const { selectedContentId } = this.state;

    if (selectedContentId) {
      onPressPurchase(selectedContentId);
    }
  };

  togglePurchaseModal = () =>
    this.setState({
      isPurchaseModalVisible: !this.state.isPurchaseModalVisible,
    });

  render = (): React.ReactElement => {
    const {
      onSelectContentType,
      contentTitle,
      contents,
      userPoints,
      onPressPurchasePoints,
      selectedType,
      purchases,
      userId,
      contentTypes,
      navigateToManualContentViewer,
      isFetchingVideos,
      isFetchingProjectContents,
      isFetchingEAPrograms,
      isFetchingManuals,
      isPurchasingContent,
    } = this.props;
    const { isPurchaseModalVisible, selectedContentId } = this.state;
    const contentsList = Object.values(contents);

    return (
      <Container>
        {isPurchaseModalVisible && selectedContentId ? (
          <PurchaseModal
            userPoints={userPoints}
            selectedPurchaseContent={contents[selectedContentId]}
            onPurchaseContent={this.handleOnPressPurchaseContent}
            onPurchasePoints={onPressPurchasePoints}
            onPressCancel={this.togglePurchaseModal}
            isPurchasingContent={isPurchasingContent}
          />
        ) : null}
        <ContentListHeader
          onPressSelect={onSelectContentType}
          contentTitle={contentTitle}
          selectedType={selectedType}
          contentTypes={contentTypes}
        />
        <ContentList
          contentType={selectedType}
          purchases={purchases}
          userId={userId}
          contents={contentsList}
          onPressPurchase={this.handleOnPressPurchase}
          navigateToManualContentViewer={navigateToManualContentViewer}
          isFetchingVideos={isFetchingVideos}
          isFetchingProjectsContents={isFetchingProjectContents}
          isFetchingEAPrograms={isFetchingEAPrograms}
          isFetchingManuals={isFetchingManuals}
        />
      </Container>
    );
  };
}
