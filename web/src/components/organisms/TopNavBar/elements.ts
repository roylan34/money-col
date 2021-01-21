import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../config/index';
import { home, orangeHome } from '../../../assets/icons';

const fixedHeader = css`
  position: fixed;
  top: 0;
  z-index: 1;

  @media ${theme.breakpoints.pc} {
    & + div {
      padding-top: 100px;
    }
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    & + div {
      padding-top: 60px;
    }
  }
`;

export const NavBarWrapper = styled.div<{ pageYOffset: number }>`
  ${(props): FlattenSimpleInterpolation =>
    props.pageYOffset > 0 ? fixedHeader : css``}
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
  background-color: ${theme.colors.blue.primary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  background-color: ${theme.colors.blue.primary};
  @media ${theme.breakpoints.mobileAndTablet} {
    height: 60px;
  }
`;

export const LeftContainer = styled.span`
  width: 316px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.breakpoints.tablet} {
    width: 220px;
    height: 60px;
    background-color: inherit;
    ${theme.removeMarginAndPadding};
  }
  @media ${theme.breakpoints.mobile} {
    width: 216px;
    height: 60px;
    background-color: inherit;
    ${theme.removeMarginAndPadding};
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  padding-left: 5px;
  padding-right: 5px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 170px;
    height: 28px;
  }
`;

export const RightContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 80px;
  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

export const MobileIconsContainer = styled.div`
  display: inline-flex;
  max-width: 180px;
  width: 45%;
  height: max-content;
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;

export const IconContainer = styled(Link)`
  all: unset;
  cursor: pointer;
  margin-right: 55px;
  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-right: 50px;
  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

export const Anchor = styled.p`
  ${theme.removeMarginAndPadding};
  font-family: ${theme.fonts.default};
  font-size: 14px;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  ${theme.handleTextOverflow}
`;

export const AnchorUnderline = styled.div<{ isHome?: boolean }>`
  width: ${(props): string => (props.isHome ? '20px' : '80%')};
  height: 3px;
  background: rgba(0, 0, 0, 0);
  position: relative;
  top: 2px;
`;

export const HomeWrapper = styled.div`
  width: 20px;
  height: 17px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 5px;
  background: rgba(0, 0, 0, 0) url(${home}) no-repeat center;
`;

export const AnchorWrapper = styled(Link)`
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  margin-right: 40px;
  &:hover {
    background-color: ${theme.colors.blue.dark};
    color: ${theme.colors.yellow.primary};
  }
  &:hover ${AnchorUnderline} {
    background-color: ${theme.colors.yellow.primary};
  }

  &:hover ${HomeWrapper} {
    background: rgba(0, 0, 0, 0) url(${orangeHome}) no-repeat center;
  }
`;

export const ProfileWrapper = styled.div`
  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

export const HamburgerWrapper = styled.div`
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;

export const MobileIconContainer = styled(Link)`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  max-width: 60px;
  width: 33%;
  width: 60px;
  height: 60px;
  margin-left: 1px;
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;

export const Text = styled.p`
  @media ${theme.breakpoints.mobileAndTablet} {
    ${theme.removeMarginAndPadding};
    font: 10px ${theme.fonts.default};
    color: ${theme.colors.blue.primary};
    line-height: 12px;
    margin-top: 2px;
  }
`;

export const DropdownContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: max-content;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  background-color: ${theme.colors.white};
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;
