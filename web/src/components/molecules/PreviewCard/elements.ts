import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ContainerCard } from '../../atoms/Card/elements';
import { theme } from '../../../config/';

export const PreviewCardContainer = styled(ContainerCard)`
  cursor: pointer;
  @media ${theme.breakpoints.mobile} {
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  }
`;

export const ImageWrapper = styled.div<{ isBought?: boolean }>`
  position: relative;
  max-width: ${(props): string => (props.isBought ? '230px' : '180px')};

  @media ${theme.breakpoints.pc} {
    width: 14.15vw;
    height: 130px;
  }
  @media ${theme.breakpoints.mobile} {
    width: ${(props): string => (props.isBought ? '140px' : '35%')};
  }
  @media ${theme.breakpoints.tablet} {
    width: ${(props): string => (props.isBought ? '230px' : '25vw')};
  }
`;

export const BannerImg = styled.div`
  position: absolute;
  top: 0px;
  left: -1px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const isBoughtWrapper = css`
  display: flex;
  width: 95vw;
  margin-bottom: 16px;
  height: 130px;
`;

const defaultWrapper = css``;

export const PreviewWrapper = styled.div<{ isBought?: boolean }>`
  height: 230px;
  @media ${theme.breakpoints.mobile} {
    display: flex;
    width: 95vw;
    margin-bottom: 16px;
    height: 130px;
    justify-content: center;
  }
  @media ${theme.breakpoints.tablet} {
    ${(props): FlattenSimpleInterpolation => {
      if (props.isBought) return isBoughtWrapper;
      else return defaultWrapper;
    }}
  }
`;

export const BottomContainer = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${theme.breakpoints.mobile} {
    width: 88%;
  }
`;

export const Title = styled.p`
  font-family: ${theme.fonts.default};
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 12px;
  margin-left: 9px;
  margin-right: 9px;
  width: 160px;

  @media ${theme.breakpoints.mobile} {
    word-break: break-all;
    width: 90%;
  }
`;

export const Points = styled.p`
  margin-top: 6px;
  margin-right: 15px;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
`;
