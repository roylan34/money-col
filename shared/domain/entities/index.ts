import {
  Advertisement as AdvertisementType,
  AdvertisementModel as AdvertisementModelType,
} from './advertisement';
import { EAProgram as EAProgramType } from './EAProgram';
import { Manual as ManualType } from './manual';
import { News as NewsType } from './news';
import { Purchase as PurchaseType } from './purchase';
import { Stripe as StripeType } from './stripe';
import { Todo as TodoType } from './todo';
import { TopItem as TopItemType } from './topItem';
import {
  User as UserType,
  UserRoles as UserRolesType,
  UserRankTitle as UserRankTitleType,
} from './user';
import {
  VideoLecture as VideoLectureType,
  VideoLectureTags as VideoLectureTagsType,
} from './videoLecture';
import { WPPost as WPPostType } from './wpPost';
import { ProjectContent as ProjectContentType } from './projectContent';
import { AdminUser as AdminUserType } from './adminUser';
import { Conversation as ConversationType } from './conversation';
import { Message as MessageType } from './message';
import { Giveaway as GiveawayType } from './giveaway';
import { Mail as MailType, EmailTypes as EmailTypesType } from './mail';
import { PaymentHistory as PaymentHistoryType } from './paymentHistory';

export type Advertisement = AdvertisementType;
export type AdvertisementModel = AdvertisementModelType;
export type EAProgram = EAProgramType;
export type Manual = ManualType;
export type News = NewsType;
export type Purchase = PurchaseType;
export type Stripe = StripeType;
export type Todo = TodoType;
export type TopItem = TopItemType;
export type User = UserType;
export type UserRoles = UserRolesType;
export type UserRankTitle = UserRankTitleType;
export type VideoLecture = VideoLectureType;
export type WPPost = WPPostType;
export type ProjectContent = ProjectContentType;
export type AdminUser = AdminUserType;
export type VideoLectureTags = VideoLectureTagsType;
export type Message = MessageType;
export type Conversation = ConversationType;
export type Giveaway = GiveawayType;
export type Mail = MailType;
export type EmailTypes = EmailTypesType;
export type PaymentHistory = PaymentHistoryType;
