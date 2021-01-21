import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 442px;
  height: 301px;
  display: flex;
  flex-direction: column;
  @media ${theme.breakpoints.mobile} {
    width: 312px;
    height: 255px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.div`
  width: 90%;
  height: 2px;
  bottom: 0;
  background-color: ${theme.colors.gray.primary};
  justify-self: flex-end;
`;

export const Title = styled.p`
  ${theme.defaultText};
  font-size: 18px;
  line-height: 21px;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const defaultMsg = css`
  ${theme.defaultText};
`;

const errorMsg = css`
  ${theme.defaultErrorText};
`;

export const Msg = styled.p<{ isPointsNotEnough?: boolean }>`
  width: 85%;
  word-break: break-all;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  ${(props): FlattenSimpleInterpolation => {
    if (props.isPointsNotEnough) return errorMsg;

    return defaultMsg;
  }}
`;

export const ButtonContainer = styled.div`
  width: 90%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 180px;
  height: 40px;
  border-radius: 40px;
  @media ${theme.breakpoints.mobile} {
    width: 130px;
    height: 50px;
  }
`;
