import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div<{ isVisible: boolean }>`
  width: 1000px;
  min-height: 1148px;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: thin solid #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  ${theme.removeMarginAndPadding};
  font: 16px ${theme.fonts.default};
  line-height: 16px;
  font-weight: bold;
  color: #333333;
  margin-left: 30px;
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  border-top: thin solid #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 95px;
  height: 36px;
  border-radius: 2px;
  margin-right: 36px;
`;

export const ErrorMessageContainer = styled.div<{ isEmpty: boolean }>`
  margin-top: 0.25rem;
  display: ${(props): string => (props.isEmpty ? 'none' : 'block')};
  flex-direction: column;
  height: max-content;
  min-height: fit-content;
  width: 372px;
  margin-left: 30px;
`;

export const ErrorMessage = styled.p`
  ${theme.defaultErrorText}
  color: ${theme.colors.red.primary};
  font-size: 0.75rem;
  line-height: 1rem;
  width: 100%;
  word-break: break-all;
`;
