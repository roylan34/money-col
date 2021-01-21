import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 563px;
  height: min-content;
  min-height: 584px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.breakpoints.tablet} {
    width: 80%;
    max-width: 563px;
  }
  @media ${theme.breakpoints.mobile} {
    min-height: 442px;
    width: 80%;
    max-width: 320px;
  }

  &:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }
`;

export const InputFieldsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  ${theme.defaultText};
  font-size: 32px;
  line-height: 37px;
  font-weight: bold;
  @media ${theme.breakpoints.mobile} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Msg = styled.p`
  ${theme.defaultText};
  width: 350px;
  word-break: break-all;
  white-space: pre-line;
  font-size: 16px;
  line-height: 19px;
  @media ${theme.breakpoints.mobile} {
    width: 90%;
    max-width: 248px;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const TextInputWrapper = styled.div<{ isSecond?: boolean }>`
  width: 380px;
  height: 30px;
  margin-top: ${(props): string => (props.isSecond ? '30px' : '60px')};
  font-size: 12px;
  @media ${theme.breakpoints.mobile} {
    width: 87.5%;
    max-width: 280px;
    height: 20px;
    margin-top: ${(props): string => (props.isSecond ? '30px' : '30px')};
  }
`;

export const TextInputLabel = styled.span`
  width: 380px;
  font: 12px ${theme.fonts.default};
  line-height: 14px;
  color: ${theme.colors.gray.darker};
  margin-top: 6px;
  text-align: center;
  @media ${theme.breakpoints.mobile} {
    width: 87.5%;
    max-width: 280px;
    font-size: 10px;
    line-height: 15px;
    margin-top: 14px;
    text-align: left;
  }
`;

export const NewPassInputLabelWrapper = styled.div`
  width: 380px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media ${theme.breakpoints.mobile} {
    width: 87.5%;
    max-width: 280px;
    margin-top: 8px;
  }
`;

export const NewPassLabel = styled.span<{ isAsterisk?: boolean }>`
  font: 10px ${theme.fonts.default};
  line-height: 12px;
  margin-top: 10px;
  text-align: right;
  color: ${(props): string =>
    props.isAsterisk
      ? `${theme.colors.red.primary}`
      : `${theme.colors.gray.darker}`};
`;

export const ButtonWrapper = styled.div`
  width: 368px;
  height: 56px;
  border-radius: 40px;
  margin-top: 50px;
  padding-bottom: 50px;
  @media ${theme.breakpoints.mobile} {
    width: 87.5%;
    max-width: 280px;
    margin-top: 30px;
    padding-bottom: 30px;
  }
`;

export const ErrorMessageContainer = styled.div<{ isEmpty: boolean }>`
  margin-top: 0.25rem;
  display: ${(props): string => (props.isEmpty ? 'none' : 'flex')};
  flex-direction: column;
  height: 2.125rem;
  min-height: fit-content;
  width: 380px;
  @media ${theme.breakpoints.mobile} {
    width: 90%;
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

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 170px;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    text-align: center;

    & a:first-child {
      margin-bottom: 15px;
    }
    & a:last-child {
      margin-bottom: 30px;
    }
  }
`;

export const LinkStyled = styled(Link)`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${theme.colors.black.primary};
  @media ${theme.breakpoints.mobile} {
    font-size: 0.75rem;
  }
`;
