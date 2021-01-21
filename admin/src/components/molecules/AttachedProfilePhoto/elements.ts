import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const PhotoPreviewWrapper = styled.div`
  width: 160px;
  height: 160px;
  background-color: ${theme.colors.gray.primary};
`;

export const AttachedPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

export const FileInputWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 2px;
  margin-left: 13px;
`;
