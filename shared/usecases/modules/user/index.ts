import UserRepository from '../../ports/UserRepository';
import StripeService from '../../ports/StripeService';
import AuthService from '../../ports/AuthService';
import PurchaseRepository from '../../ports/PurchaseRepository';
import PaymentHistoryRepository from '../../ports/PaymentHistoryRepository';
import GiveawayRepository from '../../ports/GiveawayRepository';

import { buildCreateUser, createUserUseCase } from './create-user';
import { buildFetchUser, fetchUserUseCase } from './fetch-user';
import { buildUpdateUser, updateUserUseCase } from './update-user';
import {
  buildfetchInstructors,
  fetchInstructorsUseCase,
} from './fetch-instructors';
import { buildUploadPhoto } from './upload-photo';
import { buildAddCard, addCardUseCase } from './add-card';
import { buildDeleteCard, deleteCardUseCase } from './delete-card';
import {
  buildFindUserByEmail,
  findUserByEmailUseCase,
} from './find-user-by-email';
import { buildUpdateEmail } from '../auth/update-email';
import { buildFetchPurchase } from '../purchase/fetch-purchase';
import { buildAddPurchase, addPurchaseUseCase } from './add-purchase';
import {
  buildCreateInstructor,
  createInstructorUseCase,
} from './create-instructor';
import {
  buildRemoveInstructorsById,
  removeInstructorsByIdUseCase,
} from './remove-instructors-by-id';
import {
  buildUpdateInstructor,
  updateInstructorUseCase,
} from './update-instructor';
import {
  buildfetchSubscribers,
  fetchSubscribersUseCase,
} from './fetch-subscribers';
import { buildChargeCard, chargeCardUseCase } from './charge-card';
import {
  buildPurchasePointsUsingCard,
  purchasePointsUsingCardUseCase,
} from './purchase-points-using-card';
import {
  buildPurchasePointsUsingPayPal,
  purchasePointsUsingPayPalUseCase,
} from './purchase-points-using-paypal';
import {
  buildUpdateSubscriber,
  updateSubscriberUseCase,
} from './update-subscriber';
import {
  claimUserGiveawaysUseCase,
  buildClaimUserGiveaways,
} from './claim-giveaways';
import {
  getCurrentUserlUseCase,
  buildGetCurrentUserCredentials,
} from '../auth/get-current-user-cred';

export default (dependencies: {
  userRepo: UserRepository;
  stripeService: StripeService;
  authService: AuthService;
  purchaseRepo?: PurchaseRepository;
  paymentHistRepo: PaymentHistoryRepository;
  giveawayRepo?: GiveawayRepository;
}): {
  getCurrentUser: getCurrentUserlUseCase;
  createUser: createUserUseCase;
  fetchUser: fetchUserUseCase;
  updateUser: updateUserUseCase;
  fetchInstructors: fetchInstructorsUseCase;
  addCard: addCardUseCase;
  deleteCard: deleteCardUseCase;
  findUserByEmail: findUserByEmailUseCase;
  addPurchase: addPurchaseUseCase;
  createInstructor: createInstructorUseCase;
  removeInstructorsById: removeInstructorsByIdUseCase;
  updateInstructor: updateInstructorUseCase;
  fetchSubscribers: fetchSubscribersUseCase;
  chargeCard: chargeCardUseCase;
  purchasePointsUsingCard: purchasePointsUsingCardUseCase;
  purchasePointsUsingPayPal: purchasePointsUsingPayPalUseCase;
  updateSubscriber: updateSubscriberUseCase;
  claimUserGiveaways: claimUserGiveawaysUseCase;
} => {
  const {
    userRepo,
    stripeService,
    authService,
    purchaseRepo,
    paymentHistRepo,
    giveawayRepo,
  } = dependencies;

  const getCurrentUser = buildGetCurrentUserCredentials({ authService });
  const createUser = buildCreateUser({ userRepo });
  const fetchUser = buildFetchUser({
    userRepo,
    authInteractor: { getCurrentUser },
  });
  const uploadPhoto = buildUploadPhoto({ userRepo });
  const updateEmail = buildUpdateEmail({ authService });
  const updateUser = buildUpdateUser({
    userRepo,
    userInteractor: {
      uploadPhoto,
    },
    authInteractor: {
      updateEmail,
      getCurrentUser,
    },
  });
  const fetchInstructors = buildfetchInstructors({ userRepo });
  //@ts-ignore
  const addCard = buildAddCard({
    stripeService,
    userInteractor: { updateUser },
  });
  //@ts-ignore
  const deleteCard = buildDeleteCard({
    stripeService,
    userInteractor: { updateUser },
  });
  const findUserByEmail = buildFindUserByEmail({ userRepo });
  //@ts-ignore
  const fetchPurchase = buildFetchPurchase({ purchaseRepo });
  const addPurchase = buildAddPurchase({
    userRepo,
    purchaseInteractor: { fetchPurchase },
  });
  const createInstructor = buildCreateInstructor({ userRepo, authService });
  const removeInstructorsById = buildRemoveInstructorsById({ userRepo });
  const updateInstructor = buildUpdateInstructor({ userRepo });
  const fetchSubscribers = buildfetchSubscribers({ userRepo });
  const chargeCard = buildChargeCard({ stripeService });
  const purchasePointsUsingCard = buildPurchasePointsUsingCard({
    paymentHistRepo: paymentHistRepo,
    userRepo: userRepo,
    userInteractor: { chargeCard, fetchUser },
  });
  const purchasePointsUsingPayPal = buildPurchasePointsUsingPayPal({
    paymentHistRepo,
    userRepo,
  });
  const updateSubscriber = buildUpdateSubscriber({
    userRepo,
    userInteractor: { updateUser },
    giveawayRepo,
  });
  const claimUserGiveaways = buildClaimUserGiveaways({
    userRepo,
    giveawayRepo,
    purchaseRepo,
    updateUser,
  });

  return {
    getCurrentUser,
    createUser,
    fetchUser,
    updateUser,
    fetchInstructors,
    addCard,
    deleteCard,
    findUserByEmail,
    addPurchase,
    createInstructor,
    removeInstructorsById,
    updateInstructor,
    fetchSubscribers,
    chargeCard,
    purchasePointsUsingCard,
    purchasePointsUsingPayPal,
    updateSubscriber,
    claimUserGiveaways,
  };
};
