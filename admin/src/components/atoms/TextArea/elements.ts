import styled, { css, CSSProp } from 'styled-components';
import { theme } from '../../../config/index';

const textAreaThemes: { [key: string]: CSSProp } = {
  default: css`
    border: thin solid #2b489f;
  `,
  gray: css`
    border: thin solid #e1e1e1;
  `,
  noBorder: css`
    border: none;
  `,
};

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  font-size: inherit;
  line-height: inherit;
`;

export const TextAreaInput = styled.textarea.attrs((props: object) => ({
  ...props,
}))`
  ${theme.defaultBoxSizing};
  ${theme.defaultText};
  ${(props): CSSProp => textAreaThemes[props.theme]}
  font-size: inherit;
  line-height: inherit;
  display: block;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  resize: none;
  padding-top: 16px;
  padding-left: 22px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.gray.primary};
    font-family: ${theme.fonts.default};
    font-size: inherit;
    line-height: inherit;
  }
`;

export const Limit = styled.span<{ hasReachedLimit: boolean }>`
  position: absolute;
  bottom: 12%;
  left: 90%;
  z-index: 1;
  ${theme.removeMarginAndPadding};
  font: 10px ${theme.fonts.default};
  color: ${(props): string =>
    props.hasReachedLimit ? theme.colors.red.primary : '#666666'};
  line-height: 15px;
`;
