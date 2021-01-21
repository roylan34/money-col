import { signIn } from '../../../redux/auth/action';
import { fetchUser } from '../../../redux/user/action';
import { AnyAction } from 'redux';

export type LoginDispatchProps = { email: string; password: string };

export const login = (
  email: string,
  password: string,
  saveLoginStatus: boolean,
): AnyAction => {
  return signIn(email, password, saveLoginStatus);
};

export const getUser = (id: string): AnyAction => {
  return fetchUser(id);
};

export type DispatchFromProps = {
  login: typeof login;
  getUser: typeof getUser;
};
