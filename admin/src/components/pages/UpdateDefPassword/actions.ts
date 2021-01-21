import { AnyAction } from 'redux';
import { updateDefPassword } from '../../../redux/auth/action';

export type UpdatePasswordDispatchProps = { password: string; id: string };

export const updatePassword = (password: string, id: string): AnyAction => {
  return updateDefPassword(password, id);
};

export type DispatchFromProps = {
  updatePassword: typeof updatePassword;
};
