import React, { PureComponent } from 'react';
import {
  ConfirmationContainer,
  Msg,
  ErrorMsg,
  ButtonsContainer,
  ButtonWrapper,
} from './confirmationElements';
import { Button } from '../../atoms/Button';
import { words } from '../../../constants';

type Props = {
  cost: number;
  totalPoints: number;
  onPressCancel: () => void;
  onPressBuy: () => void;
  gotoPurchasePoints: () => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  hasError: false as true | false,
  isPurchasingContent: false as boolean,
};

class Confirmation extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const {
      hasError,
      onPressBuy,
      onPressCancel,
      cost,
      totalPoints,
      isPurchasingContent,
      gotoPurchasePoints,
    } = this.props;
    const canUserBuyContent = totalPoints >= cost;

    return (
      <ConfirmationContainer>
        <Msg>
          {cost}ポイントを使用してこの動画を購入しますか？
          <br />
          あなたの保有ポイント：{totalPoints}ポイント
        </Msg>
        {hasError ? (
          <ErrorMsg>対象ランク外です。</ErrorMsg>
        ) : (
          !canUserBuyContent && (
            <ErrorMsg>
              ポイントが不足しています。 追加のポイント購入を行いますか？
            </ErrorMsg>
          )
        )}
        <ButtonsContainer>
          <ButtonWrapper>
            <Button
              theme="light"
              title={words.cancel}
              textSize="16px"
              onPress={onPressCancel}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            {!canUserBuyContent && !hasError ? (
              <Button
                theme="primary"
                title={words.goToPurchase}
                textSize="16px"
                onPress={gotoPurchasePoints}
              />
            ) : (
              <Button
                theme="primary"
                title={words.buy}
                textSize="16px"
                onPress={onPressBuy}
                disabled={hasError || !canUserBuyContent || isPurchasingContent}
                isLoading={isPurchasingContent}
              />
            )}
          </ButtonWrapper>
        </ButtonsContainer>
      </ConfirmationContainer>
    );
  };
}

export default Confirmation;
