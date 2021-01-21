import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 21.75vw;
  align-self: center;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
    min-height: 422px;
  }
`;

export const CardContainer = styled.div`
  @media ${theme.breakpoints.pc} {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  @media ${theme.breakpoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }
  @media ${theme.breakpoints.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const BoughtContentsCardWrapper = styled.div`
  margin-top: 15px;
  @media ${theme.breakpoints.pc} {
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  @media ${theme.breakpoints.mobile} {
    width: 90%;
  }
  @media ${theme.breakpoints.tablet} {
    width: 90%;
    max-width: 570px;
  }
`;

export const AdContainer = styled.div`
  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
