import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 60px;
  @media ${theme.breakpoints.mobileAndTablet} {
    margin-top: 40px;
  }
`;

export const Wrapper = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 60px 140px;
  ${theme.defaultBoxSizing};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${theme.breakpoints.mobileAndTablet} {
    max-width: 85%;
    padding: 30px 15px;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.875rem;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 40px;
  @media ${theme.breakpoints.mobile} {
    font-size: 0.9375rem;
    margin-bottom: 30px;
  }
`;

export const TitleSpan = styled.span`
  @media ${theme.breakpoints.mobile} {
    display: block;
  }
`;

export const PrivacyPolicyPc = styled.img`
  width: 843px;
  height: 960px;
  display: block;
  @media ${theme.breakpoints.tablet} {
    width: 80vw;
    height: auto;
  }
  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

export const PrivacyPolicyMobile = styled.img`
  display: none;
  @media ${theme.breakpoints.mobile} {
    display: block;
    width: 75vw;
  }
`;

export const TermsOfServicesPc = styled.img`
  width: 823px;
  height: 3208px;
  display: block;
  @media ${theme.breakpoints.tablet} {
    width: 80vw;
    height: auto;
  }
  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

export const TermsOfServicesMobile = styled.img`
  display: none;
  max-width: 426px;
  height: auto;
  @media ${theme.breakpoints.mobile} {
    display: block;
    width: 75vw;
  }
`;

export const ButtonWrapper = styled.div`
  width: 368px;
  height: 56px;
  border-radius: 40px;
  margin-top: 45px;
  @media ${theme.breakpoints.mobile} {
    width: 80vw;
    height: 35px;
    max-width: 185px;
  }
`;
