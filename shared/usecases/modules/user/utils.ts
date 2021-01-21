import { User, UserRoles, UserRankTitle } from '../../../domain/entities/user';

const initialValues: User = {
  name: {
    firstName: '',
    lastName: '',
  },
  email: '',
  id: '',
  photoURL: '',
  roles: {
    lecturer: false,
    subscriber: false,
    admin: false,
  },
  subscriberProfile: {
    rank: {
      score: 0,
      title: 'レギュラー',
      percentage: 0,
    },
    hasUnreadMessage: false,
    subscribedToMailingList: false,
    points: 10,
    recentlyBought: {
      videoLectures: [],
      manuals: [],
    },
    hasSeenWelcomeToast: false,
    lastGiveawayClaimDate: new Date(),
  },
  stripe: {
    customerId: '',
    card: {
      cardId: '',
      brand: '',
      last4: '',
    },
  },
  mailBoxNotifSettings: {
    notifyRepliesWithEmail: false,
    displaySendConfirmation: true,
  },
};

export const mapParamsToUserDocument = (
  params: {
    firstName: string;
    lastName: string;
    email: string;
    id?: string;
    subscribedToMailingList?: boolean;
  },
  accessType: UserRoles,
): User => {
  const { firstName, lastName, email, id, subscribedToMailingList } = params;

  const user: User = {
    ...initialValues,
    name: { firstName, lastName },
    email,
    id,
    roles: {
      ...initialValues.roles,
      ...accessType,
    },
    stripe: {
      ...initialValues.stripe,
    },
    subscriberProfile: {
      ...initialValues.subscriberProfile,
      subscribedToMailingList: subscribedToMailingList || false,
    },
  } as User;

  return user;
};

export const getDiscountValue = (rank: UserRankTitle): number => {
  switch (rank) {
    case 'レギュラー':
      return 1;
    case 'エリート':
      return 2;
    case 'プライム':
      return 5;
    default:
      return 0;
  }
};
