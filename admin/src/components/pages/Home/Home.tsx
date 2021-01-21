import React, { PureComponent } from 'react';
import { UpdateProfileTemplate } from '../../templates/UpdateProfileTemplate';
import { BasicInfoFields } from '../../templates/UpdateProfileTemplate/validation';

type Props = {
  updateBasicInfo: (id: string, params: BasicInfoFields) => void;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photoURL?: string;
  notifyRepliesWithEmail: boolean;
  isUpdatingUser: boolean;
};

class TemporaryHome extends PureComponent<Props> {
  updateInfo = (params: BasicInfoFields): void => {
    const { id, updateBasicInfo } = this.props;
    updateBasicInfo(id, params);
  };

  render = (): React.ReactElement => {
    const {
      firstName,
      lastName,
      email,
      photoURL,
      notifyRepliesWithEmail,
      isUpdatingUser,
    } = this.props;

    return (
      <UpdateProfileTemplate
        lastName={lastName}
        firstName={firstName}
        email={email}
        isNotifyEmail={notifyRepliesWithEmail.toString()}
        photoURL={photoURL}
        onPressUpdate={this.updateInfo}
        isLoading={isUpdatingUser}
      />
    );
  };
}

export default TemporaryHome;
