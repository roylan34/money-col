import React, { PureComponent } from 'react';
import { Card } from '../../atoms/Card';
import { Wrapper, Title, Text, LoginAnchor } from './elements';
import { words } from '../../../constants';
import { paths } from '../../../constants/routes/urls';

type Props = {};

class EmailVerified extends PureComponent<Props> {
  render = (): React.ReactElement => {
    return (
      <Card>
        <Wrapper>
          <Title>{words.registration.emailVerification.verified}</Title>
          <Text>{words.registration.emailVerification.logInCallToAction}</Text>
          <LoginAnchor href={paths.login}>
            {words.registration.logIn}
          </LoginAnchor>
        </Wrapper>
      </Card>
    );
  };
}

export default EmailVerified;
