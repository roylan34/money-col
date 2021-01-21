import React, { PureComponent } from 'react';
import { Container, TitleWrapper, Title, Name } from './itemInfoElements';

type Props = {
  name: string;
};

class ItemInfo extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { name } = this.props;

    return (
      <Container>
        <TitleWrapper>
          <Title>ファイル名</Title>
          <Name>{name}</Name>
        </TitleWrapper>
      </Container>
    );
  };
}

export default ItemInfo;
