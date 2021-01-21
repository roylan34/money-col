import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config/index';
import { ButtonParams } from './types';

const primary = css`
  color: ${theme.colors.white};
  background: ${theme.colors.blue.primary} none repeat scroll 0% 0%;
  border-style: none;

  &:hover {
    color: ${theme.colors.blue.primary};
    background: ${theme.colors.white} none repeat scroll 0% 0%;
    border: 2px solid ${theme.colors.blue.primary};
  }

  &:active {
    color: ${theme.colors.blue.primary};
    background: ${theme.colors.white} none repeat scroll 0% 0%;
    border: 2px solid ${theme.colors.blue.primary};
    box-shadow: 0 2px 2px 0 #666;
    transform: translateY(2px);
  }
`;

const disabled = css`
  color: ${theme.colors.gray.primary};
  background: ${theme.colors.gray.light} none repeat scroll 0% 0%;
  border-style: none;
`;

const secondary = css`
  color: ${theme.colors.white};
  background: ${theme.colors.gray.primary} none repeat scroll 0% 0%;
  border-style: none;

  &:hover {
    background: ${theme.colors.gray.dark} none repeat scroll 0% 0%;
  }

  &:active {
    background: ${theme.colors.gray.dark} none repeat scroll 0% 0%;
    box-shadow: 0 2px 2px 0 #666;
    transform: translateY(2px);
  }
`;

const light = css`
  color: #595959;
  background: ${theme.colors.white} none repeat scroll 0% 0%;
  border: thin solid #666666;

  &:hover {
    background: #dddddd none repeat scroll 0% 0%;
  }

  &:active {
    background: #dddddd none repeat scroll 0% 0%;
    box-shadow: 0 2px 2px 0 #666;
    transform: translateY(2px);
  }
`;

const inverse = css`
  color: ${theme.colors.blue.primary};
  background: ${theme.colors.white} none repeat scroll 0% 0%;
  border: 2px solid ${theme.colors.blue.primary};

  &:hover {
    color: ${theme.colors.blue.primary};
    background: #dddddd none repeat scroll 0% 0%;
    border: 2px solid ${theme.colors.blue.primary};
  }

  &:active {
    color: ${theme.colors.blue.primary};
    background: ${theme.colors.white} none repeat scroll 0% 0%;
    border: 2px solid ${theme.colors.blue.primary};
    box-shadow: 0 2px 2px 0 #666;
    transform: translateY(2px);
  }
`;

export const Button = styled.button<ButtonParams>`
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  font-family: ${theme.fonts.default};
  font-size: ${(props): string => props.textSize || '12px'};
  outline: none;
  cursor: pointer;
  
  ${(props): FlattenSimpleInterpolation => {
    if (props.disabled) return disabled;

    if (props.theme === 'secondary') return secondary;
    else if (props.theme === 'light') return light;
    else if (props.theme === 'inverse') return inverse;
    else return primary;
  }}
  font-weight: ${(props): string => props.fontWeight || 'normal'};
`;
