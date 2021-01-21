import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import {
  Container,
  FormContainer,
  PageTitle,
  LoadingContainer,
  Subtitle,
} from './elements';
import { UpdateFormSchema } from './validation';
import { BasicInfoFields } from '../../templates/UpdateProfileTemplate/validation';
import ErrorMessages from './ErrorMessages';
import { InstructorFormProfile } from '../InstructorFormProfile';
import words from '../../../constants/words';

type Props = {
  lastName: string;
  firstName: string;
  email: string;
  isNotifyEmail: string;
  imageSource: string;
  onPressUpdate: (values: BasicInfoFields) => void;
  onAttachFile: (file: File) => void;
  isLoading?: boolean;
};

class UpdateInstructorForm extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      onPressUpdate,
      onAttachFile,
      lastName,
      email,
      firstName,
      isNotifyEmail,
      imageSource,
      isLoading,
    } = this.props;
    const initialValues = {
      lastName,
      firstName,
      email,
      isNotifyEmail,
    };

    return (
      <Container>
        <PageTitle>{words.instructorBackButtonLabel}</PageTitle>
        {isLoading ? (
          <LoadingContainer>
            <Subtitle>読み込み中...</Subtitle>
          </LoadingContainer>
        ) : (
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={UpdateFormSchema}
            onSubmit={onPressUpdate}>
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              dirty,
              setFieldValue,
            }): React.ReactElement => {
              const { lastName, firstName, email, isNotifyEmail } = values;
              const shouldDisableButton =
                !dirty || Object.keys(errors).length > 0;

              return (
                <FormContainer>
                  <ErrorMessages errors={errors} />
                  <InstructorFormProfile
                    lastName={lastName}
                    firstName={firstName}
                    email={email}
                    isNotifyEmail={isNotifyEmail}
                    imageSource={imageSource}
                    shouldDisableButton={shouldDisableButton}
                    onChangeLastName={handleChange('lastName')}
                    onChangeFirstName={handleChange('firstName')}
                    onChangeEmail={handleChange('email')}
                    onToggleEmailNotif={handleChange('isNotifyEmail')}
                    onPressUpdate={handleSubmit}
                    setFieldValue={setFieldValue}
                    onAttachFile={onAttachFile}
                  />
                </FormContainer>
              );
            }}
          </Formik>
        )}
      </Container>
    );
  };
}

export default UpdateInstructorForm;
