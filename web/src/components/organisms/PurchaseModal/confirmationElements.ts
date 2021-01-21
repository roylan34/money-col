import styled from 'styled-components';
import { theme } from '../../../config/index';

export const ConfirmationContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Msg = styled.p`
  ${theme.defaultText};
  ${theme.removeMarginAndPadding};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  @media ${theme.breakpoints.mobile} {
    width: 90%;
  }
`;

export const ErrorMsg = styled.p`
  ${theme.defaultErrorText}
  ${theme.removeMarginAndPadding};
  font-size: 14px;
  line-height: 21px;
  font-weight: bold;
`;

export const ButtonsContainer = styled.div`
  width: 62%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${theme.breakpoints.mobile} {
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 40px;
  @media ${theme.breakpoints.mobile} {
    width: 130px;
  }
`;
