import styled from 'styled-components';
import { theme } from '../../../config/';

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  min-height: 100vh;
  ${theme.defaultBoxSizing};
  @media ${theme.breakpoints.mobileAndTablet} {
    flex-direction: column;
  }
  position: relative;
`;

export const MainContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 56.25vw;
  ${theme.defaultBoxSizing}
  padding: 3vh 8.4vw;

  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100vw;
    padding: 2vh 0;
  }
`;

export const RightSidebarContainer = styled.div`
  padding: 10px 0;
  @media ${theme.breakpoints.pc} {
    position: absolute;
    right: 0;
    padding-right: 2%;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    align-self: center;
  }
`;

export const LeftSidebarContainer = styled.div`
  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

export const AskInstuctorContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: fit-content;
  width: fit-content;
  z-index: 2;
`;

export const AdsContainer = styled.div`
  display: none;
  @media ${theme.breakpoints.mobileAndTablet} {
    display: flex;
    justify-content: center;
  }
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media ${theme.breakpoints.tablet} {
    flex-wrap: wrap;
    margin-bottom: 2.5%;
  }
`;

export const Cover = styled.div<{ isVisible: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  ${theme.removeMarginAndPadding};
  top: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.2);
  border-radius: inherit;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  z-index: 5;
`;

export const PurchaseModalWrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.white};
  width: 690px;
  max-height: 797px;
  height: 95%;
  @media ${theme.breakpoints.mobile} {
    width: 312px;
    max-height: 816px;
    overflow-y: scroll;
  }
`;

export const NewsLoadingWrapper = styled.div`
  max-height: 123px;
  width: 46.5vw;
  ${theme.removeMarginAndPadding};
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100vw;
    max-height: 225px;
  }
`;
