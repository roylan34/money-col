import styled from 'styled-components';
import { theme } from '../../../config/index';

export const FieldsContainer = styled.div`
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
  }
`;

export const TextInputWrapper = styled.div`
  width: 372px;
  height: 47px;
  font-size: 16px;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
    max-width: 372px;
  }
`;

export const Label = styled.p`
  ${theme.defaultText};
  ${theme.removeMarginAndPadding};
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
`;

export const LoginContainer = styled.div`
  width: 372px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${theme.breakpoints.mobile} {
    width: 95%;
    max-width: 372px;
  }
`;

export const CheckboxWrapper = styled.div`
  width: max-content;
  height: max-content;
`;

export const ButtonWrapper = styled.div`
  width: 176px;
  height: 50px;
  border-radius: 4px;
  font-size: 16px;
  @media ${theme.breakpoints.mobile} {
    width: 45%;
    max-width: 176px;
  }
`;

export const ForgotPassLabel = styled.p`
  ${theme.defaultText};
  width: 372px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
    max-width: 372px;
  }
`;
