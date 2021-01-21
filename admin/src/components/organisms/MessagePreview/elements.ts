import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { List } from 'react-virtualized';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 316px;
  height: 100%;
`;

export const Header = styled.div<{ isAdmin?: boolean }>`
  width: 100%;
  height: 69px;
  background-color: ${theme.colors.blue.primary};
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  background: ${theme.colors.blue.primary};
  ${(props): FlattenSimpleInterpolation => {
    if (props.isAdmin) {
      return css``;
    }

    return css`
      justify-content: space-between;
    `;
  }}
`;

export const HeaderLabel = styled.p<{ isAdmin?: boolean }>`
  ${theme.removeMarginAndPadding};
  ${theme.defaultWhiteText};
  font-size: ${(props): string => (props.isAdmin ? '16px' : '24px')};
  line-height: ${(props): string => (props.isAdmin ? '14px' : '28px')};
  font-weight: bold;
  margin-left: ${(props): string => (props.isAdmin ? '20px' : '26px')};
`;

export const GearWrapper = styled.div`
  margin-right: 24px;
  cursor: pointer;
`;

export const BackArrowWrapper = styled.div`
  width: 15px;
  height: 20px;
  cursor: pointer;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessagePreviewList = styled.div`
  width: 100%;
  height: calc(100vh - 69px);
  ${theme.defaultBoxSizing};
`;

export const ReactVirtualizedList = styled(List)`
  outline: none;
`;
