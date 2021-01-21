import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../config/index';
import { ItemParams } from './types';

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

export const MobileContainer = styled.div<{ isVisible?: boolean }>`
  width: 100%;
  height: 216px;
  background-color: ${theme.colors.blue.primary};
  display: ${(props): string => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;

export const WebContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: inherit;
  border-radius: inherit;
  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

export const BackItemContainer = styled.div.attrs((props: object) => ({
  ...props,
}))`
  position: relative;
  text-decoration: none;
  ${theme.removeMarginAndPadding};
  cursor: pointer;
  height: 90px;
  width: 100%;
`;

export const ItemContainer = styled.div.attrs((props: object) => ({
  ...props,
}))<ItemParams>`
  position: relative;
  text-decoration: none;
  height: 100%;
  width: 100%;
  ${theme.removeMarginAndPadding};
  @media ${theme.breakpoints.mobileAndTablet} {
    display: ${(props): string => (props.isBackItem ? 'none' : 'block')};
    height: 42px;
    cursor: pointer;
  }

  &:hover {
    @media ${theme.breakpoints.pc} {
      background-color: #d0dbf2;
    }
  }
`;

export const Item = styled.p<ItemParams>`
  text-decoration: none;
  ${theme.defaultText}
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 12px;
  white-space: pre;
  ${theme.handleTextOverflow}
  @media ${theme.breakpoints.mobileAndTablet} {
    ${theme.defaultWhiteText}
    font-size: 14px;
    line-height: 21px;
    margin-left: ${(props): string => (props.isBackItem ? '34px' : '10px')};
    margin-top: ${(props): string => (props.isBackItem ? '34px' : '10px')};
  }
`;

export const Label = styled.span`
  ${theme.removeMarginAndPadding};
`;

export const Separator = styled.div`
  position: absolute;
  bottom: 0;
  width: 180px;
  height: 2px;
  background-color: ${theme.colors.blue.light};
  margin: 0;
  padding: 0;
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 12px;
  @media ${theme.breakpoints.mobileAndTablet} {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: ${theme.colors.white};
  }
`;
