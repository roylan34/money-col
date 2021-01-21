import styled from 'styled-components';
import { theme } from '../../../config/index';

export const FieldsContainer = styled.div`
  height: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextInputWrapper = styled.div`
  width: 372px;
  height: 47px;
  font-size: 16px;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
    max-width: 372px;
  }
`;

export const Label = styled.p`
  ${theme.defaultText};
  ${theme.removeMarginAndPadding};
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonContainer = styled.div`
  width: 372px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
    max-width: 372px;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 176px;
  height: 50px;
  border-radius: 4px;
`;
