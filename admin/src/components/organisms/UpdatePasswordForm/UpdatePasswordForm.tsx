import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { FormContainer, UpdatePasswordLabel } from './elements';
import { UpdateDefaultPasswordSchema } from './validation';
import { updateDefaultPassValues } from './types';
import ErrorMessages from './ErrorMessages';
import { UpdatePasswordFields } from '../../molecules/UpdatePasswordFields';
import words from '../../../constants/words';

type Props = {
  onSubmit: (values: updateDefaultPassValues) => void;
  updatePasswordError: { [key: string]: string } | {};
};

class UpdatePasswordForm extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const initialValues = {
      newPassword: '',
      retypedNewPassword: '',
    };
    const { onSubmit, updatePasswordError } = this.props;

    return (
      <FormContainer>
        <UpdatePasswordLabel>{words.updatePassLabel}</UpdatePasswordLabel>
        <Formik
          initialValues={initialValues}
          validationSchema={UpdateDefaultPasswordSchema}
          onSubmit={onSubmit}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const { newPassword, retypedNewPassword } = values;
            const shouldDisableButton =
              !dirty || Object.keys(errors).length > 0;
            const allErrors = {
              ...errors,
              ...updatePasswordError,
            };

            return (
              <>
                <ErrorMessages errors={allErrors} />
                <UpdatePasswordFields
                  newPassword={newPassword}
                  retypedNewPassword={retypedNewPassword}
                  onChangeNewPassword={handleChange('newPassword')}
                  onChangeNewPasswordConfirm={handleChange(
                    'retypedNewPassword',
                  )}
                  onPressChangePass={handleSubmit}
                  shouldDisableSubmit={shouldDisableButton}
                />
              </>
            );
          }}
        </Formik>
      </FormContainer>
    );
  };
}

export default UpdatePasswordForm;
