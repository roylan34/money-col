import styled, { css, CSSProp } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../config';

export const FormWrapper = styled.form`
  width: 30.63rem;
  @media ${theme.breakpoints.mobile} {
    width: 88.9%;
  }
  @media ${theme.breakpoints.tablet} {
    width: 90%;
  }
`;

const mutedFontStyle = css`
  font-family: ${theme.fonts.default};
  color: #222222;
`;

export const InputLabel = styled.label`
  display: inline-block;
  ${mutedFontStyle}
  font-size: 0.95rem;
  line-height: 1.31rem;
  margin: 0.69rem 0;
  @media ${theme.breakpoints.mobile} {
    margin: 0 0 0.375rem 0;
  }
`;

export const ResetPasswordLink = styled(Link)`
  text-decoration: none;
  ${mutedFontStyle}
  font-size: 0.875rem;
  display: block;
  padding-top: 0.5rem;
  width: fit-content;
`;

export const NameFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${theme.breakpoints.mobile} {
    flex-direction: row;
    justify-content: space-between;
    div {
      width: 48%;
    }
  }
`;

const borderStyle = css`
  border: thin solid #666666;
  border-radius: 2px;
`;

export const InputFieldWrapper = styled.div<{ withBorder: boolean }>`
  ${(props): CSSProp => (props.withBorder ? borderStyle : '')}
  margin-bottom: 1.25rem;
  background: ${theme.colors.white};
  height: 3.375rem;
  display: flex;
  ${theme.defaultBoxSizing}
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;

  @media ${theme.breakpoints.mobile} {
    height: 2.75rem;
    margin-bottom: 0.93rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  @media ${theme.breakpoints.mobile} {
    margin-bottom: 50px;
  }
`;

export const ButtonWrapper = styled.div`
  border-radius: 2.5rem;
  width: 61%;
  max-width: 18.75rem;
  height: 3.25rem;
  @media ${theme.breakpoints.mobile} {
    width: 93%;
    align-self: center;
  }
`;

export const ErrorMessageContainer = styled.div`
  flex-direction: column;
  padding: 0 4px;
  display: block;
  margin: 20px 0;
`;

export const ErrorMessage = styled.p`
  ${theme.defaultErrorText}
  color: ${theme.colors.red.primary};
  font-size: 12px;
  line-height: 16px;
  width: 90%;
  word-break: break-all;
`;

export const ErrorUnathenticated = styled.span`
  ${theme.defaultErrorText}
  color: ${theme.colors.red.primary};
  font-size: 18px;
  margin-left: 5px;
`;
