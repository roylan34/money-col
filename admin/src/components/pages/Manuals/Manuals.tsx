import React, { PureComponent } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import { ArticlesTemplate } from '../../templates/ArticlesTemplate';
import {
  PostValues,
  ArticlesRowData,
} from '../../templates/ArticlesTemplate/types';
import { SubmitValues as FileDescValues } from '../../organisms/ArticleDescription/types';

type Props = {
  createManual: (
    manualParams: { file: File; metadata?: object },
    thumbnailParams: { file: File; metadata?: object },
    params: {
      title: string;
      isPublished: boolean;
      tags: {
        primeContent: boolean;
        regularContent: boolean;
        eliteContent: boolean;
      };
    },
  ) => void;
  addManualErrors: { [key: string]: string } | {};
  getManuals: (query?: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit?: number;
    page?: number;
    orderBy?: string;
    sort?: 'desc' | 'asc';
  }) => void;
  manualData: Array<ArticlesRowData>;
  editManual: (
    id: string,
    params: {
      title: string;
      isPublished: boolean;
      tags: {
        primeContent: boolean;
        regularContent: boolean;
        eliteContent: boolean;
      };
    },
    thumbnailParams?: { file: File; metadata?: object },
  ) => void;
  removeManuals: (ids: Array<string>) => void;
  recommendedItems: { [key: string]: string };
  recommendedTitles: { [key: string]: string };
};

type State = {
  selectedIds: Array<string>;
};
export default class ManualsPage extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedIds: [],
    };
  }

  componentDidMount() {
    this.getManuals('createdAt', 'desc');
  }

  getManuals = (selector: string, sort: 'asc' | 'desc') => {
    this.props.getManuals({
      where: [['isDeleted', '==', false]],
      orderBy: selector,
      sort,
    });
  };

  handleOnSort = (
    column: IDataTableColumn<object>,
    sortDirection: 'asc' | 'desc',
  ) => {
    // @ts-ignore
    this.getManuals(column.selector || 'createdAt', sortDirection);
  };

  handleUploadAndUpdate = (values: PostValues) => {
    const { createManual } = this.props;

    if (!values.articleFile || !values.file) {
      return;
    }

    // TO DO: add thumbnail here
    const formattedValues = this.formatValues(values);

    createManual(
      { file: values.articleFile },
      { file: values.file as File },
      formattedValues,
    );
  };

  handleUpdate = (values: FileDescValues & { id: string }) => {
    const { editManual } = this.props;
    const formattedValues = this.formatValues(values);

    editManual(
      values.id,
      formattedValues,
      typeof values.file !== 'string'
        ? { file: values.file as File }
        : undefined,
    );
  };

  formatValues = (values: FileDescValues) => {
    return {
      title: values.title,
      isPublished: values.publishSetting === '公開',
      tags: {
        primeContent: true,
        eliteContent:
          values.disclosure === 'エリートランク以上' ||
          values.disclosure === '制限なし',
        regularContent: values.disclosure === '制限なし',
      },
    };
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
    const { removeManuals } = this.props;
    const { selectedIds } = this.state;

    removeManuals(selectedIds);
  };

  render = (): React.ReactElement => {
    const { manualData } = this.props;

    return (
      <ArticlesTemplate
        onUploadAndUpdate={this.handleUploadAndUpdate}
        onDeleteSelected={this.handleOnPressDelete}
        data={(manualData as unknown) as IDataTableColumn<Object>[]}
        onChangeSelect={this.handleOnSelect}
        onEditFileDesc={this.handleUpdate}
        onSort={this.handleOnSort}
        sortServer={true}
        onPostArticle={() => console.log('WHAT IS')}
      />
    );
  };
}
