import React, { PureComponent } from 'react';
import {
  Container,
  Message,
  NewTitle,
  OldTitle,
  ButtonsContainer,
  Cancel,
  ReplaceWrapper,
} from './elements';
import { Button } from '../../atoms/Button';
import words from '../../../constants/words';

type Props = {
  index: string;
  oldTitle: string;
  newTitle: string;
  onReplace: () => void;
  onCancel: () => void;
};

class ReplaceModal extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { oldTitle, newTitle, onReplace, onCancel, index } = this.props;

    return (
      <Container>
        <Message>
          おすすめ{index}は既にアイテムが設定されています。
          <br />『<OldTitle>{oldTitle}</OldTitle>』から <br />『
          <NewTitle>{newTitle}</NewTitle>』 へ置き換えますか？
        </Message>
        <ButtonsContainer>
          <Cancel onClick={onCancel}>{words.cancel}</Cancel>
          <ReplaceWrapper>
            <Button
              title={words.replaceButton}
              textSize="14px"
              onPress={onReplace}
            />
          </ReplaceWrapper>
        </ButtonsContainer>
      </Container>
    );
  };
}

export default ReplaceModal;
