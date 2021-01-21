import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 273px;
  height: 125px;
  background-color: ${theme.colors.blue.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${theme.breakpoints.mobile} {
    width: 45%;
    max-width: 273px;
    height: 130px;
  }
  @media ${theme.breakpoints.tablet} {
    margin-right: 24px;
  }
`;

export const Image = styled.div`
  align-content: center;
  padding-left: 16px;
  width: 40px;
  height: 35px;
  @media ${theme.breakpoints.pc} {
    margin-left: 7px;
  }
  @media ${theme.breakpoints.tablet} {
    margin-left: 7px;
  }
`;

export const PointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  @media ${theme.breakpoints.mobile} {
    align-items: center;
  }
`;

export const Label = styled.p`
  font-family: ${theme.fonts.default};
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.colors.white};
  padding-left: 16px;
  @media ${theme.breakpoints.pc} {
    margin-left: 7px;
  }
  @media ${theme.breakpoints.tablet} {
    margin-left: 7px;
  }
  @media ${theme.breakpoints.mobile} {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Points = styled.p`
  font-family: ${theme.fonts.default};
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
  color: ${theme.colors.white};
  text-shadow: 2px 4px 1px rgba(0, 0, 0, 0.25);
  margin: 0;
  width: 130px;
  ${theme.handleTextOverflow}
  text-align: right;
  @media ${theme.breakpoints.mobile} {
    font-size: 24px;
    line-height: 28px;
    width: 90px;
  }
`;

export const PLabel = styled.p`
  font-family: ${theme.fonts.default};
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${theme.colors.white};
  margin: 0;
  margin-right: 25px;
  @media ${theme.breakpoints.mobile} {
    font-size: 14px;
    margin-right: 16px;
  }
`;
