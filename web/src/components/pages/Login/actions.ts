import { signIn } from '../../../redux/auth/action';
import { AnyAction } from 'redux';

export type LoginDispatchProps = { email: string; password: string };

export const login = (email: string, password: string): AnyAction => {
  return signIn(email, password);
};

export type DispatchFromProps = {
  login: typeof login;
};
