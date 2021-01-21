import React, { PureComponent, ReactNode } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import {
  Container,
  EAProgramsLabel,
  DeleteAndPostContainer,
  TrashWrapper,
  TableWrapper,
  PostButtonWrapper,
  TitleItem,
  Thumbnail,
  Cover,
  FileDescContainer,
} from './elements';
import { ArticlesRowData, PostValues } from './types';
import PublishItem from './PublishItem';
import { Trash } from '../../atoms/Icons';
import { Button } from '../../atoms/Button';
import { ConfirmDeleteModal } from '../../molecules/ConfirmDeleteModal';
import { CustomDataTable } from '../../molecules/CustomDataTable';
import { FileUploadModal } from '../../molecules/FileUploadModal';
import { ArticleDescription } from '../../organisms/ArticleDescription';
import { SubmitValues as FileDescValues } from '../../organisms/ArticleDescription/types';
import words from '../../../constants/words';

const COLUMNS: IDataTableColumn<Object>[] = [
  {
    name: words.projectHeaders.title,
    selector: 'title',
    // @ts-ignore
    cell: (row: ArticlesRowData): ReactNode => (
      <TitleItem>{row.title}</TitleItem>
    ),
  },
  {
    name: words.projectHeaders.publish,
    selector: 'publish',
    // @ts-ignore
    cell: (row: ArticlesRowData): ReactNode => (
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
    cell: (row: ArticlesRowData): ReactNode => (
      <Thumbnail src={row.thumbnail} alt={row.title} />
    ),
  },
];

type Props = {
  data: IDataTableColumn<Object>[];
  sortServer: boolean;
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
  onPostArticle: () => void;
  onDeleteSelected: () => void;
  onUploadAndUpdate: (values: PostValues) => void;
  onEditFileDesc: (values: FileDescValues & { id: string }) => void;
};

type State = {
  isFileUploadVisible: boolean;
  isFileDescVisible: boolean;
  isEditFileDescVisible: boolean;
  articleFile: File | null;
  selectedRow: ArticlesRowData;
  isConfirmDeleteVisible: boolean;
};

class ArticlesTemplate extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isFileUploadVisible: false,
      isFileDescVisible: false,
      isEditFileDescVisible: false,
      articleFile: null,
      selectedRow: {
        title: '',
        publish: '公開',
        createdAt: '',
        disclosure: '制限なし',
        thumbnail: '',
        downloadableUrl: '',
        fileName: '',
        id: '',
      },
      isConfirmDeleteVisible: false,
    };
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    const { articleFile } = this.state;

    if (prevState.articleFile !== articleFile && articleFile) {
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
    const { onDeleteSelected } = this.props;
    onDeleteSelected();
    this.setState({ isConfirmDeleteVisible: false });
  };

  onCancelDelete = () => {
    this.setState({ isConfirmDeleteVisible: false });
  };

  onUploadArticleFile = (articleFile: File) => {
    this.setState({
      isFileUploadVisible: false,
      articleFile,
    });
  };

  removeFileExtension = (fileName: string): string => {
    return fileName.replace(/\.\w+$/, '');
  };

  onCloseFileDescModal = () => {
    this.setState({ isFileDescVisible: false });
  };

  onSubmitFileDesc = (fileDescValues: FileDescValues) => {
    const { articleFile } = this.state;
    const { onUploadAndUpdate } = this.props;

    this.setState({ isFileDescVisible: false }, () =>
      onUploadAndUpdate({
        ...fileDescValues,
        articleFile,
      }),
    );
  };

  onRowClicked = (row: IDataTableColumn<Object>) => {
    this.setState(
      {
        selectedRow: (row as unknown) as ArticlesRowData,
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
    const { articleFile } = this.state;

    return (
      <Cover isVisible>
        <FileDescContainer>
          <ArticleDescription
            name={articleFile ? articleFile.name : 'File Name'}
            title=""
            disclosure="制限なし"
            publishSetting="公開"
            id=""
            thumbnail=""
            onCloseModal={this.onCloseFileDescModal}
            onPressRelease={this.onSubmitFileDesc}
          />
        </FileDescContainer>
      </Cover>
    );
  };

  renderEditFileDesc = (selectedRow: ArticlesRowData) => {
    return (
      <Cover isVisible>
        <FileDescContainer>
          <ArticleDescription
            name={selectedRow.fileName}
            title={selectedRow.title}
            disclosure={selectedRow.disclosure}
            publishSetting={selectedRow.publish}
            id={selectedRow.id}
            thumbnail={selectedRow.thumbnail}
            onCloseModal={this.onCloseEditFileDescModal}
            onPressRelease={this.onSubmitEdit}
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
        <EAProgramsLabel>{words.articlesLabel}</EAProgramsLabel>
        <DeleteAndPostContainer>
          <TrashWrapper onClick={this.onPressTrash}>
            <Trash />
          </TrashWrapper>
          <PostButtonWrapper>
            <Button
              theme="primary"
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
          onUpload={this.onUploadArticleFile}
          accepted="pdf"
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

export default ArticlesTemplate;
