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
`;

export const TextAreaWrapper = styled.div<{ hasAttachedFile?: boolean }>`
  width: 100%;
  height: ${(props): string => (props.hasAttachedFile ? '100px' : '202px')};
  border-radius: 10px 10px 0px 0px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 0px 0px 10px 10px;
  border-top: thin solid ${theme.colors.gray.light};
  display: flex;
  flex-direction: row;
  align-items: center;
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
  align-self: flex-end;
  margin-left: 30px;
`;

export const AttachedFileListContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AttachedFilePreviewWrapper = styled.div`
  margin-left: 30px;
`;
