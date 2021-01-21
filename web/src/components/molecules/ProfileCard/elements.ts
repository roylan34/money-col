import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 273px;
  height: 372px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ${theme.removeMarginAndPadding};
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100vw;
    height: 254px;
  }
`;

export const ProgressContainer = styled.div`
  @media ${theme.breakpoints.pc} {
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    ${theme.removeMarginAndPadding};
  }
`;

export const Separator = styled.div`
  width: 220px;
  height: 2px;
  background-color: ${theme.colors.gray.primary};
  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

export const Name = styled.p<{ numberOfLines: number }>`
  width: 176px;
  ${theme.defaultText};
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin-left: -100%;
  margin-right: -100%;
  ${theme.handleMultipleLinesOverflow}
  @media ${theme.breakpoints.mobileAndTablet} {
    ${theme.removeMarginAndPadding};
    margin-left: -100%;
    margin-right: -100%;
  }
`;

export const Text = styled.p`
  ${theme.defaultText};
  font-size: 10px;
  line-height: 12px;
  ${theme.removeMarginAndPadding};
  @media ${theme.breakpoints.mobileAndTablet} {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Rank = styled.p`
  font-family: ${theme.fonts.default};
  font-size: 22px;
  line-height: 33px;
  color: ${theme.colors.red.primary};
  font-weight: bold;
  ${theme.removeMarginAndPadding};
  ${theme.handleTextOverflow}
  max-width: 132px;
  @media ${theme.breakpoints.mobileAndTablet} {
    margin: 0 8px;
  }
`;

export const RankContainer = styled.div`
  height: 80px;
  width: 80%;
  ${theme.removeMarginAndPadding};
  margin-top: 10px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const TopTextContainer = styled.div`
  margin-left: 5px;
  @media ${theme.breakpoints.mobileAndTablet} {
    margin: 0;
  }
`;

export const BottomTextContainer = styled.div`
  @media ${theme.breakpoints.pc} {
    display: inline-flex;
    align-items: baseline;
    justify-content: space-evenly;
    width: 100%;
    height: 33px;
    margin-top: 10px;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    ${theme.removeMarginAndPadding};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
