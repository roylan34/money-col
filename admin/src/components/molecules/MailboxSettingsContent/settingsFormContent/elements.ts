import styled from 'styled-components';
import { theme } from '../../../../config/index';

export const SettingsContainer = styled.div`
  width: 90%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.gray.primary};
  justify-self: flex-end;
`;

export const Label = styled.span`
  ${theme.defaultText};
  font-size: 16px;
  line-height: 19px;
  margin-left: 5px;
  margin-right: 10px;
  margin-top: 28px;
  width: 30%;
`;

export const CheckboxContainer = styled.div`
  height: 45px;
  width: 68%;
  margin-top: 28px;
  display: flex;
  flex-direction: row;
`;

export const CheckboxWrapper = styled.div`
  width: 23px;
  height: 100%;
`;

export const CheckboxLabel = styled.p`
  ${theme.defaultText};
  ${theme.handleMultipleLinesOverflow};
  ${theme.removeMarginAndPadding};
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;
`;
