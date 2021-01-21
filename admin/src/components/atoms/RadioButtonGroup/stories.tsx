import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioButtons } from '.';
import styled from 'styled-components';

const VerticalContainer = styled.div`
  width: 500px;
  height: 76px;
`;

export const HorizontalContainer = styled.div`
  width: 200px;
`;

storiesOf('Atom - RadioButtonGroup', module)
  .add('Orientation Vertical Radio Buttons', () => (
    <VerticalContainer>
      <RadioButtons
        labels={['即時', '予約する']}
        value="即時"
        onChange={action('on-change-selected')}
      />
    </VerticalContainer>
  ))
  .add('Orientation Horizontal Radio Buttons', () => (
    <HorizontalContainer>
      <RadioButtons
        labels={['即時', '予約する']}
        value="予約する"
        orientation="horizontal"
        onChange={action('on-change-selected')}
      />
    </HorizontalContainer>
  ))
  .add('Radio Buttons with Icon', () => (
    <VerticalContainer>
      <RadioButtons
        labels={['即時', '予約する']}
        value="即時"
        onChange={action('on-change-selected')}
        hasIcon
      />
    </VerticalContainer>
  ));
