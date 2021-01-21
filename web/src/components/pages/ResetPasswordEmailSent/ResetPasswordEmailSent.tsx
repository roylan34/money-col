import React, { PureComponent } from 'react';

import { ResetPasswordEmailSent } from '../../templates/ResetPasswordEmailSent';

type Props = {
  isLoggedIn: boolean;
};

export default class extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { isLoggedIn } = this.props;

    return <ResetPasswordEmailSent isLoggedIn={isLoggedIn} />;
  };
}
