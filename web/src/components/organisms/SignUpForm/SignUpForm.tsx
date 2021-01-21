import React, { PureComponent } from 'react';
import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { SignUpInputFields } from '../../molecules/SignUpInputFields';
import {
  FormWrapper,
  Title,
  ButtonWrapper,
  InvitationText,
  InvitationTextContainer,
} from './elements';
import SignUpFormSubtitles from './Subtitles';
import ErrorMessage from './ErrorMessage';
import { words } from '../../../constants';

type Props = {
  email: string;
  lastName: string;
  firstName: string;
  password: string;
  retypedPassword: string;
  joinMailingList: string;
  errors: { [key: string]: string } | {};
  isButtonDisabled: boolean;
  isSignUpPending: boolean;
  onChangeEmail: (text: string) => void;
  onChangeLastName: (text: string) => void;
  onChangeFirstName: (text: string) => void;
  onChangePassword: (text: string) => void;
  onChangeRetypePassword: (text: string) => void;
  onChangeJoinMailingList: (isChecked: string) => void;
  onClickSignUp: () => void;
};

class SignUpForm extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      email,
      lastName,
      firstName,
      password,
      retypedPassword,
      joinMailingList,
      errors,
      isButtonDisabled,
      isSignUpPending,
      onChangeEmail,
      onChangeFirstName,
      onChangeLastName,
      onChangePassword,
      onChangeRetypePassword,
      onChangeJoinMailingList,
      onClickSignUp,
    } = this.props;

    return (
      <Card>
        <FormWrapper>
          <Title>{words.registration.title}</Title>
          <InvitationTextContainer>
            <InvitationText>
              {words.registration.invitation.urgency}
            </InvitationText>
            <InvitationText>
              {words.registration.invitation.ease}
            </InvitationText>
          </InvitationTextContainer>
          <ErrorMessage errors={errors} />
          <SignUpInputFields
            email={email}
            lastName={lastName}
            firstName={firstName}
            password={password}
            retypedPassword={retypedPassword}
            joinMailingList={joinMailingList}
            onChangeEmail={onChangeEmail}
            onChangeLastName={onChangeLastName}
            onChangeFirstName={onChangeFirstName}
            onChangePassword={onChangePassword}
            onChangeRetypePassword={onChangeRetypePassword}
            onChangeJoinMailingList={onChangeJoinMailingList}
          />
          <ButtonWrapper>
            <Button
              onPress={onClickSignUp}
              title={words.registration.submitButtonTitle}
              theme="primary"
              fontWeight="bold"
              disabled={isButtonDisabled}
              isLoading={isSignUpPending}
            />
          </ButtonWrapper>
          <SignUpFormSubtitles />
        </FormWrapper>
      </Card>
    );
  };
}

export default SignUpForm;
