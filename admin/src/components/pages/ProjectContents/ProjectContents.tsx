import React, { PureComponent } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import { ProjectTemplate } from '../../templates/ProjectContentTemplate';
import {
  UploadAndUpdateValues,
  RowData,
} from '../../templates/ProjectContentTemplate/types';
import { SubmitValues as FileDescValues } from '../../organisms/FileDescription/types';

type Props = {
  createProjectContent: (
    projectContentParams: { file: File; metadata?: object },
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
  addProjectContentErrors: { [key: string]: string } | {};
  getProjectContents: (query?: {
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
  projectContentData: Array<RowData>;
  editProjectContent: (
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
  removeProjectContents: (ids: Array<string>) => void;
  recommendedItems: { [key: string]: string };
  recommendedTitles: { [key: string]: string };
};

type State = {
  selectedIds: Array<string>;
};
export default class ProjectContentsPage extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedIds: [],
    };
  }

  componentDidMount() {
    this.getProjectContents('createdAt', 'desc');
  }

  getProjectContents = (selector: string, sort: 'asc' | 'desc') => {
    this.props.getProjectContents({
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
    this.getProjectContents(column.selector || 'createdAt', sortDirection);
  };

  handleUploadAndUpdate = (values: UploadAndUpdateValues) => {
    const { createProjectContent, recommendedItems } = this.props;

    if (!values.file || !values.projectFile) {
      return;
    }
    const formattedValues = this.formatValues(values);

    createProjectContent(
      { file: values.projectFile },
      { file: values.file as File },
      formattedValues,
      recommendedItems,
    );
  };

  handleUpdate = (values: FileDescValues & { id: string }) => {
    const { editProjectContent, recommendedItems } = this.props;
    const formattedValues = this.formatValues(values);

    editProjectContent(
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
    const { removeProjectContents } = this.props;
    const { selectedIds } = this.state;

    removeProjectContents(selectedIds);
  };

  render = (): React.ReactElement => {
    const {
      projectContentData,
      recommendedItems,
      recommendedTitles,
    } = this.props;

    return (
      <ProjectTemplate
        onUploadAndUpdate={this.handleUploadAndUpdate}
        onPressDelete={this.handleOnPressDelete}
        data={(projectContentData as unknown) as IDataTableColumn<Object>[]}
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
