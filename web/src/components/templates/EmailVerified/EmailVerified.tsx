import React, { PureComponent } from 'react';
import { EmailVerified } from '../../molecules/EmailVerified';
import { Wrapper } from './elements';

export default class extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Wrapper>
        <EmailVerified />
      </Wrapper>
    );
  };
}
