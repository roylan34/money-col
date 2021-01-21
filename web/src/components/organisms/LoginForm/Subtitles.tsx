import React, { PureComponent } from 'react';

import {
  FirstRowLinksContainer,
  FirstRowAnchor,
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
        <ExternalLinksContainer>
          <FirstRowLinksContainer>
            <FirstRowAnchor href={paths.register}>
              {words.registration.joinFree}
            </FirstRowAnchor>
            <PlainAnchor href={paths.resetPasswordLink}>
              {words.forgotPassword}
            </PlainAnchor>
          </FirstRowLinksContainer>
        </ExternalLinksContainer>
      </React.Fragment>
    );
  };
}

export default SignUpSubtitles;
