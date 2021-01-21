import React, { PureComponent } from 'react';
import {
  CardNumberLabel,
  CardNumberWrapper,
  CardWrapper,
  IconWrapper,
} from './elements';
import {
  AmericanExpress,
  DinersClub,
  Discover,
  Jcb,
  MasterCard,
  UnionPay,
  Visa,
  UnknownCard,
} from '../../atoms/Icons';

const Icons: { [key: string]: React.ReactElement } = {
  'American Express': (
    <IconWrapper>
      <AmericanExpress />
    </IconWrapper>
  ),
  'Diners Club': (
    <IconWrapper>
      <DinersClub />
    </IconWrapper>
  ),
  Discover: (
    <IconWrapper>
      <Discover />
    </IconWrapper>
  ),
  JCB: (
    <IconWrapper>
      <Jcb />
    </IconWrapper>
  ),
  MasterCard: (
    <IconWrapper>
      <MasterCard />
    </IconWrapper>
  ),
  UnionPay: (
    <IconWrapper>
      <UnionPay />
    </IconWrapper>
  ),
  Visa: (
    <IconWrapper>
      <Visa />
    </IconWrapper>
  ),
  Unknown: (
    <IconWrapper>
      <UnknownCard />
    </IconWrapper>
  ),
};

type Props = {
  brand: string | undefined;
  last4: string | undefined;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'profile' as 'profile' | 'payment',
};

class Card extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { last4, brand, theme } = this.props;

    return (
      <CardWrapper theme={theme}>
        <CardNumberWrapper>
          <CardNumberLabel>∗∗∗∗</CardNumberLabel>
          <CardNumberLabel>∗∗∗∗</CardNumberLabel>
          <CardNumberLabel>∗∗∗∗</CardNumberLabel>
          <CardNumberLabel>{last4}</CardNumberLabel>
        </CardNumberWrapper>
        {Icons[brand || '']}
      </CardWrapper>
    );
  };
}

export default Card;
