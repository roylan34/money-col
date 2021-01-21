import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import {
  InputFieldsContainer,
  Title,
  Msg,
  TextInputWrapper,
  NewPassInputLabelWrapper,
  NewPassLabel,
  ButtonWrapper,
  Container,
} from './elements';
import ErrorMessages from './ErrorMessages';
import { ResetPasswordSchema } from './validation';
import { words } from '../../../constants';

type Props = {
  onPressSubmitNewPass: (values: {
    password: string;
    retypedPassword: string;
  }) => void;
  errors: { [key: string]: string } | {};
  isResetPasswordPending: boolean;
};

class NewPassInputField extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onPressSubmitNewPass, isResetPasswordPending } = this.props;
    const initialValues = {
      password: '',
      retypedPassword: '',
    };

    return (
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={ResetPasswordSchema}
          onSubmit={onPressSubmitNewPass}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const { password, retypedPassword } = values;
            const shouldDisableSubmit =
              !dirty || Object.keys(errors).length > 0;
            const allErrors = {
              ...errors,
              ...this.props.errors,
            };
            const isErrorsEmpty = Object.keys(allErrors).length < 1;

            return (
              <InputFieldsContainer>
                <Title>{words.resetPassNewPassTitle}</Title>
                <Msg>{words.resetPassNewPassMsg}</Msg>
                <ErrorMessages errors={allErrors} isEmpty={isErrorsEmpty} />
                <TextInputWrapper>
                  <TextInput
                    theme="blueBottomBorder"
                    type="password"
                    onChangeText={handleChange('password')}
                    isDynamicHeight
                    placeholder={words.registration.placeholders.password}
                    value={password}
                  />
                </TextInputWrapper>
                <NewPassInputLabelWrapper>
                  <NewPassLabel isAsterisk>※</NewPassLabel>
                  <NewPassLabel>{words.newPassInputLabel}</NewPassLabel>
                </NewPassInputLabelWrapper>
                <TextInputWrapper isSecond>
                  <TextInput
                    theme="blueBottomBorder"
                    type="password"
                    onChangeText={handleChange('retypedPassword')}
                    isDynamicHeight
                    placeholder={
                      words.registration.placeholders.passwordConfirmation
                    }
                    value={retypedPassword}
                  />
                </TextInputWrapper>
                <NewPassInputLabelWrapper>
                  <NewPassLabel isAsterisk>※</NewPassLabel>
                  <NewPassLabel>{words.newPassInputLabel}</NewPassLabel>
                </NewPassInputLabelWrapper>
                <ButtonWrapper>
                  <Button
                    theme="primary"
                    onPress={handleSubmit}
                    title={words.updateButton}
                    disabled={shouldDisableSubmit}
                    isLoading={isResetPasswordPending}
                  />
                </ButtonWrapper>
              </InputFieldsContainer>
            );
          }}
        </Formik>
      </Container>
    );
  };
}

export default NewPassInputField;
