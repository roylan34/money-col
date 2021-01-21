import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  width: 400px;
  height: 366px;
  border: 2px solid ${theme.colors.gray.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    height: max-content;
    border: none;
  }
`;

export const Title = styled.p`
  ${theme.removeMarginAndPadding};
  width: 340px;
  font: 24px ${theme.fonts.default};
  line-height: 36px;
  color: ${theme.colors.black.light};
  font-weight: bold;
  margin-top: 30px;
  @media ${theme.breakpoints.mobileAndTablet} {
    font: 20px ${theme.fonts.default};
    line-height: 30px;
    width: 85%;
    max-width: 340px;
  }
`;

export const TopAmountContainer = styled.div`
  width: 340px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 39px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 85%;
    max-width: 340px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  border-bottom: thin solid ${theme.colors.gray.primary};
  width: 350px;
  margin-top: 10px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 87.5%;
    max-width: 350px;
  }
`;

export const AmountLabel = styled.span`
  font: 16px ${theme.fonts.default};
  line-height: 24px;
  color: ${theme.colors.black.light};
`;

export const TotalContainer = styled.div`
  width: 340px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 85%;
    max-width: 340px;
  }
`;

export const TotalLabel = styled.span`
  font: 18px ${theme.fonts.default};
  line-height: 27px;
  color: ${theme.colors.black.light};
  font-weight: bold;
`;

export const TermsAndConditionsLabel = styled.p`
  ${theme.removeMarginAndPadding};
  width: 340px;
  font: 12px ${theme.fonts.default};
  line-height: 18px;
  color: ${theme.colors.gray.darker};
  margin-top: 57px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 85%;
    max-width: 340px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 368px;
  height: 56px;
  margin-top: 20px;
  border-radius: 40px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 92%;
    max-width: 368px;
  }
`;
