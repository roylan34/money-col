import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  height: 289px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  ${theme.defaultText};
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputLabel = styled.span`
  ${theme.removeMarginAndPadding};
  font: 14px ${theme.fonts.default};
  line-height: 21px;
  font-weight: bold;
  color: ${theme.colors.black.lighter};
`;

export const NameInputWrapper = styled.div`
  height: 36px;
  width: 221px;
  border-radius: 2px;
  border: thin solid ${theme.colors.gray.primary};
  margin-left: 124px;
`;

export const EmailInputWrapper = styled.div<{ isEmail?: boolean }>`
  height: 36px;
  width: 347px;
  border-radius: 2px;
  border: thin solid ${theme.colors.gray.primary};
  margin-left: 41px;
`;

export const ButtonsContainer = styled.div`
  height: max-content;
  width: 312px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CancelWrapper = styled.div`
  width: 118px;
  height: 36px;
  border-radius: 2px;
`;

export const RegisterWrapper = styled.div`
  width: 174px;
  height: 36px;
  border-radius: 2px;
`;
