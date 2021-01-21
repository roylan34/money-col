import styled from 'styled-components';
import { theme } from '../../../../config/index';
import { copy } from '../../../../assets/icons';

export const Container = styled.div`
  width: 277px;
  height: 68px;
  background-color: rgba(225, 225, 225, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const TitleWrapper = styled.div`
  margin-left: 12px;
`;

export const CopyLinkWrapper = styled.div`
  width: 243px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const Title = styled.span`
  font: 10px ${theme.fonts.default};
  line-height: 16px;
  color: #666666;
  margin-bottom: 5px;
`;

export const Link = styled.span`
  ${theme.handleTextOverflow};
  font: 12px ${theme.fonts.default};
  line-height: 16px;
  color: ${theme.colors.blue.lighter};
`;

export const CopyIconWrapper = styled.div`
  width: 17px;
  height: 20px;
  background: url(${copy}) no-repeat center;
  cursor: pointer;
`;

export const Name = styled.p`
  ${theme.removeMarginAndPadding};
  font: 12px ${theme.fonts.default};
  line-height: 16px;
  color: #333333;
`;

export const TooltipArrow = styled.div<{ isVisible: boolean }>`
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  content: '';
  position: absolute;
  top: 100%;
  left: 97%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #666666 transparent;
`;

export const Tooltip = styled.span<{ isVisible: boolean }>`
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  width: max-content;
  text-align: center;
  background-color: #666666;
  border-radius: 5px;
  position: absolute;
  top: 150%;
  left: 83%;
  padding: 5px 5px;
  font: 10px ${theme.fonts.default};
  line-height: 16px;
  color: #ffffff;
`;
