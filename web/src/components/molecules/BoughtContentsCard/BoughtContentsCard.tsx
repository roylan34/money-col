import React, { PureComponent } from 'react';
import { Container, Image, TextContainer, Title, Subtitle } from './elements';
import { Cart } from '../../atoms/Icons';
import { paths } from '../../../constants/routes/urls';

class BoughtContentsCard extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Container to={paths.purchases}>
        <Image>
          <Cart />
        </Image>
        <TextContainer>
          <Title>マイアイテム一覧</Title>
          <Subtitle>はこちらから</Subtitle>
        </TextContainer>
      </Container>
    );
  };
}

export default BoughtContentsCard;
