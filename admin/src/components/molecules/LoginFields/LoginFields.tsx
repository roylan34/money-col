import React, { PureComponent } from 'react';
import {
  FieldsContainer,
  TextInputWrapper,
  Label,
  LoginContainer,
  CheckboxWrapper,
  ButtonWrapper,
  ForgotPassLabel,
} from './elements';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { Checkbox } from '../../atoms/Checkbox';
import words from '../../../constants/words';

type Props = {
  email: string;
  password: string;
  saveLoginStatus: string;
  shouldDisableSubmit: boolean;
  isLoginPending: boolean;
  onChangeEmail: (email: string) => void;
  onChangePassword: (password: string) => void;
  onChangeSaveLoginStatus: (saveLoginStatus: string) => void;
  onSubmit: () => void;
  onPressForgotPassword: () => void;
};

class LoginFields extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      email,
      password,
      saveLoginStatus,
      shouldDisableSubmit,
      onChangeEmail,
      onChangePassword,
      onChangeSaveLoginStatus,
      onSubmit,
      onPressForgotPassword,
      isLoginPending,
    } = this.props;

    return (
      <FieldsContainer>
        <div>
          <Label>{words.emailLabel}</Label>
          <TextInputWrapper>
            <TextInput
              type="text"
              theme="default"
              isDynamicHeight
              value={email}
              onChangeText={onChangeEmail}
            />
          </TextInputWrapper>
        </div>
        <div>
          <Label>{words.passwordLabel}</Label>
          <TextInputWrapper>
            <TextInput
              type="password"
              theme="default"
              isDynamicHeight
              value={password}
              onChangeText={onChangePassword}
            />
          </TextInputWrapper>
        </div>
        <LoginContainer>
          <CheckboxWrapper>
            <Checkbox
              onToggle={onChangeSaveLoginStatus}
              value={saveLoginStatus}
              label={words.saveLogin}
            />
          </CheckboxWrapper>
          <ButtonWrapper>
            <Button
              theme="primary"
              type="submit"
              title={words.login}
              onPress={onSubmit}
              disabled={shouldDisableSubmit}
              isLoading={isLoginPending}
            />
          </ButtonWrapper>
        </LoginContainer>
        <ForgotPassLabel onClick={onPressForgotPassword}>
          {words.forgotPassLabel}
        </ForgotPassLabel>
      </FieldsContainer>
    );
  };
}

export default LoginFields;
