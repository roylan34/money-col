import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.a`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 46.5vw;
  height: 40px;
  background-color: #edf1f8;
  margin-bottom: 1px;
  text-decoration: none;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    height: 74px;
  }

  &:hover {
    background-color: #d0dbf2;
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  @media ${theme.breakpoints.mobileAndTablet} {
    display: block;
    vertical-align: middle;
    margin-left: 22px;
    width: 80%;
  }
`;

export const Date = styled.p`
  ${theme.defaultText}
  font-size: 12px;
  line-height: 18px;
  margin-left: 20px;
  @media ${theme.breakpoints.mobileAndTablet} {
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
    ${theme.removeMarginAndPadding};
  }
`;

export const Title = styled.p`
  ${theme.defaultText}
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  ${theme.handleTextOverflow}
  margin-left: 20px;
  margin-right: 20px;
  width: 515px;
  @media ${theme.breakpoints.mobileAndTablet} {
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
    width: 100%;
    ${theme.removeMarginAndPadding};
  }
`;

export const RightArrow = styled.img`
  align-self: 'center';
  margin-right: 20px;
`;
