import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  max-width: 100vw;
  ${theme.defaultBoxSizing}
  height: 268px;
  padding: 44px 8.3%;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media ${theme.breakpoints.mobile} {
    padding: 15px 22px;
    height: 135px;
  }
`;

export const Divider = styled.div`
  ${theme.defaultBoxSizing}
  height: 1px;
  width: 83.4%;
  background-color: #c4c4c4;
  position: absolute;
  bottom: 0;
  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 180px;
  width: 230px;
  object-fit: cover;
  @media ${theme.breakpoints.mobile} {
    height: 105px;
    width: 35vw;
  }
`;

export const BannerImg = styled.div`
  position: absolute;
  top: 0px;
  left: -1px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MainItemDetails = styled.div`
  display: flex;
  width: 63.5vw;
  flex-direction: row;
  justify-content: space-between;

  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    width: 51.5vw;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const textStyle = css`
  font-family: ${theme.fonts.default};
  ${theme.removeMarginAndPadding}
  font-weight: bold;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Title = styled.p`
  ${textStyle}
  color: ${theme.colors.black.primary};
  width: 25.6vw;
  font-size: 18px;
  padding-left: 40px;

  @media ${theme.breakpoints.mobile}{
    padding-left: 10px;
    font-size: 16px;
    font-weight: normal;
    width: 51.5vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;

export const Description = styled.p`
  ${textStyle}
  color: #666666;
  padding-left: 40px;
  width: 30.9vw;
  font-size: 16px;
  -webkit-line-clamp: 5;
  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

export const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PointsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Points = styled.p`
  ${textStyle}
  max-width: 76px;
  -webkit-line-clamp: 1;
  font-size: 28px;
  ${theme.removeMarginAndPadding}
  color: ${theme.colors.black.primary};
  font-family: Arial; 

  @media ${theme.breakpoints.mobile} {
    font-size: 14px;
    font-family: ${theme.fonts.default}; 
  }
`;

export const ButtonWrapper = styled.div`
  width: 12.5vw;
  min-width: fit-content;
  max-width: 180px;
  height: 50px;
  border-radius: 40px;
  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

const hiddenTouchableStyle = css`
  all: unset;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 1000;
  width: 100vw;
  height: 125px;
`;

const hideHiddenTouchable = css`
  display: none;
  @media ${theme.breakpoints.mobile} {
    ${hiddenTouchableStyle};
  }
`;

export const HiddenTouchable = styled.button<{ isManualType: boolean }>`
  ${(props): FlattenSimpleInterpolation => {
    if (props.isManualType) return hiddenTouchableStyle;
    else return hideHiddenTouchable;
  }}
`;
