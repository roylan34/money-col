import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  @media ${theme.breakpoints.pc} {
    overflow-y: auto;
  }
`;

export const Body = styled.div`
  width: 94%;
  height: 60%;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
    height: 547px;
    overflow-x: hidden;
  }
`;

export const ThumbnailContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 130px;
  width: 175px;
  margin-top: 18px;
  margin-bottom: 20px;
  @media ${theme.breakpoints.mobile} {
    width: 279px;
    height: 209px;
    margin-top: 10px;
    margin-bottom: 12px;
  }
`;

export const BannerImg = styled.div`
  position: absolute;
  top: 0px;
  left: -1px;
`;

export const ThumbnailWrapper = styled.img`
  width: 175px;
  height: 130px;
  object-fit: cover;
  @media ${theme.breakpoints.mobile} {
    width: 279px;
    height: 209px;
  }
`;

export const Points = styled.span`
  ${theme.defaultText};
  font-size: 28px;
  line-height: 32px;
  font-weight: bold;
  @media ${theme.breakpoints.mobile} {
    font-size: 14px;
    line-height: 21px;
    text-align: right;
    margin-right: 20px;
  }
`;

export const TitleAndDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media ${theme.breakpoints.mobile} {
    width: 94%;
    margin-left: 0px;
  }
`;

export const Title = styled.p`
  ${theme.defaultText};
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
  word-break: break-all;
  margin-top: 18px;
  margin-bottom: 30px;
  @media ${theme.breakpoints.mobile} {
    font-size: 16px;
    line-height: 24px;
    margin-top: 15px;
    margin-bottom: 9px;
  }
`;

export const Description = styled.p`
  ${theme.removeMarginAndPadding};
  ${theme.defaultText};
  font-size: 16px;
  line-height: 24px;
  word-break: break-all;
  @media ${theme.breakpoints.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;
