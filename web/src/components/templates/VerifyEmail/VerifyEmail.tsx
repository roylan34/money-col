import React, { PureComponent } from 'react';
import { EmailSent } from '../../molecules/EmailSent';
import { Wrapper } from './elements';

export default class extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Wrapper>
        <EmailSent emailType="verifyEmail" isLoggedIn={false} />
      </Wrapper>
    );
  };
}
