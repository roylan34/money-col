import styled from 'styled-components';
import { theme } from '../../../../config';

type FORM_THEME = {
  theme: 'specific' | 'forAll';
};

export const Container = styled.div`
  height: max-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 37px;
  margin-left: 30px;
`;

export const PointsInputWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const InputWrapper = styled.div`
  width: 266px;
  height: 40px;
  border: thin solid #d9d9d9;
  border-radius: 4px;
  font-size: 16px;
`;

export const InputLabel = styled.span`
  font: 16px ${theme.fonts.default};
  line-height: 24px;
  color: #333333;
`;

export const RadioButtonsWrapper = styled.div`
  height: 80px;
  margin-top: 80px;
`;

export const DateTimePickerContainer = styled.div`
  margin-top: 30px;
  margin-left: 65px;
  display: flex;
  flex-direction: row;
`;

export const TimePickerWrapper = styled.div`
  margin-left: 20px;
`;
