import styled, { css, CSSProp } from 'styled-components';
import { theme } from '../../../config/index';

const textInputThemes: { [key: string]: CSSProp } = {
  blueBottomBorder: css`
    border: 0px;
    border-bottom: 3px solid ${theme.colors.blue.primary};
  `,
  default: css`
    border: thin solid #666666;
    border-radius: 2px;
  `,
  noBorder: css`
    border: none;
  `,
  blue: css`
    border: thin solid ${theme.colors.blue.primary};
  `,
};

export const TextInput = styled.input.attrs((props: object) => ({
  ...props,
}))<{ isDynamicHeight?: boolean }>`
  ${theme.defaultBoxSizing}
  padding: 0.8125rem;
  display: block;
  width: 100%;
  height: ${(props): string => (props.isDynamicHeight ? '100%' : '2.3125rem')};
  ${(props): CSSProp => textInputThemes[props.theme]}
  font-family: ${theme.fonts.default};
  font-size: inherit;
  :focus {
    outline: none;
  };
  
  &::placeholder {
    color: ${theme.colors.gray.primary};
  };
`;
