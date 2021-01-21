import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.table<{ theme: 'own' | 'others' }>`
  width: 100%;
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
  flex-direction: ${(props): string =>
    props.theme === 'own' ? 'row-reverse' : 'row'};
`;

export const MsgWrapper = styled.div<{ theme: 'own' | 'others' }>`
  width: max-content;
  max-width: 470px;
  height: max-content;
  border-radius: 20px;
  padding: 10px;
  margin-top: 15px;
  background-color: ${(props): string =>
    props.theme === 'own' ? theme.colors.gray.accent : '#eff0f2'};
  @media ${theme.breakpoints.mobile} {
    width: 93%;
    max-width: 275px;
  }
`;

export const Msg = styled.p`
  ${theme.removeMarginAndPadding};
  ${theme.defaultText};
  font-size: 16px;
  line-height: 24px;
  white-space: pre-wrap;
  word-break: break-all;
  white-space: pre-wrap;
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
