import { RootStateOrAny } from 'react-redux';
import { VERIFY_EMAIL_REQUEST } from '../../../redux/auth/actionType';

export type StateFromProps = {
  emailVerified: boolean;
  verifyEmailError: string;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: { emailVerified, failedRequests, successfulRequests },
  } = state;

  const verifyEmailError =
    failedRequests &&
    failedRequests[VERIFY_EMAIL_REQUEST] &&
    failedRequests[VERIFY_EMAIL_REQUEST].message;

  const isEmailVerified =
    emailVerified &&
    Boolean(successfulRequests && successfulRequests[VERIFY_EMAIL_REQUEST]);

  return {
    emailVerified: isEmailVerified,
    verifyEmailError,
  };
};
