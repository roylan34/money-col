import { Link } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config/index';
import { whiteGreaterThan } from '../../../assets/icons';

export const Container = styled.div`
  width: 100%;
  height: max-content;
  ${theme.removeMarginAndPadding};
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;

export const ProfileContainer = styled.div<{ isVisible: boolean }>`
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  ${theme.removeMarginAndPadding};
`;

const manualBackground = css`
  background: ${theme.colors.blue.primary} url(${whiteGreaterThan}) no-repeat
    90%;
`;

const notManualBackground = css`
  background: ${theme.colors.blue.primary};
`;

export const ItemLink = styled(Link)`
  ${theme.removeMarginAndPadding};
  width: 100%;
  height: 42px;
  background: ${theme.colors.blue.primary};
  display: flex;
  align-items: center;
  margin-top: 1px;
  cursor: pointer;
  text-decoration: none;
`;

export const ItemWrapper = styled.div.attrs((props: object) => ({
  ...props,
}))<{ isManualItem?: boolean }>`
  ${theme.removeMarginAndPadding};
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  margin-top: 1px;
  cursor: pointer;
  ${(props): FlattenSimpleInterpolation => {
    if (props.isManualItem) return manualBackground;

    return notManualBackground;
  }};
`;

export const Item = styled.p`
  ${theme.removeMarginAndPadding};
  ${theme.defaultWhiteText};
  font-size: 14px;
  line-height: 21px;
  font-weight: bold;
  margin-left: 10px;
`;
