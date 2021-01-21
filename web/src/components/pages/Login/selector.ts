import { RootStateOrAny } from 'react-redux';
import { SIGN_IN_REQUEST } from '../../../redux/auth/actionType';

export type StateFromProps = {
  isLoggedIn: boolean;
  didSetPassword: true;
  didLogin: boolean;
  loginError: string;
  isLoginPending: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: {
      failedRequests,
      successfulRequests,
      token,
      authenticated,
      requests,
    },
  } = state;

  const loginError =
    failedRequests &&
    failedRequests[SIGN_IN_REQUEST] &&
    failedRequests[SIGN_IN_REQUEST].message;

  const isLoginPending =
    requests[SIGN_IN_REQUEST] && (requests[SIGN_IN_REQUEST].pending as boolean);

  const didLogin = !!(
    successfulRequests && successfulRequests[SIGN_IN_REQUEST]
  );

  const isLoggedIn = authenticated && Boolean(token);

  return {
    isLoggedIn,
    didSetPassword: true,
    didLogin,
    loginError,
    isLoginPending,
  };
};
