import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LoginTemplate } from '../../templates/LoginTemplate';
import { paths } from '../../../constants/routes/urls';

type Props = {
  getUser: (id: string) => void;
  login: (email: string, password: string, saveLoginStatus: boolean) => void;
  loginError: { [key: string]: string } | {};
  isLoggedIn: boolean;
  didSetPassword: boolean;
  id: string;
  hasFetchedUser: boolean;
  hasUpdatedDefaultPassword: boolean;
  isLoginPending: boolean;
} & RouteComponentProps;

export default class extends PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    const {
      isLoggedIn,
      id,
      hasFetchedUser,
      hasUpdatedDefaultPassword,
    } = this.props;

    if (prevProps.id !== id && id && isLoggedIn) {
      this.props.getUser(id);
    }

    if (
      prevProps.hasFetchedUser !== hasFetchedUser &&
      hasFetchedUser &&
      hasUpdatedDefaultPassword
    ) {
      this.props.history.replace(paths.home);
    }

    if (
      prevProps.hasFetchedUser !== hasFetchedUser &&
      hasFetchedUser &&
      !hasUpdatedDefaultPassword
    ) {
      this.props.history.replace(paths.updatePassword);
    }
  }

  submitLoginForm = (values: Object): void => {
    const { login } = this.props;
    const { email, password, saveLoginStatus } = values as {
      email: string;
      password: string;
      saveLoginStatus: string;
    };
    login(email, password, saveLoginStatus === 'true');
  };

  render = (): React.ReactElement => {
    const { loginError, isLoginPending } = this.props;
    return (
      <LoginTemplate
        homeLink="/"
        onSubmit={this.submitLoginForm}
        onPressForgotPass={() => {}}
        loginError={loginError}
        isLoginPending={isLoginPending}
      />
    );
  };
}
