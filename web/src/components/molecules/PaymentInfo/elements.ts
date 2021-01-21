import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 536px;
  height: min-content;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px;
  @media ${theme.breakpoints.mobile} {
    width: 88.88%;
    max-width: 320px;
  }
  @media ${theme.breakpoints.tablet} {
    width: 88.88%;
    max-width: 320px;
    margin-top: 50px;
  }
  @media ${theme.breakpoints.pc} {
    margin-top: 50px;
    margin-bottom: 5px;
  }
`;

export const RegisteredCardLabel = styled.span`
  ${theme.defaultText};
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 20px;
  @media ${theme.breakpoints.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardWrapper = styled.div<{ theme: 'profile' | 'payment' }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props): FlattenSimpleInterpolation => {
    if (props.theme === 'profile') {
      return css`
        margin-bottom: 40px;
        @media ${theme.breakpoints.mobile} {
          margin-bottom: 20px;
        }
      `;
    }

    return css``;
  }}
`;

export const CardNumberWrapper = styled.div`
  width: 198px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardNumberLabel = styled.span`
  ${theme.defaultText};
  font-size: 18px;
  line-height: 21px;
`;

export const IconWrapper = styled.div`
  width: 38px;
  height: 30px;
  margin-left: 11px;
`;

export const ClickableText = styled.span<{ shouldHide?: boolean }>`
  ${theme.defaultClickableText};
  ${theme.removeMarginAndPadding};
  display: ${(props): string => (props.shouldHide ? 'none' : 'block')};
  width: max-content;
  font-size: 14px;
  line-height: 16px;
`;

export const ErrorMessageContainer = styled.div<{ isEmpty: boolean }>`
  margin-top: 0.25rem;
  display: ${(props): string => (props.isEmpty ? 'none' : 'block')};
  flex-direction: column;
  height: 2.125rem;
  min-height: fit-content;
  width: 497px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 88.88%;
    max-width: 320px;
  }
`;

export const ErrorMessage = styled.p`
  ${theme.defaultErrorText}
  color: ${theme.colors.red.primary};
  font-size: 0.75rem;
  line-height: 1rem;
  width: 100%;
  word-break: break-all;
`;

export const Cover = styled.div<{ isVisible: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  ${theme.removeMarginAndPadding};
  top: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.2);
  border-radius: inherit;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
`;

export const ConfirmationContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 442px;
  height: 294px;
  background-color: ${theme.colors.white};
  border: thin solid ${theme.colors.gray.light};

  @media ${theme.breakpoints.mobile} {
    width: 312px;
    height: 242px;
  }
`;
