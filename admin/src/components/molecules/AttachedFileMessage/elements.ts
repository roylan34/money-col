import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config/index';
import { download, attachedFile } from '../../../assets/icons';

export const Container = styled.table<{ theme: 'own' | 'others ' }>`
  width: max-content;
  height: max-content;
  border: none;
  ${(props): FlattenSimpleInterpolation => {
    if (props.theme === 'own') {
      return css`
        align-self: flex-end;
      `;
    }

    return css`
      align-self: flex-start;
    `;
  }}
`;

export const TableRow = styled.tr<{ theme: 'own' | 'others' }>`
  display: flex;
  flex-shrink: 0;
  flex-direction: ${(props): string =>
    props.theme === 'own' ? 'row-reverse' : 'row'};
`;

export const MsgWrapper = styled.div<{ theme: 'own' | 'others' }>`
  width: max-content;
  max-width: 470px;
  align-items: center;
  margin-top: 15px;
  display: flex;
  flex-direction: ${(props): string =>
    props.theme === 'own' ? 'row' : 'row-reverse'};
`;

export const DownloadCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${theme.colors.black.lighter} url(${download}) no-repeat center;
  opacity: 0.6;
`;

export const FileContainer = styled.div<{ theme: 'own' | 'others' }>`
  width: 248px;
  height: 68px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props): FlattenSimpleInterpolation => {
    if (props.theme === 'own') {
      return css`
        background-color: ${theme.colors.gray.accent};
        margin-left: 12px;
      `;
    } else {
      return css`
        background-color: #eff0f2;
        margin-right: 12px;
      `;
    }
  }}
`;

export const AttachedFileCircle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${theme.colors.blue.primary} url(${attachedFile}) no-repeat center;
  margin-left: 17px;
  margin-right: 24px;
`;

export const NameContainer = styled.div`
  height: 42px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FileName = styled.span`
  ${theme.handleTextOverflow};
  font: 16px ${theme.fonts.default};
  line-height: 24px;
  color: ${theme.colors.black.lighter};
  font-weight: bold;
  text-align: right;
`;

export const FileSize = styled.p`
  ${theme.removeMarginAndPadding};
  font: 14px ${theme.fonts.default};
  line-height: 21px;
  color: ${theme.colors.black.lighter};
  text-align: right;
`;

export const ImageWrapper = styled.img<{ theme: 'own' | 'others' }>`
  width: 230px;
  height: 230px;
  border-radius: 20px;
  object-fit: contain;
  ${(props): FlattenSimpleInterpolation => {
    if (props.theme === 'own') {
      return css`
        margin-left: 12px;
      `;
    } else {
      return css`
        margin-right: 12px;
      `;
    }
  }}
`;

export const SeenWrapper = styled.div<{ theme: 'own' | 'others' }>`
  height: 100%;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${(props): FlattenSimpleInterpolation => {
    if (props.theme === 'own') {
      return css`
        margin-right: 8px;
      `;
    }

    return css`
      margin-left: 8px;
    `;
  }}
`;

export const SeenLabel = styled.span`
  font: 12px ${theme.fonts.default};
  line-height: 18px;
  color: ${theme.colors.gray.primary};
`;
