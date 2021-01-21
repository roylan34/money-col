import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  width: max-content;
  height: max-content;
  margin-top: 20px;
  margin-left: 10px;
`;

export const BackContainer = styled.div`
  height: max-content;
  width: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BackLabel = styled.span`
  ${theme.defaultText};
  ${theme.removeMarginAndPadding};
  font-size: 20px;
  line-height: 28px;
`;

export const BackWrapper = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ErrorMessageContainer = styled.div<{ isEmpty: boolean }>`
  margin-top: 10px;
  margin-bottom: 10px;
  display: ${(props): string => (props.isEmpty ? 'none' : 'block')};
  flex-direction: column;
  min-height: fit-content;
  width: 372px;
  @media ${theme.breakpoints.mobile} {
    width: 74.4%;
    max-width: 372px;
  }
`;

export const ErrorMessage = styled.p`
  ${theme.removeMarginAndPadding};
  ${theme.defaultErrorText}
  color: ${theme.colors.red.primary};
  font-size: 0.75rem;
  line-height: 1rem;
  width: 100%;
  word-break: break-all;
`;
