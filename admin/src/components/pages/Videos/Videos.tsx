import React, { PureComponent } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import { VideosTemplate } from '../../templates/VideosTemplate';
import {
  VideoItemRow,
  UploadAndUpdateValues,
} from '../../templates/VideosTemplate/types';
import { SubmitValues as FileDescValues } from '../../organisms/FileDescription/types';

type Props = {
  createVideoLecture: (
    videoParams: { file: File; metadata?: object },
    thumbnailParams: { file: File; metadata?: object },
    params: {
      title: string;
      description: string;
      points: number;
      lengthInMs: number;
      isPublished: boolean;
      tags: {
        showOnMyPage: boolean;
        primeContent: boolean;
        regularContent: boolean;
        eliteContent: boolean;
      };
      recommendedListIndex: number | null;
    },
    recommendedIds?: { [key: string]: string },
  ) => void;
  getVideoLectures: (query?: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit: number;
    mode: 'prev' | 'next';
    orderBy?: string;
    sort?: 'desc' | 'asc';
    firstId: string;
    lastId: string;
  }) => void;
  addVideoLectureErrors: { [key: string]: string } | {};
  videoItems: Array<VideoItemRow>;
  editVideoLecture: (
    id: string,
    params: {
      title: string;
      description: string;
      points: number;
      isPublished: boolean;
      tags: {
        showOnMyPage: boolean;
        primeContent: boolean;
        regularContent: boolean;
        eliteContent: boolean;
      };
      recommendedListIndex: number | null;
    },
    thumbnailParams?: { file: File; metadata?: object },
    recommendedIds?: { [key: string]: string },
  ) => void;
  removeVideoLectures: (ids: Array<string>) => void;
  recommendedItems: { [key: string]: string };
  recommendedTitles: { [key: string]: string };
  isFetchingVideos: boolean;
  isUpdatingVideo?: boolean;
  isAddingNewVideo?: boolean;
  isDeletingVideo?: boolean;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

type State = {
  selectedIds: Array<string>;
  orderBy: string;
  sort: 'asc' | 'desc';
  mode: 'prev' | 'next';
};

export default class VideosPage extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedIds: [],
      orderBy: 'createdAt',
      sort: 'desc',
      mode: 'next',
    };
  }

  componentDidMount() {
    this.getVideoLectures('mount');
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      (prevState.sort !== this.state.sort && this.state.sort) ||
      (prevState.orderBy !== this.state.orderBy && this.state.orderBy)
    ) {
      this.getVideoLectures(this.state.mode);
    }

    if (
      (!this.props.isUpdatingVideo && prevProps.isUpdatingVideo) ||
      (!this.props.isAddingNewVideo && prevProps.isAddingNewVideo) ||
      (!this.props.isDeletingVideo && prevProps.isDeletingVideo)
    ) {
      this.getVideoLectures('mount');
    }
  }

  handleOnSort = (
    column: IDataTableColumn<object>,
    sortDirection: 'asc' | 'desc',
  ) => {
    this.setState({
      orderBy: (column.selector as string) || 'createdAt',
      sort: sortDirection,
    });
  };

  getVideoLectures = (mode: 'prev' | 'next' | 'mount') => {
    const { getVideoLectures, videoItems } = this.props;
    const { orderBy, sort } = this.state;
    const len = videoItems.length;
    const firstId = len > 0 && mode !== 'mount' ? videoItems[0].id : '';
    const lastId = len > 0 && mode !== 'mount' ? videoItems[len - 1].id : '';

    getVideoLectures({
      limit: 10,
      firstId,
      lastId,
      mode: mode === 'mount' ? 'next' : mode,
      where: [['isDeleted', '==', false]],
      orderBy,
      sort,
    });
  };

  getVideo = (file: File): Promise<HTMLVideoElement> => {
    return new Promise((resolve, reject) => {
      try {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = () => {
          resolve(video);
        };
        video.onerror = () => {
          reject('Invalid video');
        };
        video.src = window.URL.createObjectURL(file);
      } catch (error) {
        reject(error);
      }
    });
  };

  formatValues = (values: FileDescValues) => {
    const matchedIndex = values.recommendedValue.match(/\d/);
    const recommendedListIndex = matchedIndex
      ? Number(matchedIndex[0]) - 1
      : null;

    return {
      title: values.title,
      description: values.desc,
      points: Number(values.salePrice),
      isPublished: values.publishSetting === '公開',
      tags: {
        showOnMyPage: matchedIndex !== null,
        primeContent: true,
        eliteContent:
          values.disclosure === 'エリートランク以上' ||
          values.disclosure === '制限なし',
        regularContent: values.disclosure === '制限なし',
      },
      recommendedListIndex,
    };
  };

  handleUploadAndUpdate = async (values: UploadAndUpdateValues) => {
    const { file, videoFile } = values;

    const { createVideoLecture, recommendedItems } = this.props;

    if (!videoFile || !file || typeof file === 'string') {
      return;
    }

    const videoElement = await this.getVideo(videoFile);
    const formattedValues = this.formatValues(values);

    createVideoLecture(
      { file: videoFile },
      { file },
      {
        ...formattedValues,
        lengthInMs: videoElement.duration * 1000 || 0,
      },
      recommendedItems,
    );
  };

  handleOnEditFileDesc = (values: FileDescValues & { id: string }) => {
    const { editVideoLecture, recommendedItems } = this.props;
    const formattedValues = this.formatValues(values);

    editVideoLecture(
      values.id,
      formattedValues,
      typeof values.file !== 'string'
        ? { file: values.file as File }
        : undefined,
      recommendedItems,
    );
  };

  handleOnSelect = (selected: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: IDataTableColumn<Object>[];
  }) => {
    const selectedIds = selected.selectedRows.map(row => row.id as string);
    this.setState({ selectedIds });
  };

  handleOnPressDelete = () => {
    const { removeVideoLectures } = this.props;
    const { selectedIds } = this.state;

    removeVideoLectures(selectedIds);
  };

  onPressNext = () => {
    this.setState({ mode: 'next' }, () => {
      this.getVideoLectures('next');
    });
  };

  onPressPrev = () => {
    this.setState({ mode: 'prev' }, () => {
      this.getVideoLectures('prev');
    });
  };

  render = (): React.ReactElement => {
    const {
      videoItems,
      recommendedItems,
      recommendedTitles,
      isFetchingVideos,
      isUpdatingVideo,
      isAddingNewVideo,
      isDeletingVideo,
      hasPrevPage,
      hasNextPage,
    } = this.props;

    const _hasPrevPage = isFetchingVideos ? false : hasPrevPage;
    const _hasNextPage = isFetchingVideos ? false : hasNextPage;
    return (
      <VideosTemplate
        onPressDelete={this.handleOnPressDelete}
        onChangeSelect={this.handleOnSelect}
        onSort={this.handleOnSort}
        data={(videoItems as unknown) as IDataTableColumn<Object>[]}
        onUploadAndUpdate={this.handleUploadAndUpdate}
        onEditFileDesc={this.handleOnEditFileDesc}
        recommendedItems={recommendedItems}
        recommendedTitles={recommendedTitles}
        isFetchingVideos={isFetchingVideos}
        isUpdatingVideo={isUpdatingVideo}
        isAddingNewVideo={isAddingNewVideo}
        isDeletingVideo={isDeletingVideo}
        hasPrevPage={_hasPrevPage}
        hasNextPage={_hasNextPage}
        onPressNext={this.onPressNext}
        onPressPrev={this.onPressPrev}
      />
    );
  };
}
