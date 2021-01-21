import { BaseModel } from './baseModel';
import { Purchase } from './purchase';
import { Stripe } from './stripe';

export type UserRankTitle = 'レギュラー' | 'エリート' | 'プライム';

export type SubscriberProfile = {
  rank: {
    score: number;
    title: UserRankTitle;
    percentage: number;
  };
  hasUnreadMessage: boolean;
  subscribedToMailingList: boolean;
  points: number;
  recentlyBought?: {
    videoLectures: Array<string>;
    manuals: Array<string>;
  };
  hasSeenWelcomeToast?: boolean;
  lastGiveawayClaimDate?: Date;
};

export type UserRoles = {
  lecturer: boolean;
  subscriber: boolean;
  admin: boolean;
};

export type MailboxNotifSettings = {
  notifyRepliesWithEmail: boolean;
  displaySendConfirmation: boolean;
};

export type User = {
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  photoURL?: string;
  roles: UserRoles;
  subscriberProfile?: SubscriberProfile;
  stripe: Stripe;
  purchases?: Array<Purchase>;
  lastLogIn?: Date;
  mailBoxNotifSettings: MailboxNotifSettings;
} & BaseModel;
