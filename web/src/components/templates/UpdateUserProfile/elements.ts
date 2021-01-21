import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  min-height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  @media ${theme.breakpoints.mobile} {
    margin: 10px 0 20px 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
