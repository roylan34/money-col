import React, { PureComponent } from 'react';
import { Container, BrandLogoWrapper } from './elements';
import { BrandLogo } from '../../atoms/Icons';
import { LoginForm } from '../../organisms/LoginForm';
import { LoginFieldsValues } from '../../organisms/LoginForm/types';

type Props = {
  homeLink: string;
  onSubmit: (values: LoginFieldsValues) => void;
  onPressForgotPass: () => void;
  loginError: { [key: string]: string } | {};
  isLoginPending: boolean;
};

class LoginTemplate extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      homeLink,
      onSubmit,
      onPressForgotPass,
      loginError,
      isLoginPending,
    } = this.props;

    return (
      <Container>
        <BrandLogoWrapper>
          <BrandLogo homeLink={homeLink} />
        </BrandLogoWrapper>
        <LoginForm
          onSubmit={onSubmit}
          onPressForgotPass={onPressForgotPass}
          loginError={loginError}
          isLoginPending={isLoginPending}
        />
      </Container>
    );
  };
}

export default LoginTemplate;
