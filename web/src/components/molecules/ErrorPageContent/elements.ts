import styled from 'styled-components';
import { theme } from '../../../config';

export const Wrapper = styled.div`
  color: ${theme.colors.black.lighter};
  text-align: center;
  @media ${theme.breakpoints.mobile} {
    width: 85vw;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.9375rem;
  @media ${theme.breakpoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const Message = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  font-style: italic;

  @media ${theme.breakpoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 300px;
  height: 52px;
  border-radius: 40px;
  margin: 50px auto;
  @media ${theme.breakpoints.mobile} {
    margin: 70px auto;
    max-width: 270px;
    height: 42px;

    > button {
      font-size: 0.8125rem;
    }
  }
`;
