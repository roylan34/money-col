import React, { PureComponent } from 'react';
import { EmailSent } from '../../molecules/EmailSent';
import { Container } from './elements';

type Props = {
  email: string;
  isLoggedIn: boolean;
};

export default class RecoverEmail extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { email, isLoggedIn } = this.props;

    return (
      <Container>
        <EmailSent
          emailType="recoverEmail"
          email={email}
          isLoggedIn={isLoggedIn}
        />
      </Container>
    );
  };
}
