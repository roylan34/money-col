import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { BasicInfoForm } from '../../organisms/BasicInfoForm';
import { InputPasswordModal } from '../../organisms/InputPasswordModal';
import { BasicInfoFields, UpdateBasicInfoSchema } from './validation';

type Props = {
  updateBasicInfo: (values: BasicInfoFields) => void;
  basicInfoError?: string;
  email: string;
  lastName: string;
  firstName: string;
  updateUserSuccessInfo?: { message: string; timestamp: number };
  isEmailVerified: boolean;
};

type State = {
  showBasicInfoError: boolean;
  photo?: File;
  showInputPasswordModal: boolean;
};

export default class extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showBasicInfoError: false,
      showInputPasswordModal: false,
    };
  }

  static defaultProps = {
    basicInfoError: '',
  };

  componentDidUpdate(prevProps: Props) {
    const prevError = prevProps.basicInfoError;
    const { basicInfoError } = this.props;

    if (prevProps !== this.props && prevError !== basicInfoError) {
      const showBasicInfoError = Boolean(basicInfoError);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ showBasicInfoError });
    }
  }

  toggleInputPasswordModal = () =>
    this.setState({
      showInputPasswordModal: !this.state.showInputPasswordModal,
    });

  render = (): React.ReactElement => {
    const { showBasicInfoError, showInputPasswordModal } = this.state;
    const {
      updateBasicInfo,
      basicInfoError,
      updateUserSuccessInfo,
      isEmailVerified,
    } = this.props;

    const initialValues: BasicInfoFields = {
      email: this.props.email,
      lastName: this.props.lastName,
      firstName: this.props.firstName,
    };

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={UpdateBasicInfoSchema}
        onSubmit={updateBasicInfo}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          dirty,
          setFieldValue,
        }): React.ReactElement => {
          const {
            email,
            lastName,
            firstName,
            password,
          } = values as BasicInfoFields;
          const error = showBasicInfoError ? { basicInfoError } : errors;
          const shouldDisableButton = !dirty || Object.keys(errors).length > 0;
          const isConfirmButtonDisabled = Boolean(errors.password) || !password;

          return (
            <React.Fragment>
              <BasicInfoForm
                lastName={lastName}
                firstName={firstName}
                email={email}
                isButtonDisabled={shouldDisableButton}
                errors={error}
                onChangePhoto={setFieldValue}
                onChangeLastName={handleChange('lastName')}
                onChangeFirstName={handleChange('firstName')}
                onChangeEmail={handleChange('email')}
                updateUserSuccessInfo={updateUserSuccessInfo}
                isClearFilename
                isEmailVerified={isEmailVerified}
                onSubmit={
                  initialValues.email !== email
                    ? this.toggleInputPasswordModal
                    : handleSubmit
                }>
                <InputPasswordModal
                  isVisible={showInputPasswordModal}
                  onCancel={this.toggleInputPasswordModal}
                  onChangePassword={handleChange('password')}
                  password={password}
                  onConfirm={() => {
                    handleSubmit();
                    this.toggleInputPasswordModal();
                  }}
                  isConfirmButtonDisabled={isConfirmButtonDisabled}
                  errors={error}
                />
              </BasicInfoForm>
            </React.Fragment>
          );
        }}
      </Formik>
    );
  };
}
