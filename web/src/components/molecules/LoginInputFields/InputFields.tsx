import React, { PureComponent } from 'react';
import { TextInput } from '../../atoms/TextInput';

import { TextComponentWrapper, FieldsContainer } from './elements';
import { words } from '../../../constants';

type Props = {
  email: string;
  password: string;
  onChangeEmail: (text: string) => void;
  onChangePassword: (text: string) => void;
};

class LoginInputFields extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { email, password, onChangeEmail, onChangePassword } = this.props;

    return (
      <FieldsContainer>
        <TextComponentWrapper>
          <TextInput
            value={email}
            placeholder={words.registration.placeholders.email}
            onChangeText={onChangeEmail}
            theme="blueBottomBorder"
          />
        </TextComponentWrapper>
        <TextComponentWrapper>
          <TextInput
            value={password}
            placeholder={words.registration.placeholders.password}
            onChangeText={onChangePassword}
            theme="blueBottomBorder"
            type="password"
          />
        </TextComponentWrapper>
      </FieldsContainer>
    );
  };
}

export default LoginInputFields;
