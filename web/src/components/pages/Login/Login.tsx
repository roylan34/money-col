import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Login } from '../../templates/Login';
import { paths } from '../../../constants/routes/urls';

type Props = {
  login: (employeeNumber: string, password: string) => void;
  loginError: string;
  isLoggedIn: boolean;
  didSetPassword: boolean;
  didLogin: boolean;
  isLoginPending: boolean;
} & RouteComponentProps;

export default class extends PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    const { isLoggedIn } = this.props;

    if (prevProps.isLoggedIn !== isLoggedIn && isLoggedIn) {
      this.props.history.replace(paths.home);
    }
  }

  submitLoginForm = (values: Object): void => {
    const { login } = this.props;
    const { email, password } = values as {
      email: string;
      password: string;
    };
    login(email, password);
  };

  render = (): React.ReactElement => {
    const { loginError, isLoginPending } = this.props;

    return (
      <Login
        loginError={loginError}
        login={this.submitLoginForm}
        isLoginPending={isLoginPending}
      />
    );
  };
}
