import { RootStateOrAny } from 'react-redux';

import { UsersData } from '../../templates/UsersTemplate/types';
import { Subscriber } from '../../../domain/entities';

export type StateFromProps = {
  users: UsersData[];
  isLoading: boolean;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  addGiveAwaySuccessInfo: {
    id: string;
    message: string;
  };
  addGiveAwayError: string;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    subscriber: { subscribers, isSending, hasPrevPage, hasNextPage },
    giveaway,
  } = state;

  const users: UsersData[] = Object.values(subscribers).map(subscriber => {
    const {
      id,
      email,
      name: { firstName = '', lastName = '' },
      subscriberProfile,
      lastLogIn,
    } = subscriber as Subscriber & { lastLogIn: Date };
    const year = lastLogIn.getFullYear();
    const month = lastLogIn.getMonth() + 1;
    const date = lastLogIn.getDate();
    return {
      userId: id,
      name: `${lastName} ${firstName}`,
      email,
      lastLogin: `${year}/${month}/${date}`,
      rank: subscriberProfile ? subscriberProfile.rank.title : '',
      ownedPoints: subscriberProfile ? subscriberProfile.points : 0,
    } as UsersData;
  });

  const addGiveAwaySuccessInfo = giveaway &&
    giveaway.requests.id &&
    giveaway.requests.message && {
      id: giveaway.requests.id,
      message: giveaway.requests.message,
    };

  const addGiveAwayError = giveaway && giveaway.requests.error;

  return {
    users,
    isLoading: isSending,
    hasPrevPage,
    hasNextPage,
    addGiveAwaySuccessInfo,
    addGiveAwayError,
  };
};
