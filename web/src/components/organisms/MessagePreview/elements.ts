import styled from 'styled-components';
import { List } from 'react-virtualized';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 316px;
  height: 100%;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 69px;
  background-color: ${theme.colors.blue.primary};
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.blue.primary};
  @media ${theme.breakpoints.mobileAndTablet} {
    background: ${theme.colors.white};
  }
`;

export const HeaderLabel = styled.p`
  ${theme.removeMarginAndPadding};
  ${theme.defaultWhiteText};
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  margin-left: 26px;
  @media ${theme.breakpoints.mobileAndTablet} {
    color: ${theme.colors.black.lighter};
    font-size: 20;
    line-height: 23px;
  }
`;

export const GearWrapper = styled.div`
  margin-right: 24px;
  cursor: pointer;
`;

export const MessagePreviewList = styled.div`
  width: 100%;
  height: calc(100vh - 69px);
  ${theme.defaultBoxSizing};
`;

export const ReactVirtualizedList = styled(List)`
  outline: none;
`;
