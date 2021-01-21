import React, { PureComponent, ReactNode } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import {
  Container,
  Header,
  SearchAndPtMgmtContainer,
  PtMgmtButtonWrapper,
  // SearchBarWrapper,
  TableWrapper,
  LoadingWrapper,
  TitleItem,
  PointLog,
  Cover,
  PtMgmtModalContainer,
  PaginationButtonsWrapper,
} from './elements';
import { UsersData } from './types';
import { Button } from '../../atoms/Button';
// import { TextInput } from '../../atoms/TextInput';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { PaginationButtons } from '../../molecules/PaginationButtons';
import { CustomDataTable } from '../../molecules/CustomDataTable';
import { PointMgmtModal } from '../../molecules/PointMgmtModal';
import { Toast } from '../../molecules/Toast';
import { PointMgmtValues } from '../../molecules/PointMgmtModal/types';
import { words } from '../../../constants';
import { paths } from '../../../constants/routes/urls';

const COLUMNS: IDataTableColumn<UsersData>[] = [
  {
    name: '名前',
    selector: 'name',
    width: '18.5%',
    // @ts-ignore
    cell: (row: UsersData): ReactNode => <TitleItem>{row.name}</TitleItem>,
  },
  {
    name: 'メールアドレス',
    selector: 'email',
    width: '33%px',
  },
  {
    name: '最終ログイン',
    selector: 'lastLogin',
    width: '19%',
  },
  {
    name: 'ランク',
    selector: 'rank',
    width: '11.5%',
  },
  {
    name: '保有pt',
    selector: 'ownedPoints',
    width: '9%',
  },
  {
    name: 'ptログ',
    width: '9%',
    // Implement moving to UserDetailsTemplate when clicking this
    // @ts-ignore
    cell: (row: UsersData): ReactNode => {
      const pathDetails = {
        pathname: paths.userDetails,
        state: row,
      };

      return <PointLog to={pathDetails}>ログ</PointLog>;
    },
  },
];

type Props = {
  data: UsersData[];
  // onChangeSearch: (query: string) => void;
  onConfirmPoints: (values: PointMgmtValues) => void;
  onPressPrev: () => void;
  onPressNext: () => void;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  isLoading?: boolean;
  addGiveAwaySuccessInfo?: {
    message: string;
    id: string;
  };
  addGiveAwayError?: string;
};

type State = {
  isPtMgmtVisible: boolean;
  toastTime?: number;
  toastTitle?: string;
  toastMessage?: string;
  toastType: 'reward' | 'error';
};

class UsersTemplate extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isPtMgmtVisible: false,
      toastType: 'reward',
    };
  }

  static defaultProps = {
    addGiveAwayError: '',
  };

  componentDidUpdate(prevProps: Props) {
    const { addGiveAwayError, addGiveAwaySuccessInfo } = this.props;
    if (addGiveAwayError && addGiveAwayError !== prevProps.addGiveAwayError) {
      this.setToastState({
        toastTitle: words.error,
        toastMessage: addGiveAwayError,
        toastType: 'error',
      });
    } else if (
      addGiveAwaySuccessInfo &&
      JSON.stringify(addGiveAwaySuccessInfo) !==
        JSON.stringify(prevProps.addGiveAwaySuccessInfo)
    ) {
      this.setToastState({
        toastTitle: words.addGiveAwaysSuccessTitle,
        toastMessage: addGiveAwaySuccessInfo.message,
        toastType: 'reward',
      });
    }
  }

  setToastState = (params: {
    toastTitle: string;
    toastMessage: string;
    toastType: 'reward' | 'error';
  }) => {
    this.setState(() => ({ toastTime: Date.now(), ...params }));
  };

  onPressPtMgmtButton = () => {
    this.setState({ isPtMgmtVisible: true });
  };

  onClosePointMgmt = () => {
    this.setState({ isPtMgmtVisible: false });
  };

  onConfirmPoints = (values: PointMgmtValues) => {
    const { onConfirmPoints } = this.props;

    this.setState({ isPtMgmtVisible: false }, () => onConfirmPoints(values));
  };

  renderToast = (
    title?: string,
    message?: string,
    toastKey?: string | number,
    type?: 'reward' | 'error',
  ) => {
    if (toastKey && title && message && type) {
      return (
        <Toast
          type={type}
          title={title}
          message={message}
          toastKey={toastKey}
        />
      );
    }
  };

  render = (): React.ReactElement => {
    const {
      isLoading,
      data,
      // onChangeSearch,
      onPressNext,
      onPressPrev,
      hasNextPage,
      hasPrevPage,
    } = this.props;
    const { isPtMgmtVisible } = this.state;
    const { toastTitle, toastTime, toastType, toastMessage } = this.state;

    return (
      <Container>
        {this.renderToast(toastTitle, toastMessage, toastTime, toastType)}
        <Header>{words.usersHeader}</Header>
        <SearchAndPtMgmtContainer>
          {/* <SearchBarWrapper>
            <TextInput
              theme="search"
              placeholder={words.usersSearchBarPlaceholder}
              onChangeText={onChangeSearch}
            />
          </SearchBarWrapper> */}
          <PtMgmtButtonWrapper>
            <Button
              title={words.pointMgmtModalHeader}
              textSize="14px"
              onPress={this.onPressPtMgmtButton}
            />
          </PtMgmtButtonWrapper>
        </SearchAndPtMgmtContainer>
        <TableWrapper>
          {isLoading ? (
            <LoadingWrapper>
              <LoadingIndicator />
            </LoadingWrapper>
          ) : (
            <CustomDataTable
              data={data as IDataTableColumn<Object>[]}
              columns={COLUMNS as IDataTableColumn<Object>[]}
              selectableRows={false}
              onChangeSelect={() => {}}
              onRowClicked={() => {}}
            />
          )}
        </TableWrapper>
        <Cover isVisible={isPtMgmtVisible}>
          <PtMgmtModalContainer>
            <PointMgmtModal
              onConfirmPoints={this.onConfirmPoints}
              onClose={this.onClosePointMgmt}
              theme="forAll"
            />
          </PtMgmtModalContainer>
        </Cover>
        <PaginationButtonsWrapper>
          <PaginationButtons
            onPressNext={onPressNext}
            onPressPrev={onPressPrev}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </PaginationButtonsWrapper>
      </Container>
    );
  };
}

export default UsersTemplate;
