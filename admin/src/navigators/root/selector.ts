import { RootStateOrAny } from 'react-redux';
import { SIGN_OUT_REQUEST } from '../../redux/auth/actionType';

export type StateFromProps = {
  isLoggedIn: boolean;
  signOutErrors: { [key: string]: string } | {};
  isInstructor: boolean;
  userId: string;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: { token, authenticated, failedRequests },
    user: { roles, id },
  } = state;

  const isLoggedIn = authenticated && !!token;
  const signOutErrors =
    (failedRequests && failedRequests[SIGN_OUT_REQUEST]) || {};
  const isInstructor = roles && roles.lecturer;

  return {
    isLoggedIn,
    signOutErrors,
    isInstructor,
    userId: id,
  };
};
