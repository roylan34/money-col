import { AnyAction } from 'redux';
import {
  SET_USER,
  CLEAR_USER,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_FAILURE,
  FETCH_INSTRUCTORS_SUCCESS,
  SET_INSTRUCTORS_LIST,
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAILURE,
  PURCHASE_CONTENT_REQUEST,
  PURCHASE_CONTENT_SUCCESS,
  PURCHASE_CONTENT_FAILURE,
  PURCHASE_POINTS_PAYPAL_REQUEST,
  PURCHASE_POINTS_PAYPAL_SUCCESS,
  PURCHASE_POINTS_PAYPAL_FAILURE,
  DISMISS_USER_REQUESTS,
  PURCHASE_POINTS_CARD_REQUEST,
  PURCHASE_POINTS_CARD_SUCCESS,
  PURCHASE_POINTS_CARD_FAILURE,
  SET_LAST_LOG_IN_FAILURE,
  SET_LAST_LOG_IN_REQUEST,
  SET_LAST_LOG_IN_SUCCESS,
  CLAIM_GIVEAWAYS_REQUEST,
  CLAIM_GIVEAWAYS_SUCCESS,
  CLAIM_GIVEAWAYS_FAILURE,
  UPDATE_MAILBOX_SETTINGS_REQUEST,
  UPDATE_MAILBOX_SETTINGS_SUCCESS,
  UPDATE_MAILBOX_SETTINGS_FAILURE,
} from './actionType';
import { User, UserRankTitle } from '../../domain/entities';

export const setUser = (user: User): AnyAction => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = (): AnyAction => ({
  type: CLEAR_USER,
});

export const updateUser = (
  id: string,
  params: {
    name?: { lastName: string; firstName: string };
    email?: string;
    photo?: File;
    password?: string;
    subscriberProfile?: {
      hasSeenWelcomeToast?: boolean;
    };
  },
): AnyAction => ({
  type: UPDATE_USER_REQUEST,
  payload: { id, params },
});

export const updateUserSuccess = (response: Object): AnyAction => ({
  type: UPDATE_USER_SUCCESS,
  payload: { response },
});

export const updateUserFailure = (error: Error | string): AnyAction => ({
  type: UPDATE_USER_FAILURE,
  payload: { error },
});

export const fetchUser = (id: string): AnyAction => ({
  type: FETCH_USER_REQUEST,
  payload: { id },
});

export const fetchUserSuccess = (response: Object): AnyAction => ({
  type: FETCH_USER_SUCCESS,
  payload: { response },
});

export const fetchUserFailure = (error: Error | string): AnyAction => ({
  type: FETCH_USER_FAILURE,
  payload: { error },
});

export const fetchInstructors = (): AnyAction => ({
  type: FETCH_INSTRUCTORS_REQUEST,
});

export const fetchInstructorsSuccess = (response: Object): AnyAction => ({
  type: FETCH_INSTRUCTORS_SUCCESS,
  payload: { response },
});

export const fetchInstructorsFailure = (error: Error | string): AnyAction => ({
  type: FETCH_INSTRUCTORS_FAILURE,
  payload: { error },
});

export const setInstructors = (
  instructors: Array<{ id: string; name: string }>,
): AnyAction => ({
  type: SET_INSTRUCTORS_LIST,
  payload: instructors,
});

export const addCard = (
  token: stripe.Token,
  stripeCustomerId: string,
  userId: string,
): AnyAction => ({
  type: ADD_CARD_REQUEST,
  payload: {
    token,
    stripeCustomerId,
    userId,
  },
});

export const addCardSuccess = (response: Object): AnyAction => ({
  type: ADD_CARD_SUCCESS,
  payload: { response },
});

export const addCardFailure = (error: Error | string): AnyAction => ({
  type: ADD_CARD_FAILURE,
  payload: { error },
});

export const deleteCard = (
  stripeCustomerId: string,
  cardId: string,
  userId: string,
): AnyAction => ({
  type: DELETE_CARD_REQUEST,
  payload: {
    stripeCustomerId,
    cardId,
    userId,
  },
});

export const deleteCardSuccess = (response: Object): AnyAction => ({
  type: DELETE_CARD_SUCCESS,
  payload: { response },
});

