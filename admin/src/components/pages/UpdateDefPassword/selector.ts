import { RootStateOrAny } from 'react-redux';
import { UPDATE_DEF_PASSWORD_REQUEST } from '../../../redux/auth/actionType';

export type StateFromProps = {
  id: string;
  hasUpdatedPassword: boolean;
  updatePasswordError: { [key: string]: string } | {};
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: { failedRequests, succeededRequests, id },
  } = state;

  const updatePasswordError =
    failedRequests &&
    failedRequests[UPDATE_DEF_PASSWORD_REQUEST] &&
    failedRequests[UPDATE_DEF_PASSWORD_REQUEST].message
      ? {
          updatePasswordError:
            failedRequests[UPDATE_DEF_PASSWORD_REQUEST].message,
        }
      : {};

  const hasUpdatedPassword =
    succeededRequests && succeededRequests[UPDATE_DEF_PASSWORD_REQUEST];

  return { id, hasUpdatedPassword, updatePasswordError };
};
