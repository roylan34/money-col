import { RootStateOrAny } from 'react-redux';
import { TopNavBarProps } from '../../components/organisms/TopNavBar/types';
import { paths } from '../../constants/routes/urls';
// import { Conversation } from '../../domain/entities';

export type StateFromProps = {
  isLoggedIn: boolean;
  topNavBarParams: TopNavBarProps;
  userId: string;
  lastLogIn?: string;
  lastGiveawayClaimDate?: Date;
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    auth: { token, authenticated },
    user: {
      id,
      name: { firstName, lastName },
      photoURL,
      lastLogIn,
      subscriberProfile: { lastGiveawayClaimDate },
    },
    // conversation: { conversations },
  } = state;

  const isLoggedIn = authenticated && Boolean(token);

  // const convos = Object.values(conversations) as Array<Conversation>;
  // const isUnreadMessage = (convo: Conversation) => {
  //   const {
  //     previewMessageData: { unreadMessages },
  //   } = convo;
  //   return unreadMessages[id] > 0;
  // };
  // const hasUnreadMessage = convos.findIndex(isUnreadMessage) > -1;

  const topNavBarParams = {
    homeLink: process.env.REACT_APP_WP_ENDPOINT || '',
    links: {
      myPageTopUrl: paths.home,
    },
    // hasNotif: hasUnreadMessage,
    name: `${lastName} ${firstName}`,
    profileLabel: authenticated ? `${lastName[0]}` : '',
    profileImgSrc: photoURL,
  } as TopNavBarProps;

  return {
    isLoggedIn,
    topNavBarParams,
    userId: id,
    lastLogIn,
    lastGiveawayClaimDate,
  };
};
