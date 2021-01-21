import React, { PureComponent } from 'react';
import {
  Container,
  InputContainer,
  InputLabel,
  InputWrapper,
  EmailInputWrapper,
  ButtonContainer,
  EmailContainer,
  EmailMessageContainer,
  LinkPassword,
} from './elements';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { Checkbox } from '../../atoms/Checkbox';
import { AttachedProfilePhoto } from '../../molecules/AttachedProfilePhoto';
import words from '../../../constants/words';

type Props = {
  lastName: string;
  firstName: string;
  email: string;
  isNotifyEmail: string;
  shouldDisableButton: boolean;
  imageSource: string;
  onChangeLastName: (lastName: string) => void;
  onChangeFirstName: (firstName: string) => void;
  onChangeEmail: (email: string) => void;
  onPressUpdate: () => void;
  onToggleEmailNotif: (isChecked: string) => void;
  onAttachFile: (file: File) => void;
  setFieldValue?: (
    field: string,
    value: File,
    shouldValidate?: boolean | undefined,
  ) => void;
};

class InstructorFormProfile extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      lastName,
      firstName,
      email,
      shouldDisableButton,
      isNotifyEmail,
      imageSource,
      onChangeLastName,
      onChangeFirstName,
      onChangeEmail,
      onPressUpdate,
      onToggleEmailNotif,
      onAttachFile,
      setFieldValue,
    } = this.props;

    return (
      <Container>
        <InputContainer alignItems="flex-start">
          <InputLabel>{words.attachPhotoLabel}</InputLabel>
          <AttachedProfilePhoto
            imageSource={imageSource}
            onAttachFile={onAttachFile}
            setFieldValue={setFieldValue}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>{words.instructorFormLabels.lastName}</InputLabel>
          <InputWrapper>
            <TextInput
              onChangeText={onChangeLastName}
              value={lastName}
              theme="noBorder"
              isDynamicHeight
            />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <InputLabel>{words.instructorFormLabels.firstName}</InputLabel>
          <InputWrapper>
            <TextInput
              onChangeText={onChangeFirstName}
              value={firstName}
              theme="noBorder"
              isDynamicHeight
            />
          </InputWrapper>
        </InputContainer>
        <EmailContainer>
          <InputLabel>{words.instructorFormLabels.email}</InputLabel>
          <EmailInputWrapper>
            <TextInput
              onChangeText={onChangeEmail}
              value={email}
              theme="noBorder"
              isDynamicHeight
            />
          </EmailInputWrapper>
        </EmailContainer>
        <EmailMessageContainer>
          {words.changeEmailConfiLabel}
        </EmailMessageContainer>
        <InputContainer marginBottom="42">
          <InputLabel> </InputLabel>
          <LinkPassword to="/">{words.gotoPassword}</LinkPassword>
        </InputContainer>
        <InputContainer marginBottom="35">
          <InputLabel>{words.emailNotifLabel}</InputLabel>
          <Checkbox
            value={isNotifyEmail}
            onToggle={onToggleEmailNotif}
            label={words.emailNotifCheckBox}
          />
        </InputContainer>
        <ButtonContainer>
          <Button
            title={words.registerInstructorButton}
            textSize="14px"
            theme="primary"
            onPress={onPressUpdate}
            disabled={shouldDisableButton}
          />
        </ButtonContainer>
      </Container>
    );
  };
}

export default InstructorFormProfile;
