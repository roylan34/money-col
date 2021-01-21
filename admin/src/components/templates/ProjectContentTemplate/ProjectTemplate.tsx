import React, { PureComponent, ReactNode } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import {
  Container,
  ProjectLabel,
  DeleteAndPostContainer,
  TrashWrapper,
  PostButtonWrapper,
  TableWrapper,
  TitleItem,
  Thumbnail,
  Cover,
  FileDescContainer,
} from './elements';
import PublishItem from './PublishItem';
import { RowData, UploadAndUpdateValues } from './types';
import { Trash } from '../../atoms/Icons';
import { Button } from '../../atoms/Button';
import { ConfirmDeleteModal } from '../../molecules/ConfirmDeleteModal';
import { CustomDataTable } from '../../molecules/CustomDataTable';
import { FileUploadModal } from '../../molecules/FileUploadModal';
import { FileDescription } from '../../organisms/FileDescription';
import {
  SubmitValues as FileDescValues,
  RecommendedItems,
} from '../../organisms/FileDescription/types';
import words from '../../../constants/words';

const COLUMNS: IDataTableColumn<Object>[] = [
  {
    name: words.projectHeaders.title,
    selector: 'title',
    // @ts-ignore
    cell: (row: RowData): ReactNode => <TitleItem>{row.title}</TitleItem>,
  },
  {
    name: words.projectHeaders.publish,
    selector: 'publish',
    // @ts-ignore
    cell: (row: RowData): ReactNode => (
      <PublishItem setting={row.publish === '公開' ? 'public' : 'private'} />
    ),
  },
  {
    name: words.projectHeaders.createdAt,
    selector: 'createdAt',
    sortable: true,
    sortFunction: (a, b) => {
      // @ts-ignore
      return new Date(a.createdAt) - new Date(b.createdAt);
    },
  },
  {
    name: words.projectHeaders.thumbnail,
    selector: 'thumbnail',
    // @ts-ignore
    cell: (row: RowData): ReactNode => (
      <Thumbnail src={row.thumbnail} alt={row.title} />
    ),
  },
  {
    name: words.projectHeaders.status,
    selector: 'status',
  },
];

type Props = {
  onUploadAndUpdate: (values: UploadAndUpdateValues) => void;
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
  onEditFileDesc: (values: FileDescValues & { id: string }) => void;
  sortServer: boolean;
  recommendedItems: RecommendedItems;
  recommendedTitles: RecommendedItems;
};

type State = {
  isFileUploadVisible: boolean;
  isFileDescVisibile: boolean;
  isEditFileDescVisibile: boolean;
  projectFile: File | null;
  selectedRow: RowData;
  isConfirmDeleteVisible: boolean;
};

