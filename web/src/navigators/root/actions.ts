import { signOut } from '../../redux/auth/action';
import {
  fetchUser,
  setLastLogIn,
  claimGiveaways,
} from '../../redux/user/action';
import {
  getMessages,
  getConversationById,
} from '../../redux/conversation/action';
import { AnyAction } from 'redux';

export const logOut = (): AnyAction => {
  return signOut();
};

export const getUser = (id: string): AnyAction => {
  return fetchUser(id);
};

export const getUserConversationsById = (conversationId: string): AnyAction => {
  return getConversationById(conversationId);
};

export const getUserMessages = (conversationId: string): AnyAction => {
  return getMessages(conversationId);
};

export const setUserLastLogIn = (
  id: string,
  params: { lastLogIn: Date },
): AnyAction => {
  return setLastLogIn(id, params);
};

export const claimValidGiveaways = (
  userId: string,
  params: { prevLogInDate: Date; currLogInDate: Date },
): AnyAction => {
  return claimGiveaways(userId, params);
};

export type DispatchFromProps = {
  logOut: typeof logOut;
  getUser: typeof getUser;
  getUserMessages: typeof getUserMessages;
  getUserConversationsById: typeof getUserConversationsById;
  setUserLastLogIn: typeof setUserLastLogIn;
  claimValidGiveaways: typeof claimValidGiveaways;
};
