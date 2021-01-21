import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { EmailResetPassword } from '../../templates/EmailResetPassword';
import { paths } from '../../../constants/routes/urls';

export type Props = {
  requestPasswordLinkSuccess: boolean;
  requestPasswordLinkError?: string;
  sendResetPasswordEmail: (email: string) => void;
  email?: string;
  isResetPasswordLinkPending: boolean;
  isLoggedIn: boolean;
} & RouteComponentProps;

export default class extends PureComponent<Props> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps: Props) {
    const { requestPasswordLinkSuccess, history } = this.props;

    if (
      prevProps.requestPasswordLinkSuccess !== requestPasswordLinkSuccess &&
      requestPasswordLinkSuccess
    ) {
      history.replace(paths.resetPasswordLinkSent);
    }
  }

  sendResetPasswordEmail = (values: { email: string }) => {
    this.props.sendResetPasswordEmail(values.email);
  };

  render = (): React.ReactElement => {
    const {
      requestPasswordLinkError,
      email = '',
      isResetPasswordLinkPending,
      isLoggedIn,
    } = this.props;

    return (
      <EmailResetPassword
        email={email}
        onSubmitSendResetPasswordLink={this.sendResetPasswordEmail}
        error={requestPasswordLinkError}
        isResetPasswordLinkPending={isResetPasswordLinkPending}
        isLoggedIn={isLoggedIn}
      />
    );
  };
}
