import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.div`
  font-size: 20px;
`;

export const FormContainer = styled.div`
  width: max-content;
  height: max-content;
  margin-top: 85px;
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

export const LoadingContainer = styled.div`
  margin-top: 85px;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.black.lighter};
`;
