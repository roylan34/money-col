import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SelectPointsTemplate } from '../../templates/SelectPointsTemplate';
import { paths } from '../../../constants/routes/urls';

type Props = {
  priceMapOfPoints: { [key: string]: string };
  fetchPriceMap: () => {};
} & RouteComponentProps;

export default class extends PureComponent<Props> {
  onPressReturn = () => {
    this.props.history.goBack();
  };

  onPressPurchase = (points: number, price: number) => {
    this.props.history.push({
      pathname: paths.paymentOptions,
      state: {
        pointsToBePurchased: points,
        amountInYen: price,
      },
    });
  };

  componentDidMount() {
    const { fetchPriceMap } = this.props;
    fetchPriceMap();
  }

  render = (): React.ReactElement => {
    const { priceMapOfPoints } = this.props;

    return (
      <SelectPointsTemplate
        pointsToPrice={priceMapOfPoints}
        onPressPurchase={this.onPressPurchase}
        onPressReturn={this.onPressReturn}
      />
    );
  };
}
