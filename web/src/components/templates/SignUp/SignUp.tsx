import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { SignUpSchema, SignUpFieldsType } from './validation';
import { Wrapper } from './elements';
import { SignUpForm } from '../../organisms/SignUpForm';

export type Props = {
  signUp: (values: SignUpFieldsType) => void;
  signUpError: string;
  isSignUpPending: boolean;
};

type State = {
  showSignUpError: boolean;
};

class SignUp extends PureComponent<Props, State> {
  state = {
    showSignUpError: false,
  };

  componentDidUpdate(prevProps: Props) {
    const prevError = prevProps.signUpError;
    const { signUpError } = this.props;

    if (prevProps !== this.props && prevError !== signUpError) {
      const showSignUpError = Boolean(signUpError);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ showSignUpError });
    }
  }

  render = (): React.ReactElement => {
    const initialValues: SignUpFieldsType = {
      email: '',
      lastName: '',
      firstName: '',
      password: '',
      retypedPassword: '',
      joinMailingList: 'true',
    };

    const { signUp, signUpError, isSignUpPending } = this.props;
    const { showSignUpError } = this.state;

    return (
      <React.Fragment>
        <Wrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={signUp}>
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              dirty,
            }): React.ReactElement => {
              const {
                email,
                password,
                retypedPassword,
                firstName,
                lastName,
                joinMailingList,
              } = values as SignUpFieldsType;
              const error = showSignUpError ? { signUpError } : errors;
              const shouldDisableButton =
                !dirty || Object.keys(errors).length > 0;

              return (
                <SignUpForm
                  email={email}
                  firstName={firstName}
                  lastName={lastName}
                  password={password}
                  retypedPassword={retypedPassword}
                  joinMailingList={joinMailingList}
                  errors={error}
                  isButtonDisabled={shouldDisableButton}
                  onChangeEmail={handleChange('email')}
                  onChangeLastName={handleChange('lastName')}
                  onChangeFirstName={handleChange('firstName')}
                  onChangePassword={handleChange('password')}
                  onChangeRetypePassword={handleChange('retypedPassword')}
                  onChangeJoinMailingList={handleChange('joinMailingList')}
                  onClickSignUp={handleSubmit}
                  isSignUpPending={isSignUpPending}
                />
              );
            }}
          </Formik>
        </Wrapper>
      </React.Fragment>
    );
  };
}

export default SignUp;
