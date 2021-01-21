import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { UpdateDefaultPassword } from '../../templates/UpdateDefaultPassword';
import { updateDefaultPassValues } from '../../organisms/UpdatePasswordForm/types';
import { paths } from '../../../constants/routes/urls';

type Props = {
  updatePassword: (password: string, id: string) => void;
  id: string;
  hasUpdatedPassword: boolean;
  updatePasswordError: { [key: string]: string } | {};
} & RouteComponentProps;

class UpdatePassword extends PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    const { hasUpdatedPassword } = this.props;

    if (
      prevProps.hasUpdatedPassword !== hasUpdatedPassword &&
      hasUpdatedPassword
    ) {
      this.props.history.replace(paths.home);
    }
  }

  submitUpdatePasswordFrom = (values: updateDefaultPassValues): void => {
    const { updatePassword, id } = this.props;
    updatePassword(values.newPassword, id);
  };

  render = (): React.ReactElement => {
    const { updatePasswordError } = this.props;

    return (
      <UpdateDefaultPassword
        homeLink="/"
        onSubmit={this.submitUpdatePasswordFrom}
        updatePasswordError={updatePasswordError}
      />
    );
  };
}

export default UpdatePassword;
