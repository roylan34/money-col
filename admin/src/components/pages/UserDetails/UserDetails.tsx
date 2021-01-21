import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { UsersDetailsTemplate } from '../../templates/UsersDetailsTemplate';
import { PointMgmtValues } from '../../molecules/PointMgmtModal/types';
import { Subscriber } from '../../../domain/entities';
import { paths } from '../../../constants/routes/urls';

import {
  UserDetailsData,
  PtUsageHistoryData,
} from '../../templates/UsersDetailsTemplate/types';

type Props = {
  fetchPurchases: (
    userId: string,
    query: {
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
    },
  ) => void;
  pointHistory: PtUsageHistoryData[];
  updateSubscriber: (
    userId: string,
    points: number,
    inputPoints: number,
  ) => void;
  subscribers: { [key: string]: Subscriber };
  isFetchingUserEvents: boolean;
  isUpdatingUserPoints: boolean;
  hasPrevPage: boolean;
  hasNextPage: boolean;
} & RouteComponentProps<{}, {}, { userId: string } & UserDetailsData>;

type State = {
  orderBy: string;
  sort: 'asc' | 'desc';
  mode: 'prev' | 'next';
};

export default class Mail extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      orderBy: 'createdAt',
      sort: 'desc',
      mode: 'prev',
    };
  }

  componentDidMount() {
    const {
      location: { state },
    } = this.props;

    if (!state) {
      this.goBack();
    } else {
      this.fetchPurchaseHistory('mount');
    }
  }

  componentDidUpdate(prevProps: any) {
    const {
      subscribers,
      location: {
        state: { userId },
      },
    } = this.props;

    if (
      prevProps.subscribers[userId] !== subscribers[userId] &&
      subscribers[userId]
    ) {
      const historyState = {
        ...this.props.location.state,
        ownedPoints: subscribers[userId].subscriberProfile?.points,
      };

      // @ts-ignore
      this.props.history.replace(paths.userDetails, historyState);
    }
  }

  handleConfirmPoints = (values: PointMgmtValues) => {
    const inputPoints = values.points;
    const {
      updateSubscriber,
      location: {
        state: { ownedPoints, userId },
      },
    } = this.props;

    const diff = ownedPoints + inputPoints;
    const newPoints = diff > 0 ? diff : 0;
    updateSubscriber(userId, newPoints, inputPoints);
  };

  render = (): React.ReactNode => {
    const {
      location: { state },
      pointHistory,
      isFetchingUserEvents,
      isUpdatingUserPoints,
      hasPrevPage,
      hasNextPage,
    } = this.props;
    const userData = (state ? [state] : []) as UserDetailsData[];

    const _hasPrevPage = isFetchingUserEvents ? false : hasPrevPage;
    const _hasNextPage = isFetchingUserEvents ? false : hasNextPage;

    return (
      <UsersDetailsTemplate
        userDetailsData={userData}
        ptUsageHistory={pointHistory}
        onConfirmPoints={this.handleConfirmPoints}
        onPressBackArrow={this.goBack}
        isFetchingUserEvents={isFetchingUserEvents}
        isUpdatingUserPoints={isUpdatingUserPoints}
        onPressNext={this.onPressNext}
        onPressPrev={this.onPressPrev}
        hasPrevPage={_hasPrevPage}
        hasNextPage={_hasNextPage}
      />
    );
  };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  onPressNext = () => {
    this.setState({ mode: 'next' }, () => {
      this.fetchPurchaseHistory('next');
    });
  };

  onPressPrev = () => {
    this.setState({ mode: 'prev' }, () => {
      this.fetchPurchaseHistory('prev');
    });
  };

  fetchPurchaseHistory = (mode: 'prev' | 'next' | 'mount') => {
    const {
      fetchPurchases,
      pointHistory,
      location: { state },
    } = this.props;
    const { orderBy } = this.state;

    const len = pointHistory.length;
    const firstId = len > 0 && mode !== 'mount' ? pointHistory[0].id : '';
    const lastId = len > 0 && mode !== 'mount' ? pointHistory[len - 1].id : '';

    fetchPurchases(state.userId, {
      limit: 10,
      firstId,
      lastId,
      mode: mode === 'mount' ? 'next' : mode,
      orderBy,
    });
  };
}
