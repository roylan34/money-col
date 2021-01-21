import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.breakpoints.mobileAndTablet} {
    min-height: calc(100vh - 60px);
    overflow-y: auto;
  }
`;
