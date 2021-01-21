import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: calc(100% - 300px);
`;

export const MessagePreviewWrapper = styled.div<{ hasSelectedMsg?: boolean }>`
  width: max-content;
  height: 100%;
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
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 30px;
  margin-right: 15px;
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
  ${theme.defaultBoxSizing};
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
`;

export const Cover = styled.div<{ isVisible: boolean }>`
  ${theme.removeMarginAndPadding};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.2);
  border-radius: inherit;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  z-index: 5;
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
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
