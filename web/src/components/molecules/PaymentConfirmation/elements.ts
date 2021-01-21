import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../config';

type themeType = 'success' | 'failedAddingPoints';

export const Container = styled.div<{ theme: themeType }>`
  width: 563px;
  height: ${(props): string => (props.theme === 'success' ? '496px' : '624px')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media ${theme.breakpoints.mobile} {
    box-shadow: none;
    ${(props): FlattenSimpleInterpolation => {
      if (props.theme === 'success') {
        return css`
          width: 100%;
          height: 82.26%;
          max-height: 445px;
        `;
      }

      return css`
        width: 95%;
        height: 95vh;
        max-height: 731px;
        margin-top: 30px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      `;
    }}
  }
`;

export const Title = styled.span`
  font: 32px ${theme.fonts.default};
  line-height: 37px;
  font-weight: bold;
  color: ${theme.colors.black.lighter};
`;

export const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${(props): string =>
    props.theme === 'success'
      ? theme.colors.blue.primary
      : theme.colors.red.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleIconWrapper = styled.div<{ theme: themeType }>`
  ${(props): FlattenSimpleInterpolation => {
    if (props.theme === 'success') {
      return css`
        width: 29px;
        height: 23px;
      `;
    }

    return css`
      width: 25px;
      height: 25px;
    `;
  }}
`;

export const SubtitleContainer = styled.div<{ theme: themeType }>`
  display: block;
  height: max-content;
  ${(props): FlattenSimpleInterpolation => {
    if (props.theme === 'failedAddingPoints') {
      return css`
        width: 87.5%;
        text-align: left;
      `;
    }

    return css`
      text-align: center;
    `;
  }}
`;

export const Subtitle = styled.p`
  ${theme.removeMarginAndPadding};
  font: 16px ${theme.fonts.default};
  line-height: 24px;
  color: ${theme.colors.black.lighter};
  white-space: pre-wrap;
`;

export const NavigatorContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    text-align: center;
    height: 60px;
  }
`;

export const NavigatorText = styled(Link)`
  font: 14px ${theme.fonts.default};
  line-height: 21px;
  color: ${theme.colors.black.lighter};
  cursor: pointer;
  text-decoration: none;
`;
