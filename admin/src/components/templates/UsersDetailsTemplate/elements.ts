import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 920px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`;

export const BackButtonWrapepr = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLabel = styled.span`
  font: 20px ${theme.fonts.default};
  line-height: 28px;
  color: #333333;
  margin-left: 30px;
`;

export const UserDetailTableWrapper = styled.div`
  width: 920px;
  height: 107px;
  margin-top: 40px;
`;

export const UserDetailName = styled.span`
  font: 14px ${theme.fonts.default};
  font-weight: bold;
  line-height: 16px;
  color: #333333;
`;

export const PointMgmtButtonContainer = styled.div`
  width: 920px;
  height: max-content;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const PointMgmtButtonWrapper = styled.div`
  width: 137px;
  height: 36px;
  border-radius: 2px;
  z-index: 1;
`;

export const UsageHistoryHeader = styled.span`
  ${theme.defaultText};
  width: 920px;
  font-size: 16px;
  line-height: 28px;
  margin-top: 50px;
`;

export const UsageHistTableWrapper = styled.div`
  width: 920px;
  height: 50%;
  max-height: 450px;
  overflow-y: auto;
  margin-top: 10px;
`;

export const LoadingContainer = styled.div`
  margin: auto;
  width: 32px;
`;

export const PaginationButtonsWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 920px;
`;

export const PointsSpent = styled.div<{ isNegative: boolean }>`
  font: 14px ${theme.fonts.default};
  line-height: 16px;
  font-weight: bold;
  color: ${(props): string =>
    props.isNegative ? theme.colors.red.primary : theme.colors.green.primary};
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

export const PtMgmtModalContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 795px;
  height: 325px;
  border-radius: 4px;
  background-color: ${theme.colors.white};
`;
