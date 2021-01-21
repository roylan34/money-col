import { RootStateOrAny } from 'react-redux';
import { AuthStore } from './reducer';

const authStore = (state: RootStateOrAny): AuthStore => state.auth;

export const getToken = (state: RootStateOrAny): string =>
  authStore(state).token;