export const deleteCardFailure = (error: Error | string): AnyAction => ({
  type: DELETE_CARD_FAILURE,
  payload: { error },
});

export const purchaseContent = (
  userId: string,
  collectionKey: 'manuals' | 'EAPrograms' | 'videoLectures' | 'projectContents',
  itemId: string,
  rank: UserRankTitle,
): AnyAction => ({
  type: PURCHASE_CONTENT_REQUEST,
  payload: {
    userId,
    collectionKey,
    itemId,
    rank,
  },
});

export const purchaseContentSuccess = (response: Object): AnyAction => ({
  type: PURCHASE_CONTENT_SUCCESS,
  payload: { response },
});

export const purchaseContentFailure = (error: Error | string): AnyAction => ({
  type: PURCHASE_CONTENT_FAILURE,
  payload: { error },
});

export const dismissUserRequests = (actionType: string): AnyAction => ({
  type: DISMISS_USER_REQUESTS,
  payload: { actionType },
});

export const purchasePointsUsingCard = (
  userId: string,
  pointsToBePurchased: number,
  stripeCustomerId: string,
  amountInJPY: number,
): AnyAction => ({
  type: PURCHASE_POINTS_CARD_REQUEST,
  payload: {
    userId,
    pointsToBePurchased,
    stripeCustomerId,
    amountInJPY,
  },
});

export const purchasePointsUsingCardSuccess = (
  response: Object,
): AnyAction => ({
  type: PURCHASE_POINTS_CARD_SUCCESS,
  payload: { response },
});

export const purchasePointsUsingCardFailure = (
  error: Error | string,
): AnyAction => ({
  type: PURCHASE_POINTS_CARD_FAILURE,
  payload: { error },
});

export const purchasePointsUsingPaypal = (
  userId: string,
  paymentHistId: string,
  chargeID: string,
): AnyAction => ({
  type: PURCHASE_POINTS_PAYPAL_REQUEST,
  payload: {
    userId,
    paymentHistId,
    chargeID,
  },
});

export const purchasePointsUsingPaypalSuccess = (
  response: Object,
): AnyAction => ({
  type: PURCHASE_POINTS_PAYPAL_SUCCESS,
  payload: { response },
});

export const purchasePointsUsingPaypalFailure = (
  error: Error | string,
): AnyAction => ({
  type: PURCHASE_POINTS_PAYPAL_FAILURE,
  payload: { error },
});

export const setLastLogIn = (
  id: string,
  params: {
    lastLogIn?: Date;
  },
): AnyAction => ({
  type: SET_LAST_LOG_IN_REQUEST,
  payload: { id, params },
});

export const setLastLogInSuccess = (response: Object): AnyAction => ({
  type: SET_LAST_LOG_IN_SUCCESS,
  payload: { response },
});

export const setLastLogInFailure = (error: Error | string): AnyAction => ({
  type: SET_LAST_LOG_IN_FAILURE,
  payload: { error },
});

export const claimGiveaways = (
  userId: string,
  params: { prevLogInDate: Date; currLogInDate: Date },
): AnyAction => ({
  type: CLAIM_GIVEAWAYS_REQUEST,
  payload: { userId, params },
});

export const claimGiveawaysSuccess = (response: Object): AnyAction => ({
  type: CLAIM_GIVEAWAYS_SUCCESS,
  payload: { response },
});

export const claimGiveawaysFailure = (error: Error | string): AnyAction => ({
  type: CLAIM_GIVEAWAYS_FAILURE,
  payload: { error },
});

export const updateMailboxSettings = (
  id: string,
  params: {
    mailBoxNotifSettings: {
      notifyRepliesWithEmail: boolean;
      displaySendConfirmation: boolean;
    };
  },
): AnyAction => ({
  type: UPDATE_MAILBOX_SETTINGS_REQUEST,
  payload: { id, params },
});

export const updateMailboxSettingsSuccess = (response: Object): AnyAction => ({
  type: UPDATE_MAILBOX_SETTINGS_SUCCESS,
  payload: { response },
});

export const updateMailboxSettingsFailure = (
  error: Error | string,
): AnyAction => ({
  type: UPDATE_MAILBOX_SETTINGS_FAILURE,
  payload: { error },
});
