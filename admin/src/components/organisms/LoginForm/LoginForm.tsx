import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { FormContainer } from './elements';
import { LoginSchema } from './validation';
import { LoginFieldsValues } from './types';
import ErrorMessages from './ErrorMessages';
import { LoginFields } from '../../molecules/LoginFields';

type Props = {
  onSubmit: (values: LoginFieldsValues) => void;
  onPressForgotPass: () => void;
  loginError: { [key: string]: string } | {};
  isLoginPending: boolean;
};

class LoginForm extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const initialValues = {
      email: '',
      password: '',
      saveLoginStatus: 'true',
    };
    const {
      onSubmit,
      onPressForgotPass,
      loginError,
      isLoginPending,
    } = this.props;

    return (
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const { email, password, saveLoginStatus } = values;
            const shouldDisableButton =
              !dirty || Object.keys(errors).length > 0;
            const allErrors = {
              ...errors,
              ...loginError,
            };

            return (
              <>
                <ErrorMessages errors={allErrors} />
                <LoginFields
                  email={email}
                  password={password}
                  saveLoginStatus={saveLoginStatus}
                  shouldDisableSubmit={shouldDisableButton}
                  onChangeEmail={handleChange('email')}
                  onChangePassword={handleChange('password')}
                  onChangeSaveLoginStatus={handleChange('saveLoginStatus')}
                  onSubmit={handleSubmit}
                  onPressForgotPassword={onPressForgotPass}
                  isLoginPending={isLoginPending}
                />
              </>
            );
          }}
        </Formik>
      </FormContainer>
    );
  };
}

export default LoginForm;
