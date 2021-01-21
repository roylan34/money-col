import React, { PureComponent } from 'react';
import { TitleContainer, TitleLabel, CloseWrapper } from './elements';
import { Close } from '../../atoms/Icons';

type Props = {
  title: string;
  onClose: () => void;
};

class Title extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { title, onClose } = this.props;

    return (
      <TitleContainer>
        <TitleLabel>{title}</TitleLabel>
        <CloseWrapper onClick={onClose}>
          <Close />
        </CloseWrapper>
      </TitleContainer>
    );
  };
}

export default Title;
