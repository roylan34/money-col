import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { EmailVerified } from '../../templates/EmailVerified';

type Props = {
  emailVerified: boolean;
  verifyEmailError: string;
  handleVerifyEmail: (oobCode: string) => void;
} & RouteComponentProps;

export default class extends PureComponent<Props> {
  componentDidMount() {
    const {
      emailVerified,
      verifyEmailError,
      location: { state },
      handleVerifyEmail,
    } = this.props;

    if (!state) {
      return;
    }

    const { oobCode } = state as { oobCode: string };

    if (!emailVerified && !verifyEmailError && oobCode) {
      handleVerifyEmail(oobCode);
    }
  }

  renderAlternativeScreen = (): React.ReactElement => {
    const { verifyEmailError } = this.props;

    if (verifyEmailError) {
      return <div>Error {verifyEmailError}</div>;
    } else {
      return <div>Loading...</div>;
    }
  };

  render = (): React.ReactElement => {
    const { emailVerified } = this.props;

    return emailVerified ? <EmailVerified /> : this.renderAlternativeScreen();
  };
}
