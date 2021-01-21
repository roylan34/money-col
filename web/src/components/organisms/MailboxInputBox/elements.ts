import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div<{ hasAttachedFile?: boolean }>`
  width: 90%;
  max-width: 1050px;
  height: 282px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: thin solid #d8dce6;
  box-shadow: -2px 6px 6px rgba(0, 0, 0, 0.25);
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    height: ${(props): string => (props.hasAttachedFile ? '150px' : '60px')};
    box-shadow: none;
    border: none;
    border-radius: 0px;
    border-top: thin solid ${theme.colors.gray.primary};
  }
`;

export const TopWrapper = styled.div`
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TextAreaWrapper = styled.div<{ hasAttachedFile?: boolean }>`
  width: 100%;
  height: ${(props): string => (props.hasAttachedFile ? '100px' : '202px')};
  border-radius: 10px 10px 0px 0px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 67%;
    height: 50px;
    border-radius: 30px;
    background-color: #eff0f2;
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 0px 0px 10px 10px;
  border-top: thin solid ${theme.colors.gray.light};
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

export const SubmitWrapper = styled.div`
  width: 368px;
  height: 56px;
  border-radius: 40px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const FileInputWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
`;

export const ErrorMsg = styled.p`
  ${theme.defaultErrorText};
  ${theme.handleTextOverflow};
  font-size: 14px;
  line-height: 21px;
  @media ${theme.breakpoints.pc} {
    align-self: flex-end;
    margin-left: 30px;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    ${theme.removeMarginAndPadding};
  }
`;

export const AttachedFileListContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  media ${theme.breakpoints.mobileAndTablet} {
    height: 60px;
  }
`;

export const AttachedFilePreviewWrapper = styled.div`
  margin-left: 30px;
`;

export const MobileAttachFile = styled.div`
  width: 25px;
  height: 27px;
  margin-left: 15px;
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;

export const MobileSendButton = styled.div`
  width: max-content;
  height: max-content;
  margin-right: 15px;
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;

export const Cover = styled.div<{ isVisible: boolean }>`
  @media ${theme.breakpoints.mobileAndTablet} {
    height: 100%;
    width: 100%;
    position: fixed;
    ${theme.removeMarginAndPadding};
    top: 0;
    left: 0;
    background-color: rgba(34, 34, 34, 0.2);
    border-radius: inherit;
    display: ${(props): string => (props.isVisible ? 'block' : 'none')};
    z-index: 5;
  }
  @media ${theme.breakpoints.pc} {
    display: none;
  }
`;

export const ErrorModalWrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 90%;
  max-width: 312px;
  height: 235px;
  background-color: ${theme.colors.white};
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 50 px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.div`
  width: 90%;
  height: 2px;
  bottom: 0;
  background-color: ${theme.colors.gray.primary};
  justify-self: flex-end;
`;

export const Title = styled.p`
  ${theme.defaultText};
  font-size: 16px;
  line-height: 24px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 185px;
  width: 100%;
`;

export const CloseButtonWrapper = styled.div`
  width: 130px;
  height: 50px;
  border-radius: 40px;
`;
