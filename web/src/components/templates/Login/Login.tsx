import React, { PureComponent } from 'react';
import { Formik } from 'formik';

import { LoginForm } from '../../organisms/LoginForm';
import { LoginSchema } from './validation';
import { Wrapper } from './elements';

export type Props = {
  login: (values: object) => void;
  loginError: string;
  isLoginPending: boolean;
};

type State = {
  showLoginError: boolean;
};

class Login extends PureComponent<Props, State> {
  state = {
    showLoginError: false,
  };

  componentDidUpdate(prevProps: Props): void {
    const prevError = prevProps.loginError;
    const { loginError } = this.props;

    if (prevProps !== this.props && prevError !== loginError) {
      const showLoginError = Boolean(loginError);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ showLoginError });
    }
  }

  render = (): React.ReactElement => {
    const initialValues = {
      email: '',
      password: '',
    };

    const { login, loginError, isLoginPending } = this.props;
    const { showLoginError } = this.state;

    return (
      <Wrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={login}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const { email, password } = values;
            const error = showLoginError ? { loginError } : errors;
            const shouldDisableButton =
              !dirty || Object.keys(errors).length > 0;

            return (
              <LoginForm
                email={email}
                password={password}
                isButtonDisabled={shouldDisableButton}
                onChangeEmail={handleChange('email')}
                onChangePassword={handleChange('password')}
                errors={error}
                onClickLogin={handleSubmit}
                isLoginPending={isLoginPending}
              />
            );
          }}
        </Formik>
      </Wrapper>
    );
  };
}

export default Login;
