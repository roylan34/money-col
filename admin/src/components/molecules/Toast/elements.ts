import styled, { css } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { theme } from '../../../config';

const borderColors: { [key: string]: string } = {
  error: theme.colors.red.light,
  success: theme.colors.blue.accent,
  reward: theme.colors.green.primary,
};

export const Container = styled(ToastContainer)<{
  type: 'error' | 'success' | 'reward';
}>`
  width: 380px;

  .Toastify__toast {
    background-color: ${theme.colors.white};
    ${theme.defaultBoxSizing};
    min-height: 88px;
    overflow-y: hidden;
    align-items: center;
    padding: 21px 36px 21px 71px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media ${theme.breakpoints.mobile} {
      width: 90vw;
      max-width: 320px;
    }

    button[aria-label='close'] {
      color: #777777;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 7px;
      height: 100%;
      background-color: ${(props): string => borderColors[props.type]};
    }
  }

  .Toastify__close-button {
    margin-top: 7px;
  }
`;

export const AlertIconWrapper = styled.div`
  height: 23.33px;
  width: 23.33px;
  position: absolute;
  left: 25.33px;
`;

const textStyle = css`
  ${theme.removeMarginAndPadding}
  ${theme.defaultText}
`;

export const Title = styled.p`
  ${textStyle}
  color: #25282B;
  font-size: 0.9375rem;
  margin-bottom: 14px;
`;

export const Text = styled.p`
  ${textStyle}
  color: #777777;
  font-size: 12px;
  line-height: 16px;
`;
