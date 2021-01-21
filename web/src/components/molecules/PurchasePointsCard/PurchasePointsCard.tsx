import React, { PureComponent } from 'react';
import { Shopping } from '../../atoms/Icons';
import {
  Container,
  Image,
  Text,
  TextContainer,
  MobileTextContainer,
} from './elements';
import { words } from '../../../constants';

type Props = {
  link: string;
};

class PurchasePointsCard extends PureComponent<Props> {
  renderWeb = (): React.ReactElement => {
    return (
      <TextContainer>
        <Text isFirst>{words.purchasePointsLabel.web.firstRow}</Text>
        <Text isFirst={false}>{words.purchasePointsLabel.web.secondRow}</Text>
      </TextContainer>
    );
  };

  renderMobile = (): React.ReactElement => {
    return (
      <MobileTextContainer>
        <Text isFirst>{words.purchasePointsLabel.mobile.firstRow}</Text>
        <Text isFirst={false}>
          {words.purchasePointsLabel.mobile.secondRow}
        </Text>
      </MobileTextContainer>
    );
  };

  render = (): React.ReactElement => {
    const { link } = this.props;

    return (
      <Container href={link}>
        <Image>
          <Shopping />
        </Image>
        {this.renderWeb()}
        {this.renderMobile()}
      </Container>
    );
  };
}

export default PurchasePointsCard;
