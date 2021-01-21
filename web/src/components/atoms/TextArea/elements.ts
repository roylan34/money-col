import styled, { css, CSSProp } from 'styled-components';
import { theme } from '../../../config/index';

const Themes: { [key: string]: CSSProp } = {
  default: css`
    border: thin solid #2b489f;
  `,
  noBorder: css`
    border: none;
  `,
};

export const TextAreaInput = styled.textarea<{ theme: 'default' | 'noBorder' }>`
  ${theme.defaultBoxSizing};
  ${theme.defaultText};
  ${(props): CSSProp => Themes[props.theme]};
  font-size: 14px;
  line-height: 16px;
  display: block;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  resize: none;
  padding-top: 16px;
  padding-left: 22px;
  background: inherit;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font: 14px ${theme.fonts.default};
    line-height: 16px;
    color: ${theme.colors.gray.primary};
  }
`;
