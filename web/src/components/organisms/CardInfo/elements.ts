import styled from 'styled-components';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from 'react-stripe-elements';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 536px;
  min-height: 302px;
  background: rgba(245, 245, 245, 0.7);
  border: thin solid #afafaf;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    min-height: 270px;
    background: #ffffff;
    border: none;
  }
`;

export const CardInfoContainer = styled.div`
  width: 100%;
  height: 302px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${theme.breakpoints.mobile} {
    height: 270px;
  }
`;

export const TextInputWrapper = styled.div`
  width: 497px;
  height: 50px;
  font-size: 12px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 88.88%;
    max-width: 320px;
  }
`;

export const CardNumberWrapper = styled.div`
  width: 497px;
  height: 50px;
  border: thin solid #666666;
  border-radius: 2px;
  background: ${theme.colors.white};

  @media ${theme.breakpoints.mobileAndTablet} {
    width: 88.88%;
    max-width: 320px;
  }
`;

export const CardNumber = styled(CardNumberElement)`
  ${theme.defaultBoxSizing}
  padding: 1.1rem;
  width: 100%;
`;

export const ExpiryCvcContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 496px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 88.88%;
    max-width: 320px;
  }
`;

export const CardExpiryWrapper = styled.div`
  width: 226px;
  height: 50px;
  border: thin solid #666666;
  border-radius: 2px;
  background: ${theme.colors.white};
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 45%;
    max-width: 152px;
  }
`;

export const CardExpiry = styled(CardExpiryElement)`
  ${theme.defaultBoxSizing}
  padding: 1.1rem;
  width: 100%;
`;

export const CardCVC = styled(CardCvcElement)`
  ${theme.defaultBoxSizing}
  padding: 1.1rem;
  width: 100%;
`;

export const ButtonContainer = styled.div<{
  theme: 'updateProfile' | 'purchasePoints';
}>`
  width: 496px;
  display: flex;
  justify-content: ${(props): string =>
    props.theme === 'updateProfile' ? 'flex-end' : 'flex-start'};
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 88.88%;
    max-width: 320px;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 226px;
  height: 52px;
  border-radius: 40px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 300px;
  }
`;

export const ErrorMessageContainer = styled.div<{ isEmpty: boolean }>`
  margin-top: 0.25rem;
  display: ${(props): string => (props.isEmpty ? 'none' : 'block')};
  flex-direction: column;
  min-height: fit-content;
  width: 497px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 88.88%;
    max-width: 320px;
  }
`;

export const ErrorMessage = styled.p`
  ${theme.defaultErrorText}
  color: ${theme.colors.red.primary};
  font-size: 0.75rem;
  line-height: 1rem;
  width: 100%;
  word-break: break-all;
  display: block;
`;
