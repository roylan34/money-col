import styled from 'styled-components';
import { theme } from '../../../config';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${theme.breakpoints.mobile} {
    width: 85vw;
    height: 20.24rem;
  }
  @media ${theme.breakpoints.tablet} {
    width: 30rem;
    height: 25.44rem;
  }
  @media ${theme.breakpoints.pc} {
    width: 35.2rem;
    height: 26.44rem;
  }
`;

export const Title = styled.p`
  ${theme.defaultText}
  font-weight: bold;
  @media ${theme.breakpoints.mobile} {
    font-size: 1.25rem;
  }
  @media ${theme.breakpoints.tablet} {
    font-size: 1.5rem;
  }
  @media ${theme.breakpoints.pc} {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  ${theme.defaultText}
  line-height: 1.5rem;
  @media ${theme.breakpoints.mobile} {
    width: 80%;
    font-size: 0.87rem;
  }
  @media ${theme.breakpoints.tablet} {
    width: 75%;
    font-size: 1rem;
  }
  @media ${theme.breakpoints.pc} {
    width: 70%;
    font-size: 1rem;
  }
  text-align: center;
  word-break: break-all;
`;

export const LoginAnchor = styled.a`
  height: 3.25rem;
  width: 70%;
  border-radius: 2.5rem;
  margin-bottom: 2rem;
  @media ${theme.breakpoints.pc} {
    margin-bottom: 5rem;
  }
  background-color: ${theme.colors.blue.primary};
  ${theme.defaultWhiteText}
  ${theme.defaultBoxSizing}
  text-align:center;
  padding: 0.7rem 0;
  text-decoration: none;
`;
