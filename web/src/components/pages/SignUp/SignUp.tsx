import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { SignUp } from '../../templates/SignUp';
import { SignUpFieldsType } from '../../templates/SignUp/validation';
import { paths } from '../../../constants/routes/urls';

type Props = {
  register: (
    email: string,
    password: string,
    lastName: string,
    firstName: string,
    subscribedToMailingList: boolean,
  ) => void;
  signUpError: string;
  isSignedUp: boolean;
  isSignUpPending: boolean;
} & RouteComponentProps;

export default class extends PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    const { isSignedUp } = this.props;

    if (prevProps.isSignedUp !== isSignedUp && isSignedUp) {
      this.props.history.push(paths.emailVerificationSent);
    }
  }

  submitSignUpForm = (values: SignUpFieldsType): void => {
    const { register } = this.props;
    const { email, password, lastName, firstName, joinMailingList } = values;

    register(email, password, lastName, firstName, joinMailingList === 'true');
  };

  render = (): React.ReactElement => {
    const { signUpError, isSignUpPending } = this.props;

    return (
      <SignUp
        signUpError={signUpError}
        signUp={this.submitSignUpForm}
        isSignUpPending={isSignUpPending}
      />
    );
  };
}
