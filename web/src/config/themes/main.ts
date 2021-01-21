import { css } from 'styled-components';

const colors = {
  blue: {
    lighter: '#1890FF',
    light: '#2B489F',
    primary: '#033297',
    dark: '#022879',
    accent: '#035FCB',
  },
  white: '#ffffff',
  black: {
    lighter: '#333333',
    light: '#222222',
    primary: '#000000',
  },
  gray: {
    accent: '#c4d3f0',
    light: '#d8dce6',
    primary: '#c4c4c4',
    dark: '#c2c6cf',
    darker: '#666666',
  },
  red: {
    primary: '#cc0000',
    light: '#E34E42',
  },
  yellow: {
    lighter: '#FFEE57',
    light: '#fad34e',
    primary: '#e8b300',
  },
  green: {
    primary: '#80C269',
  },
};

const fonts = {
  default:
    "'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', Meiryo, sans-serif",
  stripe: "'Hiragino Kaku Gothic Pro', Meiryo, sans-serif",
};

const defaultText = css`
  font-family: 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', Meiryo,
    sans-serif;
  color: ${colors.black.light};
`;

const defaultWhiteText = css`
  font-family: 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', Meiryo,
    sans-serif;
  color: ${colors.white};
`;

const defaultErrorText = css`
  font-family: ${fonts.default};
  color: ${colors.red.primary};
`;

const defaultClickableText = css`
  font-family: ${fonts.default};
  color: ${colors.blue.lighter};
  cursor: pointer;
`;

const handleTextOverflow = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const handleMultipleLinesOverflow = css<{ numberOfLines?: number }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  // @ts-ignore
  -webkit-line-clamp: ${(props): number => props.numberOfLines || 2};
  -webkit-box-orient: vertical;
`;

const removeMarginAndPadding = css`
  margin: 0;
  padding: 0;
`;

const defaultBoxSizing = css`
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;

const breakpoints = {
  mobile: '(min-width: 320px) and (max-width: 559px)',
  tablet: '(min-width: 560px) and (max-width: 1025px)',
  pc: '(min-width: 1026px)',
  mobileAndTablet: '(min-width: 320px) and (max-width: 1025px)',
  pcAndTablet: '(min-width: 560px)',
};

export default {
  colors,
  defaultText,
  defaultErrorText,
  handleTextOverflow,
  handleMultipleLinesOverflow,
  defaultBoxSizing,
  fonts,
  breakpoints,
  defaultWhiteText,
  removeMarginAndPadding,
  defaultClickableText,
};
