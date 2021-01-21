import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div<{ orientation: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props): string =>
    props.orientation === 'vertical' ? 'column' : 'row'};
  justify-content: space-between;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 22px;
  cursor: pointer;
  width: max-content;
`;

export const OuterCircle = styled.div<{ isSelected: boolean }>`
  width: 18px;
  height: 18px;
  border: ${(props): string =>
    props.isSelected
      ? `thin solid ${theme.colors.blue.primary}`
      : 'thin solid #666666'};
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${theme.colors.blue.primary};
  border-radius: 5px;
`;

export const Label = styled.span`
  ${theme.defaultText};
  ${theme.removeMarginAndPadding};
  font-size: 14px;
  line-height: 21px;
  margin-left: 20px;
`;

export const IconLabelWrapper = styled.div`
  height: 19px;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;
