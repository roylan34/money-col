import styled from 'styled-components';

import { theme } from '../../../config';

export const Container = styled.div`
  height: 100vh;
  width: auto;
  position: absolute;
  top: 132px;
  right: 0;
  display: flex;
  flex-direction: column;
  @media ${theme.breakpoints.mobile} {
    top: 21px;
  }
`;
