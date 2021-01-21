import React, { PureComponent, ReactNode } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import {
  Container,
  PostFormContainer,
  ListContainer,
  InstructorsLabel,
  DeleteAndPostContainer,
  TrashWrapper,
  PostButtonWrapper,
  TableWrapper,
  TitleItem,
  MailboxWrapper,
  RegisterFormWrapper,
} from './elements';
import { InstructorsRowData } from './types';
import { Trash, MailBox } from '../../atoms/Icons';
import { Button } from '../../atoms/Button';
import { CustomDataTable } from '../../molecules/CustomDataTable';
import { ConfirmDeleteModal } from '../../molecules/ConfirmDeleteModal';
import { RegisterInstructorForm } from '../../organisms/RegisterInstructorForm';
import { InstructorFormValues } from '../../organisms/RegisterInstructorForm/types';
import { Instructor } from '../../../domain/entities';
import { paths } from '../../../constants/routes/urls';
import words from '../../../constants/words';

const COLUMNS: IDataTableColumn<Object>[] = [
  {
    name: words.instructorHeaders.name,
    selector: 'name',
    // @ts-ignore
    cell: (row: InstructorsRowData): ReactNode => (
      <TitleItem>{row.name}</TitleItem>
    ),
  },
  {
    name: words.instructorHeaders.email,
    selector: 'email',
  },
  {
    name: words.instructorHeaders.mailbox,
    // @ts-ignore
    cell: (row: InstructorsRowData): ReactNode => {
      return (
        <MailboxWrapper to={`${paths.instructorMailbox}?id=${row.id}`}>
          <MailBox theme="instructors" />
        </MailboxWrapper>
      );
    },
  },
];

type Props = {
  data: IDataTableColumn<Object>[];
  onChangeSelect: (selected: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: IDataTableColumn<Object>[];
  }) => void;
  onDeleteSelected: () => void;
  onPostInstructor: () => void;
  onRegister: (values: InstructorFormValues) => void;
  onUpdate: (values: InstructorFormValues & { id: string }) => void;
  instructors: { [key: string]: Instructor };
};

type State = {
  isPostFormVisible: boolean;
  selectedId: string;
  isConfirmDeleteVisible: boolean;
};

class InstructorsTemplate extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isPostFormVisible: false,
      selectedId: '',
      isConfirmDeleteVisible: false,
    };
  }

  showPostForm = () => {
    this.setState({ isPostFormVisible: true });
  };

  hidePostForm = () => {
    this.setState({ isPostFormVisible: false, selectedId: '' });
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

  submitRegistrationForm = (values: InstructorFormValues) => {
    const { onRegister, onUpdate } = this.props;
    const selectedId = this.state.selectedId;
    this.setState({ isPostFormVisible: false, selectedId: '' }, () => {
      if (selectedId) {
        onUpdate(Object.assign(values, { id: selectedId }));
      } else {
        onRegister(values);
      }
    });
  };

  handleOnRowClicked = (row: IDataTableColumn<Object>) => {
    const selectedId = row.id as string;
    this.setState({ isPostFormVisible: true, selectedId });
  };

  render = (): React.ReactElement => {
    const { data, onChangeSelect, instructors } = this.props;
    const {
      isPostFormVisible,
      selectedId,
      isConfirmDeleteVisible,
    } = this.state;
    const {
      name: { firstName, lastName },
      email,
    } =
      selectedId && instructors && instructors[selectedId]
        ? instructors[selectedId]
        : { name: { firstName: '', lastName: '' }, email: '' };

    return (
      <Container>
        <PostFormContainer isVisible={isPostFormVisible}>
          <RegisterFormWrapper>
            <RegisterInstructorForm
              onPressBack={this.hidePostForm}
              onPressCancel={this.hidePostForm}
              onRegister={this.submitRegistrationForm}
              lastName={lastName}
              firstName={firstName}
              email={email}
            />
          </RegisterFormWrapper>
        </PostFormContainer>
        <ListContainer isVisible={!isPostFormVisible}>
          <InstructorsLabel>{words.instructorLabel}</InstructorsLabel>
          <DeleteAndPostContainer>
            <TrashWrapper onClick={this.onPressTrash}>
              <Trash />
            </TrashWrapper>
            <PostButtonWrapper>
              <Button
                theme="primary"
                textSize="14px"
                title={words.instructorPostButtonLabel}
                onPress={this.showPostForm}
              />
            </PostButtonWrapper>
          </DeleteAndPostContainer>
          <TableWrapper>
            <CustomDataTable
              data={data}
              columns={COLUMNS}
              onChangeSelect={onChangeSelect}
              onRowClicked={this.handleOnRowClicked}
            />
          </TableWrapper>
        </ListContainer>
        <ConfirmDeleteModal
          isConfirmDeleteVisible={isConfirmDeleteVisible}
          msg={words.deleteInstructor}
          onCancel={this.onCancelDelete}
          onDelete={this.onPressDelete}
        />
      </Container>
    );
  };
}

export default InstructorsTemplate;
