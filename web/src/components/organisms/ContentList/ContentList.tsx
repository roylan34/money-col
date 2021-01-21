import React, { PureComponent } from 'react';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { ContentListItem } from '../../molecules/ContentListItem';
import { ContentTypeKeys } from '../../molecules/ContentListSelector';
import {
  Container,
  Message,
  LoadingWrapper,
  HideFeature,
  HideFeatureLabel,
} from './elements';
import { Purchase } from '../../../domain/entities';

export type ContentPreview = {
  id: string;
  title: string;
  description: string;
  points: number;
  thumbnailURL: string;
  tags: {
    showOnMyPage: boolean;
    primeContent: boolean;
    eliteContent: boolean;
    regularContent: boolean;
  };
  isRestricted: boolean;
};

type Props = {
  contents: Array<ContentPreview>;
  userId: string;
  purchases: { [key: string]: Purchase };
  onPressPurchase: (id: string) => void;
  contentType: ContentTypeKeys;
  navigateToManualContentViewer: (manualId: string) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isFetchingVideos: false as boolean,
  isFetchingProjectsContents: false as boolean,
  isFetchingEAPrograms: false as boolean,
  isFetchingManuals: false as boolean,
};

export default class ContentList extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  handleOnPressPurchase = (id: string) => {
    const { onPressPurchase } = this.props;
    onPressPurchase(id);
  };

  getIsFetching = (): { [key in ContentTypeKeys]: boolean } => {
    const {
      isFetchingVideos,
      isFetchingProjectsContents,
      isFetchingEAPrograms,
      isFetchingManuals,
    } = this.props;

    return {
      pastVideos: isFetchingVideos,
      pastProjectVideo: isFetchingProjectsContents,
      eaProgram: isFetchingEAPrograms,
      manualList: isFetchingManuals,
    };
  };

  render = (): React.ReactElement => {
    const {
      contents,
      purchases,
      userId,
      contentType,
      navigateToManualContentViewer,
    } = this.props;
    const isFetchingContentTypeMap = this.getIsFetching();

    return (
      <Container className="content-list">
        {isFetchingContentTypeMap[contentType] ? (
          <LoadingWrapper>
            <LoadingIndicator />
          </LoadingWrapper>
        ) : // TODO: Remove this condition after 1st deploy
        contentType === 'pastVideos' ? (
          contents && contents.length > 0 ? (
            contents.map(({ id, ...content }) => (
              <ContentListItem
                {...content}
                key={id}
                id={id}
                buttonTheme={
                  purchases && purchases[`${userId}_${id}`]
                    ? 'inverse'
                    : 'primary'
                }
                onPressPurchase={() => this.handleOnPressPurchase(id)}
                // isManualType={contentType === 'manualList'}
                navigateToManualContentViewer={navigateToManualContentViewer}
              />
            ))
          ) : (
            <Message>Insert loading/empty/error screen here.</Message>
          )
        ) : (
          <HideFeature>
            <HideFeatureLabel>現在準備中となります。</HideFeatureLabel>
            <HideFeatureLabel>公開まで少々お待ちください。</HideFeatureLabel>
          </HideFeature>
        )}
      </Container>
    );
  };
}
