import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 100%;
  height: 1017px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LimitedTextAreaWrapper = styled.div`
  width: 626px;
  height: 110px;
  border-radius: 4px;
  font-size: 10px;
  line-height: 15px;
`;

export const LeftContainer = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 30px;
`;

export const RightContainer = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-top: 38px;
`;

export const LargeTextAreaWrapper = styled.div`
  width: 626px;
  height: 216px;
  border-radius: 4px;
  font-size: 10px;
  line-height: 15px;
`;

export const Labels = styled.span`
  ${theme.defaultText};
  ${theme.removeMarginAndPadding};
  font-size: 16px;
  line-height: 24px;
`;

export const RadioWrapper = styled.div`
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RadioButtonsWrapper = styled.div`
  height: 88px;
`;

export const SellAmountContainer = styled.div<{ isVisible: boolean }>`
  height: 84px;
  display: ${(props): string => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
`;

export const SellAmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const SellAmountInput = styled.div`
  width: 177px;
  height: 44px;
  border-radius: 4px;
  border: thin solid #e1e1e1;
  margin-right: 10px;
`;

export const RecommendedLabel = styled.div`
  ${theme.removeMarginAndPadding};
  font: 10px ${theme.fonts.default};
  line-height: 16px;
  color: ${theme.colors.gray.darker};
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const Cover = styled.div<{ isVisible: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  ${theme.removeMarginAndPadding};
  top: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.2);
  border-radius: inherit;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  z-index: 5;
`;

export const ReplaceRecommendedContainer = styled.div`
  width: 588px;
  height: 284px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
`;
