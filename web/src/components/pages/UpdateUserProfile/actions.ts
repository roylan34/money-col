import { AnyAction } from 'redux';
import { BasicInfoFields } from '../../templates/UpdateUserProfile/validation';
import { updateUser, addCard, deleteCard } from '../../../redux/user/action';

export type UpdateBasicInfoDispatchProps = {
  id: string;
  name: { lastName: string; firstName: string };
  email: string;
  photo?: File;
};

export const updateBasicInfo = (
  id: string,
  params: BasicInfoFields,
): AnyAction => {
  const { firstName, lastName, ...others } = params;
  return updateUser(id, { name: { firstName, lastName }, ...others });
};

export const addStripeCard = (
  token: stripe.Token,
  stripeCustomerId: string,
  userId: string,
): AnyAction => {
  return addCard(token, stripeCustomerId, userId);
};

export const deleteStripeCard = (
  stripeCustomerId: string,
  cardId: string,
  userId: string,
): AnyAction => {
  return deleteCard(stripeCustomerId, cardId, userId);
};

export type DispatchFromProps = {
  updateBasicInfo: typeof updateBasicInfo;
  addStripeCard: typeof addStripeCard;
  deleteStripeCard: typeof deleteStripeCard;
};
