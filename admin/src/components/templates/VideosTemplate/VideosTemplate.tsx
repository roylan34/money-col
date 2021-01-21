import React, { PureComponent, ReactNode } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import memoize from 'memoize-one';
import {
  Container,
  VideoLabel,
  DeleteAndPostContainer,
  TrashWrapper,
  PostButtonWrapper,
  TableContainer,
  TableWrapper,
  Cover,
  FileDescContainer,
  LoadingWrapper,
  PaginationButtonsWrapper,
} from './elements';
import { VideoItemRow, UploadAndUpdateValues } from './types';
import PublishItem from './PublishItem';
import { Trash } from '../../atoms/Icons';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { Button, EditButton } from '../../atoms/Button';
import { VideoItem } from '../../molecules/VideoListItem';
import { CustomDataTable } from '../../molecules/CustomDataTable';
import { FileUploadModal } from '../../molecules/FileUploadModal';
import { ConfirmDeleteModal } from '../../molecules/ConfirmDeleteModal';
import { PaginationButtons } from '../../molecules/PaginationButtons';
import { FileDescription } from '../../organisms/FileDescription';
import {
  SubmitValues as FileDescValues,
  RecommendedItems,
} from '../../organisms/FileDescription/types';
import words from '../../../constants/words';

const VIDEO_COLUMNS = memoize(handleAction => [
  {
    name: words.videoHeaders.video,
    selector: 'videoItem',
    width: '370px',
    // @ts-ignore
    cell: (row: VideoItemRow): ReactNode => <VideoItem {...row.videoItem} />,
  },
  {
    name: words.videoHeaders.publishSettings,
    selector: 'publishSettings',
    width: '90px',
    style: {
      paddingLeft: '5px',
      paddingRight: '5px',
    },
    // @ts-ignore
    cell: (row: VideoItemRow): ReactNode => (
      <PublishItem
        setting={
          row.publishSettings === words.publishDropdownValue[0]
            ? 'private'
            : 'public'
        }
      />
    ),
  },
  {
    name: words.videoHeaders.limit,
    selector: 'limit',
    width: '120px',
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  {
    name: words.videoHeaders.createdAt,
    selector: 'createdAt',
    sortable: true,
    width: '110px',
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  {
    name: words.projectHeaders.status,
    selector: 'status',
    minWidth: '140px',
  },
  {
    selector: 'id',
    style: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    width: '40px',
    // @ts-ignore
    cell: (row: VideoItemRow): ReactNode => (
      <EditButton onClick={() => handleAction(row)} />
    ),
  },
]);

type Props = {
  onPressDelete: () => void;
  data: IDataTableColumn<Object>[];
  onChangeSelect: (selected: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: IDataTableColumn<Object>[];
  }) => void;
  onSort?: (
    // @ts-ignore
    column: IDataTableColumn<T>,
    sortDirection: 'asc' | 'desc',
  ) => void;
  onUploadAndUpdate: (values: UploadAndUpdateValues) => void;
  onEditFileDesc: (values: FileDescValues & { id: string }) => void;
  recommendedItems: RecommendedItems;
  recommendedTitles: RecommendedItems;
  isFetchingVideos: boolean;
  isUpdatingVideo?: boolean;
  isAddingNewVideo?: boolean;
  isDeletingVideo?: boolean;
  onPressPrev: () => void;
  onPressNext: () => void;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

type State = {
  isFileUploadVisible: boolean;
  isConfirmDeleteVisible: boolean;
  isUploadFileDescVisible: boolean;
  isEditFileDescVisible: boolean;
  videoFile: File | null;
  selectedRow: VideoItemRow;
};

class VideosTemplate extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isFileUploadVisible: false,
      isConfirmDeleteVisible: false,
      isUploadFileDescVisible: false,
      isEditFileDescVisible: false,
      videoFile: null,
      selectedRow: {
        videoItem: {
          imgUrl: '',
          videoLength: 0,
          title: '',
          description: '',
        },
        publishSettings: words.publishDropdownValue[0],
        limit: words.disclosureValues[0],
        createdAt: '',
        views: 0,
        status: '',
        id: '',
        salesPlan: '',
        salePoints: '',
        fileName: '',
        downloadableUrl: '',
        recommendedValue: '',
      },
    };
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    const { videoFile } = this.state;

    if (prevState.videoFile !== videoFile && videoFile) {
      this.setState({ isUploadFileDescVisible: true });
    }
  }

  removeFileExtension = (fileName: string): string => {
    return fileName.slice(0, fileName.length - 4);
  };

  onCloseUploadModal = () => {
    this.setState({ isFileUploadVisible: false });
  };

  onPressPostButton = () => {
    this.setState({ isFileUploadVisible: true });
  };

  onUploadVideoFile = (videoFile: File) => {
    this.setState({ isFileUploadVisible: false, videoFile });
  };

  onCloseUploadFileDescModal = () => {
    this.setState({ isUploadFileDescVisible: false });
  };

  onUploadFileDesc = (fileDescValues: FileDescValues) => {
    const { videoFile } = this.state;
    const { onUploadAndUpdate } = this.props;

    this.setState({ isUploadFileDescVisible: false }, () =>
      onUploadAndUpdate({
        ...fileDescValues,
        videoFile,
      }),
    );
  };

  onSubmitEdit = (values: FileDescValues & { id: string }) => {
    const { onEditFileDesc } = this.props;

    this.setState({ isEditFileDescVisible: false }, () =>
      onEditFileDesc(values),
    );
  };

  onCloseEditFileDescModal = () => {
    this.setState({ isEditFileDescVisible: false });
  };

  onRowClick = (selectedRow: IDataTableColumn<Object>) => {
    this.setState(
      { selectedRow: (selectedRow as unknown) as VideoItemRow },
      () => this.setState({ isEditFileDescVisible: true }),
    );
  };

  onPressTrash = () => {
    this.setState({ isConfirmDeleteVisible: true });
  };

  onPressDelete = () => {
    const { onPressDelete } = this.props;
    onPressDelete();
    this.hideDeleteModal();
  };

  hideDeleteModal = () => {
    this.setState({ isConfirmDeleteVisible: false });
  };

  renderEditFileDesc = (selectedRow: VideoItemRow) => {
    const { recommendedItems, recommendedTitles } = this.props;

    return (
      <Cover isVisible>
        <FileDescContainer>
          <FileDescription
            isModalVisible
            onCloseModal={this.onCloseEditFileDescModal}
            onPressRelease={this.onSubmitEdit}
            name={this.removeFileExtension(selectedRow.fileName)}
            downloadableUrl={selectedRow.downloadableUrl}
            fileName={selectedRow.fileName}
            fileDescError={{}}
            type="video"
            title={selectedRow.videoItem.title}
            publish={selectedRow.publishSettings as '公開' | '非公開'}
            createdAt={selectedRow.createdAt}
            thumbnail={selectedRow.videoItem.imgUrl}
            status={selectedRow.status}
            id={selectedRow.id}
            description={selectedRow.videoItem.description}
            disclosure={selectedRow.limit as '制限なし' | 'プライムランクのみ'}
            salesPlan={selectedRow.salesPlan as '無料' | '有料'}
            salePoints={selectedRow.salePoints}
            recommendedValue={selectedRow.recommendedValue}
            recommendedItems={recommendedItems}
            recommendedTitle={recommendedTitles}
          />
        </FileDescContainer>
      </Cover>
    );
  };

  renderUploadFileDescription = () => {
    const { videoFile } = this.state;
    const { recommendedItems, recommendedTitles } = this.props;

    return (
      <Cover isVisible>
        <FileDescContainer>
          <FileDescription
            isModalVisible
            onCloseModal={this.onCloseUploadFileDescModal}
            onPressRelease={this.onUploadFileDesc}
            name={
              videoFile ? this.removeFileExtension(videoFile.name) : 'File Name'
            }
            downloadableUrl=""
            fileName={videoFile ? videoFile.name : ''}
            fileDescError={{}}
            type="video"
            title=""
            publish="公開"
            createdAt=""
            thumbnail=""
            status=""
            id=""
            description=""
            disclosure="制限なし"
            salesPlan="無料"
            salePoints=""
            recommendedValue=""
            recommendedItems={recommendedItems}
            recommendedTitle={recommendedTitles}
          />
        </FileDescContainer>
      </Cover>
    );
  };

  render = (): React.ReactElement => {
    const {
      data,
      onChangeSelect,
      onSort,
      isFetchingVideos,
      isDeletingVideo,
      isUpdatingVideo,
      isAddingNewVideo,
      onPressNext,
      onPressPrev,
      hasNextPage,
      hasPrevPage,
    } = this.props;
    const {
      isFileUploadVisible,
      isUploadFileDescVisible,
      isEditFileDescVisible,
      selectedRow,
      isConfirmDeleteVisible,
    } = this.state;

    return (
      <Container>
        <VideoLabel>{words.videosLabel}</VideoLabel>
        <DeleteAndPostContainer>
          <TrashWrapper onClick={this.onPressTrash}>
            <Trash />
          </TrashWrapper>
          <PostButtonWrapper>
            <Button
              title={words.post}
              textSize="14px"
              onPress={this.onPressPostButton}
              disabled={isAddingNewVideo}
            />
          </PostButtonWrapper>
        </DeleteAndPostContainer>
        {isFetchingVideos ||
        isDeletingVideo ||
        isUpdatingVideo ||
        isAddingNewVideo ? (
          <LoadingWrapper>
            <LoadingIndicator />
          </LoadingWrapper>
        ) : (
          <>
            <TableContainer>
              <TableWrapper>
                <CustomDataTable
                  data={data}
                  columns={
                    VIDEO_COLUMNS(this.onRowClick) as IDataTableColumn<Object>[]
                  }
                  onChangeSelect={onChangeSelect}
                  onSort={onSort}
                  sortField="createdAt"
                  onRowClicked={() => null}
                  sortServer
                />
              </TableWrapper>
            </TableContainer>
          </>
        )}
        <PaginationButtonsWrapper>
          <PaginationButtons
            onPressNext={onPressNext}
            onPressPrev={onPressPrev}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </PaginationButtonsWrapper>
        <FileUploadModal
          title={words.uploadVideoLabel}
          isVisible={isFileUploadVisible}
          accepted="video"
          onClose={this.onCloseUploadModal}
          onUpload={this.onUploadVideoFile}
        />
        <ConfirmDeleteModal
          isConfirmDeleteVisible={isConfirmDeleteVisible}
          msg={words.confirmDelete}
          onCancel={this.hideDeleteModal}
          onDelete={this.onPressDelete}
        />
        {isUploadFileDescVisible && this.renderUploadFileDescription()}
        {isEditFileDescVisible && this.renderEditFileDesc(selectedRow)}
      </Container>
    );
  };
}

export default VideosTemplate;
