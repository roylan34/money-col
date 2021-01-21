import React, { PureComponent } from 'react';
import { TitleContainer, Separator, Title } from './modalTitleElements';

class ModalTitle extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <TitleContainer>
        <Title>コンテンツ詳細</Title>
        <Separator />
      </TitleContainer>
    );
  };
}

export default ModalTitle;
