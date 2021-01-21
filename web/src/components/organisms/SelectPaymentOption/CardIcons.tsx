import React from 'react';
import {
  MasterCard,
  Visa,
  AmericanExpress,
  DinersClub,
  Discover,
  Jcb,
  UnionPay,
} from '../../atoms/Icons';
import { CardIconWrapper } from './elements';

export const CardIcons: { [key: string]: React.ReactElement } = {
  'American Express': (
    <CardIconWrapper>
      <AmericanExpress />
    </CardIconWrapper>
  ),
  'Diners Club': (
    <CardIconWrapper>
      <DinersClub />
    </CardIconWrapper>
  ),
  Discover: (
    <CardIconWrapper>
      <Discover />
    </CardIconWrapper>
  ),
  JCB: (
    <CardIconWrapper>
      <Jcb />
    </CardIconWrapper>
  ),
  MasterCard: (
    <CardIconWrapper>
      <MasterCard />
    </CardIconWrapper>
  ),
  UnionPay: (
    <CardIconWrapper>
      <UnionPay />
    </CardIconWrapper>
  ),
  Visa: (
    <CardIconWrapper>
      <Visa />
    </CardIconWrapper>
  ),
};
