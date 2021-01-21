import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PreviewCardParams } from '../../organisms/MovieItem/types';
import { BoughtContentTypes } from '../../organisms/BoughtContentsHeader/types';
import { BoughtContentsTemplate } from '../../templates/BoughtContents';
import { Purchase } from '../../../domain/entities';
import { words } from '../../../constants';
import { paths } from '../../../constants/routes/urls';

const CONTENT_TYPES = {
  videos: words.boughtContentsHeaders.videos,
  projectContents: words.boughtContentsHeaders.projectContents,
};

type Props = {
  fetchPurchasedVideosAndProjects: (userId: string) => void;
  purchasedVideosAndProjects: {
    videos: Array<PreviewCardParams>;
    projectContents: Array<PreviewCardParams>;
  };
  userId: string;
  purchases: { [key: string]: Purchase };
  isFetching: boolean;
  fetchPurchases: (userId: string) => void;
} & RouteComponentProps;

type State = {
  contentTypeKey: BoughtContentTypes;
};

export default class BoughtContents extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      contentTypeKey: 'videos',
    };
  }

  componentWillMount() {
    const { fetchPurchases, userId } = this.props;

    fetchPurchases(userId);
  }

  componentDidMount() {
    const { userId, fetchPurchasedVideosAndProjects } = this.props;

    fetchPurchasedVideosAndProjects(userId);
  }

  setContentTypeKey = (contentTypeKey: BoughtContentTypes) => {
    this.setState({
      contentTypeKey,
    });
  };

  navigateToContentViewer = (previewCard: PreviewCardParams) => {
    const { purchases } = this.props;

    Object.keys(purchases).forEach(purchaseKey => {
      const purchased = purchases[purchaseKey];
      const refId = purchased.ref.split('/')[1];

      if (refId === previewCard.id) {
        this.props.history.push({
          pathname: paths.contentsView,
          state: {
            purchase: purchased,
          },
        });
      }
    });
  };

  render = (): React.ReactElement => {
    const { contentTypeKey } = this.state;
    const { purchasedVideosAndProjects, isFetching } = this.props;

    return (
      <BoughtContentsTemplate
        title={words.purchasedItems}
        contentTypes={CONTENT_TYPES}
        selectedType={contentTypeKey}
        onSelectContentType={this.setContentTypeKey}
        data={purchasedVideosAndProjects[contentTypeKey]}
        onPressCard={this.navigateToContentViewer}
        isFetching={isFetching}
      />
    );
  };
}
