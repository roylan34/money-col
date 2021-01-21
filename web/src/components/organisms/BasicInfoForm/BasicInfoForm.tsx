import React, { PureComponent } from 'react';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { AttachFile } from '../../molecules/AttachFile';
import {
  InputFieldWrapper,
  InputLabel,
  FormWrapper,
  NameFieldsContainer,
  ButtonWrapper,
  ButtonContainer,
  ResetPasswordLink,
  ErrorUnathenticated,
} from './elements';
import { paths } from '../../../constants/routes/urls';
import ErrorMessages from './ErrorMessages';
import { words } from '../../../constants';

type Props = {
  lastName: string;
  firstName: string;
  email: string;
  isButtonDisabled: boolean;
  errors: { [key: string]: string } | {};
  onChangeLastName: (value: string) => void;
  onChangeFirstName: (value: string) => void;
  onChangeEmail: (value: string) => void;
  onChangePhoto: (
    field: string,
    value: File,
    shouldValidate?: boolean | undefined,
  ) => void;
  onSubmit: () => void;
  children?: React.ReactNode;
  isClearFilename?: boolean | undefined;
  updateUserSuccessInfo?: { message: string; timestamp: number };
  isEmailVerified: boolean;
};

export default class extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      email,
      firstName,
      lastName,
      onSubmit,
      errors,
      onChangePhoto,
      onChangeLastName,
      onChangeFirstName,
      onChangeEmail,
      isButtonDisabled,
      children,
      isClearFilename,
      updateUserSuccessInfo,
      isEmailVerified,
    } = this.props;

    return (
      <FormWrapper>
        <ErrorMessages errors={errors} />
        <InputLabel htmlFor="last-name">{words.name}:</InputLabel>
        <NameFieldsContainer>
          <InputFieldWrapper withBorder>
            <TextInput
              theme="noBorder"
              type="text"
              name="last-name"
              id="last-name"
              placeholder={words.lastName}
              value={lastName}
              onChangeText={onChangeLastName}
            />
          </InputFieldWrapper>
          <InputFieldWrapper withBorder>
            <TextInput
              theme="noBorder"
              type="text"
              name="first-name"
              id="first-name"
              placeholder={words.firstName}
              value={firstName}
              onChangeText={onChangeFirstName}
            />
          </InputFieldWrapper>
        </NameFieldsContainer>
        <InputLabel htmlFor="photo">{words.profileImage}:</InputLabel>
        <InputFieldWrapper withBorder={false}>
          <AttachFile
            id="photo"
            theme="basicInfo"
            placeholder={words.noFilesSelected}
            setFieldValue={onChangePhoto}
            isClearFilename={isClearFilename}
            updateUserSuccessInfo={updateUserSuccessInfo}
          />
        </InputFieldWrapper>
        <InputLabel htmlFor="email">{words.email}:</InputLabel>
        {!isEmailVerified && (
          <ErrorUnathenticated>
            {words.unauthenticatedError}
          </ErrorUnathenticated>
        )}
        <InputFieldWrapper withBorder>
          <TextInput
            theme="noBorder"
            type="text"
            name="email"
            id="email"
            placeholder={words.email}
            value={email}
            onChangeText={onChangeEmail}
          />
        </InputFieldWrapper>
        <ResetPasswordLink to={paths.resetPasswordLink}>
          {words.changePassword}
        </ResetPasswordLink>
        <ButtonContainer>
          <ButtonWrapper>
            <Button
              type="button"
              onPress={onSubmit}
              title={words.save}
              disabled={isButtonDisabled}
            />
          </ButtonWrapper>
        </ButtonContainer>
        {children}
      </FormWrapper>
    );
  };
}
