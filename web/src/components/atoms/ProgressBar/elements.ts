import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config/index';
import { Ranks } from './types';

export const ProgressContainer = styled.div`
  position: relative;
  height: 11px;
  width: 196px;
  border-radius: 5px;
  border-style: none;
  background-color: #eff0f2;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 284px;
    height: 18px;
    border-radius: 10px;
  }
`;

const regular = css`
  background-image: linear-gradient(270deg, #c1ffab, #80c269);
`;

const elite = css`
  background-image: linear-gradient(270deg, #92f2ff, #3460bf);
`;

const prime = css`
  background-image: none;
`;

export const Progress = styled.div<{ percentage: string; rank: Ranks }>`
  height: 100%;
  border-radius: inherit;
  width: ${(props): string => props.percentage || '0%'};
  transition: 0.2s ease-in;

  ${(props): FlattenSimpleInterpolation => {
    if (props.rank === 'レギュラー') return regular;
    else if (props.rank === 'エリート') return elite;
    else return prime;
  }}
`;

export const RankUpText = styled.p`
  ${theme.removeMarginAndPadding};
  text-align: left;
  font-family: ${theme.fonts.default};
  color: ${theme.colors.blue.primary};
  font-weight: bold;
  font-size: 12px;
  @media ${theme.breakpoints.mobileAndTablet} {
    font-size: 14px;
    text-align: center;
  }
`;

export const RankUpTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const PointsNeeded = styled.p`
  ${theme.defaultErrorText};
  ${theme.removeMarginAndPadding};
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ParentContainer = styled.div`
  ${theme.removeMarginAndPadding};
`;

export const PrimeContainter = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CrownWrapper = styled.div`
  width: 29px;
  height: 25px;
  margin-left: 8px;
`;
