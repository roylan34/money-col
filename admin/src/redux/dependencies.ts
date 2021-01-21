import AuthServiceFirebaseImpl from '../../../shared/interface/services/AuthServiceFirebaseImpl';

import authUseCases from '../../../shared/usecases/modules/auth';
import userUseCases from '../../../shared/usecases/modules/user';
import videoLectureUseCases from '../../../shared/usecases/modules/videoLecture';
import projectContentUseCases from '../../../shared/usecases/modules/projectContent';
import eaProgramUseCases from '../../../shared/usecases/modules/EAProgram';
import manualUseCases from '../../../shared/usecases/modules/manual';
import conversationUseCases from '../../../shared/usecases/modules/conversation';
import purchaseUseCases from '../../../shared/usecases/modules/purchase';
import paymentHistoryUseCases from '../../../shared/usecases/modules/paymentHistory';
import giveawayUseCases from '../../../shared/usecases/modules/giveaway';

import UserRepositoryFirebaseImpl from '../../../shared/interface/repositories/UserRepositoryFirebaseImpl';
import VideoLectureRepositoryFirebaseImpl from '../../../shared/interface/repositories/VideoLectureRepositoryFirebaseImpl';
import ProjectContentRepositoryFirebaseImpl from '../../../shared/interface/repositories/ProjectContentRepositoryFirebaseImpl';
import EAProgramRepositoryFirebaseImpl from '../../../shared/interface/repositories/EAProgramRepositoryFirebaseImpl';
import ManualRepositoryFirebaseImpl from '../../../shared/interface/repositories/ManualRepositoryFirebaseImpl';
import ConversationRepositoryFirebaseImpl from '../../../shared/interface/repositories/ConversationRepositoryFirebaseImpl';
import PurchaseRepositoryFirebaseImpl from '../../../shared/interface/repositories/PurchaseRepositoryFirebaseImpl';
import PaymentHistoryRepositoryFirebaseImpl from '../../../shared/interface/repositories/PaymentHistoryRepositoryFirebaseImpl';
import GiveawayRepositoryFirebaseImpl from '../../../shared/interface/repositories/GiveawayRepositoryFirebaseImpl';
import MailRepositoryFirebaseImpl from '../../../shared/interface/repositories/MailRepositoryFirebaseImpl';

import { arrayOfObjectsToObject, formatMessage } from '../utils';

import {
  firestore,
  auth,
  storage,
  emailAuthProvider,
  timestamp,
  secondaryFirebaseApp,
} from '../firebase';

const secondaryAuth = secondaryFirebaseApp.auth();

const authService = new AuthServiceFirebaseImpl(
  // @ts-ignore
  auth,
  emailAuthProvider,
  // @ts-ignore
  secondaryAuth,
);
// @ts-ignore
const userRepo = new UserRepositoryFirebaseImpl(firestore, storage, timestamp);
const videoLectureRepo = new VideoLectureRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
  storage,
  timestamp,
);
// @ts-ignore
const projectContentRepo = new ProjectContentRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
  storage,
  timestamp,
);

const eaProgramRepo = new EAProgramRepositoryFirebaseImpl(
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
const conversationRepo = new ConversationRepositoryFirebaseImpl(
  // @ts-ignore
  firestore,
  storage,
  timestamp,
);
// @ts-ignore
const purchaseRepo = new PurchaseRepositoryFirebaseImpl(firestore, timestamp);
const paymentHistoryRepo = new PaymentHistoryRepositoryFirebaseImpl(
  //@ts-ignore
  firestore,
  timestamp,
);
// @ts-ignore
const giveawayRepo = new GiveawayRepositoryFirebaseImpl(firestore, timestamp);
// @ts-ignore
const mailRepo = new MailRepositoryFirebaseImpl(firestore, timestamp);

// @ts-ignore
const userInteractor = userUseCases({ userRepo, authService, giveawayRepo });
const authInteractor = authUseCases({ authService, userInteractor });
const videoLectureInteractor = videoLectureUseCases({
  videoLectureRepo,
});
const projectContentInteractor = projectContentUseCases({ projectContentRepo });
const eaProgramInteractor = eaProgramUseCases({ EAProgramRepo: eaProgramRepo });
const manualInteractor = manualUseCases({ manualRepo });
const conversationInteractor = conversationUseCases({
  userRepo,
  conversationRepo,
  mailRepo,
});
const purchaseInteractor = purchaseUseCases({
  purchaseRepo,
  manualRepo,
  videoLectureRepo,
  projectContentRepo,
});
const paymentHistoryInteractor = paymentHistoryUseCases({
  paymentHistoryRepo,
});
const giveawayInteractor = giveawayUseCases({
  giveawayRepo,
});

export default {
  authInteractor,
  userInteractor,
  videoLectureInteractor,
  projectContentInteractor,
  eaProgramInteractor,
  manualInteractor,
  conversationInteractor,
  purchaseInteractor,
  paymentHistoryInteractor,
  giveawayInteractor,
  utils: {
    arrayOfObjectsToObject,
    formatMessage,
  },
};
