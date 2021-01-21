import React, { PureComponent } from 'react';
import { FormTypes } from '../../organisms/UpdateUserProfileFrame/types';
import { UpdateUserProfileFrame } from '../../organisms/UpdateUserProfileFrame';
import { Container, FormContainer } from './elements';
import { BasicInfoFields } from './validation';
import { PaymentInfoProps } from './types';
import UpdateBasicInfo from './UpdateBasicInfo';
import UpdatePaymentInfo from './UpdatePaymentInfo';
import { Toast } from '../../molecules/Toast';
import { words } from '../../../constants';

type Props = {
  updateBasicInfo: (values: BasicInfoFields) => void;
  basicInfoError?: string;
  updateUserSuccessInfo?: { message: string; timestamp: number };
  lastName: string;
  firstName: string;
  email: string;
  initials: string;
  photoURL?: string;
  isEmailVerified: boolean;
} & PaymentInfoProps;

type State = {
  formType: FormTypes;
  toastTime?: number;
  toastTitle?: string;
  toastMessage?: string;
  toastType: 'success' | 'error';
};

export default class extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      formType: 'basicInfo',
      toastType: 'success',
    };
  }

  static defaultProps = {
    basicInfoError: '',
  };

  componentDidUpdate(prevProps: Props) {
    const { basicInfoError, updateUserSuccessInfo } = this.props;

    if (basicInfoError && basicInfoError !== prevProps.basicInfoError) {
      this.setToastState({
        toastTitle: words.error,
        toastMessage: basicInfoError,
        toastType: 'error',
      });
    } else if (
      updateUserSuccessInfo &&
      JSON.stringify(updateUserSuccessInfo) !==
        JSON.stringify(prevProps.updateUserSuccessInfo)
    ) {
      this.setToastState({
        toastTitle: words.updatedSuccessfully,
        toastMessage: updateUserSuccessInfo.message,
        toastType: 'success',
      });
    }
  }

  renderForm = (): React.ReactNode => {
    const { formType } = this.state;
    const {
      updateBasicInfo,
      basicInfoError,
      email,
      lastName,
      firstName,
      card,
      hasCard,
      onPressDeleteCard,
      onSubmit,
      errors,
      updateUserSuccessInfo,
      isEmailVerified,
    } = this.props;

    switch (formType) {
      case 'paymentInfo':
        return (
          <UpdatePaymentInfo
            card={card}
            hasCard={hasCard}
            onPressDeleteCard={onPressDeleteCard}
            onSubmit={onSubmit}
            errors={errors}
          />
        );
      case 'basicInfo':
      default:
        return (
          <UpdateBasicInfo
            email={email}
            lastName={lastName}
            firstName={firstName}
            updateBasicInfo={updateBasicInfo}
            basicInfoError={basicInfoError}
            updateUserSuccessInfo={updateUserSuccessInfo}
            isEmailVerified={isEmailVerified}
          />
        );
    }
  };

  setFormType = (formType: FormTypes) => this.setState({ formType });

  setToastState = (params: {
    toastTitle: string;
    toastMessage: string;
    toastType: 'success' | 'error';
  }) => {
    this.setState(() => ({ toastTime: Date.now(), ...params }));
  };

  renderToast = (
    title?: string,
    message?: string,
    toastKey?: string | number,
    type?: 'success' | 'error',
  ) => {
    if (toastKey && title && message && type) {
      return (
        <Toast
          type={type}
          title={title}
          message={message}
          toastKey={toastKey}
        />
      );
    }
  };

  render = (): React.ReactElement => {
    const { formType } = this.state;
    const { lastName, firstName, photoURL, initials } = this.props;
    const { toastTitle, toastTime, toastType, toastMessage } = this.state;

    return (
      <Container>
        {this.renderToast(toastTitle, toastMessage, toastTime, toastType)}
        <UpdateUserProfileFrame
          username={`${lastName} ${firstName}`}
          photoURL={photoURL}
          initials={initials}
          formType={formType}
          onPressSelectFormType={this.setFormType}>
          <FormContainer>{this.renderForm()}</FormContainer>
        </UpdateUserProfileFrame>
      </Container>
    );
  };
}
