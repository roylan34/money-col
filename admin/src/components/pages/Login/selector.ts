import { RootStateOrAny } from 'react-redux';
import { SIGN_IN_REQUEST } from '../../../redux/auth/actionType';
import { FETCH_USER_REQUEST } from '../../../redux/user/actionType';

export type StateFromProps = {
  isLoggedIn: boolean;
  didSetPassword: true;
  loginError: { [key: string]: string } | {};
  id: string;
  hasFetchedUser: boolean;
  hasUpdatedDefaultPassword: boolean;
  isLoginPending: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: { failedRequests, token, authenticated, id, requests },
    user: { successfulRequests, hasUpdatedDefaultPassword },
  } = state;

  const loginError =
    failedRequests &&
    failedRequests[SIGN_IN_REQUEST] &&
    failedRequests[SIGN_IN_REQUEST].message
      ? { loginError: failedRequests[SIGN_IN_REQUEST].message }
      : {};

  const hasFetchedUser =
    successfulRequests && successfulRequests[FETCH_USER_REQUEST];

  const isLoggedIn = authenticated && !!token;

  const isLoginPending =
    requests && requests[SIGN_IN_REQUEST] && requests[SIGN_IN_REQUEST].pending;

  return {
    isLoggedIn,
    didSetPassword: true,
    loginError,
    id,
    hasFetchedUser,
    hasUpdatedDefaultPassword,
    isLoginPending,
  };
};
