import React, { PureComponent, ReactNode } from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import {
  Container,
  Header,
  TableWrapper,
  AddPoints,
  LoadingWrapper,
  PaginationButtonsWrapper,
} from './elements';
import { PendingPaymentData } from './types';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { CustomDataTable } from '../../molecules/CustomDataTable';
import { PaginationButtons } from '../../molecules/PaginationButtons';
import { formatNumberWithCommas } from '../../../utils';
import words from '../../../constants/words';

type Props = {
  data: PendingPaymentData[];
  isLoading?: boolean;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  onAddPoints: (pendingId: string, userId: string, email: string) => void;
  onPressPrev: () => void;
  onPressNext: () => void;
};

class PendingPaymentTemplate extends PureComponent<Props> {
  static defaultProps = {
    isLoading: false,
  };
  COLUMNS: IDataTableColumn<PendingPaymentData>[] = [
    {
      name: 'メールアドレス',
      selector: 'email',
      width: '30%',
    },
    {
      name: '決済日時',
      selector: 'createdAt',
      width: '15%',
    },
    {
      name: '購入ポイント',
      selector: 'pointsPurchased',
      width: '9%',
    },
    {
      name: '支払い金額',
      selector: 'amountInYen',
      // @ts-ignore
      cell: (row: PendingPaymentData): ReactNode => (
        <span>¥{formatNumberWithCommas(row.amountInYen)}</span>
      ),
      width: '15%',
    },
    {
      name: '支払い方法',
      selector: 'type',
      width: '14.5%',
    },
    {
      name: 'トランザクション',
      // @ts-ignore
      cell: (row: PendingPaymentData) => (
        <AddPoints
          onClick={() => this.onClickAddPoints(row.id, row.userId, row.email)}>
          {words.addPoints}
        </AddPoints>
      ),
      width: '16.5%',
    },
  ];

  onClickAddPoints = (pendingId: string, userId: string, email: string) => {
    const { onAddPoints } = this.props;

    onAddPoints(pendingId, userId, email);
  };

  render = (): React.ReactElement => {
    const {
      data,
      isLoading,
      onPressNext,
      onPressPrev,
      hasNextPage,
      hasPrevPage,
    } = this.props;

    return (
      <Container>
        <Header>{words.pendingPaymentHeader}</Header>
        <TableWrapper>
          {isLoading ? (
            <LoadingWrapper>
              <LoadingIndicator />
            </LoadingWrapper>
          ) : (
            <CustomDataTable
              data={(data as unknown) as IDataTableColumn<Object>[]}
              columns={this.COLUMNS as IDataTableColumn<Object>[]}
              selectableRows={false}
              onChangeSelect={() => {}}
              onRowClicked={() => {}}
            />
          )}
        </TableWrapper>
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

export default PendingPaymentTemplate;
