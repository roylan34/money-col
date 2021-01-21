import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PDFViewer } from '../../organisms/PDFViewer';
import { VideoContent } from '../../templates/VideoContent';
import {
  Purchase,
  VideoLecture,
  ProjectContent,
  Manual,
} from '../../../domain/entities';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { Toast } from '../../molecules/Toast';
import { words } from '../../../constants';
import { getManual } from './actions';
import { LoadingContainer } from '../../templates/BoughtContents/elements';

type ContentCollectionKeys =
  | 'manuals'
  | 'EAPrograms'
  | 'videoLectures'
  | 'projectContents';

type Props = {
  videos: { [key: string]: VideoLecture };
  projectContents: { [key: string]: ProjectContent };
  manuals: { [key: string]: Manual };
  getVideoContent: (id: string) => void;
  getProjectContent: (id: string) => void;
  getManual: (id: string) => void;
} & RouteComponentProps<
  {},
  {},
  { purchase: Purchase & { pointRefund?: number }; manualId: string }
>;

export default class ContentViewPage extends PureComponent<Props> {
  componentDidMount() {
    const {
      location: { state },
    } = this.props;

    if (state.manualId) {
      this.fetchContent('manuals', state.manualId);
    } else if (!state.purchase) {
      // should be replaced with correct error screen once available
    } else {
      const [collectionKey, contentId] = this.getValues(state.purchase);

      this.fetchContent(collectionKey, contentId);
    }
  }

  getValues = (purchase: Purchase): [ContentCollectionKeys, string] => {
    return purchase.ref.split('/') as [ContentCollectionKeys, string];
  };

  fetchContent = (collectionKey: ContentCollectionKeys, contentId: string) => {
    const {
      getVideoContent,
      videos,
      getProjectContent,
      projectContents,
      manuals,
    } = this.props;

    switch (collectionKey) {
      case 'videoLectures': {
        if (!videos[contentId]) {
          getVideoContent(contentId);
        }
        break;
      }
      case 'projectContents': {
        if (!projectContents[contentId]) {
          getProjectContent(contentId);
        }
        break;
      }
      case 'manuals': {
        if (!manuals[contentId]) {
          getManual(contentId);
        }
        break;
      }
      default:
    }
  };

  renderViewer = (purchase?: Purchase, manualId?: string): JSX.Element => {
    if (manualId) {
      const { manuals } = this.props;
      const manual = manuals[manualId];

      if (!manual) {
        return this.loadingIndicator();
      }

      return <PDFViewer fileURL={manual.fileURL} />;
    } else if (!purchase) {
      return <div>Error</div>;
    } else {
      const { videos, projectContents } = this.props;
      const [collectionKey, contentId] = this.getValues(purchase);
      switch (collectionKey) {
        case 'videoLectures': {
          const video = videos[contentId];
          if (!video) {
            return this.loadingIndicator();
          }
          return (
            <VideoContent
              title={video.title}
              description={video.description}
              fileURL={video.fileURL}
            />
          );
        }
        case 'projectContents': {
          const projectContent = projectContents[contentId];
          if (!projectContent) {
            return this.loadingIndicator();
          }
          return <PDFViewer fileURL={projectContent.fileURL} />;
        }
        default:
          return <div>There is no viewer for this file type yet.</div>;
      }
    }
  };

  loadingIndicator = (): React.ReactElement => (
    <LoadingContainer>
      <LoadingIndicator />
    </LoadingContainer>
  );

  render = (): React.ReactElement => {
    const {
      location: { state },
    } = this.props;

    return (
      <React.Fragment>
        {state.purchase && state.purchase.pointRefund ? (
          <Toast
            type="reward"
            title={`${state.purchase.pointRefund}${words.pointsWereRefunded}`}
            message=""
          />
        ) : null}

        {this.renderViewer(state.purchase, state.manualId)}
      </React.Fragment>
    );
  };
}
