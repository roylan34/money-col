import React, { PureComponent } from 'react';
import { GoldCrown } from '../../atoms/Icons';
import {
  Container,
  PointsContainer,
  Image,
  Label,
  Points,
  PLabel,
} from './elements';
import { words } from '../../../constants';

type Props = {
  points: number;
};

class PointsHeldCard extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { points } = this.props;

    return (
      <Container>
        <Label>{words.pointsHeldLabel}</Label>
        <PointsContainer>
          <Image>
            <GoldCrown />
          </Image>
          <Points>{points}</Points>
          <PLabel>P</PLabel>
        </PointsContainer>
      </Container>
    );
  };
}

export default PointsHeldCard;
