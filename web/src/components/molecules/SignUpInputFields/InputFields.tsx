import React, { PureComponent } from 'react';
import { TextInput } from '../../atoms/TextInput';
import { Checkbox } from '../../atoms/Checkbox';

import {
  TextComponentWrapper,
  HelperTextContainer,
  HelperText,
  HelperTextSymbol,
  FieldsContainer,
  NameFieldWrapper,
  NameFieldContainer,
  CheckboxContainer,
} from './elements';
import { words } from '../../../constants';

type Props = {
  email: string;
  lastName: string;
  firstName: string;
  password: string;
  retypedPassword: string;
  joinMailingList: string;
  onChangeEmail: (text: string) => void;
  onChangeLastName: (text: string) => void;
  onChangeFirstName: (text: string) => void;
  onChangePassword: (text: string) => void;
  onChangeRetypePassword: (text: string) => void;
  onChangeJoinMailingList: (isChecked: string) => void;
};

class SignUpFormFields extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      email,
      lastName,
      firstName,
      password,
      retypedPassword,
      joinMailingList,
      onChangeEmail,
      onChangeFirstName,
      onChangeLastName,
      onChangePassword,
      onChangeRetypePassword,
      onChangeJoinMailingList,
    } = this.props;

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
        <NameFieldContainer>
          <NameFieldWrapper>
            <TextInput
              value={lastName}
              placeholder={words.lastName}
              onChangeText={onChangeLastName}
              theme="blueBottomBorder"
            />
          </NameFieldWrapper>
          <NameFieldWrapper>
            <TextInput
              value={firstName}
              placeholder={words.firstName}
              onChangeText={onChangeFirstName}
              theme="blueBottomBorder"
            />
          </NameFieldWrapper>
        </NameFieldContainer>
        <TextComponentWrapper>
          <TextInput
            value={password}
            placeholder={words.registration.placeholders.password}
            onChangeText={onChangePassword}
            theme="blueBottomBorder"
            type="password"
          />
          <HelperTextContainer>
            <HelperTextSymbol>※</HelperTextSymbol>
            <HelperText>{words.registration.passwordRequirement}</HelperText>
          </HelperTextContainer>
        </TextComponentWrapper>
        <TextComponentWrapper>
          <TextInput
            value={retypedPassword}
            placeholder={words.registration.placeholders.passwordConfirmation}
            onChangeText={onChangeRetypePassword}
            theme="blueBottomBorder"
            type="password"
          />
          <HelperTextContainer>
            <HelperTextSymbol>※</HelperTextSymbol>
            <HelperText>{words.registration.passwordRequirement}</HelperText>
          </HelperTextContainer>
        </TextComponentWrapper>
        <CheckboxContainer>
          <Checkbox
            value={joinMailingList}
            onToggle={onChangeJoinMailingList}
            label={words.registration.joinMailingListLabel}
          />
        </CheckboxContainer>
      </FieldsContainer>
    );
  };
}

export default SignUpFormFields;
