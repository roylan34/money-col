import React, { PureComponent } from 'react';
import { EmailSent } from '../../molecules/EmailSent';
import { Wrapper } from './elements';

type Props = {
  isLoggedIn: boolean;
};

export default class extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { isLoggedIn } = this.props;

    return (
      <Wrapper>
        <EmailSent emailType="resetPassword" isLoggedIn={isLoggedIn} />
      </Wrapper>
    );
  };
}
