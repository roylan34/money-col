import styled, {
  css,
  CSSProp,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { theme } from '../../../config/index';
import { check, settingsCheck } from '../../../assets/icons';

type CustomCheckboxProps = {
  isChecked: boolean;
  theme: 'default' | 'settings';
};

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs((props: object) => ({
  ...props,
}))`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const defaultCheckbox = css<{ isChecked: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  ${(props): CSSProp => Background[props.isChecked ? 'checked' : 'unchecked']};
`;

const settingsCheckbox = css<{ isChecked: boolean }>`
  width: 23px;
  height: 23px;
  border: 1px solid #c3c4c7;
  border-radius: 4px;
  ${(props): CSSProp =>
    SettingsBackground[props.isChecked ? 'checked' : 'unchecked']};
`;

const SettingsBackground: { [key: string]: CSSProp } = {
  checked: css`
    background: ${theme.colors.white} url(${settingsCheck}) no-repeat 45% 45%;
  `,
  unchecked: css`
    background: ${theme.colors.white};
  `,
};

const Background: { [key: string]: CSSProp } = {
  checked: css`
    background: ${theme.colors.blue.lighter} url(${check}) no-repeat 40% 40%;
    border: 1px solid ${theme.colors.blue.lighter};
  `,
  unchecked: css`
    background: ${theme.colors.white};
    border: 1px solid #d9d9d9;
  `,
};

export const CustomCheckbox = styled.div<CustomCheckboxProps>`
  display: inline-block;
  transition: all 150ms;
  ${(props): FlattenSimpleInterpolation =>
    // @ts-ignore
    props.theme === 'default' ? defaultCheckbox : settingsCheckbox};
`;

export const LabelWrapper = styled.label`
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

export const Label = styled.span`
  ${theme.removeMarginAndPadding};
  ${theme.defaultText};
  font-size: 14px;
  line-height: 21px;
  margin-left: 13px;
  @media ${theme.breakpoints.mobile} {
    font-size: 0.65rem;
    line-height: 0.975rem;
  }
`;
