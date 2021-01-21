import React, { PureComponent } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import { InstructorsTemplate } from '../../templates/InstructorsTemplate';
import { InstructorsRowData } from '../../templates/InstructorsTemplate/types';
import { InstructorFormValues } from '../../organisms/RegisterInstructorForm/types';
import { Instructor } from '../../../domain/entities';

type Props = {
  getInstructors: (query?: {
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
  instructorData: Array<InstructorsRowData>;
  addInstructor: (params: {
    lastName: string;
    firstName: string;
    email: string;
  }) => void;
  removeInstructors: (ids: Array<string>) => void;
  instructors: { [key: string]: Instructor };
  editInstructor: (
    id: string,
    params: {
      name: {
        lastName: string;
        firstName: string;
      };
      email: string;
    },
  ) => void;
};

type State = {
  selectedIds: Array<string>;
};

export default class InstructorsPage extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedIds: [],
    };
  }

  componentDidMount() {
    this.getInstructors('createdAt', 'desc');
  }

  getInstructors = (selector: string, sort: 'asc' | 'desc') => {
    this.props.getInstructors({
      where: [['isDeleted', '==', false]],
      orderBy: selector,
      sort,
    });
  };

  handleOnRegister = (values: InstructorFormValues) => {
    const { addInstructor } = this.props;
    addInstructor(values);
  };

  handleOnUpdate = (values: InstructorFormValues & { id: string }) => {
    const { editInstructor } = this.props;
    const { lastName, firstName, id, ...others } = values;
    editInstructor(id, { name: { firstName, lastName }, ...others });
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
    const { removeInstructors } = this.props;
    const { selectedIds } = this.state;

    removeInstructors(selectedIds);
  };

  render = (): React.ReactElement => {
    const { instructorData, instructors } = this.props;

    return (
      <InstructorsTemplate
        data={(instructorData as unknown) as IDataTableColumn<Object>[]}
        onDeleteSelected={this.handleOnPressDelete}
        onChangeSelect={this.handleOnSelect}
        onPostInstructor={() => {}}
        onRegister={this.handleOnRegister}
        instructors={instructors}
        onUpdate={this.handleOnUpdate}
      />
    );
  };
}
