import React, { PureComponent, ReactNode } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import {
  Container,
  Header,
  BackButtonWrapepr,
  HeaderLabel,
  UserDetailTableWrapper,
  UserDetailName,
  PointMgmtButtonContainer,
  PointMgmtButtonWrapper,
  UsageHistoryHeader,
  UsageHistTableWrapper,
  PointsSpent,
  Cover,
  PtMgmtModalContainer,
  LoadingContainer,
  PaginationButtonsWrapper,
} from './elements';
import { UserDetailsData, PtUsageHistoryData } from './types';
import { BackArrow } from '../../atoms/Icons';
import { Button } from '../../atoms/Button';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { CustomDataTable } from '../../molecules/CustomDataTable';
import { PointMgmtModal } from '../../molecules/PointMgmtModal';
import { PointMgmtValues } from '../../molecules/PointMgmtModal/types';
import { PaginationButtons } from '../../molecules/PaginationButtons';
import { words } from '../../../constants';

const USER_DETAIL_COLUMNS: IDataTableColumn<UserDetailsData>[] = [
  {
    name: '名前',
    selector: 'name',
    // @ts-ignore
    cell: (row: UserDetailsData): ReactNode => (
      <UserDetailName>{row.name}</UserDetailName>
    ),
  },
  {
    name: 'メールアドレス',
    selector: 'email',
  },
  {
    name: '最終ログイン',
    selector: 'createdAt',
  },
  {
    name: '保有ポイント',
    selector: 'ownedPoints',
  },
  {
    name: 'ランク',
    selector: 'rank',
  },
];

const PT_USAGE_HIST_COLUMN: IDataTableColumn<PtUsageHistoryData>[] = [
  {
    name: '名前',
    selector: 'event',
    width: '50%',
    // @ts-ignore
    cell: (row: PtUsageHistoryData): ReactNode => (
      <UserDetailName>{row.event}</UserDetailName>
    ),
  },
  {
    name: 'イベント日時',
    selector: 'eventDateAndTime',
    width: '25%',
  },
  {
    name: 'ポイント増減',
    selector: 'points',
    width: '25%',
    // @ts-ignore
    cell: (row: PtUsageHistoryData): ReactNode => (
      <PointsSpent isNegative={row.points < 0}>
        {row.points >= 0 ? `+${row.points}` : row.points}
      </PointsSpent>
    ),
  },
];

type Props = {
  userDetailsData: UserDetailsData[];
  ptUsageHistory: PtUsageHistoryData[];
  onConfirmPoints: (values: PointMgmtValues) => void;
  onPressBackArrow: () => void;
  isFetchingUserEvents?: boolean;
  isUpdatingUserPoints?: boolean;
  onPressPrev: () => void;
  onPressNext: () => void;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

type State = {
  isPtMgmtVisible: boolean;
};

class UsersDetailsTemplate extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isPtMgmtVisible: false,
    };
  }

  onPressPointMgmt = () => {
    this.setState({ isPtMgmtVisible: true });
  };

  onClosePointMgmt = () => {
    this.setState({ isPtMgmtVisible: false });
  };

  onConfirmPoints = (values: PointMgmtValues) => {
    const { onConfirmPoints } = this.props;

    this.setState({ isPtMgmtVisible: false }, () => onConfirmPoints(values));
  };

  render = (): React.ReactElement => {
    const {
      userDetailsData,
      ptUsageHistory,
      onPressBackArrow,
      isFetchingUserEvents,
      isUpdatingUserPoints,
      onPressPrev,
      onPressNext,
      hasPrevPage,
      hasNextPage,
    } = this.props;
    const { isPtMgmtVisible } = this.state;

    return (
      <Container>
        <Header>
          <BackButtonWrapepr onClick={onPressBackArrow}>
            <BackArrow />
          </BackButtonWrapepr>
          <HeaderLabel>{words.userDetailsBackLabel}</HeaderLabel>
        </Header>
        <UserDetailTableWrapper>
          {isUpdatingUserPoints ? (
            <LoadingContainer>
              <LoadingIndicator />
            </LoadingContainer>
          ) : (
            <CustomDataTable
              data={userDetailsData}
              columns={USER_DETAIL_COLUMNS as IDataTableColumn<Object>[]}
              selectableRows={false}
              onChangeSelect={() => {}}
              onRowClicked={() => {}}
            />
          )}
        </UserDetailTableWrapper>
        <PointMgmtButtonContainer>
          <PointMgmtButtonWrapper>
            <Button
              title={words.pointMgmtModalHeader}
              textSize="14px"
              onPress={this.onPressPointMgmt}
            />
          </PointMgmtButtonWrapper>
        </PointMgmtButtonContainer>
        <UsageHistoryHeader>{words.userDetailsPtUsageHist}</UsageHistoryHeader>
        {isFetchingUserEvents ? (
          <LoadingContainer>
            <LoadingIndicator />
          </LoadingContainer>
        ) : (
          <UsageHistTableWrapper>
            <CustomDataTable
              data={(ptUsageHistory as unknown) as IDataTableColumn<Object>[]}
              columns={PT_USAGE_HIST_COLUMN as IDataTableColumn<Object>[]}
              selectableRows={false}
              onChangeSelect={() => {}}
              onRowClicked={() => {}}
            />
          </UsageHistTableWrapper>
        )}
        <PaginationButtonsWrapper>
          <PaginationButtons
            onPressNext={onPressNext}
            onPressPrev={onPressPrev}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </PaginationButtonsWrapper>

        <Cover isVisible={isPtMgmtVisible}>
          <PtMgmtModalContainer>
            <PointMgmtModal
              onConfirmPoints={this.onConfirmPoints}
              onClose={this.onClosePointMgmt}
            />
          </PtMgmtModalContainer>
        </Cover>
      </Container>
    );
  };
}

export default UsersDetailsTemplate;
