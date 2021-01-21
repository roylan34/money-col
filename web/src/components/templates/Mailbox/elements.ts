import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  display: flex;
  max-height: calc(100vh - 100px);
  @media ${theme.breakpoints.mobileAndTablet} {
    height: calc(100vh - 60px);
  }
`;

export const MessagePreviewWrapper = styled.div<{ hasSelectedMsg?: boolean }>`
  width: max-content;
  max-height: calc(100vh - 100px);
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    display: ${(props): string => (props.hasSelectedMsg ? 'none' : 'block')};
  }
`;

export const ConversationBody = styled.div<{ hasSelectedMsg?: boolean }>`
  display: ${(props): string => (props.hasSelectedMsg ? 'flex' : 'none')};
  flex-direction: column;
  flex: 1;
`;

export const ConversationHeader = styled.div`
  width: 100%;
  height: 68px;
  border-bottom: thin solid ${theme.colors.gray.primary};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  @media ${theme.breakpoints.mobile} {
    height: 60px;
  }
`;

export const BackIconWrapper = styled.div`
  @media ${theme.breakpoints.pc} {
    display: none;
  }
  @media ${theme.breakpoints.tablet} {
    width: 12px;
    height: 16px;
    margin-left: 12px;
  }
  @media ${theme.breakpoints.mobile} {
    width: 8px;
    height: 12px;
    margin-left: 16px;
  }
`;

export const AvatarWrapper = styled.div`
  @media ${theme.breakpoints.pc} {
    width: 40px;
    height: 40px;
    margin-left: 30px;
    margin-right: 22px;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 30px;
    height: 30px;
    margin-left: 17px;
    margin-right: 22px;
  }
`;

export const HeaderName = styled.span`
  ${theme.defaultText};
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
`;

export const ConversationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  min-height: 200px;
`;

export const InputBoxWrapper = styled.div`
  width: 100%;
  padding: 15px;
  ${theme.defaultBoxSizing};
  display: flex;
  justify-content: center;
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
  z-index: 5;
`;

export const SettingsContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 442px;
  height: 287px;
  background-color: ${theme.colors.white};
  @media ${theme.breakpoints.mobile} {
    width: 90%;
    max-width: 312px;
    height: 323px;
  }
`;

export const ConfirmationContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 442px;
  height: 301px;
  background-color: ${theme.colors.white};
  @media ${theme.breakpoints.mobile} {
    width: 90%;
    max-width: 312px;
    height: 255px;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
