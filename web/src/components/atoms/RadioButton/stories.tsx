import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { RadioButton } from '.';
import { PayPal } from '../../atoms/Icons';
import { theme } from '../../../config';

const SampleText = styled.span`
  font: 18px ${theme.fonts.default};
  line-height: 21px;
  color: #222222;
  margin-right: 13px;
`;

const TextAndIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

storiesOf('Atom - RadioButton', module)
  .add('Default RadioButton', () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <RadioButton
        isSelected={isSelected}
        onClickRadioButton={(value: boolean) => setIsSelected(!value)}
      />
    );
  })
  .add('RadioButton with Label', () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <RadioButton
        isSelected={isSelected}
        onClickRadioButton={(value: boolean) => setIsSelected(!value)}>
        <SampleText>PayPal</SampleText>
      </RadioButton>
    );
  })
  .add('RadioButton with Icon', () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <RadioButton
        isSelected={isSelected}
        onClickRadioButton={(value: boolean) => setIsSelected(!value)}>
        <TextAndIconContainer>
          <SampleText>PayPal</SampleText>
          <PayPal />
        </TextAndIconContainer>
      </RadioButton>
    );
  });
