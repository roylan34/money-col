import React, { PureComponent } from 'react';
import {
  TitleContainer,
  Title,
  CloseButton,
  CloseButtonContainer,
} from './modalTitleElements';
import { words } from '../../../constants';

type Props = {
  onClose: () => void;
};

class ModalTitle extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onClose } = this.props;

    return (
      <TitleContainer>
        <Title>{words.askModalTitle}</Title>
        <CloseButtonContainer onClick={onClose}>
          <CloseButton />
        </CloseButtonContainer>
      </TitleContainer>
    );
  };
}

export default ModalTitle;
