import { RootStateOrAny } from 'react-redux';
import { RECOVER_EMAIL_REQUEST } from '../../../redux/auth/actionType';

export type StateFromProps = {
  didRecoverEmail: boolean;
  recoverEmailError: string;
  email: string;
  isLoggedIn: boolean;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: { failedRequests, successfulRequests, authenticated, token },
    user: { email },
  } = state;

  const recoverEmailError =
    failedRequests && failedRequests[RECOVER_EMAIL_REQUEST]
      ? failedRequests[RECOVER_EMAIL_REQUEST].message
      : '';

  const didRecoverEmail = Boolean(
    successfulRequests && successfulRequests[RECOVER_EMAIL_REQUEST],
  );

  const isLoggedIn = authenticated && token;

  return {
    didRecoverEmail,
    recoverEmailError,
    email,
    isLoggedIn,
  };
};
