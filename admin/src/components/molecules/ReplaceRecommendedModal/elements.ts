import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Message = styled.p`
  width: 75%;
  word-break: break-all;
  font: 16px ${theme.fonts.default};
  line-height: 24px;
  color: ${theme.colors.black.lighter};
  text-align: center;
`;

export const OldTitle = styled.div`
  ${theme.removeMarginAndPadding};
  display: inline-block;
  vertical-align: bottom;
  max-width: 92%;
  ${theme.handleTextOverflow};
  font: inherit;
  line-height: inherit;
  color: ${theme.colors.black.lighter};
`;

export const NewTitle = styled.div`
  ${theme.removeMarginAndPadding};
  display: inline-block;
  vertical-align: bottom;
  max-width: 92%;
  ${theme.handleTextOverflow};
  font: inherit;
  line-height: inherit;
  color: ${theme.colors.blue.primary};
`;

export const ButtonsContainer = styled.div`
  width: 75%;
  height: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Cancel = styled.p`
  ${theme.removeMarginAndPadding};
  font: 14px ${theme.fonts.default};
  line-height: 28px;
  color: ${theme.colors.blue.primary};
  margin-left: 35px;
  cursor: pointer;
`;

export const ReplaceWrapper = styled.div`
  width: 160px;
  height: 36px;
  border-radius: 2px;
  margin-right: 35px;
`;
