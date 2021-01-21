import React, { PureComponent } from 'react';
import {
  Container,
  Msg,
  ButtonContainer,
  ConfirmButton,
  CancelText,
  MsgWrapper,
} from './elements';
import { Button } from '../../atoms/Button';
import words from '../../../constants/words';

type Props = {
  msg: string;
  onDelete: () => void;
  onCancel: () => void;
};

class ConfirmationModal extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { msg, onDelete, onCancel } = this.props;

    return (
      <Container>
        <MsgWrapper>
          <Msg>{msg}</Msg>
        </MsgWrapper>
        <ButtonContainer>
          <CancelText onClick={onCancel}>{words.cancel}</CancelText>
          <ConfirmButton>
            <Button
              theme="primary"
              type="button"
              title={words.delete}
              textSize="14px"
              onPress={onDelete}
            />
          </ConfirmButton>
        </ButtonContainer>
      </Container>
    );
  };
}

export default ConfirmationModal;
