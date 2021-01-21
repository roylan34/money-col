import styled from 'styled-components';
import { theme } from '../../../config/index';

export const BrandLogoWrapper = styled.a`
  width: 100%;
  height: 100%;
`;

export const Icon = styled.svg`
  width: 100%;
  height: 100%;

  g {
    path {
      @media ${theme.breakpoints.mobile} {
        fill: white;
      }
    }
  }
`;
