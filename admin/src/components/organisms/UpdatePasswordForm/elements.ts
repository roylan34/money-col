import styled from 'styled-components';
import { theme } from '../../../config/index';

export const FormContainer = styled.div`
  width: 500px;
  min-height: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
  @media ${theme.breakpoints.mobile} {
    width: 95%;
    height: max-content;
  }
`;

export const UpdatePasswordLabel = styled.p`
  ${theme.defaultText};
  ${theme.removeMarginAndPadding};
  width: 372px;
  word-break: break-all;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 48px;
  margin-top: 52px;
  @media ${theme.breakpoints.mobile} {
    width: 74.4%;
    max-width: 372px;
  }
`;

export const ErrorMessageContainer = styled.div<{ isEmpty: boolean }>`
  margin-top: 0.25rem;
  display: ${(props): string => (props.isEmpty ? 'none' : 'block')};
  flex-direction: column;
  height: 2.125rem;
  min-height: fit-content;
  width: 372px;
  @media ${theme.breakpoints.mobile} {
    width: 74.4%;
    max-width: 372px;
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
