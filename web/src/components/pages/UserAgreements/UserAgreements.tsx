import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { paths } from '../../../constants/routes/urls';
import { PrivacyPolicy, TermsOfServices } from '../../templates/UserAgreements';

type Props = RouteComponentProps;

class UserAgreements extends PureComponent<Props> {
  handleCloseTab = () => {
    window.opener = null;
    window.open('', '_self');
    window.close();
  };

  render = () => {
    const {
      history: { location },
    } = this.props;
    return location.pathname === paths.privacyPolicy ? (
      <PrivacyPolicy onCloseTab={this.handleCloseTab} />
    ) : (
      <TermsOfServices onCloseTab={this.handleCloseTab} />
    );
  };
}

export default UserAgreements;
