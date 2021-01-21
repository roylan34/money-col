import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import {
  InputFieldsContainer,
  Title,
  Msg,
  TextInputWrapper,
  TextInputLabel,
  ButtonWrapper,
  Container,
  LinkWrapper,
  LinkStyled,
} from './elements';
import ErrorMessages from './ErrorMessages';
import { SendEmailSchema } from './validation';
import { words } from '../../../constants';
import { paths } from '../../../constants/routes/urls';

type Props = {
  onPressSubmitEmail: (values: { email: string }) => void;
  errors: { [key: string]: string } | {};
  email?: string;
  isResetPasswordLinkPending: boolean;
  isLoggedIn: boolean;
};

class EmailInputField extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      onPressSubmitEmail,
      email = '',
      isResetPasswordLinkPending,
      isLoggedIn,
    } = this.props;
    const initialValues = {
      email: email,
    };

    return (
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={SendEmailSchema}
          onSubmit={onPressSubmitEmail}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const shouldDisableSubmit =
              values.email.length > 0 ? Object.keys(errors).length > 0 : !dirty;
            const allErrors = {
              ...errors,
              ...this.props.errors,
            };
            const isErrorsEmpty = Object.keys(allErrors).length < 1;

            return (
              <InputFieldsContainer>
                <Title>{words.resetPassEmailTitle}</Title>
                <Msg>{words.resetPassEmailMsg}</Msg>
                <ErrorMessages errors={allErrors} isEmpty={isErrorsEmpty} />
                <TextInputWrapper>
                  <TextInput
                    theme="blueBottomBorder"
                    onChangeText={handleChange('email')}
                    isDynamicHeight
                    placeholder={words.registration.placeholders.email}
                    value={values.email}
                  />
                </TextInputWrapper>
                <TextInputLabel>
                  {words.resetPassEmailInputLabel}
                </TextInputLabel>
                <ButtonWrapper>
                  <Button
                    theme="primary"
                    onPress={handleSubmit}
                    title={words.confirmButton}
                    disabled={shouldDisableSubmit}
                    isLoading={isResetPasswordLinkPending}
                  />
                </ButtonWrapper>
                {!isLoggedIn ? (
                  <LinkWrapper>
                    <LinkStyled to={paths.login}>{words.login}</LinkStyled>
                    <LinkStyled to={paths.register}>
                      {words.registration.title}
                    </LinkStyled>
                  </LinkWrapper>
                ) : null}
              </InputFieldsContainer>
            );
          }}
        </Formik>
      </Container>
    );
  };
}

export default EmailInputField;
