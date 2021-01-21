import styled from 'styled-components';
import { theme } from '../../../config/index';
import { RequiredParams } from './types';

export const ModalWrapper = styled.div`
  width: 60vw;
  max-width: 919px;
  height: 100vh;
  max-height: 715px;
  border-radius: 20px 20px 0 0;
  background-color: ${theme.colors.white};
  overflow: hidden;
  padding: 0;
  @media ${theme.breakpoints.mobile} {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
  @media ${theme.breakpoints.tablet} {
    width: 100vw;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 85%;
  ${theme.removeMarginAndPadding};
  ${theme.defaultBoxSizing}
  background-color: ${theme.colors.white};
  overflow-x: hidden;
  overflow-y: scroll;
  @media ${theme.breakpoints.pc} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media ${theme.breakpoints.mobile} {
    border-radius: 0;
    padding-top: 25px;
    overflow-y: scroll;
    height: 90%;
  }
`;

export const InputWrapper = styled.div<{ isTextArea?: boolean }>`
  display: flex;
  flex-direction: row;
  margin: 5% 0;

  @media ${theme.breakpoints.pc} {
    align-items: ${(props): string =>
      props.isTextArea ? 'flex-start' : 'center'};
    width: 100%;
    ${theme.defaultBoxSizing}
    padding: 0 5%;
  }
  @media ${theme.breakpoints.tablet} {
    align-items: ${(props): string =>
      props.isTextArea ? 'flex-start' : 'center'};
    padding-left: 5%;
  }
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    width: 100vw;
    align-items: center;
    padding-left: 0;
  }
`;

export const InputLabel = styled.p`
  ${theme.defaultText}
  font-size: 14px;
  line-height: 16px;
  margin: 0;
  width: 110px;
  @media ${theme.breakpoints.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Required = styled.div<RequiredParams>`
  width: 40px;
  height: 20px;
  background-color: ${(props): string =>
    props.isRequired ? theme.colors.red.primary : theme.colors.gray.primary};
  ${theme.defaultWhiteText}
  font-size: 12px;
  line-height: 14px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;

export const DropdownWrapper = styled.div`
  width: 550px;
  height: 48px;
  border: thin solid ${theme.colors.blue.light};
  border-radius: 2px;
  font-size: 14px;
  @media ${theme.breakpoints.mobile} {
    width: 90vw;
  }
`;

export const AttachFileWrapper = styled.div`
  width: 550px;
  height: 48px;
  border: none;
  @media ${theme.breakpoints.mobile} {
    width: 90vw;
  }
`;

export const TextAreaWrapper = styled.div`
  width: 550px;
  height: 150px;

  @media ${theme.breakpoints.mobile} {
    height: 28vh;
    max-height: 250px;
    width: 90vw;
  }
`;

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5% 0;
  height: fit-content;

  @media ${theme.breakpoints.mobile} {
    margin-top: 40px;
  }
`;

export const SubmitWrapper = styled.div`
  width: 368px;
  height: 56px;
  border-radius: 40px;
  align-self: center;

  @media ${theme.breakpoints.mobile} {
    width: 90vw;
    align-items: center;
    padding-left: 13px;
  }
`;

export const Cover = styled.div<{ isVisible: boolean }>`
  height: 100%;
  width: 100%;
  position: relative;
  top: -100%;
  background-color: rgba(34, 34, 34, 0.2);
  border-radius: inherit;
  display: ${(props): string => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const ConfirmationContainer = styled.div`
  width: 442px;
  height: 294px;
  background-color: ${theme.colors.white};
  border: thin solid ${theme.colors.gray.light};

  @media ${theme.breakpoints.mobile} {
    width: 312px;
    height: 255px;
  }
`;

export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media ${theme.breakpoints.mobile} {
    margin-bottom: 5px;
    align-self: flex-start;
    padding-left: 5vw;
  }
`;
