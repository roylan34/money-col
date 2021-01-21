import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  max-width: 442px;
  min-width: 420px;
  height: 394px;
  background-color: white;
  z-index: 2;
  @media ${theme.breakpoints.mobile} {
    width: 312px;
    height: 334px;
  }
`;

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 108px;
  ${theme.defaultBoxSizing}
  width: 100%;
  padding: 0 8%;
  @media ${theme.breakpoints.mobile} {
    min-height: 99px;
  }
`;

export const PasswordInputWrapper = styled.div`
  min-height: 54px;
  width: 100%;
  @media ${theme.breakpoints.mobile} {
    min-height: 44px;
  }
`;

export const ErrorMessageContainer = styled.div`
  ${theme.defaultBoxSizing}
  flex-direction: column;
  display: block;
  width: 100%;
  margin: 10px 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const ErrorMessage = styled.p`
  ${theme.removeMarginAndPadding}
  ${theme.defaultErrorText}
  color: ${theme.colors.red.primary};
  font-size: 12px;
  line-height: 16px;
  word-break: break-all;
`;
