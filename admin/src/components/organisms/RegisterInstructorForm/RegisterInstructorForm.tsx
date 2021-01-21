import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import {
  Container,
  FormContainer,
  BackContainer,
  BackWrapper,
  BackLabel,
} from './elements';
import { InstructorFormSchema } from './validation';
import { InstructorFormValues } from './types';
import ErrorMessages from './ErrorMessages';
import { BackArrow } from '../../atoms/Icons';
import { InstructorFormContents } from '../../molecules/InstructorFormContents';
import words from '../../../constants/words';

type Props = {
  lastName: string;
  firstName: string;
  email: string;
  onPressBack: () => void;
  onRegister: (values: InstructorFormValues) => void;
  onPressCancel: () => void;
};

class RegisterInstructorForm extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      onPressBack,
      onRegister,
      onPressCancel,
      lastName,
      email,
      firstName,
    } = this.props;
    const initialValues = {
      lastName,
      firstName,
      email,
    };

    return (
      <Container>
        <BackContainer>
          <BackWrapper onClick={onPressBack}>
            <BackArrow />
          </BackWrapper>
          <BackLabel>{words.instructorBackButtonLabel}</BackLabel>
        </BackContainer>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={InstructorFormSchema}
          onSubmit={onRegister}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const { lastName, firstName, email } = values;
            const shouldDisableButton =
              !dirty || Object.keys(errors).length > 0;

            return (
              <FormContainer>
                <ErrorMessages errors={errors} />
                <InstructorFormContents
                  lastName={lastName}
                  firstName={firstName}
                  email={email}
                  shouldDisableButton={shouldDisableButton}
                  onChangeLastName={handleChange('lastName')}
                  onChangeFirstName={handleChange('firstName')}
                  onChangeEmail={handleChange('email')}
                  onPressCancel={onPressCancel}
                  onPressRegister={handleSubmit}
                />
              </FormContainer>
            );
          }}
        </Formik>
      </Container>
    );
  };
}

export default RegisterInstructorForm;
