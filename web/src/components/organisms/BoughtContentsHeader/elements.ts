import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  background-color: #d8dce6;
`;

export const TitleContainer = styled.div`
  padding: 52px 8.3% 17px 8.3%;
  @media ${theme.breakpoints.mobileAndTablet} {
    padding: 35px 4.5% 16px 4.5%;
  }
`;

export const Title = styled.p`
  font-family: ${theme.fonts.default};
  color: #222222;
  font-size: 22px;
  font-weight: bold;
  ${theme.removeMarginAndPadding}
  @media ${theme.breakpoints.mobile} {
    font-size: 18px;
  }
`;
