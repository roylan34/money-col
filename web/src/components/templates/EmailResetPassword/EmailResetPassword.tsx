import React, { PureComponent } from 'react';
import { EmailInputField } from '../../molecules/ResetPassword';
import { Wrapper } from './elements';

type Props = {
  onSubmitSendResetPasswordLink: (values: { email: string }) => void;
  error?: string;
  email?: string;
  isResetPasswordLinkPending: boolean;
  isLoggedIn: boolean;
};

type State = {
  showError: boolean;
};

export default class extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showError: false,
    };
  }

  componentDidUpdate(prevProps: Props): void {
    const prevError = prevProps.error;
    const { error } = this.props;

    if (prevProps !== this.props && prevError !== error) {
      const showError = Boolean(error);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ showError });
    }
  }

  render = (): React.ReactElement => {
    const {
      error,
      onSubmitSendResetPasswordLink,
      email,
      isResetPasswordLinkPending,
      isLoggedIn,
    } = this.props;
    const { showError } = this.state;
    const formError = showError ? { error } : {};

    return (
      <Wrapper>
        <EmailInputField
          onPressSubmitEmail={onSubmitSendResetPasswordLink}
          errors={formError}
          email={email}
          isResetPasswordLinkPending={isResetPasswordLinkPending}
          isLoggedIn={isLoggedIn}
        />
      </Wrapper>
    );
  };
}
