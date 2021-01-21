import React, { PureComponent } from 'react';
import {
  Container,
  Title,
  InputContainer,
  InputLabel,
  NameInputWrapper,
  EmailInputWrapper,
  ButtonsContainer,
  CancelWrapper,
  RegisterWrapper,
} from './elements';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import words from '../../../constants/words';

type Props = {
  lastName: string;
  firstName: string;
  email: string;
  shouldDisableButton: boolean;
  onChangeLastName: (lastName: string) => void;
  onChangeFirstName: (firstName: string) => void;
  onChangeEmail: (email: string) => void;
  onPressCancel: () => void;
  onPressRegister: () => void;
};

class InstructorFormContents extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      lastName,
      firstName,
      email,
      shouldDisableButton,
      onChangeLastName,
      onChangeFirstName,
      onChangeEmail,
      onPressCancel,
      onPressRegister,
    } = this.props;

    return (
      <Container>
        <Title>{words.instructorFormTitle}</Title>
        <InputContainer>
          <InputLabel>{words.instructorFormLabels.lastName}</InputLabel>
          <NameInputWrapper>
            <TextInput
              onChangeText={onChangeLastName}
              value={lastName}
              theme="noBorder"
              isDynamicHeight
            />
          </NameInputWrapper>
        </InputContainer>
        <InputContainer>
          <InputLabel>{words.instructorFormLabels.firstName}</InputLabel>
          <NameInputWrapper>
            <TextInput
              onChangeText={onChangeFirstName}
              value={firstName}
              theme="noBorder"
              isDynamicHeight
            />
          </NameInputWrapper>
        </InputContainer>
        <InputContainer>
          <InputLabel>{words.instructorFormLabels.email}</InputLabel>
          <EmailInputWrapper>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              theme="noBorder"
              isDynamicHeight
            />
          </EmailInputWrapper>
        </InputContainer>
        <ButtonsContainer>
          <CancelWrapper>
            <Button
              title={words.cancel}
              textSize="14px"
              theme="light"
              onPress={onPressCancel}
            />
          </CancelWrapper>
          <RegisterWrapper>
            <Button
              title={words.registerInstructorButton}
              textSize="14px"
              theme="primary"
              onPress={onPressRegister}
              disabled={shouldDisableButton}
            />
          </RegisterWrapper>
        </ButtonsContainer>
      </Container>
    );
  };
}

export default InstructorFormContents;
