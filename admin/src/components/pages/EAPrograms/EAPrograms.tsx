import React, { PureComponent } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import {
  UploadAndUpdateValues,
  EAProgramRowData,
} from '../../templates/EAProgramsTemplate/types';
import { SubmitValues as FileDescValues } from '../../organisms/FileDescription/types';
import { EAProgramsTemplate } from '../../templates/EAProgramsTemplate';

type Props = {
  createEAProgram: (
    eaProgramParams: { file: File; metadata?: object },
    thumbnailParams: { file: File; metadata?: object },
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
    recommendedIds?: { [key: string]: string },
  ) => void;
  addEAProgramErrors: { [key: string]: string } | {};
  getEAPrograms: (query?: {
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
  eaProgramData: Array<EAProgramRowData>;
  editEAProgram: (
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
  removeEAPrograms: (ids: Array<string>) => void;
  recommendedItems: { [key: string]: string };
  recommendedTitles: { [key: string]: string };
};

type State = {
  selectedIds: Array<string>;
};
export default class EAProgramsPage extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedIds: [],
    };
  }

  componentDidMount() {
    this.getEAPrograms('createdAt', 'desc');
  }

  getEAPrograms = (selector: string, sort: 'asc' | 'desc') => {
    this.props.getEAPrograms({
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
    this.getEAPrograms(column.selector || 'createdAt', sortDirection);
  };

  handleUploadAndUpdate = (values: UploadAndUpdateValues) => {
    const { createEAProgram, recommendedItems } = this.props;

    if (!values.file || !values.eaFile) {
      return;
    }
    const formattedValues = this.formatValues(values);

    createEAProgram(
      { file: values.eaFile },
      { file: values.file as File },
      formattedValues,
      recommendedItems,
    );
  };

  handleUpdate = (values: FileDescValues & { id: string }) => {
    const { editEAProgram, recommendedItems } = this.props;
    const formattedValues = this.formatValues(values);

    editEAProgram(
      values.id,
      formattedValues,
      typeof values.file !== 'string'
        ? { file: values.file as File }
        : undefined,
      recommendedItems,
    );
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
        showOnMyPage: recommendedListIndex !== null,
        primeContent: true,
        eliteContent:
          values.disclosure === 'エリートランク以上' ||
          values.disclosure === '制限なし',
        regularContent: values.disclosure === '制限なし',
      },
      recommendedListIndex,
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
    const { removeEAPrograms } = this.props;
    const { selectedIds } = this.state;

    removeEAPrograms(selectedIds);
  };

  render = (): React.ReactElement => {
    const { eaProgramData, recommendedItems, recommendedTitles } = this.props;

    return (
      <EAProgramsTemplate
        onUploadAndUpdate={this.handleUploadAndUpdate}
        onPressDelete={this.handleOnPressDelete}
        data={(eaProgramData as unknown) as IDataTableColumn<Object>[]}
        onChangeSelect={this.handleOnSelect}
        onEditFileDesc={this.handleUpdate}
        onSort={this.handleOnSort}
        sortServer={true}
        recommendedItems={recommendedItems}
        recommendedTitles={recommendedTitles}
      />
    );
  };
}
