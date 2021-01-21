import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  width: 100vw;
  height: 61.69vh;
  overflow-y: scroll;
  overflow-x: hidden;
  border-top: 1px solid #c4c4c4;
  position: relative;
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 30px;
`;

export const HideFeature = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray.primary};
`;

export const HideFeatureLabel = styled.span`
  color: #333333;
  @media ${theme.breakpoints.pc} {
    font: 1.375rem ${theme.fonts.default};
    line-height: 1.5625rem;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    font: 1rem ${theme.fonts.default};
    line-height: 1.25rem;
  }
`;
