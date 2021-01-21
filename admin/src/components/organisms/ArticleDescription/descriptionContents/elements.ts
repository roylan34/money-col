import styled from 'styled-components';
import { theme } from '../../../../config/index';

export const Container = styled.div`
  width: 100%;
  height: 407px;
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
