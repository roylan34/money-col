import styled from 'styled-components';
import { theme } from '../../../config/';

export const Container = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100vw;
  }
`;
