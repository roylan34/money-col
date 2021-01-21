import { RootStateOrAny } from 'react-redux';
import { RESET_PASSWORD_LINK_REQUEST } from '../../../redux/auth/actionType';

export type StateFromProps = {
  requestPasswordLinkSuccess: boolean;
  requestPasswordLinkError?: string;
  email: string;
  isResetPasswordLinkPending: boolean;
  isLoggedIn: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: {
      failedRequests,
      successfulRequests,
      requests,
      authenticated,
      token,
    },
    user: { email },
  } = state;

  const requestPasswordLinkError =
    failedRequests &&
    failedRequests[RESET_PASSWORD_LINK_REQUEST] &&
    failedRequests[RESET_PASSWORD_LINK_REQUEST].message;

  const requestPasswordLinkSuccess = Boolean(
    successfulRequests && successfulRequests[RESET_PASSWORD_LINK_REQUEST],
  );

  const isResetPasswordLinkPending =
    requests[RESET_PASSWORD_LINK_REQUEST] &&
    requests[RESET_PASSWORD_LINK_REQUEST].pending;

  const isLoggedIn = authenticated && Boolean(token);

  return {
    requestPasswordLinkSuccess,
    requestPasswordLinkError,
    email,
    isResetPasswordLinkPending,
    isLoggedIn,
  };
};
