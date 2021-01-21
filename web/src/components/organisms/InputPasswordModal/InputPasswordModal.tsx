import React, { PureComponent } from 'react';
import { TextInput } from '../../atoms/TextInput';
import { ConfirmationModal } from '../../molecules/ConfirmationModal';
import ErrorMessages from './ErrorMessages';

import {
  Container,
  InputFieldsContainer,
  PasswordInputWrapper,
  ModalWrapper,
} from './elements';
import { words } from '../../../constants';

type Props = {
  password?: string;
  errors: { [key: string]: string } | {};
  isVisible: boolean;
  isConfirmButtonDisabled: boolean;
  onChangePassword: (value: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
};

export default class InputPasswordModal extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      onCancel,
      onConfirm,
      onChangePassword,
      password = '',
      errors,
      isVisible,
      isConfirmButtonDisabled,
    } = this.props;

    return isVisible ? (
      <Container>
        <ModalWrapper>
          <ConfirmationModal
            title={words.identification}
            message={words.reauthRationale}
            confirmButtonTitle={words.confirmation}
            onCancel={onCancel}
            onConfirm={onConfirm}
            isConfirmButtonDisabled={isConfirmButtonDisabled}>
            <InputFieldsContainer>
              <ErrorMessages errors={errors} />
              <PasswordInputWrapper>
                <TextInput
                  type="password"
                  placeholder={words.reauthPasswordPlaceholder}
                  value={password}
                  onChangeText={onChangePassword}
                />
              </PasswordInputWrapper>
            </InputFieldsContainer>
          </ConfirmationModal>
        </ModalWrapper>
      </Container>
    ) : (
      <React.Fragment />
    );
  };
}
