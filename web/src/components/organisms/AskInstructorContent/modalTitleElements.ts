import styled from 'styled-components';
import { theme } from '../../../config/index';
import { close } from '../../../assets/icons';

export const TitleContainer = styled.div`
  width: 100%;
  height: 20%;
  max-height: 80px;
  background-color: ${theme.colors.blue.primary};
  ${theme.removeMarginAndPadding};
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${theme.breakpoints.mobile} {
    height: 60px;
    border-radius: 0;
  }
`;

export const Title = styled.p`
  ${theme.defaultWhiteText};
  font-weight: bold;
  font-size: 22px;
  line-height: 25px;
  flex: 9;
  display: flex;
  justify-content: center;
  padding-left: 50px;
  @media ${theme.breakpoints.pc} {
    margin-left: 25px;
  }
  @media ${theme.breakpoints.tablet} {
    margin-left: 25px;
  }
  @media ${theme.breakpoints.mobile} {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const CloseButtonContainer = styled.div.attrs((props: object) => ({
  ...props,
}))`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  background-color: inherit;
  border-radius: inherit;
  cursor: pointer;

  @media ${theme.breakpoints.mobile} {
    margin-right: 23px;
    width: 20px;
    height: 20px;
  }
`;

export const CloseButton = styled.div`
  width: 32px;
  height: 3px;
  background-color: ${theme.colors.white};

  @media ${theme.breakpoints.mobile} {
    width: 14px;
    height: 14px;
    background: url(${close});
    background-size: 14px 14px;
  }
`;
