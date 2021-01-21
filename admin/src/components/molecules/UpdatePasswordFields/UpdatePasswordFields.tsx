import React, { PureComponent } from 'react';
import {
  FieldsContainer,
  TextInputWrapper,
  Label,
  ButtonContainer,
  ButtonWrapper,
} from './elements';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import words from '../../../constants/words';

type Props = {
  newPassword: string;
  retypedNewPassword: string;
  onChangeNewPassword: (text: string) => void;
  onChangeNewPasswordConfirm: (text: string) => void;
  onPressChangePass: () => void;
  shouldDisableSubmit: boolean;
};

class UpdatePasswordFields extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      newPassword,
      retypedNewPassword,
      onChangeNewPassword,
      onChangeNewPasswordConfirm,
      onPressChangePass,
      shouldDisableSubmit,
    } = this.props;

    return (
      <FieldsContainer>
        <div>
          <Label>新しいパスワード</Label>
          <TextInputWrapper>
            <TextInput
              type="password"
              theme="default"
              isDynamicHeight
              value={newPassword}
              onChangeText={onChangeNewPassword}
            />
          </TextInputWrapper>
        </div>
        <div>
          <Label>新しいパスワード（確認）</Label>
          <TextInputWrapper>
            <TextInput
              type="password"
              theme="default"
              isDynamicHeight
              value={retypedNewPassword}
              onChangeText={onChangeNewPasswordConfirm}
            />
          </TextInputWrapper>
        </div>
        <ButtonContainer>
          <ButtonWrapper>
            <Button
              theme="primary"
              type="submit"
              title={words.changePassword}
              onPress={onPressChangePass}
              disabled={shouldDisableSubmit}
            />
          </ButtonWrapper>
        </ButtonContainer>
      </FieldsContainer>
    );
  };
}

export default UpdatePasswordFields;
