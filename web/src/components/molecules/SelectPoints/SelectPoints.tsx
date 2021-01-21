import React, { PureComponent } from 'react';
import {
  Container,
  PointsWrapper,
  Header,
  HeaderText,
  Separator,
  PurchasePointItem,
  PurchaseButtonContainer,
  CoinContainer,
  CoinWrapper,
  CoinLabel,
  PtsLabel,
  PurchaseButtonWrapper,
  WarningLabel,
  BottomButtonWrapper,
} from './elements';
import { PointsCoin } from '../../atoms/Icons';
import { Button } from '../../atoms/Button';
import { formatNumberWithCommas } from '../../../utils';
import { words } from '../../../constants';

type Props = {
  pointsToPrice: { [key: string]: string };
  onPressPurchase: (points: number, price: number) => void;
  onPressReturn: () => void;
};

class SelectPoints extends PureComponent<Props> {
  stripAllNonNumberic = (value: string) => {
    return value.replace(/\D/g, '');
  };

  renderPurchasePointsItems = () => {
    const { pointsToPrice, onPressPurchase } = this.props;

    return Object.keys(pointsToPrice).map((key, index) => (
      <React.Fragment key={key}>
        <PurchasePointItem>
          <PurchaseButtonContainer>
            <CoinContainer>
              <CoinWrapper>
                <PointsCoin />
              </CoinWrapper>
              <CoinLabel>
                {this.stripAllNonNumberic(key)}
                <PtsLabel>ポイント</PtsLabel>
              </CoinLabel>
            </CoinContainer>
            <PurchaseButtonWrapper>
              <Button
                textSize="16px"
                title={`¥${formatNumberWithCommas(
                  parseInt(pointsToPrice[key]),
                )}`}
                onPress={() =>
                  onPressPurchase(
                    parseInt(this.stripAllNonNumberic(key)),
                    parseInt(pointsToPrice[key]),
                  )
                }
              />
            </PurchaseButtonWrapper>
          </PurchaseButtonContainer>
        </PurchasePointItem>
        {index !== 3 && <Separator />}
      </React.Fragment>
    ));
  };

  render = (): React.ReactElement => {
    const { onPressReturn } = this.props;

    return (
      <Container>
        <PointsWrapper>
          <Header>
            <HeaderText>{words.selectPointsHeader}</HeaderText>
          </Header>
          <Separator />
          {this.renderPurchasePointsItems()}
        </PointsWrapper>
        <WarningLabel>{words.purchasePointsWarning}</WarningLabel>
        <BottomButtonWrapper>
          <Button
            textSize="16px"
            title={words.return}
            theme="light"
            onPress={onPressReturn}
          />
        </BottomButtonWrapper>
      </Container>
    );
  };
}

export default SelectPoints;