class ProjectTemplate extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isFileUploadVisible: false,
      isFileDescVisibile: false,
      isEditFileDescVisibile: false,
      projectFile: null,
      selectedRow: {
        title: '',
        publish: '公開',
        createdAt: '',
        thumbnail: '',
        status: '',
        id: '',
        description: '',
        disclosure: '制限なし',
        salesPlan: '無料',
        salePoints: '',
        fileName: '',
        downloadableUrl: '',
        recommendedValue: '',
      },
      isConfirmDeleteVisible: false,
    };
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    const { projectFile } = this.state;

    if (prevState.projectFile !== projectFile && projectFile) {
      this.setState({ isFileDescVisibile: true });
    }
  }

  onCloseUploadModal = () => {
    this.setState({ isFileUploadVisible: false });
  };

  onUploadProjectFile = (projectFile: File) => {
    this.setState({
      isFileUploadVisible: false,
      projectFile,
    });
  };

  onPressPostButton = () => {
    this.setState({ isFileUploadVisible: true });
  };

  onCloseFileDescModal = () => {
    this.setState({ isFileDescVisibile: false });
  };

  removeFileExtension = (fileName: string): string => {
    return fileName.slice(0, fileName.length - 4);
  };

  onUpdateFileDesc = (fileDescValues: FileDescValues) => {
    const { projectFile } = this.state;
    const { onUploadAndUpdate } = this.props;

    this.setState({ isFileDescVisibile: false }, () =>
      onUploadAndUpdate({
        ...fileDescValues,
        projectFile,
      }),
    );
  };

  onPressTrash = () => {
    this.setState({ isConfirmDeleteVisible: true });
  };

  onPressDelete = () => {
    const { onPressDelete } = this.props;
    onPressDelete();
    this.setState({ isConfirmDeleteVisible: false });
  };

  onCancelDelete = () => {
    this.setState({ isConfirmDeleteVisible: false });
  };

  onRowClicked = (row: IDataTableColumn<Object>) => {
    this.setState(
      {
        selectedRow: (row as unknown) as RowData,
      },
      () => this.setState({ isEditFileDescVisibile: true }),
    );
  };

  onCloseEditFileDescModal = () => {
    this.setState({ isEditFileDescVisibile: false });
  };

  onSubmitEdit = (values: FileDescValues & { id: string }) => {
    const { onEditFileDesc } = this.props;

    this.setState({ isEditFileDescVisibile: false }, () =>
      onEditFileDesc(values),
    );
  };

  renderEditFileDesc = (selectedRow: RowData) => {
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
            type="project"
            title={selectedRow.title}
            publish={selectedRow.publish}
            createdAt={selectedRow.createdAt}
            thumbnail={selectedRow.thumbnail}
            status={selectedRow.status}
            id={selectedRow.id}
            description={selectedRow.description}
            disclosure={selectedRow.disclosure}
            salesPlan={selectedRow.salesPlan}
            salePoints={selectedRow.salePoints}
            recommendedValue={selectedRow.recommendedValue}
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
      sortServer,
      recommendedItems,
      recommendedTitles,
    } = this.props;
    const {
      isFileUploadVisible,
      isFileDescVisibile,
      isEditFileDescVisibile,
      projectFile,
      selectedRow,
      isConfirmDeleteVisible,
    } = this.state;

    return (
      <Container>
        <ProjectLabel>{words.projectsLabel}</ProjectLabel>
        <DeleteAndPostContainer>
          <TrashWrapper onClick={this.onPressTrash}>
            <Trash />
          </TrashWrapper>
          <PostButtonWrapper>
            <Button
              title={words.post}
              textSize="14px"
              onPress={this.onPressPostButton}
            />
          </PostButtonWrapper>
        </DeleteAndPostContainer>
        <TableWrapper>
          <CustomDataTable
            data={data}
            columns={COLUMNS}
            onChangeSelect={onChangeSelect}
            onSort={onSort}
            sortField="createdAt"
            onRowClicked={this.onRowClicked}
            sortServer={sortServer}
          />
        </TableWrapper>
        <FileUploadModal
          title={words.uploadPDFLabel}
          isVisible={isFileUploadVisible}
          onClose={this.onCloseUploadModal}
          onUpload={this.onUploadProjectFile}
          accepted="pdf"
        />
        {isFileDescVisibile && (
          <Cover isVisible>
            <FileDescContainer>
              <FileDescription
                isModalVisible
                onCloseModal={this.onCloseFileDescModal}
                onPressRelease={this.onUpdateFileDesc}
                name={
                  projectFile
                    ? this.removeFileExtension(projectFile.name)
                    : 'File Name'
                }
                downloadableUrl=""
                fileName={projectFile ? projectFile.name : ''}
                fileDescError={{}}
                type="project"
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
                recommendedValue={selectedRow.recommendedValue}
                recommendedItems={recommendedItems}
                recommendedTitle={recommendedTitles}
              />
            </FileDescContainer>
          </Cover>
        )}
        <ConfirmDeleteModal
          isConfirmDeleteVisible={isConfirmDeleteVisible}
          msg={words.confirmDelete}
          onCancel={this.onCancelDelete}
          onDelete={this.onPressDelete}
        />
        {isEditFileDescVisibile && this.renderEditFileDesc(selectedRow)}
      </Container>
    );
  };
}

export default ProjectTemplate;
