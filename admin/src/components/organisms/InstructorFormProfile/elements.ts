import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../config';

export const Container = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div<{
  marginBottom?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: ${(props): string =>
    props.alignItems ? props.alignItems : 'center'};
  margin-bottom: ${(props): string =>
    props.marginBottom ? props.marginBottom : '30'}px;
`;

export const InputLabel = styled.label`
  ${theme.removeMarginAndPadding};
  width: 20%;
  flex: 0 0 20%;
  font: 14px ${theme.fonts.default};
  line-height: 21px;
  font-weight: bold;
  color: ${theme.colors.black.lighter};
  word-wrap: break-word;
`;

export const InputWrapper = styled.div`
  height: 36px;
  width: 32%;
  flex: 0 0 32%;
  border-radius: 2px;
  border: thin solid ${theme.colors.gray.primary};
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EmailInputWrapper = styled.div`
  height: 36px;
  width: 40%;
  flex: 0 0 40%;
  border-radius: 2px;
  border: thin solid ${theme.colors.gray.primary};
  margin-bottom: 9px;
`;

export const EmailMessageContainer = styled.div`
  font: 12px ${theme.fonts.default};
  margin-bottom: 39px;
  margin-left: 20%;
  white-space: nowrap;
`;

export const LinkPassword = styled(Link)`
  font: 12px ${theme.fonts.default};
  color: ${theme.colors.black.primary};
  text-decoration: underline;
`;

export const ButtonContainer = styled.div`
  width: 174px;
  height: 36px;
  border-radius: 2px;
`;
