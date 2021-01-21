import { setToken, setIsAuthenticated, signOut } from '../../redux/auth/action';
import { setLastLogIn } from '../../redux/user/action';
import { AnyAction } from 'redux';
import {
  getMessages,
  getConversationById,
} from '../../redux/conversation/action';

export const resetToken = (token: string): AnyAction => {
  return setToken(token);
};

export const resetAuthenticated = (isAuthenticated: boolean): AnyAction => {
  return setIsAuthenticated(isAuthenticated);
};

export const logOut = (): AnyAction => {
  return signOut();
};

export const setInstructorLastLogIn = (
  id: string,
  params: { lastLogIn: Date },
): AnyAction => {
  return setLastLogIn(id, params);
};

export const getUserConversationsById = (conversationId: string): AnyAction => {
  return getConversationById(conversationId);
};

export const getUserMessages = (conversationId: string): AnyAction => {
  return getMessages(conversationId);
};

export type DispatchFromProps = {
  resetToken: typeof resetToken;
  resetAuthenticated: typeof resetAuthenticated;
  logOut: typeof logOut;
  setInstructorLastLogIn: typeof setInstructorLastLogIn;
  getUserMessages: typeof getUserMessages;
  getUserConversationsById: typeof getUserConversationsById;
};
