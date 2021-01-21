import React, { PureComponent } from 'react';
import { PendingPaymentTemplate } from '../../templates/PendingPaymentTemplate';
import { PendingPaymentData } from '../../templates/PendingPaymentTemplate/types';

type Props = {
  pendingPayments: Array<PendingPaymentData>;
  isSettlingPendingPayment: boolean;
  isFetchingPaymentHistories: boolean;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  fetchPendingPayments: (query?: {
    where?: [
      string,
      '<' | '<=' | '==' | '>=' | '>',
      string | number | boolean,
    ][];
    limit: number;
    mode: 'prev' | 'next';
    orderBy?: string;
    sort?: 'desc' | 'asc';
    firstId: string;
    lastId: string;
  }) => void;
  completePendingTransaction: (
    pendingId: string,
    userId: string,
    email: string,
  ) => void;
};

export default class PendingPaymentsPage extends PureComponent<Props> {
  componentDidMount() {
    this.fetchPendingTransactions('mount');
  }

  componentDidUpdate(prevProps: Props) {
    const { isSettlingPendingPayment } = this.props;

    if (
      prevProps.isSettlingPendingPayment !== isSettlingPendingPayment &&
      !isSettlingPendingPayment
    ) {
      this.fetchPendingTransactions('mount');
    }
  }

  fetchPendingTransactions = (mode: 'prev' | 'next' | 'mount') => {
    const { fetchPendingPayments, pendingPayments } = this.props;
    const len = pendingPayments.length;
    const firstId = len > 0 && mode !== 'mount' ? pendingPayments[0].id : '';
    const lastId =
      len > 0 && mode !== 'mount' ? pendingPayments[len - 1].id : '';

    fetchPendingPayments({
      limit: 10,
      mode: mode === 'mount' ? 'next' : mode,
      orderBy: 'createdAt',
      sort: 'desc',
      where: [['status', '==', 'PENDING']],
      firstId,
      lastId,
    });
  };

  onPressNext = () => {
    this.fetchPendingTransactions('next');
  };

  onPressPrev = () => {
    this.fetchPendingTransactions('prev');
  };

  render = (): React.ReactElement => {
    const {
      pendingPayments,
      isFetchingPaymentHistories,
      isSettlingPendingPayment,
      completePendingTransaction,
      hasNextPage,
      hasPrevPage,
    } = this.props;

    return (
      <PendingPaymentTemplate
        data={pendingPayments}
        onAddPoints={completePendingTransaction}
        isLoading={isSettlingPendingPayment || isFetchingPaymentHistories}
        onPressNext={this.onPressNext}
        onPressPrev={this.onPressPrev}
        hasNextPage={hasNextPage || isFetchingPaymentHistories}
        hasPrevPage={hasPrevPage || isFetchingPaymentHistories}
      />
    );
  };
}
