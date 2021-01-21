import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media ${theme.breakpoints.pc} {
    height: 472px;
  }
  @media ${theme.breakpoints.tablet} {
    height: 472px;
  }
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const ContactAndQRWrapper = styled.div`
  width: 50%;
  height: 100%;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
  }
`;
