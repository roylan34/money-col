import styled from 'styled-components';
import { theme } from '../../../config/';

export const Container = styled.div`
  ${theme.defaultBoxSizing}
  padding: 51px 20vw;
  width: 100vw;
  min-height: 100vh;

  @media ${theme.breakpoints.mobile} {
    padding: 30px 17px;
  }
`;

export const PostContainer = styled.div``;

export const Title = styled.h1`
  ${theme.defaultText}
  ${theme.removeMarginAndPadding}
  padding-bottom: 20px;
  font-size: 22px;
  line-height: 33px;
  font-weight: bold;
  border-bottom: 1px solid #c4c4c4;
  word-break: break-all;
  text-align: center;

  @media ${theme.breakpoints.mobile} {
    text-align: left;
  }
`;
