import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Msg = styled.span`
  ${theme.defaultText};
  font-size: 16px;
  line-height: 24px;
  word-break: keep-all;
  text-align: center;
  vertical-align: middle;
`;

export const MsgWrapper = styled.div`
  height: 60%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ConfirmButton = styled.div`
  width: 105px;
  height: 36px;
  border-radius: 2px;
`;

export const CancelText = styled.span`
  font: 14px ${theme.fonts.default};
  line-height: 28px;
  color: ${theme.colors.blue.primary};
  cursor: pointer;
`;
