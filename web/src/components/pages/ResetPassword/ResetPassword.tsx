import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ResetPassword } from '../../templates/ResetPassword';
import { paths } from '../../../constants/routes/urls';

export type Props = {
  didResetPassword: boolean;
  resetPasswordError?: string;
  isPasswordResetCodeValid: boolean;
  passwordResetCodeError: string;
  isResetPasswordPending: boolean;
  submitNewPassword: (oobCode: string, password: string) => void;
  verifyPasswordActionCode: (oobCode: string) => void;
  isLoggedIn: boolean;
} & RouteComponentProps<{ oobCode: string }>;

export default class extends PureComponent<Props> {
  componentDidMount() {
    const {
      isPasswordResetCodeValid,
      passwordResetCodeError,
      location: { state },
      verifyPasswordActionCode,
    } = this.props;
    if (!state) {
      return;
    }

    const { oobCode } = state as { oobCode: string };

    if (!isPasswordResetCodeValid && !passwordResetCodeError && oobCode) {
      verifyPasswordActionCode(oobCode);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { didResetPassword, history, isLoggedIn } = this.props;

    if (prevProps.didResetPassword !== didResetPassword && didResetPassword) {
      isLoggedIn ? history.replace(paths.home) : history.push(paths.login);
    }
  }

  onSubmitNewPassword = (values: {
    password: string;
    retypedPassword: string;
  }) => {
    const {
      location: { state },
      submitNewPassword,
    } = this.props;
    const { oobCode } = state as { oobCode: string };

    if (!oobCode) {
      return;
    }

    submitNewPassword(oobCode, values.password);
  };

  render = (): React.ReactElement => {
    const {
      resetPasswordError,
      isPasswordResetCodeValid,
      passwordResetCodeError,
      isResetPasswordPending,
    } = this.props;

    return isPasswordResetCodeValid ? (
      <ResetPassword
        onSubmitResetPassword={this.onSubmitNewPassword}
        error={resetPasswordError}
        isResetPasswordPending={isResetPasswordPending}
      />
    ) : (
      <div>
        {resetPasswordError} {passwordResetCodeError}
      </div>
    );
  };
}
