import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media ${theme.breakpoints.pc} {
    justify-content: space-between;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 64px;
  @media ${theme.breakpoints.pc} {
    margin-right: 47px;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    margin-top: 39px;
    margin-left: 20px;
  }
`;

export const PaymentOptionTitle = styled.span`
  font: 24px ${theme.fonts.default};
  line-height: 28px;
  color: #222222;
  font-weight: bold;
`;

export const PaypalRadioWrapper = styled.div`
  margin-top: 22px;
`;

export const StripeCardRadioWrapper = styled.div`
  margin-top: 25px;
`;

export const RadioLabel = styled.span`
  font: 18px ${theme.fonts.default};
  line-height: 21px;
  color: #222222;
  margin-right: 13px;
`;

export const AddNewCardLabel = styled.span`
  font: 18px ${theme.fonts.default};
  line-height: 27px;
  color: ${theme.colors.blue.lighter};
  margin-top: 20px;
  cursor: pointer;
`;

export const PaypalPromptWrapper = styled.div`
  width: 751px;
  height: 90px;
  background-color: rgba(245, 245, 245, 0.7);
  border: thin solid ${theme.colors.gray.primary};
  margin-top: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    height: 95px;
    background: #f9f9f9;
    border: none;
  }
`;

export const PaypalPrompt = styled.p`
  ${theme.removeMarginAndPadding};
  font: 14px ${theme.fonts.default};
  line-height: 21px;
  color: ${theme.colors.black.light};
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 90%;
  }
`;

export const PurchaseInfoWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  width: 400px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 43px;
  }
`;

export const CardIconWrapper = styled.div`
  width: 38px;
  height: 30px;
  margin-right: 15px;
`;

export const CardInfoFormWrapper = styled.div`
  padding-top: 15px;
`;

export const CardRadioLabelWrapper = styled.div`
  display: flex;
  @media ${theme.breakpoints.pcAndTablet} {
    flex-direction: row;
    align-items: center;
  }
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const CardIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ErrorText = styled.span`
  ${theme.defaultErrorText};
  font-size: 14px;
  line-height: 21px;
  margin-top: 16px;
  width: 100%;
  text-align: center;
  word-break: break-all;
  @media ${theme.breakpoints.mobile} {
    font-size: 12px;
    line-height: 18px;
    margin-top: 5px;
  }
`;

export const Cover = styled.div<{ isVisible: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  ${theme.removeMarginAndPadding};
  top: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.2);
  border-radius: inherit;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
`;

export const ConfirmationContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 442px;
  height: 294px;
  background-color: ${theme.colors.white};
  border: thin solid ${theme.colors.gray.light};

  @media ${theme.breakpoints.mobile} {
    width: 312px;
    height: 242px;
  }
`;
