import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.a`
  width: 273px;
  height: 125px;
  background-color: ${theme.colors.red.primary};
  text-decoration: none;
  display: block;
  @media ${theme.breakpoints.pc} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media ${theme.breakpoints.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media ${theme.breakpoints.mobile} {
    width: 45%;
    max-width: 273px;
    height: 130px;
  }
`;

export const Image = styled.div`
  align-content: center;
  width: 57px;
  height: 55px;
  @media ${theme.breakpoints.mobile} {
    width: 40px;
    height: 38px;
    position: relative;
    top: 50%;
    left: 65%;
  }
`;

export const TextContainer = styled.div`
  ${theme.removeMarginAndPadding};
  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

export const MobileTextContainer = styled.div`
  ${theme.removeMarginAndPadding};
  width: 100%;
  height: 100%;
  @media ${theme.breakpoints.pc} {
    display: none;
  }
  @media ${theme.breakpoints.tablet} {
    display: none;
  }
`;

export const Text = styled.p<{ isFirst: boolean }>`
  font-family: ${theme.fonts.default};
  font-weight: bold;
  font-size: ${(props): string => (props.isFirst ? '20px' : '14px')};
  color: ${theme.colors.white};
  padding-right: 12px;
  text-shadow: 1px 1px 1px #610000;
  margin: 0;
  @media ${theme.breakpoints.mobile} {
    font-size: ${(props): string => (props.isFirst ? '16px' : '12px')};
    line-height: ${(props): string => (props.isFirst ? '24px' : '18px')};
    position: relative;
    top: ${(props): string => (props.isFirst ? '-5px' : '7px')};
    left: ${(props): string => (props.isFirst ? '16px' : '19px')};
    width: ${(props): string => (props.isFirst ? '128px' : '60px')};
  }
`;
