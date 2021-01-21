import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { PointMgmtValues } from '../../molecules/PointMgmtModal/types';
import { UsersTemplate } from '../../templates/UsersTemplate';
import { UsersData } from '../../templates/UsersTemplate/types';

type Props = {
  fetchSubscribers: (query: {
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
  users: UsersData[];
  isLoading: boolean;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  addGiveaway: (params: { points: number; effectiveDate: Date }) => void;
  addGiveAwaySuccessInfo?: {
    message: string;
    id: string;
  };
  addGiveAwayError?: string;
} & RouteComponentProps;

export default class Mail extends PureComponent<Props> {
  componentDidMount() {
    this.fetchUsersByPage('mount');
  }

  render = (): React.ReactNode => {
    const {
      users,
      isLoading,
      hasPrevPage,
      hasNextPage,
      addGiveAwaySuccessInfo,
      addGiveAwayError,
    } = this.props;

    return (
      <UsersTemplate
        data={users}
        // onChangeSearch={e => console.log('on-change-search', e)}
        onConfirmPoints={this.handleUpdatePoints}
        onPressNext={this.onPressNext}
        onPressPrev={this.onPressPrev}
        hasNextPage={hasNextPage || isLoading}
        hasPrevPage={hasPrevPage || isLoading}
        isLoading={isLoading}
        addGiveAwaySuccessInfo={addGiveAwaySuccessInfo}
        addGiveAwayError={addGiveAwayError}
      />
    );
  };

  fetchUsersByPage = (mode: 'prev' | 'next' | 'mount') => {
    const { fetchSubscribers, users } = this.props;
    const len = users.length;
    const firstId = len > 0 && mode !== 'mount' ? users[0].userId : '';
    const lastId = len > 0 && mode !== 'mount' ? users[len - 1].userId : '';

    fetchSubscribers({
      limit: 10,
      mode: mode === 'mount' ? 'next' : mode,
      orderBy: 'lastLogIn',
      sort: 'desc',
      firstId,
      lastId,
    });
  };

  handleUpdatePoints = ({ date, points }: PointMgmtValues) => {
    const { addGiveaway } = this.props;
    const effectiveDate = date ? new Date(date) : new Date();
    addGiveaway({ points, effectiveDate });
  };

  onPressNext = () => {
    this.fetchUsersByPage('next');
  };

  onPressPrev = () => {
    this.fetchUsersByPage('prev');
  };
}
