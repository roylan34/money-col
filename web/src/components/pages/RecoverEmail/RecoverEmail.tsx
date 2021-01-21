import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { RecoverEmail } from '../../templates/RecoverEmail';

export type Props = {
  didRecoverEmail: boolean;
  recoverEmailError: string;
  email: string;
  isLoggedIn: boolean;
  recoverEmailRequest: (oobCode: string) => void;
} & RouteComponentProps<{ oobCode: string }>;

export default class RecoverEmailPage extends PureComponent<Props> {
  componentDidMount() {
    const {
      recoverEmailRequest,
      recoverEmailError,
      location: { state },
    } = this.props;

    if (!state) {
      return;
    }

    const { oobCode } = state as { oobCode: string };

    if (!recoverEmailError && oobCode) {
      recoverEmailRequest(oobCode);
    }
  }

  renderAlternativeScreen = (): React.ReactElement => {
    const { recoverEmailError } = this.props;

    if (recoverEmailError) {
      return <div>Error {recoverEmailError}</div>;
    } else {
      return <div>Loading...</div>;
    }
  };

  render = (): React.ReactElement => {
    const { didRecoverEmail, email, isLoggedIn } = this.props;

    return didRecoverEmail ? (
      <RecoverEmail email={email} isLoggedIn={isLoggedIn} />
    ) : (
      this.renderAlternativeScreen()
    );
  };
}
