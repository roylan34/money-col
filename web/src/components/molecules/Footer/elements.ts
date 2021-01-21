import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 100%;
  height: 373px;
  background-color: ${theme.colors.gray.light};
  display: flex;
  @media ${theme.breakpoints.pc} {
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${theme.breakpoints.mobile} {
    height: 154px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const IconsContainer = styled.div`
  ${theme.removeMarginAndPadding};
  width: 265px;
  @media ${theme.breakpoints.pc} {
    margin-left: 50px;
    margin-top: 166px;
  }
  @media ${theme.breakpoints.tablet} {
    margin-left: 25px;
    margin-top: 166px;
  }
  @media ${theme.breakpoints.mobile} {
    margin-top: 50px;
    width: 215px;
    height: auto;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  width: 265px;
  height: 42px;
  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

export const SNSContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media ${theme.breakpoints.pc} {
    width: 100%;
    height: 78px;
  }
  @media ${theme.breakpoints.tablet} {
    width: 100%;
    height: 78px;
  }
  @media ${theme.breakpoints.mobile} {
    width: 215px;
    justify-content: space-between;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${theme.breakpoints.pc} {
    width: 700px;
    margin-top: 166px;
    margin-right: 50px;
  }
  @media ${theme.breakpoints.tablet} {
    width: 450px;
    margin-top: 166px;
    margin-right: 30px;
  }
  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const IconContainer = styled.a<{ width: number; height: number }>`
  ${theme.removeMarginAndPadding};
  width: ${(props): string => `${props.width}px`};
  height: ${(props): string => `${props.height}px`};
`;

export const TextContainer = styled.div<{ isFourth: boolean }>`
  ${theme.removeMarginAndPadding}
  height: ${(props): string => (props.isFourth ? '90px' : '120px')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Text = styled.a<{ isNormal?: boolean }>`
  text-decoration: none;
  font-weight: ${(props): string => (props.isNormal ? 'normal' : 'bold')};
  width: max-content;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  @media ${theme.breakpoints.pc} {
    font-size: 14px;
    ${theme.defaultText}
  }
  @media ${theme.breakpoints.tablet} {
    font-size: 11.5px;
    ${theme.defaultText}
  }

  &:hover {
    border-bottom: 2px solid ${theme.colors.yellow.primary};
  }
`;

export const CreditText = styled.p`
  ${theme.removeMarginAndPadding};
  font: 14px ${theme.fonts.default};
  padding-top: 32px;
  width: 300px;
  @media ${theme.breakpoints.pc} {
    margin-top: 20px;
  }
  @media ${theme.breakpoints.tablet} {
    margin-top: 20px;
  }
  @media ${theme.breakpoints.mobile} {
    color: ${theme.colors.blue.primary};
    font: 10px ${theme.fonts.default};
    width: 215px;
    text-align: center;
  }
`;

export const BottomText = styled.a`
  text-decoration: none;
  margin-left: 25px;
  @media ${theme.breakpoints.pc} {
    font-size: 14px;
    ${theme.defaultText}
  }
  @media ${theme.breakpoints.tablet} {
    font-size: 11.5px;
    ${theme.defaultText}
  }
`;

export const BottomTextContainer = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 15px;
  margin-right: 30px;
  @media ${theme.breakpoints.tablet} {
    margin-right: 15px;
  }
`;
