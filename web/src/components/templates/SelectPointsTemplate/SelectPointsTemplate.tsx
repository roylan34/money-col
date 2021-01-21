import React, { PureComponent } from 'react';
import { Container } from './elements';
import { SelectPoints } from '../../molecules/SelectPoints';

type Props = {
  pointsToPrice: { [key: string]: string };
  onPressPurchase: (points: number, price: number) => void;
  onPressReturn: () => void;
};

class SelectPointsTemplate extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { pointsToPrice, onPressPurchase, onPressReturn } = this.props;

    return (
      <Container>
        <SelectPoints
          pointsToPrice={pointsToPrice}
          onPressPurchase={onPressPurchase}
          onPressReturn={onPressReturn}
        />
      </Container>
    );
  };
}

export default SelectPointsTemplate;
