import styled from 'styled-components';
import { theme } from '../../../config';

export const FormWrapper = styled.div`
  ${theme.defaultBoxSizing}
  padding: 7% 10%;
  @media ${theme.breakpoints.mobile} {
    width: 80vw;
    max-height: 35.57rem;
  }
  @media ${theme.breakpoints.tablet} {
    width: 55vw;
    max-width: 35rem;
    height: 37rem;
  }
  @media ${theme.breakpoints.pc} {
    width: 35rem;
    height: 40rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h2`
  ${theme.defaultText}
  line-height:0;
  font-weight: bold;
  text-align: center;
  @media ${theme.breakpoints.mobile} {
    font-size: 1.25rem;
  }
  @media ${theme.breakpoints.tablet} {
    font-size: 1.5rem;
  }
  @media ${theme.breakpoints.pc} {
    font-size: 2rem;
  }
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
  border-radius: 2.5rem;
  height: 3.5rem;
  width: 85.5%;
  align-self: center;
  margin: 0.5rem 0 1.8rem 0;
`;

export const PlainAnchor = styled.a`
  font-family: ${theme.fonts.default};
  color: #222222;
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 0.6rem;

  @media ${theme.breakpoints.mobile} {
    margin-bottom: 0.85rem;
    text-align: center;
  }
  @media ${theme.breakpoints.tablet} {
    margin-bottom: 1rem;
  }
`;

export const FirstRowAnchor = styled(PlainAnchor)`
  padding-right: 1.25rem;
  @media ${theme.breakpoints.mobile} {
    padding-right: 0.85rem;
  }
  @media ${theme.breakpoints.tablet} {
    padding-right: 1rem;
  }
`;

export const ExternalLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstRowLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  align-self: center;
  min-width: fit-content;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const ErrorMessageContainer = styled.div`
  margin-top: 0.25rem;
  display: block;
  flex-direction: column;
  min-height: fit-content;
  padding: 0 0.25rem;
`;

export const ErrorMessage = styled.p`
  ${theme.defaultErrorText}
  color: ${theme.colors.red.primary};
  font-size: 0.75rem;
  line-height: 1rem;
  width: 90%;
  word-break: break-all;
  display: block;
`;
