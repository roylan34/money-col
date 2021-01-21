import React, { PureComponent, ReactNode } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import {
  Container,
  EAProgramsLabel,
  DeleteAndPostContainer,
  TrashWrapper,
  PostButtonWrapper,
  TableWrapper,
  TitleItem,
  Thumbnail,
  Cover,
  FileDescContainer,
} from './elements';
import { EAProgramRowData, UploadAndUpdateValues } from './types';
import PublishItem from './PublishItem';
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
    cell: (row: EAProgramRowData): ReactNode => (
      <TitleItem>{row.title}</TitleItem>
    ),
  },
  {
    name: words.projectHeaders.publish,
    selector: 'publish',
    // @ts-ignore
    cell: (row: EAProgramRowData): ReactNode => (
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
    cell: (row: EAProgramRowData): ReactNode => (
      <Thumbnail src={row.thumbnail} alt={row.title} />
    ),
  },
  {
    name: words.projectHeaders.status,
    selector: 'status',
  },
];

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
  sortServer: boolean;
  onUploadAndUpdate: (values: UploadAndUpdateValues) => void;
  onEditFileDesc: (values: FileDescValues & { id: string }) => void;
  recommendedItems: RecommendedItems;
  recommendedTitles: RecommendedItems;
};

type State = {
  isFileUploadVisible: boolean;
  isFileDescVisible: boolean;
  isEditFileDescVisible: boolean;
  eaFile: File | null;
  selectedRow: EAProgramRowData;
  isConfirmDeleteVisible: boolean;
};

class EAProgramsTemplate extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isFileUploadVisible: false,
      isFileDescVisible: false,
      isEditFileDescVisible: false,
      eaFile: null,
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
    const { eaFile } = this.state;

    if (prevState.eaFile !== eaFile && eaFile) {
      this.setState({ isFileDescVisible: true });
    }
  }

  onPressPostButton = () => {
    this.setState({ isFileUploadVisible: true });
  };

  onCloseUploadModal = () => {
    this.setState({ isFileUploadVisible: false });
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

  onUploadProjectFile = (eaFile: File) => {
    this.setState({
      isFileUploadVisible: false,
      eaFile,
    });
  };

  onUpdateFileDesc = (fileDescValues: FileDescValues) => {
    const { eaFile } = this.state;
    const { onUploadAndUpdate } = this.props;

    this.setState({ isFileDescVisible: false }, () =>
      onUploadAndUpdate({
        ...fileDescValues,
        eaFile,
      }),
    );
  };

  onCloseFileDescModal = () => {
    this.setState({ isFileDescVisible: false });
  };

  removeFileExtension = (fileName: string): string => {
    return fileName.replace(/\.\w+$/, '');
  };

  onRowClicked = (row: IDataTableColumn<Object>) => {
    this.setState(
      {
        selectedRow: (row as unknown) as EAProgramRowData,
      },
      () => this.setState({ isEditFileDescVisible: true }),
    );
  };

  onCloseEditFileDescModal = () => {
    this.setState({ isEditFileDescVisible: false });
  };

  onSubmitEdit = (values: FileDescValues & { id: string }) => {
    const { onEditFileDesc } = this.props;

    this.setState({ isEditFileDescVisible: false }, () =>
      onEditFileDesc(values),
    );
  };

  renderUpdateFileDesc = () => {
    const { eaFile } = this.state;
    const { recommendedItems, recommendedTitles } = this.props;

    return (
      <Cover isVisible>
        <FileDescContainer>
          <FileDescription
            isModalVisible
            onCloseModal={this.onCloseFileDescModal}
            onPressRelease={this.onUpdateFileDesc}
            name={eaFile ? this.removeFileExtension(eaFile.name) : 'File Name'}
            downloadableUrl=""
            fileName={eaFile ? eaFile.name : ''}
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
            recommendedValue="設定しない"
            recommendedItems={recommendedItems}
            recommendedTitle={recommendedTitles}
          />
        </FileDescContainer>
      </Cover>
    );
  };

  renderEditFileDesc = (selectedRow: EAProgramRowData) => {
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
    const { data, onChangeSelect, onSort, sortServer } = this.props;
    const {
      isFileUploadVisible,
      isFileDescVisible,
      isEditFileDescVisible,
      selectedRow,
      isConfirmDeleteVisible,
    } = this.state;

    return (
      <Container>
        <EAProgramsLabel>
          {words.leftSideBarAdminItems['ea-programs']}
        </EAProgramsLabel>
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
          isVisible={isFileUploadVisible}
          title={words.fileUpload}
          onClose={this.onCloseUploadModal}
          onUpload={this.onUploadProjectFile}
          accepted="any"
        />
        <ConfirmDeleteModal
          isConfirmDeleteVisible={isConfirmDeleteVisible}
          msg={words.confirmDelete}
          onCancel={this.onCancelDelete}
          onDelete={this.onPressDelete}
        />
        {isFileDescVisible && this.renderUpdateFileDesc()}
        {isEditFileDescVisible && this.renderEditFileDesc(selectedRow)}
      </Container>
    );
  };
}

export default EAProgramsTemplate;
