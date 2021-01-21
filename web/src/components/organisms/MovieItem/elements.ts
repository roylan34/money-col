import styled from 'styled-components';
import { theme } from '../../../config/';
import { ContainerCard } from '../../atoms/Card/elements';

export const MovieItemCard = styled(ContainerCard)`
  margin: 20px 0;
  position: relative;
  @media ${theme.breakpoints.mobile} {
    margin: 15px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  }
`;

export const Container = styled.div`
  width: 46.5vw;
  height: 371px;
  ${theme.defaultBoxSizing};

  @media ${theme.breakpoints.mobile} {
    width: 100vw;
    position: relative;
    height: fit-content;
    padding: 0 4% 50px 4%;
  }
  @media ${theme.breakpoints.tablet} {
    width: 95vw;
    height: fit-content;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 29px;
  @media ${theme.breakpoints.mobile} {
    width: 95vw;
    height: fit-content;
    margin: 0;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 85%;
`;

export const RightContainer = styled.div`
  @media ${theme.breakpoints.mobile} {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    padding-left: 4%;
    justify-content: center;
  }
`;

export const ButtonContainer = styled.div`
  padding-right: 40px;
  height: 34px;
  border-radius: 20px;
  @media ${theme.breakpoints.pc} {
    min-width: 8vw;
    max-width: 172px;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 172px;
  }
`;

export const Title = styled.p`
  font-family: ${theme.fonts.default};
  font-weight: bold;
  font-size: 22px;
  color: #222222;
  margin: 16px 0 16px 10px;
  word-break: break-all;
  max-width: 350px;
  @media ${theme.breakpoints.mobile} {
    width: 284px;
    font-size: 18px;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    padding: 0;
    margin: 0;
    align-items: center;
  }
  align-self: center;
`;

export const IconWrapper = styled.div<{ width: number; height: number }>`
  width: ${(props): string => `${props.width}px`};
  height: ${(props): string => `${props.height}px`};
`;

export const LoadingWrapper = styled.div`
  width: 46.5vw;
  height: 371px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.defaultBoxSizing};

  @media ${theme.breakpoints.mobile} {
    width: 100vw;
    position: relative;
    height: 100vh;
    max-height: 450px;
    padding: 0 4% 50px 4%;
  }
  @media ${theme.breakpoints.tablet} {
    width: 95vw;
    height: 100vh;
    max-height: 450px;
  }
`;

export const HideFeatureContainer = styled.div`
  width: 100%;
  height: calc(100% - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HideFeature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray.primary};
  @media ${theme.breakpoints.pc} {
    width: 84.5%;
    max-width: 566px;
    height: 58%;
    max-height: 215px;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 95%;
    max-width: 356px;
    height: 336px;
  }
`;

export const HideFeatureLabel = styled.span`
  color: #333333;
  @media ${theme.breakpoints.pc} {
    font: 1.375rem ${theme.fonts.default};
    line-height: 1.5625rem;
  }
  @media ${theme.breakpoints.mobileAndTablet} {
    font: 1rem ${theme.fonts.default};
    line-height: 1.25rem;
  }
`;
