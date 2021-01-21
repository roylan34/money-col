import styled from 'styled-components';
import { theme } from '../../../config/index';

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

export const ConfirmationContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1000px;
  height: 672px;
  border-radius: 4px;
  background-color: ${theme.colors.white};
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: thin solid #d9d9d9;
`;

export const TitleLabel = styled.p`
  font: 16px ${theme.fonts.default};
  line-height: 16px;
  color: #333333;
  margin-left: 30px;
`;

export const CloseWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  cursor: pointer;
`;

export const FileInputWrapper = styled.div`
  width: 100%;
  height: 612px;
`;
