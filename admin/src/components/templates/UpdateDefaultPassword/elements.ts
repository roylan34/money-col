import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  ${theme.removeMarginAndPadding};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f3f3f3;
`;

export const BrandLogoWrapper = styled.div`
  width: 320px;
  height: 39px;
  @media ${theme.breakpoints.mobile} {
    width: 90%;
    max-width: 320px;
  }
`;
