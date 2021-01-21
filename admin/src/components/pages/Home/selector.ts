import { RootStateOrAny } from 'react-redux';
import {
  UPDATE_USER_REQUEST,
  UPDATE_MAILBOX_SETTINGS_REQUEST,
} from '../../../redux/user/actionType';

export type StateFromProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photoURL?: string;
  notifyRepliesWithEmail: boolean;
  isUpdatingUser: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    user: {
      name: { firstName, lastName },
      email,
      photoURL,
      id,
      mailBoxNotifSettings: { notifyRepliesWithEmail },
      requests: userRequests,
    },
  } = state;

  const isUpdatingUser =
    (userRequests &&
      userRequests[UPDATE_USER_REQUEST] &&
      (userRequests[UPDATE_USER_REQUEST].pending as boolean)) ||
    (userRequests &&
      userRequests[UPDATE_MAILBOX_SETTINGS_REQUEST] &&
      (userRequests[UPDATE_MAILBOX_SETTINGS_REQUEST].pending as boolean));

  return {
    id,
    firstName,
    lastName,
    email,
    photoURL,
    notifyRepliesWithEmail,
    isUpdatingUser,
  };
};
