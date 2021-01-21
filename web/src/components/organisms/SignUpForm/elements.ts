import styled, { css } from 'styled-components';
import { theme } from '../../../config';

export const FormWrapper = styled.form`
  ${theme.defaultBoxSizing}
  padding: 7% 10%;
  min-height: fit-content;
  @media ${theme.breakpoints.mobile} {
    width: 80vw;
  }
  @media ${theme.breakpoints.tablet} {
    width: 70vw;
  }
  @media ${theme.breakpoints.pc} {
    width: 45vw;
    max-width: 35.2rem;
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
  margin-bottom: 1.5rem;
`;

export const InvitationTextContainer = styled.span`
  height: fit-content;
  align-self: center;
  text-align: center;
`;

export const InvitationText = styled.p`
  ${theme.defaultText}
  font-size: 1rem;
  line-height: 0.95rem;
  word-break: break-all;
  @media ${theme.breakpoints.mobile} {
    font-size: 0.75rem;
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

export const ButtonWrapper = styled.div`
  border-radius: 2.5rem;
  height: 3.5rem;
  width: 85.5%;
  align-self: center;
  margin: 1.8rem 0 1.4rem 0;
`;

const subtitleTextSyles = css`
  font-family: ${theme.fonts.default};
  color: #222222;
`;

export const TermsText = styled.p`
  width: 90%;
  @media ${theme.breakpoints.pc} {
    width: 70%;
  }
  @media ${theme.breakpoints.mobile} {
    width: 90%;
  }
  @media ${theme.breakpoints.tablet} {
    width: 80%;
  }
  align-self: center;
  text-align: center;
  ${subtitleTextSyles}
  font-size: 14px;
  line-height: 20px;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
`;

export const UnderlinedAnchor = styled.a`
  ${subtitleTextSyles}
  font-size: 14px;
  text-decoration: underline;
`;

export const PlainAnchor = styled.a`
  ${subtitleTextSyles}
  font-size: 12px;
  text-decoration: none;

  @media ${theme.breakpoints.mobile} {
    margin-bottom: 0.55rem;
  }
  @media ${theme.breakpoints.tablet} {
    margin-bottom: 1rem;
  }
`;

export const ExternalLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${theme.breakpoints.pc} {
    flex-direction: row;
    width: 75%;
    align-self: center;
  }
  justify-content: space-evenly;
  align-items: center;
`;
