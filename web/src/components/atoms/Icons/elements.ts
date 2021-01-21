import styled from 'styled-components';
import { theme } from '../../../config/index';
import { brandLogo, mobileBrandLogo } from '../../../assets/icons';

export const BrandLogoWrapper = styled.a`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url(${brandLogo}) no-repeat center;
  background-size: 100%;
  @media ${theme.breakpoints.mobileAndTablet} {
    background: rgba(0, 0, 0, 0) url(${mobileBrandLogo}) no-repeat center;
    background-size: 100%;
  }
`;

export const Icon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const PaperClipPath = styled.path`
  fill: white;
  transition: 0.3s;

  &:hover {
    fill: ${theme.colors.blue.primary};
  }
`;

export const GearPath = styled.path`
  fill: white;
  @media ${theme.breakpoints.mobileAndTablet} {
    fill: ${theme.colors.black.lighter};
  }
`;
