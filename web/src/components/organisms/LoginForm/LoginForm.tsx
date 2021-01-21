import React, { PureComponent } from 'react';
import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { LoginInputFields } from '../../molecules/LoginInputFields';
import { FormWrapper, Title, ButtonWrapper } from './elements';
import LoginFormSubtitles from './Subtitles';
import ErrorMessage from './ErrorMessage';
import { words } from '../../../constants';

type Props = {
  email: string;
  password: string;
  errors: { [key: string]: string } | {};
  isButtonDisabled: boolean;
  isLoginPending: boolean;
  onChangeEmail: (text: string) => void;
  onChangePassword: (text: string) => void;
  onClickLogin: () => void;
};

class LoginForm extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      email,
      password,
      errors,
      onChangeEmail,
      onChangePassword,
      onClickLogin,
      isButtonDisabled,
      isLoginPending,
    } = this.props;

    return (
      <Card>
        <FormWrapper>
          <Title>{words.login}</Title>
          <ErrorMessage errors={errors} />
          <LoginInputFields
            email={email}
            password={password}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
          />
          <ButtonWrapper>
            <Button
              onPress={onClickLogin}
              title={words.login}
              theme="primary"
              disabled={isButtonDisabled}
              isLoading={isLoginPending}
            />
          </ButtonWrapper>
          <LoginFormSubtitles />
        </FormWrapper>
      </Card>
    );
  };
}

export default LoginForm;
