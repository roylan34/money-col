import styled, { CSSProp, css } from 'styled-components';
import { theme } from '../../../config/index';
export const Container = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
`;

const componentStyle = css`
  background-color: ${theme.colors.white};
  font-size: 18px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Button = styled.button<{ disabled: boolean }>`
  all: unset;
  cursor: pointer;
 ${componentStyle}
 border: 1px solid
    ${(props): CSSProp =>
      props.disabled ? theme.colors.gray.light : theme.colors.blue.primary};
  color: ${(props): CSSProp =>
    props.disabled ? theme.colors.gray.light : theme.colors.blue.primary};
`;

export const Page = styled.div`
  border: 1px solid ${theme.colors.blue.primary};
  color: ${theme.colors.blue.primary};
  ${componentStyle}
`;
