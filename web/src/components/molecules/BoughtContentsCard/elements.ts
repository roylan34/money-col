import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../config/index';

export const Container = styled(Link)`
  width: 273px;
  height: 125px;
  background-color: ${theme.colors.green.primary};
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
    width: 100%;
    height: 80px;
  }
  @media ${theme.breakpoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
  }
`;

export const Image = styled.div`
  align-content: center;
  width: 58px;
  height: 57px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 57px;
  margin-left: 12px;
`;
// font-size: ${(props): string => (props.isFirst ? '20px' : '14px')}
export const Title = styled.span`
  ${theme.removeMarginAndPadding};
  font-family: ${theme.fonts.default};
  font-weight: bold;
  font-size: 20px;
  color: ${theme.colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Subtitle = styled.span`
  ${theme.removeMarginAndPadding};
  font-family: ${theme.fonts.default};
  font-weight: bold;
  font-size: 14px;
  color: ${theme.colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
