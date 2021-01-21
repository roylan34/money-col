import styled, { css } from 'styled-components';
import { theme } from '../../../config';

export const FieldsContainer = styled.span``;

export const TextComponentWrapper = styled.div`
  height: 4.9rem;
  display: flex;
  flex-direction: column;
`;

export const NameFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const NameFieldWrapper = styled.div`
  width: 45%;
  height: 4.9rem;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const helperTextStyle = css`
  font-family: ${theme.fonts.default};
  font-size: 10px;
  line-height: 0;
`;

export const HelperTextSymbol = styled.p`
  ${helperTextStyle};
  color: ${theme.colors.red.primary};
`;

export const HelperText = styled.p`
  ${helperTextStyle};
`;

export const HelperTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CheckboxContainer = styled.div`
  height: 21px;
  ${theme.handleTextOverflow};
`;
