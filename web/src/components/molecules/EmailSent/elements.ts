import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../config';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  ${theme.defaultBoxSizing}
  padding: 0 10%;
  @media ${theme.breakpoints.mobile} {
    width: 85vw;
    min-height: 27.8rem;
  }
  @media ${theme.breakpoints.tablet} {
    width: 30rem;
    min-height: 30rem;
  }
  @media ${theme.breakpoints.pc} {
    width: 35.2rem;
    min-height: 31rem;
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

export const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: ${theme.colors.blue.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  ${theme.defaultText}
  line-height: 1.5rem;
  @media ${theme.breakpoints.mobile} {
    font-size: 0.87rem;
  }
  @media ${theme.breakpoints.tablet} {
    font-size: 1rem;
  }
  @media ${theme.breakpoints.pc} {
    font-size: 1rem;
  }
  text-align: left;
  word-break: break-all;
  white-space: pre-line;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 2.5rem 0 3.5rem 0;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    width: 80%;
    height: 3rem;
    margin-bottom: 2rem;
  }
  justify-content: space-around;
  align-items: center;
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  ${theme.defaultText}
  line-height:1rem;
  @media ${theme.breakpoints.mobile} {
    width: 80%;
    font-size: 0.75rem;
  }
  @media ${theme.breakpoints.tablet} {
    font-size: 0.875rem;
  }
  @media ${theme.breakpoints.pc} {
    font-size: 0.875rem;
  }
  text-align: center;
  text-decoration: none;
`;

export const ResetPasswordLink = styled(Link)`
  display: inline;
  text-decoration: none;
  cursor: pointer;
  color: #73aafc;
`;
