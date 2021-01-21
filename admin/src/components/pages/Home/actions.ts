import { AnyAction } from 'redux';
import { updateUser } from '../../../redux/user/action';

import { BasicInfoFields } from '../../templates/UpdateProfileTemplate/validation';

export const updateBasicInfo = (
  id: string,
  params: BasicInfoFields,
): AnyAction => {
  const { firstName, lastName, email, photo } = params;
  const notifyReplies = params.isNotifyEmail === 'true';
  return updateUser(id, {
    name: { firstName, lastName },
    email,
    photo,
    mailBoxNotifSettings: {
      notifyRepliesWithEmail: notifyReplies,
    },
  });
};

export type DispatchFromProps = {
  updateBasicInfo: typeof updateBasicInfo;
};
