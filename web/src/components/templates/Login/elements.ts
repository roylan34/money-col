import styled from 'styled-components';
import { theme } from '../../../config/';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100vw;
  margin: 3.43rem 0 3.88rem 0;
  @media ${theme.breakpoints.mobile} {
    margin: 2.6rem 0 3.5rem 0;
  }
  @media ${theme.breakpoints.tablet} {
    margin: 3.6rem 0 4.5rem 0;
  }
`;
