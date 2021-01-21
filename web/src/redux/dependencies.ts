import AuthServiceFirebaseImpl from '../../../shared/interface/services/AuthServiceFirebaseImpl';
import WPServiceImpl from '../../../shared/interface/services/WPServiceImpl';
import StripeServiceImpl from '../../../shared/interface/services/StripeServiceImpl';

import UserRepositoryFirebaseImpl from '../../../shared/interface/repositories/UserRepositoryFirebaseImpl';
import VideoLectureRepositoryFirebaseImpl from '../../../shared/interface/repositories/VideoLectureRepositoryFirebaseImpl';
import ManualRepositoryFirebaseImpl from '../../../shared/interface/repositories/ManualRepositoryFirebaseImpl';
import EAProgramRepositoryFirebaseImpl from '../../../shared/interface/repositories/EAProgramRepositoryFirebaseImpl';
import ConversationRepositoryFirebaseImpl from '../../../shared/interface/repositories/ConversationRepositoryFirebaseImpl';
import ProjectContentRepositoryFirebaseImpl from '../../../shared/interface/repositories/ProjectContentRepositoryFirebaseImpl';
import PurchaseRepositoryFirebaseImpl from '../../../shared/interface/repositories/PurchaseRepositoryFirebaseImpl';
import SettingsRepositoryFirebaseImpl from '../../../shared/interface/repositories/SettingsRepositoryFirebaseImpl';
import PaymentHistoryRepositoryFirebaseImpl from '../../../shared/interface/repositories/PaymentHistoryRepositoryFirebaseImpl';
import GiveawayRepositoryFirebaseImpl from '../../../shared/interface/repositories/GiveawayRepositoryFirebaseImpl';
import MailRepositoryFirebaseImpl from '../../../shared/interface/repositories/MailRepositoryFirebaseImpl';

import authUseCases from '../../../shared/usecases/modules/auth';
import userUseCases from '../../../shared/usecases/modules/user';
import paymentHistoryUseCases from '../../../shared/usecases/modules/paymentHistory';
import videoLectureUseCases from '../../../shared/usecases/modules/videoLecture';
import manualUseCases from '../../../shared/usecases/modules/manual';
import newsUseCases from '../../../shared/usecases/modules/news';
import EAProgramUseCases from '../../../shared/usecases/modules/EAProgram';
import wpPostUseCases from '../../../shared/usecases/modules/wpPost';
import conversationUseCases from '../../../shared/usecases/modules/conversation';
import purchaseUseCases from '../../../shared/usecases/modules/purchase';
import projectContentUseCases from '../../../shared/usecases/modules/projectContent';
import settingsUseCases from '../../../shared/usecases/modules/settings';

import {
  firestore,
  auth,
  storage,
  emailAuthProvider,
  timestamp,
} from '../firebase';
import { wpapiConfig, stripeSecretKey } from '../config';
import wpapi from '../wpapi';

import { arrayOfObjectsToObject, formatMessage } from '../utils';

// @ts-ignore
const authService = new AuthServiceFirebaseImpl(auth, emailAuthProvider);
const wpService = new WPServiceImpl(wpapiConfig, wpapi);
const stripeService = new StripeServiceImpl(stripeSecretKey);

// @ts-ignore
const userRepo = new UserRepositoryFirebaseImpl(firestore, storage, timestamp);
const videoLectureRepo = new VideoLectureRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
  storage,
  timestamp,
);
const manualRepo = new ManualRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
  storage,
  timestamp,
);
const EAProgramRepo = new EAProgramRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
  storage,
  timestamp,
);
// @ts-ignore
const purchaseRepo = new PurchaseRepositoryFirebaseImpl(firestore, timestamp);
const projectContentRepo = new ProjectContentRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
  storage,
  timestamp,
);
const paymentHistRepo = new PaymentHistoryRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
  timestamp,
);

const conversationRepo = new ConversationRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
  storage,
  timestamp,
);

const settingsRepo = new SettingsRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
);

// @ts-ignore
const giveawayRepo = new GiveawayRepositoryFirebaseImpl(firestore, timestamp);

// @ts-ignore
const mailRepo = new MailRepositoryFirebaseImpl(firestore, timestamp);

export const userInteractor = userUseCases({
  userRepo,
  stripeService,
  authService,
  purchaseRepo,
  paymentHistRepo,
  giveawayRepo,
});
export const paymentHistoryInteractor = paymentHistoryUseCases({
  paymentHistoryRepo: paymentHistRepo,
});
const authInteractor = authUseCases({ authService, userInteractor });
const videoLectureInteractor = videoLectureUseCases({ videoLectureRepo });
const manualInteractor = manualUseCases({ manualRepo });
const newsInteractor = newsUseCases({ wpService });
const EAProgramInteractor = EAProgramUseCases({ EAProgramRepo });
const WPPostInteractor = wpPostUseCases({ wpService });
const purchaseInteractor = purchaseUseCases({
  purchaseRepo,
  manualRepo,
  videoLectureRepo,
  projectContentRepo,
});
const projectContentInteractor = projectContentUseCases({ projectContentRepo });
const conversationInteractor = conversationUseCases({
  userRepo,
  conversationRepo,
  mailRepo,
});
const settingsInteractor = settingsUseCases({ settingsRepo });

export default {
  authInteractor,
  userInteractor,
  paymentHistoryInteractor,
  videoLectureInteractor,
  manualInteractor,
  newsInteractor,
  EAProgramInteractor,
  WPPostInteractor,
  purchaseInteractor,
  projectContentInteractor,
  conversationInteractor,
  settingsInteractor,
  utils: {
    arrayOfObjectsToObject,
    formatMessage,
  },
};
