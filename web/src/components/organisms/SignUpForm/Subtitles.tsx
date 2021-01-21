import React, { PureComponent } from 'react';

import {
  TermsText,
  UnderlinedAnchor,
  ExternalLinksContainer,
  PlainAnchor,
} from './elements';
import { words } from '../../../constants';
import { paths } from '../../../constants/routes/urls';

type Props = {};

class SignUpSubtitles extends PureComponent<Props> {
  render = (): React.ReactElement => {
    return (
      <React.Fragment>
        <TermsText>
          {words.registration.terms.byRegistering}
          <UnderlinedAnchor href={paths.termsOfServices} target="_blank">
            {words.registration.terms.termsOfService}
          </UnderlinedAnchor>
          {words.registration.terms.and}
          <UnderlinedAnchor href={paths.privacyPolicy} target="_blank">
            {words.registration.terms.privayPolicy}
          </UnderlinedAnchor>
          {words.registration.terms.consideredAccepted}
        </TermsText>
        <ExternalLinksContainer>
          <PlainAnchor href={paths.login}>
            {words.registration.logIn}
          </PlainAnchor>
        </ExternalLinksContainer>
      </React.Fragment>
    );
  };
}

export default SignUpSubtitles;
